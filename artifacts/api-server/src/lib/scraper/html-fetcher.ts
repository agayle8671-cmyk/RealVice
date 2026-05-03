import * as cheerio from "cheerio";
import { createHash } from "crypto";
import { categorizeArticle, extractTags, generateExcerpt } from "./categorizer.js";
import type { InsertArticle } from "@workspace/db";
import type { FetchedItem } from "./rss-fetcher.js";

const FETCH_HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
  Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
  "Accept-Language": "en-US,en;q=0.9",
  "Accept-Encoding": "gzip, deflate, br",
  Connection: "keep-alive",
  "Cache-Control": "no-cache",
  "Sec-Fetch-Dest": "document",
  "Sec-Fetch-Mode": "navigate",
  "Sec-Fetch-Site": "none",
  "Upgrade-Insecure-Requests": "1",
};

export async function fetchHtmlPage(
  url: string,
  sourceName: string,
  defaultCategory: string,
  selectors: {
    articleSelector: string;
    titleSelector: string;
    linkSelector: string;
    imageSelector?: string;
  },
): Promise<FetchedItem[]> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20000);

  let html: string;
  try {
    const response = await fetch(url, {
      headers: FETCH_HEADERS,
      signal: controller.signal,
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    html = await response.text();
  } finally {
    clearTimeout(timeout);
  }

  const $ = cheerio.load(html);
  const results: FetchedItem[] = [];
  const baseUrl = new URL(url).origin;

  $(selectors.articleSelector).each((_, el) => {
    const $el = $(el);
    const titleEl = $el.find(selectors.titleSelector).first();
    const title = titleEl.text().trim();
    if (!title || title.length < 10) return;

    const linkEl = $el.find(selectors.linkSelector).first();
    let href = linkEl.attr("href") || titleEl.closest("a").attr("href") || "";
    if (!href) return;
    if (href.startsWith("/")) href = `${baseUrl}${href}`;
    if (!href.startsWith("http")) return;

    const urlHash = createHash("sha256").update(href).digest("hex");
    const rawContent = $el.find("p, .excerpt, .summary, .description").first().text().trim();
    const category = categorizeArticle(title, rawContent, defaultCategory);
    if (category === "filtered") return;

    const excerpt = generateExcerpt(rawContent, 220);
    const tags = extractTags(title, rawContent);

    let imageThumbnail: string | null = null;
    if (selectors.imageSelector) {
      const imgSrc = $el.find(selectors.imageSelector).first().attr("src");
      if (imgSrc) {
        imageThumbnail = imgSrc.startsWith("http") ? imgSrc : `${baseUrl}${imgSrc}`;
      }
    }

    const dateEl = $el.find("time, .date, .published, [datetime]").first();
    const dateStr = dateEl.attr("datetime") || dateEl.text().trim();
    const publishedAt = dateStr ? new Date(dateStr) : null;

    results.push({
      urlHash,
      article: {
        title,
        excerpt: excerpt || null,
        content: rawContent || null,
        category,
        sourceUrl: href,
        sourceUrlHash: urlHash,
        imageThumbnail,
        videoUrl: null,
        videoThumbnail: null,
        isVideo: false,
        author: $el.find(".author, .byline, [rel=author]").first().text().trim() || null,
        sourceName,
        tags: tags.length > 0 ? tags : null,
        commentsCount: 0,
        isFeatured: false,
        publishedAt: publishedAt && !isNaN(publishedAt.getTime()) ? publishedAt : null,
      } as InsertArticle,
    });
  });

  return results;
}
