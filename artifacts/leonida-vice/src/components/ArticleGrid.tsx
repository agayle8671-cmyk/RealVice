import { ExternalLink } from "lucide-react";
import type { Article } from "@workspace/api-client-react";
import { timeAgo } from "@/lib/time";

interface ArticleGridProps {
  articles: Article[];
  loading?: boolean;
  sectionLabel?: string;
}

const CATEGORY_COLORS: Record<string, string> = {
  "Vice City": "#1A3A5C",
  "Markets": "#1A4A1A",
  "Vehicles": "#3A1A1A",
  "Business": "#2A1A3A",
  "Counties": "#1A2A3A",
  "Investigations": "#3A2A1A",
  "Opinion": "#3A1A2A",
  "Intel": "#1A1A3A",
};

function CardImage({ article }: { article: Article }) {
  const thumb = article.videoThumbnail ?? article.imageThumbnail ?? null;
  const bg = CATEGORY_COLORS[article.category ?? ""] ?? "#1A1A1A";

  if (!thumb) {
    return (
      <div
        className="w-full aspect-[3/2] mb-3 flex flex-col items-center justify-center px-4 text-center"
        style={{ backgroundColor: bg }}
      >
        <div className="text-white/30 text-[0.6rem] font-bold uppercase tracking-[0.15em] mb-2">
          {article.category}
        </div>
        <div className="text-white font-playfair font-bold text-[0.85rem] leading-snug line-clamp-3 opacity-90">
          {article.title}
        </div>
        <div className="text-white/40 text-[0.6rem] uppercase tracking-wider mt-2">
          {article.sourceName}
        </div>
      </div>
    );
  }

  return (
    <a href={article.sourceUrl} target="_blank" rel="noopener noreferrer" className="relative group block mb-3">
      <img
        src={thumb}
        alt={article.title}
        referrerPolicy="no-referrer"
        className="w-full aspect-[3/2] object-cover"
        onError={(e) => {
          const img = e.currentTarget;
          img.style.display = "none";
          const next = img.nextElementSibling as HTMLElement | null;
          if (next) next.style.display = "flex";
        }}
      />
      <div
        className="w-full aspect-[3/2] flex-col items-center justify-center px-4 text-center"
        style={{ display: "none", backgroundColor: bg }}
      >
        <div className="text-white font-playfair font-bold text-[0.85rem] leading-snug line-clamp-3 opacity-90">
          {article.title}
        </div>
      </div>
      {article.isVideo && (
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <ExternalLink className="text-white w-6 h-6" />
        </div>
      )}
    </a>
  );
}

function ArticleCard({ article, index }: { article: Article; index: number }) {
  return (
    <article className={`flex flex-col ${index !== 0 ? "md:border-l border-[#E0E0E0] md:pl-6" : ""}`}>
      <div className="text-[#C41230] text-[0.7rem] font-bold uppercase tracking-[0.05em] mb-2">
        {article.category}
      </div>

      <CardImage article={article} />

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
      <div className="w-full aspect-[3/2] bg-[#E0E0E0] mb-3" />
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
