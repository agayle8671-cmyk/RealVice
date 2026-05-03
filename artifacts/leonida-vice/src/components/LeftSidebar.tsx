export function LeftSidebar() {
  return (
    <div className="w-full flex flex-col gap-1 pr-4 border-r-[1px] border-[#2C1F0E] min-h-[calc(100vh-200px)]">
      <h2 className="font-playfair font-bold text-xl text-[#1A1208] mb-4 border-b-[2px] border-[#2C1F0E] pb-2 uppercase tracking-wide">
        THE DIRECTORY
      </h2>

      <div className="border-[2px] border-[#2C1F0E] p-3 mb-6 bg-[#E8DCC8]">
        <div className="font-playfair font-bold text-[#1A1208] text-sm uppercase">VICE CITY REPORTER</div>
        <div className="font-libre text-[11px] text-[#1A1208] uppercase tracking-wider italic">Staff Correspondent</div>
      </div>
      
      <div className="flex flex-col gap-0 border-b-[1px] border-[#2C1F0E] pb-4 mb-4">
        <SidebarItem text="Friends & Associates" />
        <SidebarItem text="Archived Memories" />
        <SidebarItem text="Saved Clippings" />
        <SidebarItem text="Press Associations" />
        <SidebarItem text="Broadcasts" />
        <SidebarItem text="The Marketplace" />
        <SidebarItem text="Social Calendar" />
        <SidebarItem text="Amusements" />
        <SidebarItem text="See More Index..." />
      </div>

      <div className="px-2 py-2 font-libre text-[12px] font-bold text-[#1A1208] uppercase tracking-widest border-b-[1px] border-[#2C1F0E] mb-2">
        AFFILIATED BUREAUS
      </div>

      <div className="flex flex-col gap-0">
        <SidebarItem text="Leonida Underground" />
        <SidebarItem text="Vice Beach Crew" />
        <SidebarItem text="BAWSAQ Traders" />
      </div>
    </div>
  );
}

function SidebarItem({ text }: { text: string }) {
  return (
    <div className="flex items-center px-2 py-1.5 border-b-[1px] border-dotted border-[#2C1F0E] last:border-0 hover:bg-[#D4C5A9] cursor-pointer transition-colors group">
      <span className="font-libre text-[13px] text-[#1A1208] uppercase tracking-wider group-hover:text-[#8B0000]">{text}</span>
    </div>
  );
}