import { pgTable, text, serial, timestamp, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const sourcesTable = pgTable("sources", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  url: text("url").notNull().unique(),
  type: text("type").notNull(),
  defaultCategory: text("default_category").notNull().default("Intel"),
  isActive: boolean("is_active").notNull().default(true),
  requiresJs: boolean("requires_js").notNull().default(false),
  articleSelector: text("article_selector"),
  titleSelector: text("title_selector"),
  linkSelector: text("link_selector"),
  imageSelector: text("image_selector"),
  lastScrapedAt: timestamp("last_scraped_at", { withTimezone: true }),
  successCount: integer("success_count").notNull().default(0),
  failCount: integer("fail_count").notNull().default(0),
  lastError: text("last_error"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const insertSourceSchema = createInsertSchema(sourcesTable).omit({ id: true, createdAt: true });
export type InsertSource = z.infer<typeof insertSourceSchema>;
export type Source = typeof sourcesTable.$inferSelect;
