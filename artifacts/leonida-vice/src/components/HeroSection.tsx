import { MessageSquare, ExternalLink } from "lucide-react";
import type { Article } from "@workspace/api-client-react";
import { timeAgo } from "@/lib/time";

interface HeroSectionProps {
  teasers: Article[];
  featured: Article | null;
  loading?: boolean;
}

function ArticleTeaser({ article }: { article: Article }) {
  return (
    <article className="border-b border-[#E0E0E0] pb-4 mb-4 last:border-b-0 last:mb-0 last:pb-0">
      <div className="text-[#C41230] text-[0.7rem] font-bold uppercase tracking-[0.05em] mb-1">
        {article.category}
      </div>
      <a href={article.sourceUrl} target="_blank" rel="noopener noreferrer">
        <h3 className="font-playfair font-bold text-[1.05rem] text-[#1A1A1A] leading-[1.3] mb-2 hover:underline cursor-pointer">
          {article.title}
        </h3>
      </a>
      <div className="flex items-center text-[#757575] text-[0.75rem]">
        <span>{timeAgo(article.publishedAt ?? article.scrapedAt)}</span>
        <span className="mx-2">|</span>
        <span className="text-[0.7rem] text-[#999]">{article.sourceName}</span>
      </div>
    </article>
  );
}

function SkeletonTeaser() {
  return (
    <div className="border-b border-[#E0E0E0] pb-4 mb-4 animate-pulse">
      <div className="h-2 w-16 bg-[#E0E0E0] rounded mb-2" />
      <div className="h-4 bg-[#E0E0E0] rounded mb-1 w-full" />
      <div className="h-4 bg-[#E0E0E0] rounded mb-2 w-4/5" />
      <div className="h-2 w-24 bg-[#E0E0E0] rounded" />
    </div>
  );
}

export function HeroSection({ teasers = [], featured, loading }: HeroSectionProps) {
  return (
    <section className="flex flex-col md:flex-row gap-6 mb-8 border-b border-[#E0E0E0] pb-8">
      <div className="w-full md:w-[38%] flex flex-col">
        {loading
          ? [0, 1, 2].map((i) => <SkeletonTeaser key={i} />)
          : teasers.slice(0, 3).map((a) => <ArticleTeaser key={a.id} article={a} />)}
      </div>

      <div className="w-full md:w-[62%] md:border-l border-[#E0E0E0] md:pl-6">
        {loading || !featured ? (
          <div className="animate-pulse">
            <div className="h-2 w-20 bg-[#E0E0E0] rounded mb-3" />
            <div className="w-full aspect-video bg-[#E0E0E0] mb-4" />
            <div className="h-7 bg-[#E0E0E0] rounded mb-2 w-full" />
            <div className="h-7 bg-[#E0E0E0] rounded mb-4 w-3/4" />
            <div className="h-3 bg-[#E0E0E0] rounded w-full mb-1" />
            <div className="h-3 bg-[#E0E0E0] rounded w-5/6" />
          </div>
        ) : (
          <>
            <div className="text-[#C41230] text-[0.7rem] font-bold uppercase tracking-[0.05em] mb-2">
              {featured.category}
            </div>

            {featured.isVideo && featured.videoThumbnail ? (
              <a href={featured.sourceUrl} target="_blank" rel="noopener noreferrer" className="block relative group">
                <img
                  src={featured.videoThumbnail}
                  alt={featured.title}
                  className="w-full aspect-video object-cover mb-4"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="text-white w-10 h-10" />
                </div>
              </a>
            ) : featured.imageThumbnail ? (
              <a href={featured.sourceUrl} target="_blank" rel="noopener noreferrer">
                <img
                  src={featured.imageThumbnail}
                  alt={featured.title}
                  className="w-full aspect-video object-cover mb-4 cursor-pointer"
                />
              </a>
            ) : (
              <div className="w-full aspect-video bg-[#D4D4D4] flex items-center justify-center mb-4">
                <span className="text-[0.75rem] font-bold text-[#666] tracking-wider uppercase">
                  {featured.sourceName}
                </span>
              </div>
            )}

            <a href={featured.sourceUrl} target="_blank" rel="noopener noreferrer">
              <h2 className="font-playfair font-bold text-[1.6rem] text-[#1A1A1A] leading-[1.3] mb-3 hover:underline cursor-pointer">
                {featured.title}
              </h2>
            </a>

            {featured.excerpt && (
              <p className="text-[#444] text-[0.9rem] leading-relaxed mb-4">{featured.excerpt}</p>
            )}

            <div className="flex items-center text-[#757575] text-[0.8rem] gap-2">
              <span>{timeAgo(featured.publishedAt ?? featured.scrapedAt)}</span>
              <span>|</span>
              <span className="text-[0.7rem] text-[#999]">{featured.sourceName}</span>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
