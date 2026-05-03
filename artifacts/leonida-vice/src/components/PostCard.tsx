import { useState } from "react";

interface PostProps {
  post: {
    author: string;
    time: string;
    badge?: string;
    text: string;
    likes: string;
    comments: string;
    shares: string;
  };
}

export function PostCard({ post }: PostProps) {
  const [liked, setLiked] = useState(false);
  
  // Transform data for newspaper style
  const byline = `By ${post.author.toUpperCase()} | Staff Correspondent`;
  const dateline = `VICE CITY — ${post.time.toUpperCase()} AGO`;

  return (
    <div className="mb-8">
      <div className="border-[2px] border-[#2C1F0E] bg-[#F5EFE0] p-4 md:p-6">
        
        <div className="mb-4 pb-4 border-b-[1px] border-double border-[#2C1F0E]">
          {post.badge && (
            <div className="mb-2">
              <span className="font-libre text-[12px] font-bold text-[#8B0000] border-[2px] border-[#8B0000] px-2 py-0.5 uppercase tracking-widest inline-block">
                [{post.badge}]
              </span>
            </div>
          )}
          
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-2">
            <div className="font-libre text-[12px] font-bold uppercase tracking-widest text-[#1A1208]">
              {byline}
            </div>
            <div className="font-libre text-[11px] uppercase tracking-wider text-[#1A1208]/70 italic">
              {dateline}
            </div>
          </div>
        </div>

        <div className="font-im-fell text-[17px] md:text-[18px] leading-[1.7] text-[#1A1208] text-justify mb-6 whitespace-pre-wrap columns-1 md:columns-2 gap-6">
          {/* Drop cap for the first letter if we want to get fancy, but let's just render the text */}
          <span className="float-left text-5xl font-blackletter leading-[0.8] pr-2 pt-1 text-[#1A1208]">
            {post.text.charAt(0)}
          </span>
          {post.text.substring(1)}
        </div>

        <div className="border-t-[1px] border-[#2C1F0E] pt-3 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-libre text-[12px] uppercase tracking-wider text-[#1A1208] italic">
            {post.likes.replace('K', ',000')} Readers | {post.comments} Responses | {post.shares} Reprintings
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setLiked(!liked)}
              className={`font-libre text-[12px] font-bold uppercase tracking-widest border-[1px] px-3 py-1 transition-colors ${liked ? 'border-[#8B0000] text-[#8B0000] bg-[#8B0000]/10' : 'border-[#2C1F0E] text-[#1A1208] hover:bg-[#D4C5A9]'}`}
            >
              Endorse
            </button>
            <button className="font-libre text-[12px] font-bold uppercase tracking-widest border-[1px] border-[#2C1F0E] text-[#1A1208] hover:bg-[#D4C5A9] px-3 py-1 transition-colors">
              Respond
            </button>
            <button className="font-libre text-[12px] font-bold uppercase tracking-widest border-[1px] border-[#2C1F0E] text-[#1A1208] hover:bg-[#D4C5A9] px-3 py-1 transition-colors">
              Reprint
            </button>
          </div>
        </div>
      </div>
      
      {/* Ornamental Divider between posts */}
      <div className="mt-8 mb-2 flex items-center justify-center opacity-70">
        <div className="w-16 h-[1px] bg-[#2C1F0E]"></div>
        <div className="mx-4 text-[#2C1F0E]">♦</div>
        <div className="w-16 h-[1px] bg-[#2C1F0E]"></div>
      </div>
    </div>
  );
}