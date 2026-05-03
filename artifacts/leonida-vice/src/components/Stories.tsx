export function Stories() {
  const stories = [
    { name: "Vice City Reporter", bg: "bg-gradient-to-br from-blue-400 to-blue-600", avatar: "LV" },
    { name: "Leonida Daily", bg: "bg-gradient-to-br from-purple-400 to-pink-500", avatar: "LD" },
    { name: "BAWSAQ Update", bg: "bg-gradient-to-br from-green-400 to-emerald-600", avatar: "BU" },
    { name: "Merryweather Intel", bg: "bg-gradient-to-br from-red-400 to-orange-500", avatar: "MI" },
    { name: "Ambrosia County", bg: "bg-gradient-to-br from-yellow-400 to-orange-400", avatar: "AC" },
  ];

  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {stories.map((story, i) => (
        <div key={i} className={`relative w-[112px] h-[200px] rounded-xl shrink-0 cursor-pointer overflow-hidden ${story.bg} shadow-sm group`}>
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
          <div className="absolute top-3 left-3 w-10 h-10 rounded-full border-4 border-blue-500 bg-white flex items-center justify-center font-bold text-xs text-blue-600">
            {story.avatar}
          </div>
          <div className="absolute bottom-3 left-3 right-3 text-white font-medium text-[13px] leading-tight drop-shadow-md">
            {story.name}
          </div>
        </div>
      ))}
    </div>
  );
}
