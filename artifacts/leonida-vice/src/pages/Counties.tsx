import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Compass } from "lucide-react";

const COUNTIES = [
  {
    name: "Mariana County",
    biome: "Island Chain / Coastal",
    analog: "Monroe County (Florida Keys)",
    color: "#1A3A5C",
    locations: ["Leonida Keys", "Key Lento", "Card Sound Bridge", "Brian's Marina"],
    detail: "The southernmost county of Leonida. Based on Monroe County, Mariana is the gateway to the Keys — a chain of coral-rimmed islands connected by causeways. Brian Heder operates his smuggling network from the marina here. The Card Sound Bridge provides the sole land connection northward.",
  },
  {
    name: "Kelly County",
    biome: "Inland / Rural",
    analog: "Central Florida Highlands",
    color: "#1A4A1A",
    locations: ["Mount Kalaga", "Lake Leonida", "Starlet Motel"],
    detail: "An inland county defined by its elevated terrain. Mount Kalaga is the sole significant peak in the otherwise flat Leonida topography, introducing verticality for traversal and missions. Lake Leonida provides expansive water recreation and potential heist setpieces.",
  },
  {
    name: "Grassrivers",
    biome: "Wetlands / Marshes",
    analog: "The Florida Everglades",
    color: "#2A3A1A",
    locations: ["State Prison Complex", "Airboat Routes", "Wildlife Preserves"],
    detail: "Leonida's Everglades analog. Dense sawgrass marshes, cypress swamps, and labyrinthine waterways make Grassrivers uniquely hostile. Airboats are the primary transport. Native wildlife includes alligators and invasive Burmese pythons. A sprawling state prison complex dominates the interior.",
  },
  {
    name: "Port Gellhorn",
    biome: "Coastal Industrial",
    analog: "Panama City / Sebring",
    color: "#3A2A1A",
    locations: ["PGH Motel", "Don Panoz Gallery of Legends (racing)", "Port Gellhorn Docks"],
    detail: "A significant secondary city based on the industrial coasts of the Florida Panhandle. Port Gellhorn features high-performance racing circuits — referencing the Sebring International Raceway — and a working port for smuggling operations distinct from Port VC.",
  },
  {
    name: "Ambrosia County",
    biome: "Agricultural",
    analog: "Lake Okeechobee / Clewiston area",
    color: "#3A3A1A",
    locations: ["Town of Ambrosia", "Caloosahatchee Canal", "Rural Airstrips"],
    detail: "Florida's sugar country, recreated as the agricultural heartland of Leonida. Sugar farming operations and rural airstrips make Ambrosia a critical corridor for contraband movement. The Caloosahatchee Canal analog provides a navigable waterway connecting interior regions.",
  },
  {
    name: "Mount Kalaga National Park",
    biome: "Wilderness / Verticality",
    analog: "North Florida Wilderness",
    color: "#1A2A3A",
    locations: ["Mount Kalaga Summit", "Dense Forestation", "National Park Trails"],
    detail: "A protected wilderness zone in the northern reaches of Leonida. Introducing the only meaningful elevation change in the state, the park provides dense forestation for off-road exploration and is rumored to contain the game's version of a Mount Chiliad-style mystery.",
  },
];

export default function Counties() {
  return (
    <div className="bg-white font-sans text-[#1A1A1A]">
      <NavBar />

      <main className="max-w-screen-xl mx-auto px-4 py-10">
        {/* Header */}
        <div className="border-b-[3px] border-[#1A1A1A] pb-6 mb-10">
          <div className="text-[#C41230] text-[0.7rem] font-bold uppercase tracking-widest mb-2">State of Leonida</div>
          <h1 className="font-playfair font-black text-[3rem] leading-none mb-3">The Counties of Leonida</h1>
          <p className="text-[1.1rem] text-[#444] max-w-3xl leading-relaxed">
            Beyond Vice City's neon skyline lies an entire state to explore. The State of Leonida is divided into distinct counties — each with its own biome, criminal ecosystem, and mission infrastructure. At 2–2.5× the size of GTA V's map, this is the most expansive Rockstar world ever built.
          </p>
        </div>

        {/* Map overview callout */}
        <div className="bg-[#1A1A1A] text-white p-6 mb-10 flex flex-col md:flex-row items-start gap-6">
          <div className="flex-1">
            <div className="text-[#C41230] text-[0.7rem] font-bold uppercase tracking-widest mb-2">Scale Reference</div>
            <p className="text-[0.9rem] leading-relaxed text-[#CCC]">
              The State of Leonida is projected by the Leonida Mapping Project (v10) to be <strong className="text-white">2 to 2.5 times the size</strong> of Los Santos and Blaine County combined from GTA V. The world uses Ninth-Generation hardware to eliminate draw-distance limitations — players can see Vice City's skyline from the Leonida Keys, and Mount Kalaga from the Grassrivers.
            </p>
          </div>
          <div className="text-center shrink-0">
            <Compass className="w-12 h-12 text-[#C41230] mx-auto mb-2" />
            <div className="text-[0.7rem] uppercase tracking-widest text-[#AAA]">6 Counties</div>
            <div className="font-playfair font-bold text-[1.5rem]">One State</div>
          </div>
        </div>

        {/* Counties grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {COUNTIES.map((c) => (
            <article key={c.name} className="border border-[#E0E0E0] overflow-hidden flex flex-col">
              <div className="px-6 py-4 text-white" style={{ backgroundColor: c.color }}>
                <div className="text-[0.6rem] font-bold uppercase tracking-widest opacity-60 mb-1">{c.biome}</div>
                <h2 className="font-playfair font-bold text-[1.6rem]">{c.name}</h2>
                <div className="text-[0.75rem] opacity-70 mt-0.5">Based on {c.analog}</div>
              </div>
              <div className="p-6 flex-1 flex flex-col gap-4">
                <p className="text-[0.875rem] text-[#444] leading-relaxed">{c.detail}</p>
                <div>
                  <div className="text-[0.7rem] font-bold uppercase tracking-wider text-[#999] mb-2">Confirmed Locations</div>
                  <div className="flex flex-wrap gap-2">
                    {c.locations.map((loc) => (
                      <span key={loc} className="border border-[#E0E0E0] px-2 py-1 text-[0.75rem] text-[#444]">
                        {loc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Wildlife callout */}
        <section className="border border-[#E0E0E0] p-6 bg-[#F7F7F7] mb-6">
          <h2 className="font-playfair font-bold text-[1.3rem] mb-3">Dynamic Weather & Wildlife</h2>
          <p className="text-[0.9rem] text-[#444] leading-relaxed">
            The State of Leonida is governed by a fully dynamic weather system. NPCs intelligently react — seeking shelter during rainstorms, dressing appropriately for Grassrivers humidity, or scattering when a hurricane watch activates along the Keys. Wildlife AI is systemic: alligators in the Grassrivers will attack on proximity, while invasive Burmese pythons create ecological tension in the marshlands. This behavioral realism was specifically cited by Rockstar as a core design pillar — the world must feel independent of the player's presence.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
