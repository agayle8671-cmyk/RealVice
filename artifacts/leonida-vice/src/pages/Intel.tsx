import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { useListArticles } from "@workspace/api-client-react";
import type { Article } from "@workspace/api-client-react";
import { timeAgo } from "@/lib/time";

function IntelCard({ article }: { article: Article }) {
  const thumb = article.videoThumbnail ?? article.imageThumbnail;
  return (
    <article className="border-b border-[#E0E0E0] pb-6 flex gap-4">
      {thumb && (
        <a href={article.sourceUrl} target="_blank" rel="noopener noreferrer" className="shrink-0">
          <img
            src={thumb}
            alt={article.title}
            referrerPolicy="no-referrer"
            className="w-24 h-16 object-cover"
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
          />
        </a>
      )}
      <div className="flex-1 min-w-0">
        <div className="text-[#C41230] text-[0.65rem] font-bold uppercase tracking-wider mb-1">{article.category}</div>
        <a href={article.sourceUrl} target="_blank" rel="noopener noreferrer">
          <h3 className="font-playfair font-bold text-[1rem] text-[#1A1A1A] leading-snug mb-1 hover:underline">{article.title}</h3>
        </a>
        <div className="text-[#999] text-[0.75rem]">
          {timeAgo(article.publishedAt ?? article.scrapedAt)} · {article.sourceName}
        </div>
      </div>
    </article>
  );
}

const TECH_SPECS = [
  { label: "Target Frame Rate", value: "30 FPS", detail: "60fps unlikely at launch due to NPC AI CPU overhead" },
  { label: "Native Resolution", value: "~1440p", detail: "2560×1152 — 20:9 cinematic aspect ratio with letterboxing" },
  { label: "Output Resolution", value: "4K", detail: "FSR-like image reconstruction upscaling from 1440p" },
  { label: "Ray Tracing", value: "RTGI + Reflections", detail: "Real-Time Global Illumination fundamental to the lighting system" },
  { label: "Shadows", value: "Rasterized", detail: "High-res shadow maps preserve GPU headroom for RTGI" },
  { label: "Hair Physics", value: "Strand System", detail: "Individual hair strands react to physics, wind, and water" },
  { label: "Capture Hardware", value: "Base PS5", detail: "All trailer footage confirmed captured in-engine on base PS5" },
  { label: "Platform", value: "PS5 / Xbox Series X|S", detail: "PC release timeline not yet confirmed" },
];

const ROBBERY_MECHANICS = [
  { mechanic: "CCTV Detection", detail: "Players must identify and disable cameras or wear masks to avoid future recognition by NPCs" },
  { mechanic: "NPC Restraint", detail: "Zip ties and threats. NPCs can be tied up to prevent police calls or used as human shields" },
  { mechanic: "Police Negotiation", detail: "A 'Time Until Cops Dispatched' timer is visible. Surrender is an option in certain robbery scenarios" },
  { mechanic: "Physical Loot Bags", detail: "Duffel bags physically slow the character's movement and can be dropped or shared with your partner" },
];

export default function Intel() {
  const { data, isLoading } = useListArticles({ limit: 30, offset: 0 });
  const articles = data?.articles ?? [];

  return (
    <div className="bg-white font-sans text-[#1A1A1A]">
      <NavBar />

      <main className="max-w-screen-xl mx-auto px-4 py-10">
        {/* Header */}
        <div className="border-b-[3px] border-[#1A1A1A] pb-6 mb-10">
          <div className="text-[#C41230] text-[0.7rem] font-bold uppercase tracking-widest mb-2">State of Leonida</div>
          <h1 className="font-playfair font-black text-[3rem] leading-none mb-3">Intel</h1>
          <p className="text-[1.1rem] text-[#444] max-w-3xl leading-relaxed">
            Deep technical analysis, confirmed gameplay mechanics, the September 2022 breach, and live scraped news. Everything known about Grand Theft Auto VI — synthesized in one place.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Main column */}
          <div className="w-full lg:w-[65%]">

            {/* Tech specs */}
            <section className="mb-10">
              <h2 className="font-playfair font-bold text-[1.5rem] border-b border-[#E0E0E0] pb-3 mb-5">
                RAGE Engine — Technical Specifications
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {TECH_SPECS.map((s) => (
                  <div key={s.label} className="border border-[#E0E0E0] p-4">
                    <div className="text-[0.65rem] font-bold uppercase tracking-widest text-[#999] mb-1">{s.label}</div>
                    <div className="font-bold text-[1rem] text-[#1A1A1A] mb-1">{s.value}</div>
                    <div className="text-[0.78rem] text-[#666]">{s.detail}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Robbery mechanics */}
            <section className="mb-10">
              <h2 className="font-playfair font-bold text-[1.5rem] border-b border-[#E0E0E0] pb-3 mb-5">
                Robbery & Law Enforcement Systems
              </h2>
              <p className="text-[0.9rem] text-[#444] mb-5 leading-relaxed">
                Robberies in GTA VI are systemic events, not scripted missions. The police have been completely rewritten — no longer spawning on top of the player, but coordinating road blocks, ambushes, helicopter pursuit, and tactical teams across the Grassrivers and rural highways.
              </p>
              <div className="space-y-4">
                {ROBBERY_MECHANICS.map((r) => (
                  <div key={r.mechanic} className="flex gap-4 border-b border-[#E0E0E0] pb-4">
                    <div className="font-bold text-[0.85rem] w-44 shrink-0 text-[#C41230] uppercase tracking-wide pt-0.5">{r.mechanic}</div>
                    <div className="text-[0.875rem] text-[#444]">{r.detail}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* NPC reputation */}
            <section className="mb-10 bg-[#F7F7F7] border border-[#E0E0E0] p-6">
              <h2 className="font-playfair font-bold text-[1.3rem] mb-3">NPC Memory & Local Reputation</h2>
              <p className="text-[0.9rem] text-[#444] leading-relaxed mb-3">
                NPCs in GTA VI carry a <strong>"Local Reputation" layer</strong>. Repeat crimes in a specific district cause local NPCs to begin recognizing the player — pedestrians avoid you, shop owners close early, police response intensifies. This is not reflected in a UI meter. It must be inferred through observed behaviour, including witnesses calling the police simply upon seeing the player's face.
              </p>
              <p className="text-[0.9rem] text-[#444] leading-relaxed">
                The "Revolutionary Crowd AI" governs public spaces — NPCs engage in complex daily routines, attend street protests, and react to hazards with realistic scatter patterns. Traffic AI reroutes around accidents and makes split-second evasive maneuvers in response to the player.
              </p>
            </section>

            {/* September 2022 breach */}
            <section className="mb-10">
              <h2 className="font-playfair font-bold text-[1.5rem] border-b border-[#E0E0E0] pb-3 mb-5">
                The September 2022 Breach
              </h2>
              <p className="text-[0.9rem] text-[#444] leading-relaxed mb-4">
                On <strong>September 18, 2022</strong>, an individual known as <em>"teapotuberhacker"</em> published 90 video clips totalling 50 minutes of internal test footage — the largest security breach in gaming history. The footage, compromised through Rockstar's internal Slack groups, revealed:
              </p>
              <ul className="space-y-2 mb-4">
                {["The Vice City setting and HD universe redesign", "Both protagonists: Jason Duval and Lucia Caminos", "Early RAGE engine builds, NPC behavior systems, and in-progress mission scripting", "Coordinate data later used by the Leonida Mapping Project to reconstruct the full state map"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[0.875rem] text-[#444]">
                    <span className="w-1.5 h-1.5 bg-[#C41230] rounded-full mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-[0.9rem] text-[#444] leading-relaxed">
                Rockstar confirmed the footage was genuine and work-in-progress, stating it would not impact long-term development. The accused hacker was subsequently arrested and linked to the Lapsus$ group responsible for breaches at Microsoft, Samsung, and Nvidia.
              </p>
            </section>

            {/* Release strategy */}
            <section className="mb-10 border border-[#E0E0E0] p-6">
              <h2 className="font-playfair font-bold text-[1.3rem] mb-4">Release Strategy & Financial Projections</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mb-4">
                {[
                  { label: "Release Date", value: "Nov 19, 2026", sub: "PS5 & Xbox Series X|S" },
                  { label: "Projected First-Year Revenue", value: "$3 Billion", sub: "Industry analyst consensus" },
                  { label: "First-Year Unit Sales", value: "40M Units", sub: "Conservative projection" },
                ].map((s) => (
                  <div key={s.label} className="border border-[#E0E0E0] p-4">
                    <div className="text-[0.65rem] font-bold uppercase tracking-widest text-[#999] mb-1">{s.label}</div>
                    <div className="font-playfair font-bold text-[1.4rem] text-[#C41230]">{s.value}</div>
                    <div className="text-[0.75rem] text-[#666]">{s.sub}</div>
                  </div>
                ))}
              </div>
              <p className="text-[0.875rem] text-[#666] leading-relaxed">
                Reporter Jason Schreier has described the launch as "a moderately sized release" that will expand over time through episodic updates — a development philosophy designed to avoid the crunch that characterized Red Dead Redemption 2's production.
              </p>
            </section>
          </div>

          {/* Live feed sidebar */}
          <aside className="w-full lg:w-[35%] shrink-0">
            <div className="border-b-2 border-[#1A1A1A] pb-2 mb-5">
              <h2 className="font-bold text-[1.1rem] uppercase tracking-wide">Live Intel Feed</h2>
            </div>
            <div className="space-y-5">
              {isLoading
                ? [0,1,2,3,4,5].map((i) => (
                  <div key={i} className="animate-pulse border-b border-[#E0E0E0] pb-5">
                    <div className="h-2 w-16 bg-[#E0E0E0] rounded mb-2" />
                    <div className="h-4 bg-[#E0E0E0] rounded mb-1" />
                    <div className="h-4 bg-[#E0E0E0] rounded w-4/5" />
                  </div>
                ))
                : articles.map((a) => <IntelCard key={a.id} article={a} />)}
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}
