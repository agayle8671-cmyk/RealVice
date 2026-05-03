import { MessageSquare } from "lucide-react";

export function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row gap-6 mb-8 border-b border-[#E0E0E0] pb-8">
      {/* Left Sub-Column */}
      <div className="w-full md:w-[38%] flex flex-col">
        {/* Teaser 1 */}
        <article className="border-b border-[#E0E0E0] pb-4 mb-4">
          <div className="text-[#C41230] text-[0.7rem] font-bold uppercase tracking-[0.05em] mb-1">
            VICE CITY
          </div>
          <h3 className="font-playfair font-bold text-[1.1rem] text-[#1A1A1A] leading-[1.3] mb-2 hover:underline cursor-pointer">
            Vice City International Airport confirmed at central map location — aviation businesses expected to surge
          </h3>
          <div className="flex items-center text-[#757575] text-[0.8rem] font-sans">
            <span>2 hrs ago</span>
            <span className="mx-2">|</span>
            <MessageSquare className="w-3 h-3 mr-1" />
            <span>312</span>
          </div>
        </article>

        {/* Teaser 2 */}
        <article className="border-b border-[#E0E0E0] pb-4 mb-4">
          <div className="text-[#C41230] text-[0.7rem] font-bold uppercase tracking-[0.05em] mb-1">
            MARKETS
          </div>
          <h3 className="font-playfair font-bold text-[1.1rem] text-[#1A1A1A] leading-[1.3] mb-2 hover:underline cursor-pointer">
            BAWSAQ community sentiment drives Pegassi stock up 12.4% following Oppressor sighting in leaked footage
          </h3>
          <div className="flex items-center text-[#757575] text-[0.8rem] font-sans">
            <span>5 hrs ago</span>
            <span className="mx-2">|</span>
            <MessageSquare className="w-3 h-3 mr-1" />
            <span>198</span>
          </div>
        </article>

        {/* Teaser 3 */}
        <article>
          <div className="text-[#C41230] text-[0.7rem] font-bold uppercase tracking-[0.05em] mb-1">
            INTELLIGENCE
          </div>
          <h3 className="font-playfair font-bold text-[1.1rem] text-[#1A1A1A] leading-[1.3] mb-2 hover:underline cursor-pointer">
            Merryweather Security contracts under scrutiny as Leonida deployment details emerge from anonymous sources
          </h3>
          <div className="flex items-center text-[#757575] text-[0.8rem] font-sans">
            <span>8 hrs ago</span>
            <span className="mx-2">|</span>
            <MessageSquare className="w-3 h-3 mr-1" />
            <span>89</span>
          </div>
        </article>
      </div>

      {/* Right Sub-Column (Featured) */}
      <div className="w-full md:w-[62%] md:border-l border-[#E0E0E0] md:pl-6">
        <div className="text-[#C41230] text-[0.7rem] font-bold uppercase tracking-[0.05em] mb-2">
          LEONIDA
        </div>
        
        <div className="w-full aspect-video bg-[#D4D4D4] flex items-center justify-center mb-4 cursor-pointer">
          <span className="font-sans text-[0.8rem] font-bold text-[#666666] tracking-wider uppercase">
            LEONIDA VICE IMAGE
          </span>
        </div>
        
        <h2 className="font-playfair font-bold text-[1.6rem] text-[#1A1A1A] leading-[1.3] mb-3 hover:underline cursor-pointer">
          'Criminals love Leonida,' says source inside Rockstar development as full state map leaks online
        </h2>
        
        <p className="text-[#444444] text-[0.9rem] leading-relaxed mb-4">
          The premier county breakdown has been confirmed via multiple sources, revealing Vice-Dale County as the premier tourism hub and Mariana County as the most lucrative smuggling corridor in the state.
        </p>
        
        <div className="flex items-center text-[#757575] text-[0.8rem] font-sans">
          <span>4 hrs ago</span>
          <span className="mx-2">|</span>
          <MessageSquare className="w-3 h-3 mr-1" />
          <span>634</span>
        </div>
      </div>
    </section>
  );
}
