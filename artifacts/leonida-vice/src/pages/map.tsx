import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { COUNTIES } from "@/lib/mock-data";
import { Map as MapIcon, Crosshair, Navigation } from "lucide-react";

export default function MapPage() {
  return (
    <div className="flex flex-col gap-6 max-w-6xl mx-auto">
      <div className="flex items-center justify-between border-b border-primary/20 pb-4">
        <div>
          <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
            <MapIcon className="w-6 h-6" />
            LEONIDA REGIONAL LOGISTICS
          </h2>
          <p className="text-muted-foreground text-sm mt-1">Geographic economic data and transit vectors.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Mock Map Viz */}
        <Card className="border-primary/20 bg-black/50 overflow-hidden h-[500px] relative">
          <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,165,0,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,165,0,0.5)_1px,transparent_1px)] bg-[length:40px_40px] pointer-events-none" />
          
          {/* Radar sweep effect */}
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/30 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/20 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 w-[200px] h-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/10 pointer-events-none" />
          
          <div className="absolute inset-0 w-full h-full p-8">
            <div className="relative w-full h-full">
              {COUNTIES.map((county, i) => (
                <div 
                  key={county.name}
                  className="absolute flex flex-col items-center group cursor-crosshair"
                  style={{ left: `${county.coords.x}%`, top: `${county.coords.y}%`, transform: 'translate(-50%, -50%)' }}
                >
                  <div className="w-3 h-3 bg-primary rounded-sm mb-1 group-hover:scale-150 transition-transform relative">
                    <div className="absolute inset-0 bg-primary animate-ping rounded-sm opacity-50" />
                  </div>
                  <div className="bg-black/80 border border-primary/50 text-[10px] px-2 py-1 whitespace-nowrap opacity-70 group-hover:opacity-100 group-hover:border-primary transition-all">
                    {county.name.toUpperCase()}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-4 left-4 text-xs text-primary/50 font-mono flex items-center gap-2">
            <Crosshair className="w-4 h-4" />
            SATELLITE LINK ESTABLISHED
          </div>
        </Card>

        {/* County List */}
        <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
          {COUNTIES.map(county => (
            <Card key={county.name} className="border-border bg-black/50 hover:border-primary/50 transition-colors">
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-primary">{county.name}</h3>
                    <p className="text-xs text-muted-foreground">{county.areas}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] uppercase text-muted-foreground mb-1">Risk Rating</div>
                    <span className={`text-xs px-2 py-0.5 border font-bold ${
                      county.risk === 'HIGH' ? 'border-destructive text-destructive' : 
                      county.risk === 'LOW' ? 'border-primary text-primary' : 
                      'border-yellow-500 text-yellow-500'
                    }`}>
                      {county.risk}
                    </span>
                  </div>
                </div>
                
                <div className="mt-4 grid grid-cols-2 gap-4 border-t border-border/50 pt-3">
                  <div>
                    <div className="text-[10px] uppercase text-muted-foreground mb-1">Economic Profile</div>
                    <div className="text-xs text-white leading-tight">{county.profile}</div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase text-muted-foreground mb-1">Expected ROI</div>
                    <div className="text-xs font-bold text-white">{county.roi}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Card className="border-primary/20 bg-black/50">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Navigation className="w-5 h-5 text-primary" />
            TRANSIT VECTORS
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-[10px] uppercase text-muted-foreground border-b border-border">
                <tr>
                  <th className="px-4 py-2">Route</th>
                  <th className="px-4 py-2">Distance</th>
                  <th className="px-4 py-2">Air Travel</th>
                  <th className="px-4 py-2">Land Travel</th>
                  <th className="px-4 py-2">Threat Vector</th>
                </tr>
              </thead>
              <tbody className="text-xs">
                <tr className="border-b border-border/30 hover:bg-white/5">
                  <td className="px-4 py-3 font-bold text-white">Vice-Dale → Mariana</td>
                  <td className="px-4 py-3 text-muted-foreground">12.4 mi</td>
                  <td className="px-4 py-3 text-primary">1m 45s</td>
                  <td className="px-4 py-3">4m 30s</td>
                  <td className="px-4 py-3 text-yellow-500">Airspace restricted</td>
                </tr>
                <tr className="border-b border-border/30 hover:bg-white/5">
                  <td className="px-4 py-3 font-bold text-white">Ambrosia → Kelly</td>
                  <td className="px-4 py-3 text-muted-foreground">8.2 mi</td>
                  <td className="px-4 py-3 text-primary">1m 10s</td>
                  <td className="px-4 py-3">3m 15s</td>
                  <td className="px-4 py-3 text-destructive">LCPD patrols heavy</td>
                </tr>
                <tr className="border-b border-border/30 hover:bg-white/5">
                  <td className="px-4 py-3 font-bold text-white">Leonard → Vice-Dale</td>
                  <td className="px-4 py-3 text-muted-foreground">18.6 mi</td>
                  <td className="px-4 py-3 text-primary">2m 20s</td>
                  <td className="px-4 py-3">6m 45s</td>
                  <td className="px-4 py-3 text-muted-foreground">Clear</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
