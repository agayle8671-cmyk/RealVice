import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

const EPISODES = [
  ["Episode 1", "The State of Leonida — why the map is bigger, denser, and more systemic than GTA V."],
  ["Episode 2", "Jason and Lucia — how the dual-protagonist structure changes mission design."],
  ["Episode 3", "Vice City districts — Little Cuba, Tequesta, Vice Beach, Port VC, and more."],
  ["Episode 4", "RAGE engine deep dive — RTGI, hair physics, and 30fps expectations."],
  ["Episode 5", "The 2022 breach and what it told us about Rockstar's next-gen pipeline."],
];

export default function Podcasts() {
  return (
    <div className="bg-white font-sans text-[#1A1A1A]">
      <NavBar />
      <main className="max-w-screen-xl mx-auto px-4 py-10">
        <div className="border-b-[3px] border-[#1A1A1A] pb-6 mb-10">
          <div className="text-[#C41230] text-[0.7rem] font-bold uppercase tracking-widest mb-2">Podcasts</div>
          <h1 className="font-playfair font-black text-[3rem] leading-none mb-3">Leonida Audio Desk</h1>
          <p className="text-[1.1rem] text-[#444] max-w-3xl leading-relaxed">
            A mock editorial podcast grid for GTA VI analysis, map breakdowns, and narrative speculation.
          </p>
        </div>
        <div className="space-y-4">
          {EPISODES.map(([title, body]) => (
            <article key={title} className="border border-[#E0E0E0] p-5">
              <h2 className="font-playfair font-bold text-[1.2rem] mb-2">{title}</h2>
              <p className="text-[0.9rem] text-[#444] leading-relaxed">{body}</p>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
