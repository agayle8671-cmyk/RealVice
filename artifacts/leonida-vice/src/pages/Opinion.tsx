import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

const TOPICS = [
  ["Narrative Core", "Jason and Lucia's criminal partnership is the emotional engine of the game."],
  ["Relationship Bar", "Trust and intimacy between the protagonists directly affect gameplay, combat, and shared item use."],
  ["Satire", "Leonida is built to mirror 2020s culture: influencer chaos, Florida-Man energy, and social media parody."],
  ["Game Design", "Rockstar is shifting toward systemic realism: limited weapons, adaptive NPC memory, and dynamic robberies."],
  ["Technical Angle", "RTGI, hair physics, and dense crowd simulation make GTA VI a next-gen benchmark."],
];

export default function Opinion() {
  return (
    <div className="bg-white font-sans text-[#1A1A1A]">
      <NavBar />
      <main className="max-w-screen-xl mx-auto px-4 py-10">
        <div className="border-b-[3px] border-[#1A1A1A] pb-6 mb-10">
          <div className="text-[#C41230] text-[0.7rem] font-bold uppercase tracking-widest mb-2">Opinion</div>
          <h1 className="font-playfair font-black text-[3rem] leading-none mb-3">What Leonida Means</h1>
          <p className="text-[1.1rem] text-[#444] max-w-3xl leading-relaxed">
            Opinion on GTA VI isn't about rumors alone — it's about what the confirmed design choices suggest. Here are the big takeaways from the document.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TOPICS.map(([title, body]) => (
            <article key={title} className="border border-[#E0E0E0] p-5">
              <h2 className="font-playfair font-bold text-[1.25rem] mb-2">{title}</h2>
              <p className="text-[0.9rem] text-[#444] leading-relaxed">{body}</p>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
