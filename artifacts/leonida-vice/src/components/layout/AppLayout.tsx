import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { LCN_STOCKS, BAWSAQ_STOCKS } from "@/lib/mock-data";

export function Ticker() {
  const allStocks = [...LCN_STOCKS, ...BAWSAQ_STOCKS];
  
  return (
    <div className="w-full bg-black border-b border-border overflow-hidden h-8 flex items-center relative">
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="flex animate-ticker whitespace-nowrap min-w-max text-xs font-mono">
        {allStocks.map((stock, i) => (
          <div key={i} className="flex items-center mx-4">
            <span className="font-bold mr-2 text-white">{stock.ticker}</span>
            <span className="mr-2">${stock.price}</span>
            <span className={Number(stock.change) >= 0 ? "text-primary" : "text-destructive"}>
              {Number(stock.change) >= 0 ? "▲" : "▼"}{Math.abs(Number(stock.change))}
            </span>
          </div>
        ))}
      </div>
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
    </div>
  );
}

export function Navbar() {
  const [location] = useLocation();
  const [time, setTime] = useState(new Date().toISOString());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toISOString()), 1000);
    return () => clearInterval(timer);
  }, []);

  const navItems = [
    { href: "/", label: "DASHBOARD" },
    { href: "/markets", label: "MARKETS" },
    { href: "/calculator", label: "CALCULATOR" },
    { href: "/map", label: "MAP" },
    { href: "/vehicles", label: "VEHICLES" },
    { href: "/intel", label: "INTEL" },
  ];

  return (
    <nav className="border-b border-border bg-card p-4 flex flex-col md:flex-row justify-between items-center relative z-20">
      <div className="flex items-center gap-4 mb-4 md:mb-0">
        <h1 className="text-xl font-bold text-primary tracking-widest uppercase">
          LEONIDA VICE TERMINAL<span className="cursor-blink">_</span>
        </h1>
      </div>
      
      <div className="flex gap-1 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="flex-shrink-0">
            <div className={`px-4 py-1 text-sm font-bold border border-border cursor-pointer transition-all ${
              location === item.href 
                ? "bg-primary text-black border-primary shadow-[0_0_10px_rgba(255,165,0,0.5)]" 
                : "bg-black text-muted-foreground hover:text-white hover:border-primary/50"
            }`}>
              {item.label}
            </div>
          </Link>
        ))}
      </div>

      <div className="hidden md:flex text-xs text-muted-foreground">
        SYS_TIME: {time}
      </div>
    </nav>
  );
}

export function AppLayout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col relative overflow-hidden font-mono selection:bg-primary selection:text-black">
      {/* Scanline overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />
      
      <Ticker />
      <Navbar />
      
      <main className="flex-1 p-4 md:p-6 overflow-y-auto relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={location}
            initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
            transition={{ duration: 0.2 }}
            className="h-full"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
