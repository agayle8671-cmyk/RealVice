import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

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
  {
    category: "Handguns",
    items: ["Glock 19 (Pistol)", "Polymer Pistol", "Beretta Px4 Storm (Combat Pistol)"],
  },
  {
    category: "SMGs / Shotguns",
    items: ["Micro SMG", "Compact SMG", "Pump Action Shotgun"],
  },
  {
    category: "Rifles / LMGs",
    items: ["M4 (Assault Rifle)", "AK-47", "Heavy Machine Gun"],
  },
  {
    category: "Melee",
    items: ["Knife", "Baseball Bat", "Pool Cue", "Crowbar"],
  },
  {
    category: "Equipment",
    items: ["Trauma Kit", "Auto Dialer", "Tracker Jammer", "Immobilizer Bypass", "Slim Jim", "Lockpick"],
  },
  {
    category: "Consumables",
    items: ["Painkillers", "Soda", "Food", "Fruit", "Wine", "Cigarettes"],
  },
];

export default function Vehicles() {
  return (
    <div className="bg-white font-sans text-[#1A1A1A]">
      <NavBar />

      <main className="max-w-screen-xl mx-auto px-4 py-10">
        {/* Header */}
        <div className="border-b-[3px] border-[#1A1A1A] pb-6 mb-10">
          <div className="text-[#C41230] text-[0.7rem] font-bold uppercase tracking-widest mb-2">State of Leonida</div>
          <h1 className="font-playfair font-black text-[3rem] leading-none mb-3">Vehicles & Arsenal</h1>
          <p className="text-[1.1rem] text-[#444] max-w-3xl leading-relaxed">
            GTA VI's vehicle and weapon systems emphasize variety and high-fidelity customization. The roster spans muscle cars to airboats — reflecting the diverse terrain of the State of Leonida. The arsenal has been redesigned for systemic realism, with grounded reload animations and limited carry capacity.
          </p>
        </div>

        {/* Weapon carry callout */}
        <div className="bg-[#1A1A1A] text-white p-6 mb-10">
          <div className="text-[#C41230] text-[0.7rem] font-bold uppercase tracking-widest mb-2">Weapon System Change</div>
          <p className="text-[0.9rem] text-[#CCC] leading-relaxed max-w-3xl">
            GTA VI moves away from carrying an infinite arsenal. Players have <strong className="text-white">primary and secondary handgun slots</strong> and can carry only <strong className="text-white">one large assault weapon</strong> at a time. Additional gear is stowed in the trunk of their personal vehicle. This shift toward tactical realism mirrors Red Dead Redemption 2's approach to loadout management.
          </p>
        </div>

        {/* Vehicles */}
        <section className="mb-12">
          <h2 className="font-playfair font-bold text-[1.8rem] border-b border-[#E0E0E0] pb-3 mb-6">Confirmed Vehicles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {VEHICLES.map((cat) => (
              <div key={cat.category} className="border border-[#E0E0E0] overflow-hidden">
                <div className="px-4 py-3 text-white font-bold text-[0.9rem] uppercase tracking-wide" style={{ backgroundColor: cat.color }}>
                  {cat.category}
                </div>
                <div className="divide-y divide-[#E0E0E0]">
                  {cat.models.map((v) => (
                    <div key={v.name} className="px-4 py-3 flex items-start gap-3">
                      <span className="font-bold text-[0.875rem] shrink-0 w-36 text-[#1A1A1A]">{v.name}</span>
                      <span className="text-[0.8rem] text-[#666]">{v.note}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* "Donked" callout */}
        <div className="bg-[#F7F7F7] border border-[#E0E0E0] p-6 mb-12">
          <h3 className="font-bold text-[1rem] uppercase tracking-wide mb-2">"Donked" Vehicles</h3>
          <p className="text-[0.9rem] text-[#444] leading-relaxed">
            GTA VI introduces <strong>"Donked"</strong> vehicles — custom cars with extremely large wheels — as a direct homage to Florida's specific automotive subculture. This represents one of several regional customization styles confirmed for the game's vehicle modification system.
          </p>
        </div>

        {/* Weapons */}
        <section className="mb-6">
          <h2 className="font-playfair font-bold text-[1.8rem] border-b border-[#E0E0E0] pb-3 mb-6">Confirmed Arsenal</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WEAPONS.map((w) => (
              <div key={w.category} className="border border-[#E0E0E0] p-4">
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
      </main>

      <Footer />
    </div>
  );
}
