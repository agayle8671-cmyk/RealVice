import { pgTable, text, serial, timestamp, integer, boolean, index } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const articlesTable = pgTable(
  "articles",
  {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    excerpt: text("excerpt"),
    content: text("content"),
    category: text("category").notNull().default("Intel"),
    sourceUrl: text("source_url").notNull().unique(),
    sourceUrlHash: text("source_url_hash").notNull().unique(),
    imageThumbnail: text("image_thumbnail"),
    videoUrl: text("video_url"),
    videoThumbnail: text("video_thumbnail"),
    isVideo: boolean("is_video").notNull().default(false),
    author: text("author"),
    sourceName: text("source_name").notNull(),
    tags: text("tags").array(),
    commentsCount: integer("comments_count").notNull().default(0),
    isFeatured: boolean("is_featured").notNull().default(false),
    publishedAt: timestamp("published_at", { withTimezone: true }),
    scrapedAt: timestamp("scraped_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [
    index("articles_category_idx").on(table.category),
    index("articles_published_at_idx").on(table.publishedAt),
    index("articles_scraped_at_idx").on(table.scrapedAt),
    index("articles_source_name_idx").on(table.sourceName),
    index("articles_is_featured_idx").on(table.isFeatured),
  ],
);

export const insertArticleSchema = createInsertSchema(articlesTable).omit({ id: true, scrapedAt: true });
export type InsertArticle = z.infer<typeof insertArticleSchema>;
export type Article = typeof articlesTable.$inferSelect;
