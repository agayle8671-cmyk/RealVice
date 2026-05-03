import { db, articlesTable, sourcesTable, scraperRunsTable } from "@workspace/db";
import { eq, inArray } from "drizzle-orm";
import { fetchRssFeed } from "./rss-fetcher.js";
import { fetchHtmlPage } from "./html-fetcher.js";
import { DEFAULT_SOURCES } from "./sources-config.js";
import { logger } from "../logger.js";

let isRunning = false;
let lastRunId: number | null = null;

export function getScraperState() {
  return { isRunning, lastRunId };
}

export async function ensureSourcesSeeded() {
  const existing = await db.select({ url: sourcesTable.url }).from(sourcesTable);
  const existingUrls = new Set(existing.map((s) => s.url));

  const toInsert = DEFAULT_SOURCES.filter((s) => !existingUrls.has(s.url)).map((s) => ({
    name: s.name,
    url: s.url,
    type: s.type,
    defaultCategory: s.defaultCategory,
    isActive: true,
    requiresJs: s.requiresJs ?? false,
    articleSelector: s.articleSelector ?? null,
    titleSelector: s.titleSelector ?? null,
    linkSelector: s.linkSelector ?? null,
    imageSelector: s.imageSelector ?? null,
  }));

  if (toInsert.length > 0) {
    await db.insert(sourcesTable).values(toInsert);
    logger.info({ count: toInsert.length }, "Seeded new sources");
  }
}

export async function runScraperPipeline(): Promise<number> {
  if (isRunning) {
    logger.warn("Scraper already running, skipping");
    return lastRunId ?? -1;
  }

  isRunning = true;

  const [run] = await db
    .insert(scraperRunsTable)
    .values({ status: "running" })
    .returning();

  lastRunId = run.id;

  let articlesFound = 0;
  let articlesNew = 0;
  let sourcesProcessed = 0;
  let sourcesFailed = 0;

  try {
    const sources = await db
      .select()
      .from(sourcesTable)
      .where(eq(sourcesTable.isActive, true));

    logger.info({ count: sources.length }, "Starting scrape run");

    for (const source of sources) {
      try {
        const items =
          source.type === "rss" || source.type === "youtube-rss"
            ? await fetchRssFeed(
                source.url,
                source.name,
                source.defaultCategory,
                source.type === "youtube-rss",
              )
            : await fetchHtmlPage(source.url, source.name, source.defaultCategory, {
                articleSelector: source.articleSelector ?? "article",
                titleSelector: source.titleSelector ?? "h2, h3",
                linkSelector: source.linkSelector ?? "a",
                imageSelector: source.imageSelector ?? undefined,
              });

        articlesFound += items.length;

        if (items.length > 0) {
          const hashes = items.map((i) => i.urlHash);
          const existing = await db
            .select({ sourceUrlHash: articlesTable.sourceUrlHash })
            .from(articlesTable)
            .where(inArray(articlesTable.sourceUrlHash, hashes));

          const existingHashes = new Set(existing.map((e) => e.sourceUrlHash));
          const newItems = items.filter((i) => !existingHashes.has(i.urlHash));

          if (newItems.length > 0) {
            await db.insert(articlesTable).values(newItems.map((i) => i.article)).onConflictDoNothing();
            articlesNew += newItems.length;
          }
        }

        await db
          .update(sourcesTable)
          .set({
            lastScrapedAt: new Date(),
            successCount: (source.successCount ?? 0) + 1,
            lastError: null,
          })
          .where(eq(sourcesTable.id, source.id));

        sourcesProcessed++;
      } catch (err) {
        sourcesFailed++;
        const errMsg = err instanceof Error ? err.message : String(err);
        logger.warn({ source: source.name, err: errMsg }, "Source scrape failed");

        await db
          .update(sourcesTable)
          .set({
            failCount: (source.failCount ?? 0) + 1,
            lastError: errMsg,
          })
          .where(eq(sourcesTable.id, source.id));
      }
    }

    await db
      .update(scraperRunsTable)
      .set({
        completedAt: new Date(),
        status: "completed",
        articlesFound,
        articlesNew,
        sourcesProcessed,
        sourcesFailed,
      })
      .where(eq(scraperRunsTable.id, run.id));

    logger.info({ articlesFound, articlesNew, sourcesProcessed, sourcesFailed }, "Scrape run complete");
  } catch (err) {
    const errMsg = err instanceof Error ? err.message : String(err);
    logger.error({ err: errMsg }, "Scrape pipeline failed");

    await db
      .update(scraperRunsTable)
      .set({ completedAt: new Date(), status: "failed", errorMsg: errMsg })
      .where(eq(scraperRunsTable.id, run.id));
  } finally {
    isRunning = false;
  }

  return run.id;
}
