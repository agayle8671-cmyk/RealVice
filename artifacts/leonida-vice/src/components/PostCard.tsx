import { useState } from "react";
import { ThumbsUp, MessageSquare, Share2, MoreHorizontal, X, Globe2 } from "lucide-react";

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
  const initials = post.author.split(' ').map(w => w[0]).join('').substring(0, 2);

  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-3">
        <div className="flex justify-between items-start mb-2">
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center font-bold text-blue-700">
              {initials}
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="font-semibold text-[15px] hover:underline cursor-pointer">{post.author}</span>
                {post.badge && (
                  <span className="text-[11px] font-bold bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded uppercase">
                    {post.badge}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-1 text-[13px] text-gray-500">
                <span className="hover:underline cursor-pointer">{post.time}</span>
                <span>·</span>
                <Globe2 className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
          <div className="flex gap-1">
            <div className="w-9 h-9 rounded-full hover:bg-[#F0F2F5] flex items-center justify-center cursor-pointer text-gray-500">
              <MoreHorizontal className="w-5 h-5" />
            </div>
            <div className="w-9 h-9 rounded-full hover:bg-[#F0F2F5] flex items-center justify-center cursor-pointer text-gray-500">
              <X className="w-5 h-5" />
            </div>
          </div>
        </div>

        <div className="text-[15px] mb-3 whitespace-pre-wrap">
          {post.text}
        </div>
      </div>

      <div className="px-4 py-2 flex items-center justify-between text-[15px] text-gray-500 border-b border-gray-200 mx-2">
        <div className="flex items-center gap-1.5">
          <div className="w-[18px] h-[18px] bg-[#1877F2] rounded-full flex items-center justify-center">
            <ThumbsUp className="w-2.5 h-2.5 text-white fill-white" />
          </div>
          <span>{post.likes}</span>
        </div>
        <div className="flex gap-3">
          <span className="hover:underline cursor-pointer">{post.comments} comments</span>
          <span className="hover:underline cursor-pointer">{post.shares} shares</span>
        </div>
      </div>

      <div className="p-1 mx-2 flex items-center justify-between">
        <button 
          onClick={() => setLiked(!liked)}
          className={`flex-1 flex items-center justify-center gap-2 p-1.5 rounded-lg hover:bg-[#F0F2F5] transition-colors ${liked ? 'text-[#1877F2]' : 'text-gray-500'}`}
        >
          <ThumbsUp className={`w-5 h-5 ${liked ? 'fill-[#1877F2]' : ''}`} />
          <span className="font-semibold text-[15px]">Like</span>
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 p-1.5 rounded-lg hover:bg-[#F0F2F5] transition-colors text-gray-500">
          <MessageSquare className="w-5 h-5" />
          <span className="font-semibold text-[15px]">Comment</span>
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 p-1.5 rounded-lg hover:bg-[#F0F2F5] transition-colors text-gray-500">
          <Share2 className="w-5 h-5" />
          <span className="font-semibold text-[15px]">Share</span>
        </button>
      </div>
    </div>
  );
}
