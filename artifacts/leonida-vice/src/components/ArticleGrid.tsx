import { ExternalLink } from "lucide-react";
import type { Article } from "@workspace/api-client-react";
import { timeAgo } from "@/lib/time";

interface ArticleGridProps {
  articles: Article[];
  loading?: boolean;
  sectionLabel?: string;
}

function ArticleCard({ article, index }: { article: Article; index: number }) {
  const showImage = index === 1 && (article.imageThumbnail || article.videoThumbnail);

  return (
    <article className={`flex flex-col ${index !== 0 ? "md:border-l border-[#E0E0E0] md:pl-6" : ""}`}>
      <div className="text-[#C41230] text-[0.7rem] font-bold uppercase tracking-[0.05em] mb-2">
        {article.category}
      </div>

      {showImage && (
        <a href={article.sourceUrl} target="_blank" rel="noopener noreferrer" className="relative group">
          <img
            src={(article.videoThumbnail ?? article.imageThumbnail)!}
            alt={article.title}
            referrerPolicy="no-referrer"
            className="w-full aspect-[3/2] object-cover mb-3"
          />
          {article.isVideo && (
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <ExternalLink className="text-white w-6 h-6" />
            </div>
          )}
        </a>
      )}

      <a href={article.sourceUrl} target="_blank" rel="noopener noreferrer">
        <h3 className="font-playfair font-bold text-[1rem] text-[#1A1A1A] leading-[1.3] mb-3 hover:underline cursor-pointer">
          {article.title}
        </h3>
      </a>

      <div className="mt-auto flex items-center text-[#757575] text-[0.75rem] gap-2">
        <span>{timeAgo(article.publishedAt ?? article.scrapedAt)}</span>
        <span>|</span>
        <span className="text-[0.7rem] text-[#999] truncate max-w-[120px]">{article.sourceName}</span>
      </div>
    </article>
  );
}

function SkeletonCard({ index }: { index: number }) {
  return (
    <div className={`flex flex-col animate-pulse ${index !== 0 ? "md:border-l border-[#E0E0E0] md:pl-6" : ""}`}>
      <div className="h-2 w-16 bg-[#E0E0E0] rounded mb-2" />
      {index === 1 && <div className="w-full aspect-[3/2] bg-[#E0E0E0] mb-3" />}
      <div className="h-4 bg-[#E0E0E0] rounded mb-1" />
      <div className="h-4 bg-[#E0E0E0] rounded mb-1 w-4/5" />
      <div className="h-4 bg-[#E0E0E0] rounded w-3/5" />
    </div>
  );
}

export function ArticleGrid({ articles = [], loading, sectionLabel }: ArticleGridProps) {
  return (
    <section className="mb-8 border-b border-[#E0E0E0] pb-8">
      {sectionLabel && (
        <div className="text-[0.7rem] font-bold uppercase tracking-widest text-[#757575] border-b border-[#E0E0E0] pb-2 mb-4">
          {sectionLabel}
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {loading
          ? [0, 1, 2].map((i) => <SkeletonCard key={i} index={i} />)
          : articles.slice(0, 3).map((a, i) => <ArticleCard key={a.id} article={a} index={i} />)}
      </div>
    </section>
  );
}
