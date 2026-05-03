import { MessageSquare } from "lucide-react";

export function RightSidebar() {
  return (
    <aside className="w-full flex flex-col font-sans">
      {/* PANEL 1: New from Leonida Vice */}
      <div className="border border-[#E0E0E0] mb-8">
        <div className="border-b border-[#E0E0E0] p-3">
          <h3 className="font-bold text-[0.8rem] text-[#1A1A1A] uppercase tracking-wide">
            NEW FROM LEONIDA VICE
          </h3>
        </div>
        <div className="p-4 flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-[#D4D4D4] mb-3"></div>
          <div className="text-[0.75rem] font-bold text-[#1A1A1A] uppercase tracking-wider mb-2">
            JASON DUVAL, Senior Analyst
          </div>
          <h4 className="font-playfair font-bold text-[1.1rem] text-[#1A1A1A] leading-[1.3] mb-4 hover:underline cursor-pointer">
            The complete guide to dominating the Leonida Vice economy from day one
          </h4>
          <a href="#" className="text-[#C41230] font-bold text-[0.8rem] uppercase tracking-wider hover:underline">
            LEARN MORE &gt;
          </a>
        </div>
      </div>

      {/* PANEL 2: Intel */}
      <div>
        <div className="flex items-center justify-between border-b-[2px] border-[#1A1A1A] pb-2 mb-4">
          <h3 className="font-bold text-[1.1rem] text-[#1A1A1A] uppercase">
            INTEL
          </h3>
          <span className="text-[#C41230] font-bold text-[1.2rem]">&gt;</span>
        </div>

        <div className="flex flex-col gap-4">
          {/* Item 1 */}
          <article className="flex gap-3 border-b border-[#E0E0E0] pb-4">
            <div className="w-10 h-10 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center font-bold text-[0.8rem] shrink-0">
              LC
            </div>
            <div>
              <div className="text-[0.7rem] font-bold text-[#1A1A1A] uppercase tracking-wider mb-1">
                LUCIA CAMINOS
              </div>
              <h4 className="font-playfair font-bold text-[0.95rem] text-[#1A1A1A] leading-[1.3] mb-2 hover:underline cursor-pointer">
                Mariana County will be the most dangerous and profitable region in GTA VI history
              </h4>
              <div className="flex items-center text-[#757575] text-[0.75rem]">
                <span>5 hrs ago</span>
                <span className="mx-2">|</span>
                <MessageSquare className="w-3 h-3 mr-1" />
                <span>142</span>
              </div>
            </div>
          </article>

          {/* Item 2 */}
          <article className="flex gap-3 border-b border-[#E0E0E0] pb-4">
            <div className="w-10 h-10 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center font-bold text-[0.8rem] shrink-0">
              TP
            </div>
            <div>
              <div className="text-[0.7rem] font-bold text-[#1A1A1A] uppercase tracking-wider mb-1">
                TREVOR PHILIPS
              </div>
              <h4 className="font-playfair font-bold text-[0.95rem] text-[#1A1A1A] leading-[1.3] mb-2 hover:underline cursor-pointer">
                I've run operations in Los Santos and Leonida — here's the real difference
              </h4>
              <div className="flex items-center text-[#757575] text-[0.75rem]">
                <span>18 hrs ago</span>
                <span className="mx-2">|</span>
                <MessageSquare className="w-3 h-3 mr-1" />
                <span>834</span>
              </div>
            </div>
          </article>

          {/* Item 3 */}
          <article className="border-b border-[#E0E0E0] pb-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[#C41230] text-[0.7rem] font-bold uppercase tracking-[0.05em]">BUSINESS</span>
              <span className="text-[#1A1A1A] text-[0.7rem] font-bold uppercase tracking-[0.05em] bg-[#F7F7F7] px-1">INTEL</span>
            </div>
            <h4 className="font-playfair font-bold text-[0.95rem] text-[#1A1A1A] leading-[1.3] mb-2 hover:underline cursor-pointer">
              Nightclub operations in Vice City projected to generate 1.44M per cycle — the passive income king returns
            </h4>
            <div className="flex items-center text-[#757575] text-[0.75rem]">
              <span>1 hr ago</span>
              <span className="mx-2">|</span>
              <MessageSquare className="w-3 h-3 mr-1" />
              <span>412</span>
            </div>
          </article>

          {/* Item 4 */}
          <article>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[#C41230] text-[0.7rem] font-bold uppercase tracking-[0.05em]">CONTRIBUTORS</span>
              <span className="text-[#1A1A1A] text-[0.7rem] font-bold uppercase tracking-[0.05em] bg-[#F7F7F7] px-1">INTEL</span>
            </div>
            <h4 className="font-playfair font-bold text-[0.95rem] text-[#1A1A1A] leading-[1.3] mb-2 hover:underline cursor-pointer">
              Bunker vs Motorcycle Club: the definitive ROI breakdown for Leonida operators
            </h4>
            <div className="flex items-center text-[#757575] text-[0.75rem]">
              <span>2 hrs ago</span>
              <span className="mx-2">|</span>
              <MessageSquare className="w-3 h-3 mr-1" />
              <span>289</span>
            </div>
          </article>
        </div>
      </div>
    </aside>
  );
}
