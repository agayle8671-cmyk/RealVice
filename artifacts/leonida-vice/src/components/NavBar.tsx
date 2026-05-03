import { Search, CloudSun } from "lucide-react";
import { Link } from "wouter";

export function NavBar() {
  return (
    <header className="w-full flex flex-col font-sans">
      {/* 1. Very thin utility bar */}
      <div className="bg-white border-b border-[#E0E0E0] h-8 flex justify-between items-center px-4 text-[11px] text-[#666666]">
        <div className="flex items-center gap-2">
          <CloudSun className="w-4 h-4" />
          <span className="font-bold tracking-wide">LEONIDA, FL</span>
          <span>Saturday, May 3, 2026</span>
        </div>
        <div className="flex items-center">
          <button className="bg-[#C41230] text-white px-4 h-8 font-bold tracking-widest text-[10px] hover:bg-[#A00E26] transition-colors mr-4" style={{ borderRadius: '2px' }}>
            SUBSCRIBE
          </button>
          <button className="font-bold text-[#1A1A1A] hover:underline mr-4">
            Sign In
          </button>
          <Search className="w-4 h-4 text-[#1A1A1A] cursor-pointer" />
        </div>
      </div>

      {/* 2. Main header bar */}
      <div className="bg-white py-3 shadow-sm flex items-center justify-between px-4 max-w-screen-xl mx-auto w-full">
        <div className="w-48 text-[11px] text-[#666666]">
          <span className="text-[#C41230] font-bold block mb-1">PROMO</span>
          Exclusive content available now.
        </div>
        <div className="flex-1 text-center">
          <Link href="/" className="inline-block">
            <h1 className="font-playfair font-black text-3xl md:text-[2.5rem] text-[#1A1A1A] tracking-tight uppercase border-[3px] border-[#1A1A1A] px-6 py-2 leading-none">
              LEONIDA VICE
            </h1>
          </Link>
        </div>
        <div className="w-48 text-right text-[12px] font-bold text-[#1A1A1A]">
          <a href="#" className="hover:underline">Newsletters</a> | <a href="#" className="hover:underline">Today's Edition</a>
        </div>
      </div>

      {/* 3. Primary nav bar */}
      <div className="w-full bg-white border-b border-[#E0E0E0]">
        <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-center space-x-6 h-10 text-[13px] font-semibold text-[#333333]">
          <Link href="/" className="text-[#C41230] border-b-2 border-[#C41230] h-full flex items-center">Home</Link>
          {['Vice City', 'Leonida', 'Markets', 'Opinion', 'Vehicles', 'Intel', 'Business', 'Investigations', 'Counties', 'Podcasts'].map(item => (
            <a key={item} href="#" className="h-full flex items-center hover:text-[#C41230] hover:border-b-2 hover:border-[#C41230] border-b-2 border-transparent transition-colors">
              {item}
            </a>
          ))}
        </div>
      </div>

      {/* 4. Sub-nav strip */}
      <div className="w-full bg-[#F7F7F7] border-b border-[#E0E0E0]">
        <div className="max-w-screen-xl mx-auto px-4 flex items-center space-x-2 h-8 text-[11px] text-[#666666] overflow-x-auto whitespace-nowrap">
          <span className="font-bold text-[#C41230] uppercase">Breaking:</span>
          <div className="flex items-center space-x-2">
            <a href="#" className="hover:underline">VCI Airport Confirmed</a>
            <span>·</span>
            <a href="#" className="hover:underline">BAWSAQ Surge</a>
            <span>·</span>
            <a href="#" className="hover:underline">Mariana County Routes</a>
            <span>·</span>
            <a href="#" className="hover:underline">Allied Crystal</a>
            <span>·</span>
            <a href="#" className="hover:underline">Leonida Counties</a>
          </div>
        </div>
      </div>
    </header>
  );
}
