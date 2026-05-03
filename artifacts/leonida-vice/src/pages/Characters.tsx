import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

const PROTAGONISTS = [
  {
    name: "Lucia Caminos",
    role: "Protagonist",
    actor: "Manni L. Perez (reported)",
    color: "#1A2A4A",
    bio: "The first non-optional female protagonist in the HD Universe — a historic first for the franchise. Lucia's backstory begins in Liberty City before a period of incarceration at Leonida Penitentiary, where her father taught her to defend herself. Her motivation is calculated: she wants a better life, earned through precision criminal maneuvers rather than recklessness.",
    abilities: ["High-tech gadgets: Auto Dialer, Tracker Jammer, Immobilizer Bypass", "Hacking-based mission specialization", "Social engineering & situational awareness"],
    tag: "DUAL PROTAGONIST",
  },
  {
    name: "Jason Duval",
    role: "Protagonist",
    actor: "Dylan Rourke (reported)",
    color: "#3A1A1A",
    bio: "An Army veteran who turned to the criminal underworld upon settling in the Leonida Keys. Currently employed by smuggler Brian Heder — performing shakedowns and running contraband through the Keys channels. Jason wants an easy life, but the conspiracy he and Lucia stumble into makes that impossible. His arc is reactive: escalating stakes force him to confront his military past.",
    abilities: ["Dead-Eye-style ability to highlight weak spots and slow time", "Brute-force tactical approach", "Vehicle & watercraft proficiency in the Keys"],
    tag: "DUAL PROTAGONIST",
  },
];

const SUPPORT = [
  {
    name: "Brian Heder",
    role: "Smuggler / Employer",
    actor: "Stephen Root (rumored)",
    detail: "Owner of Brian's Boat Works & Marina in the Leonida Keys. A primary mission giver in the early game. Heder represents the old-guard smuggling networks that predate the state's broader criminal conspiracy — operating boats, stash houses, and shakedown routes through the Keys.",
  },
  {
    name: "Cal Hampton",
    role: "Associate / Conspiracy Theorist",
    actor: "Matty Matheson (rumored)",
    detail: "A paranoid friend of Jason who monitors Coast Guard communications and obsessively researches fringe internet theories. Cal's surveillance hobby becomes an unexpected operational asset once the conspiracy starts to surface. Likely provides exposition on the broader Leonida underworld.",
  },
  {
    name: "Boobie Ike",
    role: "Real Estate / Music Mogul",
    actor: "TBC",
    detail: "Operates the Jack of Hearts strip club and Only Raw Records. Bridges the gap between street crime and corporate money laundering — a Vice City power broker who moves between legitimate business and criminal enterprise without friction. His label, Only Raw Records, is a front for financial operations.",
  },
  {
    name: "Raul Bautista",
    role: "Veteran Bank Robber",
    actor: "TBC",
    detail: "A reckless figure in the Vice City criminal underground, constantly scouting new talent for high-stakes heists. Raul likely acts as a heist mission giver and represents the chaotic, high-risk arm of Vice City's organized crime scene.",
  },
  {
    name: "Dre'Quan Priest",
    role: "Rapper / Business Partner",
    actor: "TBC",
    detail: "An artist signed to Only Raw Records who maintains deep ties to the street-level drug trade. Dre'Quan operates in the intersection between cultural celebrity and criminal enterprise — a portrait of how Vice City's music industry launders both money and reputation.",
  },
  {
    name: "Real Dimez (Bae-Luxe & Roxy)",
    role: "Social Media Influencers",
    actor: "TBC",
    detail: "A rap duo that uses their viral social media presence to perform shakedowns on drug dealers. Their scheme — weaponizing follower counts and public exposure as leverage — is one of the game's sharper satirical notes about influencer culture and online power dynamics.",
  },
  {
    name: "Phil Cassidy",
    role: "Returning Character (HD Reinterpretation)",
    actor: "TBC",
    detail: "An HD Universe reinterpretation of the GTA: Vice City 3D-era character. Critically, in the HD timeline, Phil still has both arms — the moonshine accident that cost him his arm in the 3D era is not canon here. His return suggests a strong connection to Vice City's criminal history.",
  },
  {
    name: "Stefanie",
    role: "Correctional Social Worker",
    actor: "TBC",
    detail: "Assigned to Lucia following her release from Leonida Penitentiary. Stefanie's role likely frames the early narrative — a bureaucratic tether to Lucia's parole conditions that the story must navigate or sever as the conspiracy deepens.",
  },
];

export default function Characters() {
  return (
    <div className="bg-white font-sans text-[#1A1A1A]">
      <NavBar />

      <main className="max-w-screen-xl mx-auto px-4 py-10">
        {/* Header */}
        <div className="border-b-[3px] border-[#1A1A1A] pb-6 mb-10">
          <div className="text-[#C41230] text-[0.7rem] font-bold uppercase tracking-widest mb-2">State of Leonida</div>
          <h1 className="font-playfair font-black text-[3rem] leading-none mb-3">Characters</h1>
          <p className="text-[1.1rem] text-[#444] max-w-3xl leading-relaxed">
            Grand Theft Auto VI centers on a dual-protagonist criminal partnership navigating a state-wide conspiracy. Every character in the Leonida ecosystem exists at the intersection of crime, culture, and survival.
          </p>
        </div>

        {/* Protagonists */}
        <section className="mb-12">
          <h2 className="font-playfair font-bold text-[1.6rem] border-b border-[#E0E0E0] pb-3 mb-6">Dual Protagonists</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROTAGONISTS.map((p) => (
              <article key={p.name} className="border border-[#E0E0E0] flex flex-col">
                <div className="px-6 py-5 text-white" style={{ backgroundColor: p.color }}>
                  <div className="text-[0.6rem] font-bold uppercase tracking-[0.15em] opacity-60 mb-2">{p.tag}</div>
                  <h2 className="font-playfair font-bold text-[2rem] leading-tight">{p.name}</h2>
                  <div className="text-[0.8rem] opacity-70 mt-1">{p.role}</div>
                  {p.actor && (
                    <div className="text-[0.75rem] opacity-50 mt-0.5">Voice: {p.actor}</div>
                  )}
                </div>
                <div className="p-6 flex-1 flex flex-col gap-5">
                  <p className="text-[0.9rem] text-[#444] leading-relaxed">{p.bio}</p>
                  <div>
                    <div className="text-[0.7rem] font-bold uppercase tracking-wider text-[#999] mb-2">Special Abilities</div>
                    <ul className="space-y-1">
                      {p.abilities.map((a) => (
                        <li key={a} className="flex items-start gap-2 text-[0.85rem] text-[#444]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C41230] mt-1.5 shrink-0" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Relationship bar callout */}
        <div className="bg-[#F7F7F7] border border-[#E0E0E0] p-6 mb-12">
          <h3 className="font-bold text-[1rem] uppercase tracking-wide mb-2">The Relationship Bar</h3>
          <p className="text-[0.9rem] text-[#444] leading-relaxed max-w-3xl">
            Similar to the Honor system in Red Dead Redemption 2, GTA VI tracks trust and intimacy between Jason and Lucia via a <strong>Relationship Bar</strong>. Player choices affect this meter — influencing gameplay directly. High relationship trust unlocks item sharing, coordinated robbery commands, and "Dual Protagonist" mode sequences where both characters operate simultaneously. Low trust creates friction, reducing cooperation options and altering story outcomes.
          </p>
        </div>

        {/* Supporting cast */}
        <section className="mb-6">
          <h2 className="font-playfair font-bold text-[1.6rem] border-b border-[#E0E0E0] pb-3 mb-6">Supporting Cast</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SUPPORT.map((c) => (
              <article key={c.name} className="border-b border-[#E0E0E0] pb-6">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-playfair font-bold text-[1.1rem]">{c.name}</h3>
                    <div className="text-[#C41230] text-[0.7rem] font-bold uppercase tracking-wider">{c.role}</div>
                  </div>
                  {c.actor !== "TBC" && (
                    <div className="text-[0.7rem] text-[#999] text-right max-w-[140px]">Voice: {c.actor}</div>
                  )}
                </div>
                <p className="text-[0.875rem] text-[#444] leading-relaxed">{c.detail}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
