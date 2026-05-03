import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { ChevronLeft, ChevronRight, Filter, Search } from "lucide-react";

const VEHICLES = [
  {
    category: "Muscle / Sports",
    color: "#3A1A1A",
    models: [
      { name: "Phoenix", note: "Classic pony car — updated with RT reflections and interior detailing" },
      { name: "Banshee", note: "Dodge Viper analog — returns as a high-performance sports car" },
      { name: "Comet Retro", note: "Porsche 911 classic analog — collector's edition variant" },
      { name: "Buffalo STX", note: "Dodge Challenger modern — street muscle with customization depth" },
      { name: "Cheetah", note: "Ferrari analog — supercar class with confirmed RT body reflections" },
    ],
  },
  {
    category: "Off-Road / Pickup",
    color: "#2A3A1A",
    models: [
      { name: "Caracara 4x4", note: "Ford F-150 Raptor analog — essential for Grassrivers navigation" },
      { name: "Sandking", note: "Ford F-Series super-duty — rugged desert and marsh runner" },
      { name: "Bobcat", note: "Classic GTA pickup truck — utility workhorse across all counties" },
      { name: "Hellion", note: "Jeep Gladiator analog — confirmed for off-road traversal missions" },
    ],
  },
  {
    category: "Watercraft",
    color: "#1A2A3A",
    models: [
      { name: "Airboat", note: "Critical for Grassrivers navigation — flat-bottom swamp runner" },
      { name: "Sea Shark", note: "Jet ski class — high-speed personal watercraft for Keys missions" },
      { name: "Predator", note: "Police-grade patrol boat — also available to the player" },
      { name: "Marquis", note: "Luxury sailboat — likely tied to yacht-based heist missions" },
      { name: "Seashark", note: "Consumer jet ski variant — common on Vice Beach shoreline" },
    ],
  },
  {
    category: "SUVs",
    color: "#1A1A3A",
    models: [
      { name: "Landstalker XL", note: "Rolls-Royce Cullinan analog — luxury off-road" },
      { name: "Jubilee", note: "Range Rover Sport analog — confirmed in trailer footage" },
      { name: "Granger", note: "Chevrolet Suburban analog — law enforcement & civilian versions" },
      { name: "Baller", note: "Mercedes G-Class analog — street credibility staple" },
      { name: "Rebla GTS", note: "BMW X5 M analog — sports luxury SUV" },
    ],
  },
  {
    category: "Compact / Economy",
    color: "#2A2A1A",
    models: [
      { name: "Futo", note: "Toyota Corolla / AE86 analog — drift-capable compact" },
      { name: "Blista Compact", note: "Honda CRX analog — returning fan favourite" },
      { name: "Dilettante", note: "Toyota Prius analog — hybrid economy car with hidden performance potential" },
      { name: "Panto", note: "Smart ForTwo analog — smallest car in the game" },
    ],
  },
  {
    category: "Emergency / Utility",
    color: "#1A2A2A",
    models: [
      { name: "Vapid Police Cruiser", note: "Ford Crown Victoria analog — standard cop car with realistic sirens" },
      { name: "Buffalo Interceptor", note: "Dodge Charger Police Package — high-speed pursuit unit" },
      { name: "Dashound Bus", note: "Greyhound Bus analog — long-haul passenger transport" },
      { name: "Boxville", note: "Delivery van — mission utility vehicle across all counties" },
    ],
  },
];

const WEAPONS = [
  { category: "Handguns", items: ["Glock 19 (Pistol)", "Polymer Pistol", "Beretta Px4 Storm (Combat Pistol)"] },
  { category: "SMGs / Shotguns", items: ["Micro SMG", "Compact SMG", "Pump Action Shotgun"] },
  { category: "Rifles / LMGs", items: ["M4 (Assault Rifle)", "AK-47", "Heavy Machine Gun"] },
  { category: "Melee", items: ["Knife", "Baseball Bat", "Pool Cue", "Crowbar"] },
  { category: "Equipment", items: ["Trauma Kit", "Auto Dialer", "Tracker Jammer", "Immobilizer Bypass", "Slim Jim", "Lockpick"] },
  { category: "Consumables", items: ["Painkillers", "Soda", "Food", "Fruit", "Wine", "Cigarettes"] },
];

const FILTERS = ["All", "Sports", "SUVs", "Off-Road", "Watercraft", "Utility", "Emergency"];

export default function Vehicles() {
  return (
    <div className="bg-white font-sans text-[#1A1A1A]">
      <NavBar />

      <main className="max-w-screen-xl mx-auto px-4 py-10">
        <div className="border-b-[3px] border-[#1A1A1A] pb-6 mb-8">
          <div className="text-[#C41230] text-[0.7rem] font-bold uppercase tracking-widest mb-2">State of Leonida</div>
          <h1 className="font-playfair font-black text-[3rem] leading-none mb-3">Vehicles & Arsenal</h1>
          <p className="text-[1.1rem] text-[#444] max-w-3xl leading-relaxed">
            A GTACars-style catalog of confirmed Leonida transport, performance, and weapon data — optimized for quick browsing.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <aside className="w-full lg:w-[260px] shrink-0 sticky top-4">
            <div className="border border-[#E0E0E0] bg-[#F7F7F7] p-4 mb-4">
              <div className="flex items-center gap-2 mb-3 text-[#1A1A1A] font-bold uppercase text-[0.75rem] tracking-widest">
                <Filter className="w-4 h-4" /> Filters
              </div>
              <div className="space-y-2">
                {FILTERS.map((f, i) => (
                  <button
                    key={f}
                    className={`w-full text-left px-3 py-2 text-[0.85rem] border transition-colors ${i === 0 ? "bg-[#C41230] text-white border-[#C41230]" : "bg-white text-[#444] border-[#E0E0E0] hover:border-[#C41230] hover:text-[#C41230]"}`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            <div className="border border-[#E0E0E0] p-4">
              <div className="flex items-center gap-2 mb-3 text-[#1A1A1A] font-bold uppercase text-[0.75rem] tracking-widest">
                <Search className="w-4 h-4" /> Search
              </div>
              <div className="bg-white border border-[#E0E0E0] px-3 py-2 text-[0.85rem] text-[#999]">
                Search vehicle name...
              </div>
            </div>
          </aside>

          <div className="flex-1 min-w-0">
            <section className="border border-[#E0E0E0] mb-8">
              <div className="grid grid-cols-1 xl:grid-cols-[1.35fr_1fr]">
                <div className="relative bg-[#0E1B28] text-white min-h-[360px] flex items-end">
                  <img
                    src="https://preview.redd.it/etq2a4l8etyg1.jpeg?width=640&crop=smart&auto=webp&s=9eaca6d4cfb2c30f5c42d63f3f927fc197f28f47"
                    alt="Featured vehicle"
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="relative p-6 max-w-xl">
                    <div className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white/70 mb-2">Featured</div>
                    <h2 className="font-playfair font-black text-[2.4rem] leading-tight mb-2">Jason&apos;s house cruiser</h2>
                    <p className="text-[0.9rem] text-white/80 leading-relaxed">
                      GTACars-style hero card: large image, quick facts, and a clean catalog feel with the article title overlaid.
                    </p>
                    <div className="mt-4 flex items-center gap-3 text-[0.75rem] uppercase tracking-widest">
                      <span className="bg-[#C41230] px-3 py-1">Vice City</span>
                      <span className="bg-white/15 px-3 py-1">Confirmed</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-[#C41230] text-[0.7rem] font-bold uppercase tracking-widest mb-1">Catalog</div>
                      <h3 className="font-playfair font-bold text-[1.4rem]">Leonida Vehicle Index</h3>
                    </div>
                    <div className="flex gap-2 text-[#666]">
                      <button className="border border-[#E0E0E0] p-2 hover:border-[#C41230] hover:text-[#C41230]"><ChevronLeft className="w-4 h-4" /></button>
                      <button className="border border-[#E0E0E0] p-2 hover:border-[#C41230] hover:text-[#C41230]"><ChevronRight className="w-4 h-4" /></button>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {VEHICLES.slice(0, 4).map((cat) => (
                      <div key={cat.category} className="border border-[#E0E0E0] p-3 hover:border-[#C41230] transition-colors">
                        <div className="text-[0.65rem] uppercase tracking-widest text-[#999] mb-1">{cat.category}</div>
                        <div className="font-bold text-[0.95rem] mb-1">{cat.models[0].name}</div>
                        <div className="text-[0.8rem] text-[#666] leading-relaxed">{cat.models[0].note}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <div className="flex items-center justify-between border-b border-[#E0E0E0] pb-2 mb-5">
                <h2 className="font-playfair font-bold text-[1.6rem]">Vehicle Catalog</h2>
                <div className="text-[0.75rem] text-[#999] uppercase tracking-widest">Browse by category</div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {VEHICLES.map((cat) => (
                  <article key={cat.category} className="border border-[#E0E0E0] bg-white overflow-hidden">
                    <div className="px-4 py-3 text-white font-bold text-[0.9rem] uppercase tracking-wide" style={{ backgroundColor: cat.color }}>
                      {cat.category}
                    </div>
                    <div className="divide-y divide-[#E0E0E0]">
                      {cat.models.map((v, idx) => (
                        <div key={v.name} className="px-4 py-3 grid grid-cols-[1fr_auto] gap-4 items-start hover:bg-[#FAFAFA]">
                          <div>
                            <div className="font-bold text-[0.92rem] text-[#1A1A1A]">{v.name}</div>
                            <div className="text-[0.78rem] text-[#666] leading-relaxed mt-1">{v.note}</div>
                          </div>
                          <div className="text-[0.65rem] uppercase tracking-widest text-[#999] pt-1">#{idx + 1}</div>
                        </div>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="mb-10">
              <div className="flex items-center justify-between border-b border-[#E0E0E0] pb-2 mb-5">
                <h2 className="font-playfair font-bold text-[1.6rem]">Confirmed Arsenal</h2>
                <div className="text-[0.75rem] text-[#999] uppercase tracking-widest">Loadout</div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {WEAPONS.map((w) => (
                  <div key={w.category} className="border border-[#E0E0E0] p-4 bg-white">
                    <div className="text-[#C41230] text-[0.7rem] font-bold uppercase tracking-wider mb-3">{w.category}</div>
                    <ul className="space-y-1">
                      {w.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-[0.875rem] text-[#444]">
                          <span className="w-1.5 h-1.5 bg-[#1A1A1A] rounded-full shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
