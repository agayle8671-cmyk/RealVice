import { Search, Home, Tv, Store, UsersRound, Gamepad2, CircleEllipsis, MessageCircle, Bell } from "lucide-react";

export function NavBar() {
  return (
    <div className="fixed top-0 left-0 right-0 h-[56px] bg-white shadow-sm flex items-center justify-between px-4 z-50">
      <div className="flex items-center gap-2 w-[320px]">
        <div className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center text-white font-bold text-lg">
          LV
        </div>
        <div className="hidden md:flex items-center bg-[#F0F2F5] rounded-full px-3 py-2 w-[240px]">
          <Search className="w-4 h-4 text-gray-500 mr-2 shrink-0" />
          <input 
            type="text" 
            placeholder="Search LeonidaVice" 
            className="bg-transparent border-none outline-none text-[15px] placeholder:text-gray-500 w-full"
          />
        </div>
      </div>

      <div className="hidden md:flex items-center justify-center flex-1 h-full max-w-[600px] gap-2">
        <NavTab icon={Home} active />
        <NavTab icon={Tv} />
        <NavTab icon={Store} />
        <NavTab icon={UsersRound} />
        <NavTab icon={Gamepad2} />
      </div>

      <div className="flex items-center justify-end gap-2 w-[320px]">
        <IconButton icon={CircleEllipsis} />
        <IconButton icon={MessageCircle} />
        <IconButton icon={Bell} />
        <div className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center text-white font-bold cursor-pointer hover:opacity-90 transition-opacity ml-1">
          LV
        </div>
      </div>
    </div>
  );
}

function NavTab({ icon: Icon, active }: { icon: any, active?: boolean }) {
  return (
    <div className={`relative h-full flex items-center justify-center px-10 cursor-pointer transition-colors ${!active && 'hover:bg-gray-100 rounded-lg my-1'}`}>
      <Icon className={`w-7 h-7 ${active ? 'text-[#1877F2]' : 'text-gray-500'}`} />
      {active && (
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#1877F2] rounded-t-md" />
      )}
    </div>
  );
}

function IconButton({ icon: Icon }: { icon: any }) {
  return (
    <div className="w-10 h-10 rounded-full bg-[#E4E6EB] hover:bg-[#D8DADF] flex items-center justify-center cursor-pointer transition-colors">
      <Icon className="w-5 h-5 text-black" />
    </div>
  );
}
