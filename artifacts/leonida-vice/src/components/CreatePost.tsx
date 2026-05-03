export function CreatePost() {
  return (
    <div className="border-[2px] border-[#2C1F0E] bg-[#F5EFE0] p-4 mb-6 relative">
      {/* Corner ornaments (simple borders) */}
      <div className="absolute top-1 left-1 w-2 h-2 border-t-[2px] border-l-[2px] border-[#8B0000]" />
      <div className="absolute top-1 right-1 w-2 h-2 border-t-[2px] border-r-[2px] border-[#8B0000]" />
      <div className="absolute bottom-1 left-1 w-2 h-2 border-b-[2px] border-l-[2px] border-[#8B0000]" />
      <div className="absolute bottom-1 right-1 w-2 h-2 border-b-[2px] border-r-[2px] border-[#8B0000]" />

      <h3 className="font-playfair font-bold text-sm text-[#1A1208] uppercase tracking-widest text-center mb-3">
        SUBMIT A TIP TO THE EDITORIAL DESK
      </h3>
      
      <div className="flex items-start gap-3 mb-4">
        <div className="w-10 h-10 border-[2px] border-[#2C1F0E] bg-[#E8DCC8] flex items-center justify-center text-[#1A1208] font-playfair font-bold text-sm shrink-0">
          VR
        </div>
        <div className="flex-1 border-b-[2px] border-dashed border-[#2C1F0E] pt-2 pb-1 cursor-text">
          <span className="font-im-fell text-[16px] text-[#1A1208]/70 italic">Record your observation here...</span>
        </div>
      </div>
      
      <div className="w-full border-t-[1px] border-[#2C1F0E] mb-3" />
      
      <div className="flex items-center justify-between px-4">
        <PostAction text="Wire Report" />
        <div className="w-[1px] h-4 bg-[#2C1F0E]" />
        <PostAction text="Photo Evidence" />
        <div className="w-[1px] h-4 bg-[#2C1F0E]" />
        <PostAction text="Field Observation" />
      </div>
    </div>
  );
}

function PostAction({ text }: { text: string }) {
  return (
    <div className="flex-1 flex items-center justify-center p-1 cursor-pointer group">
      <span className="font-libre text-[12px] font-bold uppercase tracking-wider text-[#1A1208] group-hover:text-[#8B0000] transition-colors">{text}</span>
    </div>
  );
}