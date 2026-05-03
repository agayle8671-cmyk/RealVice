import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

const INVESTIGATIONS = [
  ["2022 Breach", "The teapotuberhacker leak exposed 90 clips and confirmed Lucia, Jason, Vice City, and early RAGE systems."],
  ["Mapping Project", "Coordinate analysis from leaked footage and screenshots is what produced modern Leonida district projections."],
  ["NPC Memory", "Local reputation means crimes in one district can change how civilians and police behave there later."],
  ["Police Rewrite", "Cops no longer spawn nearby; they coordinate ambushes, road blocks, helicopters, and tactical pursuit."],
  ["Security Story", "The game's development philosophy leans toward controlled expansion rather than a rushed all-at-once launch."],
];

export default function Investigations() {
  return (
    <div className="bg-white font-sans text-[#1A1A1A]">
      <NavBar />
      <main className="max-w-screen-xl mx-auto px-4 py-10">
        <div className="border-b-[3px] border-[#1A1A1A] pb-6 mb-10">
          <div className="text-[#C41230] text-[0.7rem] font-bold uppercase tracking-widest mb-2">Investigations</div>
          <h1 className="font-playfair font-black text-[3rem] leading-none mb-3">Deep Dives</h1>
          <p className="text-[1.1rem] text-[#444] max-w-3xl leading-relaxed">
            This section collects the most important technical and narrative evidence around GTA VI: leaks, map analysis, AI behavior, and Rockstar's design direction.
          </p>
        </div>
        <div className="space-y-4">
          {INVESTIGATIONS.map(([title, body]) => (
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
