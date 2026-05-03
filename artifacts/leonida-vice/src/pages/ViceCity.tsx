import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { MapPin } from "lucide-react";

const DISTRICTS = [
  {
    name: "Vice Beach",
    analog: "Miami Beach / South Beach",
    profile: "High-density pedestrian zones, luxury hotels including the Tropics Hotel at 1550 Collins Ave, and a highly detailed shoreline with dynamic sand and water interactions.",
    vibe: "Luxury",
  },
  {
    name: "Little Cuba",
    analog: "Little Havana",
    profile: "A culturally dense enclave featuring landmarks like José Martí Park and West Flagler St analogs, serving as a hub for local criminal networks.",
    vibe: "Cultural",
  },
  {
    name: "Tequesta",
    analog: "Brickell / Financial District",
    profile: "The vertical heart of Vice City, containing the highest concentration of enterable skyscrapers and the Tequesta Station transit hub.",
    vibe: "Corporate",
  },
  {
    name: "Stockyard",
    analog: "Industrial West Miami",
    profile: "A heavy industrial and commercial zone containing liquor stores, transit junctions, and dense residential markers.",
    vibe: "Industrial",
  },
  {
    name: "North Vice City",
    analog: "North Miami / Aventura",
    profile: "A transition zone between the city core and the northern counties, featuring expansive shopping malls and residential sprawls.",
    vibe: "Suburban",
  },
  {
    name: "Port VC",
    analog: "Port Miami",
    profile: "A critical infrastructure hub featuring Cruise Terminal D and massive shipping container facilities — a key smuggling corridor.",
    vibe: "Industrial",
  },
];

const VIBE_COLORS: Record<string, string> = {
  Luxury: "bg-[#1A3A5C] text-white",
  Cultural: "bg-[#5C1A1A] text-white",
  Corporate: "bg-[#1A1A3A] text-white",
  Industrial: "bg-[#2A2A2A] text-white",
  Suburban: "bg-[#1A3A1A] text-white",
};

export default function ViceCity() {
  return (
    <div className="bg-white font-sans text-[#1A1A1A]">
      <NavBar />

      <main className="max-w-screen-xl mx-auto px-4 py-10">
        {/* Hero banner */}
        <div className="border-b-[3px] border-[#1A1A1A] pb-6 mb-10">
          <div className="text-[#C41230] text-[0.7rem] font-bold uppercase tracking-widest mb-2">State of Leonida</div>
          <h1 className="font-playfair font-black text-[3rem] leading-none mb-3">Vice City</h1>
          <p className="text-[1.1rem] text-[#444] max-w-3xl leading-relaxed">
            The neon-saturated metropolitan heart of the State of Leonida. A modern-day analog to Miami, Vice City returns in Grand Theft Auto VI as a fully realized HD-universe metropolis — rebuilt from the ground up on Ninth-Generation hardware.
          </p>
        </div>

        {/* Districts */}
        <section className="mb-12">
          <h2 className="font-playfair font-bold text-[1.8rem] border-b border-[#E0E0E0] pb-3 mb-6 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-[#C41230]" /> City Districts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DISTRICTS.map((d) => (
              <div key={d.name} className="border border-[#E0E0E0] flex flex-col">
                <div className={`px-4 py-3 ${VIBE_COLORS[d.vibe] ?? "bg-[#1A1A1A] text-white"}`}>
                  <div className="text-[0.6rem] font-bold uppercase tracking-widest opacity-60 mb-1">{d.vibe}</div>
                  <div className="font-playfair font-bold text-[1.3rem]">{d.name}</div>
                  <div className="text-[0.75rem] opacity-70 mt-0.5">Based on {d.analog}</div>
                </div>
                <div className="p-4 flex-1">
                  <p className="text-[0.875rem] text-[#444] leading-relaxed">{d.profile}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Key facts */}
        <section className="mb-12 bg-[#F7F7F7] border border-[#E0E0E0] p-6">
          <h2 className="font-playfair font-bold text-[1.4rem] mb-4">Vice City — Key Facts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[0.875rem]">
            <div>
              <div className="text-[#C41230] font-bold uppercase text-[0.7rem] tracking-wider mb-2">Setting</div>
              <p className="text-[#444] leading-relaxed">Modern-day 2020s Miami. Unlike the PS2-era 3D universe, this rendition captures socioeconomic extremes of contemporary America — from beachfront luxury towers to industrial corridor poverty.</p>
            </div>
            <div>
              <div className="text-[#C41230] font-bold uppercase text-[0.7rem] tracking-wider mb-2">Scale</div>
              <p className="text-[#444] leading-relaxed">Vice City is one component of the wider State of Leonida — itself projected at 2–2.5× the size of GTA V's Los Santos. The metro area alone rivals full maps of previous GTA entries.</p>
            </div>
            <div>
              <div className="text-[#C41230] font-bold uppercase text-[0.7rem] tracking-wider mb-2">Technology</div>
              <p className="text-[#444] leading-relaxed">Built on RAGE Ninth-Gen, Vice City features Ray-Traced Global Illumination, "unholy draw distances," and a crowd simulation where NPCs respond realistically to gunfire, weather, and player reputation.</p>
            </div>
          </div>
        </section>

        {/* In-game satirical apps */}
        <section className="mb-12">
          <h2 className="font-playfair font-bold text-[1.8rem] border-b border-[#E0E0E0] pb-3 mb-6">In-Game Apps & Parody Services</h2>
          <p className="text-[0.9rem] text-[#666] mb-6">Vice City's digital infrastructure satirizes 2020s app culture, with each parody service reflecting the chaos of the Leonida lifestyle.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-[0.875rem] border-collapse">
              <thead>
                <tr className="bg-[#1A1A1A] text-white">
                  <th className="text-left px-4 py-3 font-bold">App / Service</th>
                  <th className="text-left px-4 py-3 font-bold">Real-World Equivalent</th>
                  <th className="text-left px-4 py-3 font-bold">In-Game Function</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["What-Up", "WhatsApp", "Primary communication app for missions and contact interaction"],
                  ["RydeMe", "Uber / Lyft", "Transportation service to navigate the state without a vehicle"],
                  ["BuckMe", "CashApp / PayPal", "Digital payments for money laundering and inter-character transfers"],
                  ["LeonidaGov.org", "State Government Portal", "Functional in-game site with lore on regions, laws, and services"],
                  ["BrianAndBradley", "Morgan & Morgan", "Parody of Florida personal injury law firms — billboards across Vice City"],
                  ["Hookers-Galore", "Fishing / Adult Sites", "A double-entendre parody likely covering both fishing supply and adult content"],
                ].map(([app, equiv, fn]) => (
                  <tr key={app} className="border-b border-[#E0E0E0] hover:bg-[#FAFAFA]">
                    <td className="px-4 py-3 font-bold text-[#C41230]">{app}</td>
                    <td className="px-4 py-3 text-[#666]">{equiv}</td>
                    <td className="px-4 py-3 text-[#444]">{fn}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Radio */}
        <section className="mb-6">
          <h2 className="font-playfair font-bold text-[1.8rem] border-b border-[#E0E0E0] pb-3 mb-6">Radio & Soundtrack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-[1rem] mb-3 uppercase tracking-wide text-[#1A1A1A]">Confirmed Tracks</h3>
              <ul className="space-y-2 text-[0.875rem] text-[#444]">
                {[
                  ["Love Is a Long Road", "Tom Petty"],
                  ["Hot Together", "The Pointer Sisters"],
                  ["Everybody Have Fun Tonight", "Wang Chung"],
                ].map(([song, artist]) => (
                  <li key={song} className="flex items-center gap-3 border-b border-[#E0E0E0] pb-2">
                    <span className="w-2 h-2 rounded-full bg-[#C41230] shrink-0" />
                    <span><span className="font-bold">"{song}"</span> — {artist}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-[1rem] mb-3 uppercase tracking-wide text-[#1A1A1A]">Confirmed Stations</h3>
              <ul className="space-y-2 text-[0.875rem] text-[#444]">
                {[
                  ["V-Rock", "Returning iconic rock station from GTA: Vice City (3D era)"],
                  ["Southern Hip Hop", "Speculated based on Florida's hip hop scene"],
                  ["Latin Pop", "Reflecting Vice City's Cuban & Latin cultural identity"],
                  ["Death Metal", "Florida is a global hub for the genre"],
                ].map(([station, note]) => (
                  <li key={station} className="flex gap-3 border-b border-[#E0E0E0] pb-2">
                    <span className="w-2 h-2 rounded-full bg-[#1A1A1A] shrink-0 mt-1.5" />
                    <span><span className="font-bold">{station}</span> — <span className="text-[#666]">{note}</span></span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
