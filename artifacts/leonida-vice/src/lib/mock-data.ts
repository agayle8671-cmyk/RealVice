export const COUNTIES = [
  { name: "Vice-Dale County", areas: "Vice City, Vice Beach", profile: "Tourism, luxury retail, ports", risk: "LOW", roi: "HIGH", coords: { x: 80, y: 70 } },
  { name: "Mariana County", areas: "Key Lento, Watson Bay", profile: "Nautical recreation, smuggling", risk: "MEDIUM", roi: "VERY HIGH", coords: { x: 70, y: 90 } },
  { name: "Kelly County", areas: "Kelly City", profile: "Prison infrastructure, medical", risk: "LOW", roi: "MEDIUM", coords: { x: 50, y: 50 } },
  { name: "Ambrosia County", areas: "Ambrosia", profile: "Industrial agriculture, Allied Crystal sugar refinery", risk: "MEDIUM", roi: "HIGH", coords: { x: 30, y: 40 } },
  { name: "Leonard County", areas: "Port Gellhorn", profile: "Grit economy, budget motels, Forgotten Coastline", risk: "HIGH", roi: "MEDIUM", coords: { x: 20, y: 60 } },
];

const generateStocks = (symbols: string[]) => {
  return symbols.map(sym => {
    const price = 10 + Math.random() * 500;
    const change = (Math.random() * 20) - 10;
    const changePct = (change / price) * 100;
    return {
      ticker: sym,
      company: `${sym} Corp`,
      price: price.toFixed(2),
      change: change.toFixed(2),
      changePct: changePct.toFixed(2),
      volume: Math.floor(Math.random() * 1000000),
      signal: change > 5 ? 'BUY' : change < -5 ? 'SELL' : 'HOLD',
      history: Array.from({ length: 20 }, () => price + (Math.random() * 20 - 10))
    };
  });
};

export const LCN_STOCKS = generateStocks(["AUG", "ECL", "TPI", "FLY", "MTR", "VCI", "ALC", "TRS", "HVY", "CNT", "SHR", "LGN", "PBW", "ZIT", "DVR"]);
export const BAWSAQ_STOCKS = generateStocks(["RSC", "VEH", "GRF", "VAG", "BFK", "BRV", "ANS", "PRG", "INF", "OBC", "KAR", "ETR", "DKT", "ZNO", "ALP"]);

export const VEHICLES = [
  { name: "Grotti Furia", class: "Super", speed: 92, accel: 90, handling: 85, braking: 70, score: 84.25 },
  { name: "Pegassi Tezeract", class: "Super", speed: 95, accel: 88, handling: 82, braking: 65, score: 82.5 },
  { name: "Benefactor Krieger", class: "Super", speed: 93, accel: 94, handling: 88, braking: 75, score: 87.5 },
  { name: "Vapid Dominator GTT", class: "Muscle", speed: 82, accel: 80, handling: 65, braking: 55, score: 70.5 },
  { name: "Karin Sultan RS", class: "Sports", speed: 85, accel: 88, handling: 86, braking: 68, score: 81.75 },
  { name: "Annis ZR380", class: "Sports", speed: 88, accel: 85, handling: 75, braking: 60, score: 77.0 },
  { name: "Declasse Scramjet", class: "Super", speed: 98, accel: 96, handling: 60, braking: 50, score: 76.0 },
  { name: "Invetero Coquette D10", class: "Sports", speed: 90, accel: 85, handling: 80, braking: 65, score: 80.0 },
  { name: "Ocelot Pariah", class: "Sports", speed: 94, accel: 82, handling: 78, braking: 62, score: 79.0 },
  { name: "Brute Insurgent Pick-Up", class: "Off-Road", speed: 65, accel: 50, handling: 55, braking: 45, score: 53.75 },
  { name: "Nagasaki Blazer Aqua", class: "Off-Road", speed: 55, accel: 60, handling: 50, braking: 40, score: 51.25 },
  { name: "Western Daemon", class: "Motorcycle", speed: 70, accel: 65, handling: 60, braking: 45, score: 60.0 },
  { name: "Pegassi Oppressor Mk II", class: "Motorcycle", speed: 95, accel: 98, handling: 90, braking: 80, score: 90.75 },
  { name: "Lampadati Tigon", class: "Super", speed: 91, accel: 89, handling: 86, braking: 72, score: 84.5 },
  { name: "Zentorno", class: "Super", speed: 89, accel: 91, handling: 84, braking: 68, score: 83.0 },
];

export const BUSINESSES = [
  { id: "mc", name: "Motorcycle Club", supplyCost: 75000, cycleHours: 2.5, baseValue: 420000 },
  { id: "bunker", name: "Bunker", supplyCost: 75000, cycleHours: 3.5, baseValue: 525000 },
  { id: "nightclub", name: "Nightclub", supplyCost: 0, cycleHours: 20, baseValue: 1440000 },
  { id: "ceo", name: "CEO Crates", supplyCost: 54000, cycleHours: 2, baseValue: 504000 },
  { id: "autoshop", name: "Auto Shop", supplyCost: 0, cycleHours: 1.5, baseValue: 157000 },
  { id: "acid", name: "Acid Lab", supplyCost: 60000, cycleHours: 4, baseValue: 335000 },
];

export const INTEL_ITEMS = [
  { id: 1, class: "CONFIRMED", source: "LCPD DB", time: "10:42:11", title: "Vice City International Airport confirmed central placement", excerpt: "VCI will act as a major smuggling hub connecting Leonida to South America." },
  { id: 2, class: "UNVERIFIED", source: "DARKWEB", time: "09:15:00", title: "Allied Crystal sugar refinery identified as major revenue source", excerpt: "Front operation for Ambrosia County cartel activities." },
  { id: 3, class: "RUMOR", source: "BAWSAQ", time: "08:30:22", title: "BAWSAQ community sentiment surge in Pegassi stock", excerpt: "New vehicle drop anticipated. Market manipulation suspected." },
  { id: 4, class: "CONFIRMED", source: "FIB", time: "07:11:44", title: "Port Gellhorn lockdown procedures updated", excerpt: "Increased LCPD presence in Leonard County after recent syndicate clashes." },
  { id: 5, class: "UNVERIFIED", source: "STREET", time: "05:22:10", title: "New weapons manufacturer entering LCN", excerpt: "Shrewsbury Arms facing hostile takeover attempt by unknown entity." },
  { id: 6, class: "CONFIRMED", source: "NEWS", time: "04:05:00", title: "Key Lento property values skyrocket", excerpt: "Mariana County real estate purchased entirely in crypto." },
  { id: 7, class: "RUMOR", source: "INSIDER", time: "02:14:33", title: "Nightclub passive income heavily taxed", excerpt: "Leonida IRS implementing new algorithmic audits on cash businesses." },
  { id: 8, class: "CONFIRMED", source: "COMM", time: "01:00:00", title: "Acid Lab supplies intercepted in Kelly City", excerpt: "Prison infrastructure used to launder precursor chemicals." },
];
