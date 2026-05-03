import { Link } from "wouter";

const NAV_SECTIONS = [
  { label: "Vice City", href: "/vice-city" },
  { label: "Counties", href: "/counties" },
  { label: "Characters", href: "/characters" },
  { label: "Vehicles", href: "/vehicles" },
  { label: "Intel", href: "/intel" },
];

const SOURCES = ["Reddit r/GTA6", "Eurogamer", "PC Gamer", "GamesRadar", "Rockstar Newswire", "GTABase", "VGC", "Push Square", "Game Rant", "Dexerto"];

export function Footer() {
  return (
    <footer className="border-t border-[#E0E0E0] mt-12 py-8 bg-[#1A1A1A] text-white">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
          <div>
            <div className="font-playfair font-bold text-[1.8rem] border border-white px-4 py-1 inline-block mb-3">
              LEONIDA VICE
            </div>
            <p className="text-[#aaa] text-[0.8rem] max-w-xs leading-relaxed mb-2">
              Your source for GTA 6 & State of Leonida intelligence. Fan-operated. All intel, no spin.
            </p>
            <p className="text-[#555] text-[0.75rem]">
              Not affiliated with Rockstar Games or Take-Two Interactive.
            </p>
          </div>
          <div className="flex gap-12">
            <div>
              <div className="text-[0.7rem] font-bold uppercase tracking-widest text-[#aaa] mb-3">Sections</div>
              <ul className="space-y-1 text-[0.85rem] text-[#ccc]">
                {NAV_SECTIONS.map(({ label, href }) => (
                  <li key={label}><Link href={href} className="hover:text-white transition-colors">{label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-[0.7rem] font-bold uppercase tracking-widest text-[#aaa] mb-3">Intel Sources</div>
              <ul className="space-y-1 text-[0.85rem]">
                {SOURCES.map((s) => (
                  <li key={s}><span className="text-[#555]">{s}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-[#333] pt-4 flex flex-col md:flex-row justify-between items-center text-[0.75rem] text-[#555] gap-2">
          <span>© {new Date().getFullYear()} Leonida Vice — Fan Site. All article content belongs to respective publishers.</span>
          <span>GTA 6 releases <strong className="text-[#C41230]">November 19, 2026</strong> — PS5 & Xbox Series X|S</span>
        </div>
      </div>
    </footer>
  );
}
