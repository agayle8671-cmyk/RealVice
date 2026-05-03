import { NavBar } from "@/components/NavBar";
import { HeroSection } from "@/components/HeroSection";
import { ArticleGrid } from "@/components/ArticleGrid";
import { RightSidebar } from "@/components/RightSidebar";
import { Footer } from "@/components/Footer";
import { useListArticles } from "@workspace/api-client-react";
import type { Article } from "@workspace/api-client-react";

function pickAny(articles: Article[], exclude: Set<number>, count: number): Article[] {
  return articles.filter((a) => !exclude.has(a.id)).slice(0, count);
}

export default function Home() {
  const { data, isLoading } = useListArticles({ limit: 100, offset: 0 });

  const articles: Article[] = data?.articles ?? [];
  const usedIds = new Set<number>();

  const featured = articles[0] ?? null;
  if (featured) usedIds.add(featured.id);

  const teasers = pickAny(articles, usedIds, 3);
  teasers.forEach((a) => usedIds.add(a.id));

  const grid1 = pickAny(articles, usedIds, 3);
  grid1.forEach((a) => usedIds.add(a.id));

  const grid2 = pickAny(articles, usedIds, 3);
  grid2.forEach((a) => usedIds.add(a.id));

  const intelArticles = pickAny(articles, usedIds, 5);
  intelArticles.forEach((a) => usedIds.add(a.id));

  const grid3 = pickAny(articles, usedIds, 3);
  grid3.forEach((a) => usedIds.add(a.id));

  const grid4 = pickAny(articles, usedIds, 3);

  const isEmpty = !isLoading && articles.length === 0;

  return (
    <div className="bg-white font-sans text-[#1A1A1A]">
      <NavBar />

      <main className="max-w-screen-xl mx-auto px-4 py-8">
        {isEmpty ? (
          <div className="text-center py-32 border border-[#E0E0E0]">
            <p className="font-playfair text-[1.4rem] text-[#1A1A1A] mb-2">Scraper is warming up</p>
            <p className="text-[0.9rem] text-[#757575]">
              The intelligence pipeline is running its first collection cycle. Articles will appear shortly.
            </p>
            <p className="text-[0.8rem] text-[#999] mt-3">First run typically takes 1–2 minutes.</p>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="w-full lg:w-[70%]">
              <HeroSection teasers={teasers} featured={featured} loading={isLoading} />
              <ArticleGrid articles={grid1} loading={isLoading} />
              <ArticleGrid articles={grid2} loading={isLoading} />
              {grid3.length > 0 && <ArticleGrid articles={grid3} loading={isLoading} />}
              {grid4.length > 0 && <ArticleGrid articles={grid4} loading={isLoading} />}
            </div>

            <div className="w-full lg:w-[30%] shrink-0">
              <RightSidebar intelArticles={intelArticles} loading={isLoading} />
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
