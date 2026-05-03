import { Router, type IRouter } from "express";
import healthRouter from "./health";
import articlesRouter from "./articles";
import scraperRouter from "./scraper";

const router: IRouter = Router();

router.use(healthRouter);
router.use(articlesRouter);
router.use(scraperRouter);

export default router;
