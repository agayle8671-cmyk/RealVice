import { useState } from "react";
import { INTEL_ITEMS } from "@/lib/mock-data";
import { Terminal, ShieldAlert, Radio, Filter } from "lucide-react";

export default function Intel() {
  const [filter, setFilter] = useState<string | null>(null);

  const filteredItems = filter 
    ? INTEL_ITEMS.filter(item => item.class === filter)
    : INTEL_ITEMS;

  return (
    <div className="flex flex-col gap-6 max-w-4xl mx-auto min-h-[calc(100vh-120px)]">
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-primary/20 pb-4 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
            <Radio className="w-6 h-6 animate-pulse" />
            LEONIDA INTELLIGENCE ARCHITECTURE
          </h2>
          <p className="text-muted-foreground text-sm mt-1">Encrypted signals intercept and analysis network.</p>
        </div>
        
        <div className="flex items-center gap-2 text-xs font-bold">
          <Filter className="w-4 h-4 text-muted-foreground" />
          <button 
            className={`px-3 py-1 border transition-colors ${filter === null ? 'border-primary text-primary bg-primary/10' : 'border-border text-muted-foreground hover:border-primary/50'}`}
            onClick={() => setFilter(null)}
          >
            ALL
          </button>
          <button 
            className={`px-3 py-1 border transition-colors ${filter === 'CONFIRMED' ? 'border-primary text-primary bg-primary/10' : 'border-border text-muted-foreground hover:border-primary/50'}`}
            onClick={() => setFilter('CONFIRMED')}
          >
            CONFIRMED
          </button>
          <button 
            className={`px-3 py-1 border transition-colors ${filter === 'UNVERIFIED' ? 'border-yellow-500 text-yellow-500 bg-yellow-500/10' : 'border-border text-muted-foreground hover:border-yellow-500/50'}`}
            onClick={() => setFilter('UNVERIFIED')}
          >
            UNVERIFIED
          </button>
          <button 
            className={`px-3 py-1 border transition-colors ${filter === 'RUMOR' ? 'border-blue-400 text-blue-400 bg-blue-400/10' : 'border-border text-muted-foreground hover:border-blue-400/50'}`}
            onClick={() => setFilter('RUMOR')}
          >
            RUMOR
          </button>
        </div>
      </div>

      <div className="flex-1 bg-black/50 border border-primary/20 relative p-6 overflow-hidden flex flex-col">
        {/* Terminal decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="absolute top-4 left-4 text-primary/30">
          <Terminal className="w-16 h-16" />
        </div>
        <div className="absolute bottom-4 right-4 text-[10px] text-muted-foreground font-mono text-right">
          <div>NODE: LV-INTEL-01</div>
          <div>ENCRYPTION: AES-256</div>
          <div>STATUS: RECEIVING</div>
        </div>

        <div className="relative z-10 flex-1 space-y-6 overflow-y-auto pr-4 custom-scrollbar">
          {filteredItems.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground flex flex-col items-center">
              <ShieldAlert className="w-12 h-12 mb-4 opacity-50" />
              NO INTEL MATCHES CLASSIFICATION
            </div>
          ) : (
            filteredItems.map(item => (
              <div key={item.id} className="group border border-border/50 bg-black/80 p-4 hover:border-primary/50 transition-colors">
                <div className="flex flex-wrap items-center gap-3 mb-3 border-b border-border/50 pb-2">
                  <span className={`text-xs font-bold px-2 py-0.5 ${
                    item.class === 'CONFIRMED' ? 'bg-primary/20 text-primary border border-primary/50' : 
                    item.class === 'UNVERIFIED' ? 'bg-yellow-500/20 text-yellow-500 border border-yellow-500/50' : 
                    'bg-blue-400/20 text-blue-400 border border-blue-400/50'
                  }`}>
                    CLASS: {item.class}
                  </span>
                  <span className="text-xs text-muted-foreground bg-secondary/50 px-2 py-0.5 border border-border">
                    SRC: {item.source}
                  </span>
                  <span className="text-xs text-muted-foreground ml-auto font-mono">
                    TS: {item.time}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground font-mono leading-relaxed">
                  {item.excerpt}
                </p>
              </div>
            ))
          )}
          
          <div className="pt-4 flex items-center text-primary text-sm gap-2">
            <span className="cursor-blink w-2 h-4 bg-primary inline-block"></span>
            AWAITING FURTHER TRANSMISSIONS...
          </div>
        </div>
      </div>
    </div>
  );
}
