export function Stories() {
  const stories = [
    { name: "Vice City Reporter", avatar: "VR" },
    { name: "Leonida Daily", avatar: "LD" },
    { name: "BAWSAQ Update", avatar: "BU" },
    { name: "Merryweather Intel", avatar: "MI" },
    { name: "Ambrosia County", avatar: "AC" },
  ];

  return (
    <div className="mb-6">
      <h2 className="font-playfair font-bold text-lg text-[#1A1208] mb-3 uppercase tracking-wide border-y-[1px] border-[#2C1F0E] py-1 text-center">
        DISPATCHES FROM THE FIELD
      </h2>
      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
        {stories.map((story, i) => (
          <div key={i} className="relative w-[120px] h-[160px] border-[2px] border-[#2C1F0E] border-t-[6px] border-t-[#8B0000] bg-[#E8DCC8] shrink-0 cursor-pointer group flex flex-col p-2 hover:bg-[#D4C5A9] transition-colors">
            <div className="w-10 h-10 border-[2px] border-[#2C1F0E] bg-[#F5EFE0] flex items-center justify-center font-playfair font-bold text-sm text-[#1A1208] mb-auto">
              {story.avatar}
            </div>
            <div className="font-playfair font-bold italic text-[#1A1208] text-[14px] leading-tight">
              {story.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}