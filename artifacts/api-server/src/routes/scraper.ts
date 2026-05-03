import { Router, type IRouter } from "express";
import { db, sourcesTable, scraperRunsTable } from "@workspace/db";
import { desc } from "drizzle-orm";
import { runScraperPipeline, getScraperState } from "../lib/scraper/pipeline.js";
import { getNextRunTime } from "../lib/scraper/scheduler.js";

const router: IRouter = Router();

router.post("/scraper/trigger", async (req, res) => {
  try {
    const { isRunning } = getScraperState();
    if (isRunning) {
      res.json({ message: "Scraper already running", runId: -1 });
      return;
    }

    const runId = await runScraperPipeline();
    res.json({ message: "Scrape triggered", runId });
  } catch (err) {
    req.log.error({ err }, "Failed to trigger scraper");
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/scraper/status", async (req, res) => {
  try {
    const { isRunning } = getScraperState();

    const recentRuns = await db
      .select()
      .from(scraperRunsTable)
      .orderBy(desc(scraperRunsTable.startedAt))
      .limit(10);

    res.json({
      isRunning,
      lastRun: recentRuns[0] ?? null,
      recentRuns,
      nextRunIn: getNextRunTime(),
    });
  } catch (err) {
    req.log.error({ err }, "Failed to get scraper status");
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/scraper/sources", async (req, res) => {
  try {
    const sources = await db
      .select()
      .from(sourcesTable)
      .orderBy(sourcesTable.name);

    res.json({ sources });
  } catch (err) {
    req.log.error({ err }, "Failed to list sources");
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
