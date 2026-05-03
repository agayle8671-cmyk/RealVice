import { Video, Image, Smile } from "lucide-react";

export function CreatePost() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-3">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center text-white font-bold shrink-0">
          LV
        </div>
        <div className="flex-1 bg-[#F0F2F5] hover:bg-[#E4E6EB] transition-colors rounded-full px-4 py-2.5 cursor-pointer">
          <span className="text-gray-500 text-[15px]">What's on your mind, Reporter?</span>
        </div>
      </div>
      
      <div className="h-[1px] bg-gray-200 mb-2" />
      
      <div className="flex items-center justify-between">
        <PostAction icon={Video} color="text-red-500" text="Live Video" />
        <PostAction icon={Image} color="text-green-500" text="Photo/Video" />
        <PostAction icon={Smile} color="text-yellow-500" text="Feeling/Activity" />
      </div>
    </div>
  );
}

function PostAction({ icon: Icon, color, text }: { icon: any, color: string, text: string }) {
  return (
    <div className="flex-1 flex items-center justify-center gap-2 p-2 rounded-lg hover:bg-[#F0F2F5] cursor-pointer transition-colors">
      <Icon className={`w-6 h-6 ${color}`} />
      <span className="font-semibold text-[15px] text-gray-500">{text}</span>
    </div>
  );
}
