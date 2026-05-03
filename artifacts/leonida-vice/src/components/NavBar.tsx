import { Search, CloudSun } from "lucide-react";
import { Link, useLocation } from "wouter";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Vice City", href: "/vice-city" },
  { label: "Counties", href: "/counties" },
  { label: "Characters", href: "/characters" },
  { label: "Vehicles", href: "/vehicles" },
  { label: "Intel", href: "/intel" },
  { label: "Opinion", href: "/" },
  { label: "Investigations", href: "/" },
  { label: "Podcasts", href: "/" },
];

const BREAKING = [
  "GTA VI launches November 19, 2026 on PS5 & Xbox Series X|S",
  "State of Leonida confirmed 2–2.5× larger than GTA V map",
  "Dual protagonists Jason Duval & Lucia Caminos confirmed",
  "Phil Cassidy returns in HD Universe reinterpretation",
  "RAGE engine targeting 30fps with Ray-Traced Global Illumination",
  "Relationship Bar mechanic tracks Jason & Lucia bond in real time",
  "Port Gellhorn confirmed as major secondary city",
  "V-Rock radio station returning from 3D era",
  "Lua Caminos is first non-optional female protagonist in HD Universe",
  "Brian Heder's Marina confirmed as early mission hub in Leonida Keys",
];

export function NavBar() {
  const [location] = useLocation();
  const today = new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" });

  return (
    <header className="w-full flex flex-col font-sans">
      {/* Utility bar */}
      <div className="bg-white border-b border-[#E0E0E0] h-8 flex justify-between items-center px-4 text-[11px] text-[#666666]">
        <div className="flex items-center gap-2">
          <CloudSun className="w-4 h-4" />
          <span className="font-bold tracking-wide">LEONIDA, FL</span>
          <span>{today}</span>
        </div>
        <div className="flex items-center">
          <button className="bg-[#C41230] text-white px-4 h-8 font-bold tracking-widest text-[10px] hover:bg-[#A00E26] transition-colors mr-4" style={{ borderRadius: "2px" }}>
            SUBSCRIBE
          </button>
          <button className="font-bold text-[#1A1A1A] hover:underline mr-4">Sign In</button>
          <Search className="w-4 h-4 text-[#1A1A1A] cursor-pointer" />
        </div>
      </div>

      {/* Masthead */}
      <div className="bg-white py-3 shadow-sm flex items-center justify-between px-4 max-w-screen-xl mx-auto w-full">
        <div className="w-48 text-[11px] text-[#666666]">
          <span className="text-[#C41230] font-bold block mb-1">NOV 19, 2026</span>
          State of Leonida — All Intel. No Spin.
        </div>
        <div className="flex-1 text-center">
          <Link href="/" className="inline-block">
            <h1 className="font-playfair font-black text-3xl md:text-[2.5rem] text-[#1A1A1A] tracking-tight uppercase border-[3px] border-[#1A1A1A] px-6 py-2 leading-none">
              LEONIDA VICE
            </h1>
          </Link>
        </div>
        <div className="w-48 text-right text-[12px] font-bold text-[#1A1A1A]">
          <a href="#" className="hover:underline">Newsletters</a> | <a href="#" className="hover:underline">Today's Edition</a>
        </div>
      </div>

      {/* Primary nav */}
      <div className="w-full bg-white border-b border-[#E0E0E0]">
        <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-center space-x-6 h-10 text-[13px] font-semibold text-[#333333]">
          {NAV_ITEMS.map(({ label, href }) => {
            const active = href === "/" ? location === "/" : location.startsWith(href);
            return (
              <Link
                key={label}
                href={href}
                className={`h-full flex items-center border-b-2 transition-colors hover:text-[#C41230] hover:border-[#C41230] ${
                  active ? "text-[#C41230] border-[#C41230]" : "border-transparent"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Breaking news ticker */}
      <div className="w-full bg-[#F7F7F7] border-b border-[#E0E0E0] overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-4 flex items-center h-8 text-[11px] text-[#666666]">
          <span className="font-bold text-[#C41230] uppercase shrink-0 mr-3">Breaking:</span>
          <div className="overflow-hidden flex-1 relative">
            <div className="animate-marquee flex gap-8 whitespace-nowrap">
              {[...BREAKING, ...BREAKING].map((item, i) => (
                <span key={i} className="inline-flex items-center gap-8">
                  <span className="hover:text-[#C41230] cursor-default">{item}</span>
                  <span className="text-[#CCC]">·</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
