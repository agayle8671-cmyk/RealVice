import { MessageSquare } from "lucide-react";

interface ArticleItem {
  category: string;
  headline: string;
  time: string;
  comments: string;
  hasImage?: boolean;
}

interface ArticleGridProps {
  articles: [ArticleItem, ArticleItem, ArticleItem];
}

export function ArticleGrid({ articles }: ArticleGridProps) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 border-b border-[#E0E0E0] pb-8">
      {articles.map((article, index) => (
        <article key={index} className={`flex flex-col ${index !== 0 ? 'md:border-l border-[#E0E0E0] md:pl-6' : ''}`}>
          <div className="text-[#C41230] text-[0.7rem] font-bold uppercase tracking-[0.05em] mb-2">
            {article.category}
          </div>
          
          {article.hasImage && (
            <div className="w-full aspect-[3/2] bg-[#D4D4D4] flex items-center justify-center mb-3 cursor-pointer">
              <span className="font-sans text-[10px] font-bold text-[#666666] tracking-wider uppercase">
                IMAGE
              </span>
            </div>
          )}
          
          <h3 className="font-playfair font-bold text-[1rem] text-[#1A1A1A] leading-[1.3] mb-3 hover:underline cursor-pointer">
            {article.headline}
          </h3>
          
          <div className="mt-auto pt-2 flex items-center text-[#757575] text-[0.8rem] font-sans">
            <span>{article.time}</span>
            <span className="mx-2">|</span>
            <MessageSquare className="w-3 h-3 mr-1" />
            <span>{article.comments}</span>
          </div>
        </article>
      ))}
    </section>
  );
}
