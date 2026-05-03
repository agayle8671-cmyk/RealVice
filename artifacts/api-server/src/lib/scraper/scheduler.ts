import cron from "node-cron";
import { runScraperPipeline, ensureSourcesSeeded } from "./pipeline.js";
import { logger } from "../logger.js";

const CRON_INTERVAL = "*/30 * * * *";

let nextRunTime: Date | null = null;

export function getNextRunTime(): string {
  if (!nextRunTime) return "Not scheduled";
  const diff = nextRunTime.getTime() - Date.now();
  if (diff <= 0) return "Imminent";
  const mins = Math.floor(diff / 60000);
  const secs = Math.floor((diff % 60000) / 1000);
  return `${mins}m ${secs}s`;
}

function updateNextRunTime() {
  const now = new Date();
  const next = new Date(now);
  const minutes = now.getMinutes();
  const nextMinute = Math.ceil(minutes / 30) * 30;
  next.setMinutes(nextMinute, 0, 0);
  if (next <= now) next.setMinutes(next.getMinutes() + 30);
  nextRunTime = next;
}

export async function initScheduler() {
  logger.info("Initializing scraper scheduler");

  try {
    await ensureSourcesSeeded();
  } catch (err) {
    logger.error({ err }, "Failed to seed sources");
  }

  cron.schedule(CRON_INTERVAL, async () => {
    logger.info("Cron triggered: starting scrape run");
    updateNextRunTime();
    try {
      await runScraperPipeline();
    } catch (err) {
      logger.error({ err }, "Cron scrape failed");
    }
  });

  updateNextRunTime();
  logger.info({ next: nextRunTime?.toISOString() }, "Scraper scheduled");

  setTimeout(async () => {
    logger.info("Running initial scrape on startup");
    try {
      await runScraperPipeline();
    } catch (err) {
      logger.error({ err }, "Initial scrape failed");
    }
  }, 5000);
}
