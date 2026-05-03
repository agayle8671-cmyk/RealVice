import { NavBar } from "@/components/NavBar";
import { HeroSection } from "@/components/HeroSection";
import { ArticleGrid } from "@/components/ArticleGrid";
import { RightSidebar } from "@/components/RightSidebar";
import { useListArticles } from "@workspace/api-client-react";
import type { Article } from "@workspace/api-client-react";

const CATEGORIES = ["Vice City", "Markets", "Vehicles", "Business", "Counties", "Opinion", "Investigations", "Intel"];

function pickCategory(articles: Article[], category: string, exclude: Set<number>): Article[] {
  return articles.filter((a) => a.category === category && !exclude.has(a.id));
}

function pickAny(articles: Article[], exclude: Set<number>, count: number): Article[] {
  return articles.filter((a) => !exclude.has(a.id)).slice(0, count);
}

export default function Home() {
  const { data, isLoading } = useListArticles({ limit: 60, offset: 0 });

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

  return (
    <div className="min-h-screen bg-white font-sans text-[#1A1A1A]">
      <NavBar />

      <main className="max-w-screen-xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-[70%]">
            <HeroSection teasers={teasers} featured={featured} loading={isLoading} />
            <ArticleGrid articles={grid1} loading={isLoading} />
            <ArticleGrid articles={grid2} loading={isLoading} />

            {!isLoading && articles.length === 0 && (
              <div className="text-center py-20 border border-[#E0E0E0]">
                <p className="font-playfair text-[1.4rem] text-[#1A1A1A] mb-2">Scraper is warming up</p>
                <p className="text-[0.9rem] text-[#757575]">
                  The intelligence pipeline is running its first collection cycle. Articles will appear shortly.
                </p>
                <p className="text-[0.8rem] text-[#999] mt-3">
                  First run typically takes 1–2 minutes.
                </p>
              </div>
            )}
          </div>

          <div className="w-full lg:w-[30%] shrink-0">
            <RightSidebar intelArticles={intelArticles} loading={isLoading} />
          </div>
        </div>
      </main>
    </div>
  );
}
