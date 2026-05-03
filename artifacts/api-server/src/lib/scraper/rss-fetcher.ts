import Parser from "rss-parser";
import { createHash } from "crypto";
import { categorizeArticle, extractTags, generateExcerpt } from "./categorizer.js";
import type { InsertArticle } from "@workspace/db";

const parser = new Parser({
  timeout: 15000,
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
    Accept: "application/rss+xml, application/xml, text/xml, */*",
    "Accept-Language": "en-US,en;q=0.9",
    "Cache-Control": "no-cache",
  },
  customFields: {
    item: [
      ["media:thumbnail", "mediaThumbnail"],
      ["media:content", "mediaContent"],
      ["yt:videoId", "videoId"],
      ["yt:channelId", "channelId"],
    ],
  },
});

export interface FetchedItem {
  article: InsertArticle;
  urlHash: string;
}

export async function fetchRssFeed(
  url: string,
  sourceName: string,
  defaultCategory: string,
  isYoutube = false,
): Promise<FetchedItem[]> {
  const feed = await parser.parseURL(url);
  const results: FetchedItem[] = [];

  for (const item of feed.items) {
    const link = item.link || item.guid;
    if (!link) continue;

    const urlHash = createHash("sha256").update(link).digest("hex");
    const title = item.title?.trim() || "Untitled";
    const rawContent = item.contentSnippet || item.content || item.summary || "";
    const category = categorizeArticle(title, rawContent, defaultCategory);
    if (category === "filtered") continue;

    const excerpt = generateExcerpt(rawContent, 220);
    const tags = extractTags(title, rawContent);

    let imageThumbnail: string | null = null;
    let videoUrl: string | null = null;
    let videoThumbnail: string | null = null;
    const isVideo = isYoutube;

    if (isYoutube) {
      const videoId = (item as any).videoId;
      if (videoId) {
        videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
        videoThumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
        imageThumbnail = videoThumbnail;
      }
    } else {
      const mediaThumb = (item as any).mediaThumbnail;
      if (mediaThumb?.$.url) imageThumbnail = mediaThumb.$.url;
      else if ((item as any).mediaContent?.$.url) imageThumbnail = (item as any).mediaContent.$.url;
      else if (item.enclosure?.url) imageThumbnail = item.enclosure.url;
    }

    const publishedAt = item.pubDate ? new Date(item.pubDate) : item.isoDate ? new Date(item.isoDate) : null;

    results.push({
      urlHash,
      article: {
        title,
        excerpt: excerpt || null,
        content: rawContent || null,
        category,
        sourceUrl: link,
        sourceUrlHash: urlHash,
        imageThumbnail,
        videoUrl,
        videoThumbnail,
        isVideo,
        author: item.creator || item.author || null,
        sourceName,
        tags: tags.length > 0 ? tags : null,
        commentsCount: 0,
        isFeatured: false,
        publishedAt,
      },
    });
  }

  return results;
}
