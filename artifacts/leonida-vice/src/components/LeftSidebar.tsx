import { Users, Clock, Bookmark, UsersRound, Tv, Store, Calendar, Gamepad2, ChevronDown } from "lucide-react";

export function LeftSidebar() {
  return (
    <div className="w-full flex flex-col gap-1 pr-2">
      <SidebarItem 
        icon={
          <div className="w-9 h-9 rounded-full bg-[#1877F2] flex items-center justify-center text-white font-bold text-sm">
            LV
          </div>
        }
        text="Vice City Reporter" 
      />
      
      <SidebarItem icon={<Users className="w-7 h-7 text-blue-500" />} text="Friends" />
      <SidebarItem icon={<Clock className="w-7 h-7 text-blue-500" />} text="Memories" />
      <SidebarItem icon={<Bookmark className="w-7 h-7 text-purple-500" />} text="Saved" />
      <SidebarItem icon={<UsersRound className="w-7 h-7 text-blue-500" />} text="Groups" />
      <SidebarItem icon={<Tv className="w-7 h-7 text-blue-500" />} text="Watch" />
      <SidebarItem icon={<Store className="w-7 h-7 text-blue-500" />} text="Marketplace" />
      <SidebarItem icon={<Calendar className="w-7 h-7 text-red-500" />} text="Events" />
      <SidebarItem icon={<Gamepad2 className="w-7 h-7 text-blue-500" />} text="Gaming" />
      
      <SidebarItem 
        icon={
          <div className="w-9 h-9 rounded-full bg-[#E4E6EB] flex items-center justify-center">
            <ChevronDown className="w-5 h-5" />
          </div>
        } 
        text="See more" 
      />

      <div className="h-[1px] bg-gray-300 my-2 mx-2" />

      <div className="px-2 py-2 text-[17px] font-semibold text-gray-500">
        Your shortcuts
      </div>

      <SidebarItem 
        icon={<div className="w-9 h-9 rounded-lg bg-gray-200 shrink-0" />} 
        text="Leonida Underground" 
      />
      <SidebarItem 
        icon={<div className="w-9 h-9 rounded-lg bg-gray-200 shrink-0" />} 
        text="Vice Beach Crew" 
      />
      <SidebarItem 
        icon={<div className="w-9 h-9 rounded-lg bg-gray-200 shrink-0" />} 
        text="BAWSAQ Traders" 
      />
    </div>
  );
}

function SidebarItem({ icon, text }: { icon: React.ReactNode, text: string }) {
  return (
    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#E4E6EB] cursor-pointer transition-colors">
      {icon}
      <span className="font-medium text-[15px]">{text}</span>
    </div>
  );
}
