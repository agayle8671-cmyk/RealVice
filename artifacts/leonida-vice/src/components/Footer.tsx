export function Footer() {
  return (
    <footer className="border-t border-[#E0E0E0] mt-12 py-8 bg-[#1A1A1A] text-white">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
          <div>
            <div className="font-playfair font-bold text-[1.8rem] border border-white px-4 py-1 inline-block mb-3">
              LEONIDA VICE
            </div>
            <p className="text-[#aaa] text-[0.8rem] max-w-xs leading-relaxed">
              Your source for GTA 6 & Leonida intelligence. Fan-operated. No affiliation with Rockstar Games or Take-Two Interactive.
            </p>
          </div>
          <div className="flex gap-12">
            <div>
              <div className="text-[0.7rem] font-bold uppercase tracking-widest text-[#aaa] mb-3">Sections</div>
              <ul className="space-y-1 text-[0.85rem] text-[#ccc]">
                {["Vice City", "Markets", "Vehicles", "Business", "Counties", "Investigations", "Opinion", "Intel"].map((s) => (
                  <li key={s}><a href="#" className="hover:text-white transition-colors">{s}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-[0.7rem] font-bold uppercase tracking-widest text-[#aaa] mb-3">Sources</div>
              <ul className="space-y-1 text-[0.85rem] text-[#ccc]">
                {["Reddit r/GTA6", "Eurogamer", "PC Gamer", "GamesRadar", "Rockstar Newswire", "GTABase", "VGC", "Push Square"].map((s) => (
                  <li key={s}><span className="text-[#666]">{s}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-[#333] pt-4 flex flex-col md:flex-row justify-between items-center text-[0.75rem] text-[#666] gap-2">
          <span>© 2026 Leonida Vice — Fan Site. All article content belongs to respective publishers.</span>
          <span>GTA 6 is a trademark of Rockstar Games, Inc.</span>
        </div>
      </div>
    </footer>
  );
}
