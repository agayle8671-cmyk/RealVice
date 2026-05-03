import { NavBar } from "@/components/NavBar";
import { LeftSidebar } from "@/components/LeftSidebar";
import { RightSidebar } from "@/components/RightSidebar";
import { Stories } from "@/components/Stories";
import { CreatePost } from "@/components/CreatePost";
import { PostCard } from "@/components/PostCard";

const POSTS = [
  {
    id: 1,
    author: "Vice City Reporter",
    time: "2h",
    badge: "CONFIRMED",
    text: "BREAKING: Vice City International Airport (VCI) has been confirmed at a central map location, making it a prime hub for aviation-based businesses in GTA VI. Early beta testers report dramatically improved logistics efficiency compared to LSIA in Los Santos. Expect Fly US (FLY) stock to surge. #LeonidaVice #GTA6",
    likes: "4.2K",
    comments: "312",
    shares: "891"
  },
  {
    id: 2,
    author: "Mariana County Intel",
    time: "5h",
    badge: "UNVERIFIED",
    text: "Sources inside the Leonida development community suggest Mariana County — encompassing Key Lento and Watson Bay — will feature the most lucrative smuggling routes of any region. Nautical transport missions with up to 40% higher payout than comparable GTA V operations. Residential proxies will be essential for monitoring the BAWSAQ community volatility in this area. ROI rating: VERY HIGH. Risk: MEDIUM.",
    likes: "2.8K",
    comments: "198",
    shares: "445"
  },
  {
    id: 3,
    author: "BAWSAQ Community Desk",
    time: "8h",
    text: "BAWSAQ MARKET ALERT: Pegassi (PRG) stock has surged 12.4% following community reports of a new Oppressor variant spotted in Leonida gameplay footage. Meanwhile, Allied Crystal (ALC) remains one of the most stable long-term holds due to the Ambrosia County sugar refinery's central role in the Leonida macro-economy. LCN INDEX currently trading at 12,450 — BULLISH bias confirmed by our sentiment aggregator. Full analysis on LeonidaVice.com",
    likes: "7.1K",
    comments: "634",
    shares: "1.2K"
  },
  {
    id: 4,
    author: "Leonida Underground",
    time: "12h",
    text: "Full county breakdown for the State of Leonida confirmed via leaked source data: Vice-Dale County (Vice City, Vice Beach) — Tourism, luxury retail, busy international ports. ROI: HIGH, Risk: LOW. Ambrosia County — Allied Crystal industrial sugar refinery, agricultural operations. Leonard County (Port Gellhorn) — Grit economy, budget motels, the 'Forgotten Coastline.' High risk, but hidden opportunities for players who know where to look. Which county are you setting up shop in? Drop a comment.",
    likes: "9.3K",
    comments: "1.1K",
    shares: "2.4K"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5EFE0] text-[#1A1208]">
      <NavBar />
      
      {/* Main Newspaper Layout */}
      <div className="max-w-[1400px] mx-auto flex justify-center pt-6 px-4">
        {/* Left Column */}
        <div className="hidden lg:block w-[300px] shrink-0">
          <div className="sticky top-[10px]">
            <LeftSidebar />
          </div>
        </div>
        
        {/* Center Column - Feed */}
        <div className="w-full max-w-[720px] shrink-0 px-0 md:px-8 py-2">
          <Stories />
          <CreatePost />
          
          <div className="mt-8">
            {POSTS.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
        
        {/* Right Column */}
        <div className="hidden xl:block w-[300px] shrink-0">
          <div className="sticky top-[10px]">
            <RightSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}