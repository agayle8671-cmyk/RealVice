import { Search } from "lucide-react";

export function RightSidebar() {
  const contacts = [
    { name: "Jason Duval", color: "bg-blue-200 text-blue-700" },
    { name: "Lucia Caminos", color: "bg-purple-200 text-purple-700" },
    { name: "Trevor Philips", color: "bg-orange-200 text-orange-700" },
    { name: "Michael De Santa", color: "bg-green-200 text-green-700" },
    { name: "Franklin Clinton", color: "bg-teal-200 text-teal-700" },
    { name: "Lester Crest", color: "bg-gray-200 text-gray-700" },
    { name: "Ron Jakowski", color: "bg-yellow-200 text-yellow-700" },
    { name: "Dave Norton", color: "bg-indigo-200 text-indigo-700" },
  ];

  return (
    <div className="w-full flex flex-col gap-4">
      <div>
        <h3 className="text-[17px] font-semibold text-gray-500 mb-2">Sponsored</h3>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#E4E6EB] cursor-pointer transition-colors">
            <div className="w-[110px] h-[110px] rounded-lg bg-gray-200 shrink-0" />
            <div className="flex flex-col">
              <span className="font-semibold text-[15px]">Legendary Motorsport — GTA VI Exclusive Vehicles. Shop now.</span>
              <span className="text-[13px] text-gray-500">legendarymotorsport.net</span>
            </div>
          </div>
          <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#E4E6EB] cursor-pointer transition-colors">
            <div className="w-[110px] h-[110px] rounded-lg bg-gray-200 shrink-0" />
            <div className="flex flex-col">
              <span className="font-semibold text-[15px]">Ammu-Nation — Gear up for Leonida. Limited stock.</span>
              <span className="text-[13px] text-gray-500">ammunation.com</span>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[1px] bg-gray-300" />

      <div>
        <div className="flex items-center justify-between mb-2 px-2">
          <h3 className="text-[17px] font-semibold text-gray-500">Contacts</h3>
          <div className="flex gap-2 text-gray-500">
            <div className="w-8 h-8 rounded-full hover:bg-[#E4E6EB] flex items-center justify-center cursor-pointer">
              <Search className="w-4 h-4" />
            </div>
            <div className="w-8 h-8 rounded-full hover:bg-[#E4E6EB] flex items-center justify-center cursor-pointer">
              <span className="font-bold pb-2">...</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col">
          {contacts.map((contact, i) => (
            <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#E4E6EB] cursor-pointer transition-colors relative">
              <div className="relative">
                <div className={`w-9 h-9 rounded-full ${contact.color} flex items-center justify-center font-bold text-sm`}>
                  {contact.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#F0F2F5] rounded-full" />
              </div>
              <span className="font-medium text-[15px]">{contact.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="h-[1px] bg-gray-300" />

      <div>
        <h3 className="text-[17px] font-semibold text-gray-500 mb-2 px-2">Group conversations</h3>
        <div className="flex flex-col">
          <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#E4E6EB] cursor-pointer transition-colors">
            <div className="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center font-bold text-gray-600 text-sm">
              LO
            </div>
            <span className="font-medium text-[15px]">Leonida Operators</span>
          </div>
          <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#E4E6EB] cursor-pointer transition-colors">
            <div className="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center font-bold text-gray-600 text-sm">
              VC
            </div>
            <span className="font-medium text-[15px]">Vice City Crew</span>
          </div>
        </div>
      </div>
    </div>
  );
}
