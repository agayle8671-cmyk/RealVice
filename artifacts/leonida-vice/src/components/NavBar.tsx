export function NavBar() {
  return (
    <div className="w-full bg-[#F5EFE0] border-b-[4px] border-[#2C1F0E] relative pb-2 pt-2 z-50">
      <div className="absolute bottom-[-8px] left-0 right-0 border-b-[1px] border-[#2C1F0E]" />
      
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col items-center">
        {/* Top Strip */}
        <div className="w-full flex justify-between items-center border-t-[1px] border-b-[1px] border-[#2C1F0E] py-1 mb-4">
          <span className="font-libre text-[11px] font-variant-small-caps uppercase tracking-widest text-[#1A1208]">
            Saturday, May 3, 2026 — Vol. XCIV, No. 12
          </span>
          <span className="font-libre text-[11px] font-variant-small-caps uppercase tracking-widest text-[#1A1208]">
            LEONIDA METROPOLITAN EDITION
          </span>
        </div>

        {/* Masthead */}
        <div className="text-center mb-2">
          <h1 className="font-blackletter text-6xl md:text-7xl lg:text-[5.5rem] text-[#1A1208] leading-none mb-1 tracking-tight">
            THE LEONIDA VICE
          </h1>
          <p className="font-playfair italic text-sm md:text-[15px] text-[#1A1208]">
            "All The Intelligence Fit To Print — Vice City's Premier Daily Intelligence Report"
          </p>
        </div>

        {/* Double Rule */}
        <div className="w-full border-t-[3px] border-[#2C1F0E] mb-[2px]" />
        <div className="w-full border-t-[1px] border-[#2C1F0E] mb-3" />

        {/* Nav Tabs */}
        <div className="flex items-center justify-center gap-4 md:gap-8 overflow-x-auto w-full pb-1 scrollbar-hide">
          <NavTab text="HOME" active />
          <div className="w-[1px] h-4 bg-[#2C1F0E]" />
          <NavTab text="MARKETS" />
          <div className="w-[1px] h-4 bg-[#2C1F0E]" />
          <NavTab text="INTELLIGENCE" />
          <div className="w-[1px] h-4 bg-[#2C1F0E]" />
          <NavTab text="COUNTY RECORDS" />
          <div className="w-[1px] h-4 bg-[#2C1F0E]" />
          <NavTab text="VEHICLE REGISTRY" />
        </div>
      </div>
    </div>
  );
}

function NavTab({ text, active }: { text: string, active?: boolean }) {
  return (
    <div className={`font-libre text-[12px] uppercase tracking-widest cursor-pointer whitespace-nowrap ${active ? 'text-[#8B0000] font-bold border-b border-[#8B0000]' : 'text-[#1A1208] hover:text-[#8B0000]'}`}>
      {text}
    </div>
  );
}