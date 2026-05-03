import { NavBar } from "@/components/NavBar";
import { HeroSection } from "@/components/HeroSection";
import { ArticleGrid } from "@/components/ArticleGrid";
import { RightSidebar } from "@/components/RightSidebar";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#1A1A1A]">
      <NavBar />
      
      {/* MAIN CONTENT AREA */}
      <main className="max-w-screen-xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* LEFT/CENTER CONTENT (70%) */}
          <div className="w-full lg:w-[70%]">
            <HeroSection />
            
            <ArticleGrid 
              articles={[
                {
                  category: "BUSINESS",
                  headline: "Allied Crystal sugar refinery in Ambrosia County identified as primary revenue source for agricultural crime operations",
                  time: "3 hrs ago",
                  comments: "445"
                },
                {
                  category: "INTEL",
                  headline: "Full county breakdown confirmed: Vice-Dale, Mariana, Kelly, Ambrosia, and Leonard counties mapped with economic profiles",
                  time: "19 hrs ago",
                  comments: "567",
                  hasImage: true
                },
                {
                  category: "MARKETS",
                  headline: "LCN INDEX holds at 12,450 with BULLISH bias as community analysts project record-breaking in-game economy for GTA VI launch",
                  time: "4 hrs ago",
                  comments: "223"
                }
              ]} 
            />
            
            <ArticleGrid 
              articles={[
                {
                  category: "VEHICLES",
                  headline: "Grotti Furia confirmed as fastest Super class vehicle in Leonida — full performance benchmark data released by community testers",
                  time: "12 hrs ago",
                  comments: "156"
                },
                {
                  category: "COUNTIES",
                  headline: "Port Gellhorn and the 'Forgotten Coastline' of Leonard County emerge as hidden high-risk, high-reward territory for veteran operators",
                  time: "6 hrs ago",
                  comments: "891",
                  hasImage: true
                },
                {
                  category: "OPINION",
                  headline: "The Leonida economy is more sophisticated than Los Santos ever was — here's why GTA VI will redefine virtual finance",
                  time: "1 hr ago",
                  comments: "1.1K"
                }
              ]} 
            />
          </div>
          
          {/* RIGHT SIDEBAR (30%) */}
          <div className="w-full lg:w-[30%] shrink-0">
            <RightSidebar />
          </div>
          
        </div>
      </main>
    </div>
  );
}
