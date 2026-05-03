export function RightSidebar() {
  const contacts = [
    "Jason Duval", "Lucia Caminos", "Trevor Philips", 
    "Michael De Santa", "Franklin Clinton", "Lester Crest", 
    "Ron Jakowski", "Dave Norton"
  ];

  return (
    <div className="w-full flex flex-col gap-6 pl-4 border-l-[1px] border-[#2C1F0E] min-h-[calc(100vh-200px)]">
      <h2 className="font-playfair font-bold text-xl text-[#1A1208] mb-2 border-b-[2px] border-[#2C1F0E] pb-2 uppercase tracking-wide">
        NOTICES & CORRESPONDENCE
      </h2>

      <div>
        <div className="flex items-center justify-center gap-2 mb-3 opacity-80">
          <div className="flex-1 h-[1px] bg-[#2C1F0E]"></div>
          <h3 className="font-libre text-[11px] font-bold text-[#1A1208] uppercase tracking-widest">
            COMMERCIAL NOTICES
          </h3>
          <div className="flex-1 h-[1px] bg-[#2C1F0E]"></div>
        </div>
        
        <div className="flex flex-col gap-4">
          <div className="border-[2px] border-[#2C1F0E] p-3 text-center bg-[#E8DCC8] hover:bg-[#D4C5A9] cursor-pointer transition-colors">
            <h4 className="font-playfair font-bold text-[#1A1208] uppercase mb-1 leading-tight">Legendary Motorsport</h4>
            <p className="font-im-fell text-[13px] text-[#1A1208] italic mb-2">GTA VI Exclusive Vehicles. Shop now.</p>
            <span className="font-libre text-[10px] uppercase tracking-widest text-[#8B0000] font-bold">legendarymotorsport.net</span>
          </div>
          
          <div className="border-[2px] border-[#2C1F0E] p-3 text-center bg-[#E8DCC8] hover:bg-[#D4C5A9] cursor-pointer transition-colors">
            <h4 className="font-playfair font-bold text-[#1A1208] uppercase mb-1 leading-tight">Ammu-Nation</h4>
            <p className="font-im-fell text-[13px] text-[#1A1208] italic mb-2">Gear up for Leonida. Limited stock.</p>
            <span className="font-libre text-[10px] uppercase tracking-widest text-[#8B0000] font-bold">ammunation.com</span>
          </div>
        </div>
      </div>

      <div className="w-full border-t-[3px] border-[#2C1F0E] border-double" />

      <div>
        <div className="flex items-center justify-between mb-3 px-1 border-b-[1px] border-[#2C1F0E] pb-1">
          <h3 className="font-libre text-[12px] font-bold text-[#1A1208] uppercase tracking-widest">
            CORRESPONDENTS ON THE WIRE
          </h3>
        </div>
        
        <div className="flex flex-col gap-1">
          {contacts.map((contact, i) => (
            <div key={i} className="flex items-center justify-between px-2 py-1.5 border-b-[1px] border-dotted border-[#2C1F0E] hover:bg-[#D4C5A9] cursor-pointer transition-colors group">
              <span className="font-libre text-[12px] font-bold text-[#1A1208] uppercase tracking-wider group-hover:text-[#8B0000]">
                {contact}
              </span>
              {/* Telegraph-style indicator */}
              <div className="w-2 h-2 bg-[#1A1208] rounded-full border-[1px] border-[#F5EFE0]" />
            </div>
          ))}
        </div>
      </div>

      <div className="w-full border-t-[1px] border-[#2C1F0E]" />

      <div>
        <h3 className="font-libre text-[12px] font-bold text-[#1A1208] uppercase tracking-widest mb-3 px-1 border-b-[1px] border-[#2C1F0E] pb-1">
          PRESS ASSOCIATIONS
        </h3>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3 p-2 border-[1px] border-[#2C1F0E] hover:bg-[#D4C5A9] cursor-pointer transition-colors bg-[#E8DCC8]">
            <div className="font-playfair font-bold text-[18px] text-[#1A1208] border-r-[1px] border-[#2C1F0E] pr-2">
              LO
            </div>
            <span className="font-libre text-[12px] font-bold text-[#1A1208] uppercase tracking-wider">Leonida Operators</span>
          </div>
          <div className="flex items-center gap-3 p-2 border-[1px] border-[#2C1F0E] hover:bg-[#D4C5A9] cursor-pointer transition-colors bg-[#E8DCC8]">
            <div className="font-playfair font-bold text-[18px] text-[#1A1208] border-r-[1px] border-[#2C1F0E] pr-2">
              VC
            </div>
            <span className="font-libre text-[12px] font-bold text-[#1A1208] uppercase tracking-wider">Vice City Crew</span>
          </div>
        </div>
      </div>
    </div>
  );
}