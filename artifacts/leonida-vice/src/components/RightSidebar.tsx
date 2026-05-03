import { ExternalLink } from "lucide-react";
import type { Article } from "@workspace/api-client-react";
import { timeAgo } from "@/lib/time";

interface RightSidebarProps {
  intelArticles: Article[];
  loading?: boolean;
}

function SkeletonIntel() {
  return (
    <div className="flex gap-3 border-b border-[#E0E0E0] pb-4 animate-pulse">
      <div className="w-10 h-10 rounded-full bg-[#E0E0E0] shrink-0" />
      <div className="flex-1">
        <div className="h-2 w-24 bg-[#E0E0E0] rounded mb-2" />
        <div className="h-3 bg-[#E0E0E0] rounded mb-1" />
        <div className="h-3 bg-[#E0E0E0] rounded w-4/5" />
      </div>
    </div>
  );
}

const INITIALS_COLORS = [
  "bg-[#1A1A1A]", "bg-[#C41230]", "bg-[#2C5F8A]", "bg-[#3D7A3D]", "bg-[#7A3D7A]",
];

function getInitials(name: string): string {
  return name
    .split(/[\s-]/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

function getColor(name: string): string {
  const idx = name.charCodeAt(0) % INITIALS_COLORS.length;
  return INITIALS_COLORS[idx] ?? "bg-[#1A1A1A]";
}

export function RightSidebar({ intelArticles = [], loading }: RightSidebarProps) {
  const featured = intelArticles[0] ?? null;
  const rest = intelArticles.slice(1, 5);

  return (
    <aside className="w-full flex flex-col font-sans">
      <div className="border border-[#E0E0E0] mb-8">
        <div className="border-b border-[#E0E0E0] p-3">
          <h3 className="font-bold text-[0.8rem] text-[#1A1A1A] uppercase tracking-wide">
            NEW FROM LEONIDA VICE
          </h3>
        </div>
        <div className="p-4 flex flex-col items-center text-center">
          {loading || !featured ? (
            <div className="animate-pulse w-full flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#E0E0E0] mb-3" />
              <div className="h-2 w-32 bg-[#E0E0E0] rounded mb-2" />
              <div className="h-4 bg-[#E0E0E0] rounded mb-1 w-full" />
              <div className="h-4 bg-[#E0E0E0] rounded w-3/4" />
            </div>
          ) : (
            <>
              <div className={`w-16 h-16 rounded-full ${getColor(featured.sourceName)} text-white flex items-center justify-center font-bold text-[1.1rem] mb-3`}>
                {getInitials(featured.sourceName)}
              </div>
              <div className="text-[0.75rem] font-bold text-[#1A1A1A] uppercase tracking-wider mb-2">
                {featured.sourceName}
              </div>
              <a href={featured.sourceUrl} target="_blank" rel="noopener noreferrer" className="block">
                <h4 className="font-playfair font-bold text-[1.1rem] text-[#1A1A1A] leading-[1.3] mb-4 hover:underline cursor-pointer">
                  {featured.title}
                </h4>
              </a>
              <a
                href={featured.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[#C41230] font-bold text-[0.8rem] uppercase tracking-wider hover:underline"
              >
                READ MORE <ExternalLink className="w-3 h-3" />
              </a>
            </>
          )}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between border-b-[2px] border-[#1A1A1A] pb-2 mb-4">
          <h3 className="font-bold text-[1.1rem] text-[#1A1A1A] uppercase">INTEL</h3>
          <span className="text-[#C41230] font-bold text-[1.2rem]">&gt;</span>
        </div>

        <div className="flex flex-col gap-4">
          {loading
            ? [0, 1, 2, 3].map((i) => <SkeletonIntel key={i} />)
            : rest.map((article) => (
                <article key={article.id} className="flex gap-3 border-b border-[#E0E0E0] pb-4 last:border-b-0">
                  <div
                    className={`w-10 h-10 rounded-full ${getColor(article.sourceName)} text-white flex items-center justify-center font-bold text-[0.8rem] shrink-0`}
                  >
                    {getInitials(article.sourceName)}
                  </div>
                  <div>
                    <div className="text-[0.7rem] font-bold text-[#1A1A1A] uppercase tracking-wider mb-1">
                      {article.sourceName}
                    </div>
                    <a href={article.sourceUrl} target="_blank" rel="noopener noreferrer">
                      <h4 className="font-playfair font-bold text-[0.95rem] text-[#1A1A1A] leading-[1.3] mb-2 hover:underline cursor-pointer">
                        {article.title}
                      </h4>
                    </a>
                    <div className="flex items-center text-[#757575] text-[0.75rem] gap-2">
                      <span>{timeAgo(article.publishedAt ?? article.scrapedAt)}</span>
                      <span className="text-[#C41230] text-[0.7rem] font-bold uppercase">{article.category}</span>
                    </div>
                  </div>
                </article>
              ))}
        </div>
      </div>
    </aside>
  );
}
