import { pgTable, serial, timestamp, integer, text } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const scraperRunsTable = pgTable("scraper_runs", {
  id: serial("id").primaryKey(),
  startedAt: timestamp("started_at", { withTimezone: true }).notNull().defaultNow(),
  completedAt: timestamp("completed_at", { withTimezone: true }),
  status: text("status").notNull().default("running"),
  articlesFound: integer("articles_found").notNull().default(0),
  articlesNew: integer("articles_new").notNull().default(0),
  sourcesProcessed: integer("sources_processed").notNull().default(0),
  sourcesFailed: integer("sources_failed").notNull().default(0),
  errorMsg: text("error_msg"),
});

export const insertScraperRunSchema = createInsertSchema(scraperRunsTable).omit({ id: true, startedAt: true });
export type InsertScraperRun = z.infer<typeof insertScraperRunSchema>;
export type ScraperRun = typeof scraperRunsTable.$inferSelect;
