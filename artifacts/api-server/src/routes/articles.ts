import { Router, type IRouter } from "express";
import { db, articlesTable } from "@workspace/db";
import { eq, desc, ilike, and, type SQL } from "drizzle-orm";
import { sql } from "drizzle-orm";

const router: IRouter = Router();

router.get("/articles", async (req, res) => {
  try {
    const { category, featured, limit = "20", offset = "0", search } = req.query as Record<string, string>;

    const limitNum = Math.min(Math.max(parseInt(limit) || 20, 1), 100);
    const offsetNum = Math.max(parseInt(offset) || 0, 0);

    const conditions: SQL[] = [];

    if (category && category !== "all") {
      conditions.push(eq(articlesTable.category, category));
    }
    if (featured === "true") {
      conditions.push(eq(articlesTable.isFeatured, true));
    }
    if (search) {
      conditions.push(ilike(articlesTable.title, `%${search}%`));
    }

    const where = conditions.length > 0 ? and(...conditions) : undefined;

    const [articles, countResult] = await Promise.all([
      db
        .select()
        .from(articlesTable)
        .where(where)
        .orderBy(desc(articlesTable.publishedAt), desc(articlesTable.scrapedAt))
        .limit(limitNum)
        .offset(offsetNum),
      db
        .select({ count: sql<number>`count(*)::int` })
        .from(articlesTable)
        .where(where),
    ]);

    res.json({
      articles,
      total: countResult[0]?.count ?? 0,
      offset: offsetNum,
      limit: limitNum,
    });
  } catch (err) {
    req.log.error({ err }, "Failed to list articles");
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/articles/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      res.status(400).json({ error: "Invalid ID" });
      return;
    }

    const [article] = await db
      .select()
      .from(articlesTable)
      .where(eq(articlesTable.id, id))
      .limit(1);

    if (!article) {
      res.status(404).json({ error: "Article not found" });
      return;
    }

    res.json(article);
  } catch (err) {
    req.log.error({ err }, "Failed to get article");
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
