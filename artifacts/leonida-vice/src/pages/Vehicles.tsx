import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { VEHICLES } from "@/lib/mock-data";
import { Car, Search, ArrowUpDown, Shield } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";

type SortConfig = {
  key: keyof typeof VEHICLES[0] | null;
  direction: 'asc' | 'desc';
};

export default function Vehicles() {
  const [filter, setFilter] = useState("");
  const [sortConfig, setSortConfig] = useState<SortConfig>({ key: 'score', direction: 'desc' });
  const [selectedVehicleName, setSelectedVehicleName] = useState<string>(VEHICLES[0].name);

  const sortedAndFilteredVehicles = useMemo(() => {
    let result = [...VEHICLES];
    
    if (filter) {
      result = result.filter(v => 
        v.name.toLowerCase().includes(filter.toLowerCase()) || 
        v.class.toLowerCase().includes(filter.toLowerCase())
      );
    }
    
    if (sortConfig.key) {
      result.sort((a, b) => {
        // @ts-ignore - dynamic key
        const aVal = a[sortConfig.key!];
        // @ts-ignore
        const bVal = b[sortConfig.key!];
        
        if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
        if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
      });
    }
    
    return result;
  }, [filter, sortConfig]);

  const handleSort = (key: keyof typeof VEHICLES[0]) => {
    setSortConfig({
      key,
      direction: sortConfig.key === key && sortConfig.direction === 'desc' ? 'asc' : 'desc',
    });
  };

  const selectedVehicle = VEHICLES.find(v => v.name === selectedVehicleName) || VEHICLES[0];
  
  const radarData = [
    { subject: 'Top Speed', A: selectedVehicle.speed, fullMark: 100 },
    { subject: 'Acceleration', A: selectedVehicle.accel, fullMark: 100 },
    { subject: 'Handling', A: selectedVehicle.handling, fullMark: 100 },
    { subject: 'Braking', A: selectedVehicle.braking, fullMark: 100 },
    { subject: 'Overall', A: selectedVehicle.score, fullMark: 100 },
  ];

  return (
    <div className="flex flex-col gap-6 max-w-6xl mx-auto">
      <div className="flex items-center justify-between border-b border-primary/20 pb-4">
        <div>
          <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
            <Car className="w-6 h-6" />
            VEHICLE PERFORMANCE DATABASE
          </h2>
          <p className="text-muted-foreground text-sm mt-1">Telemetry and telemetry aggregates for getaway planning.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Radar Chart Panel */}
        <Card className="lg:col-span-1 border-primary/20 bg-black/50 order-2 lg:order-1">
          <CardHeader>
            <CardTitle className="text-lg text-primary">{selectedVehicle.name}</CardTitle>
            <div className="text-xs text-muted-foreground uppercase">{selectedVehicle.class} CLASS</div>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full -ml-4">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                  <PolarGrid stroke="hsl(var(--border))" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 10 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar name="Vehicle" dataKey="A" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.3} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="bg-card/50 p-2 border border-border">
                <div className="text-[10px] text-muted-foreground uppercase mb-1">Score</div>
                <div className="text-xl font-bold text-white">{selectedVehicle.score}</div>
              </div>
              <div className="bg-card/50 p-2 border border-border">
                <div className="text-[10px] text-muted-foreground uppercase mb-1">Status</div>
                <div className="text-sm font-bold text-primary flex items-center gap-1">
                  <Shield className="w-3 h-3" />
                  CLEARED
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Database Table */}
        <Card className="lg:col-span-2 border-primary/20 bg-black/50 order-1 lg:order-2 flex flex-col h-[600px]">
          <CardHeader className="pb-4">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                placeholder="SEARCH VEHICLES..." 
                className="pl-10 bg-black border-primary/30 rounded-none font-mono"
                value={filter}
                onChange={e => setFilter(e.target.value)}
              />
            </div>
          </CardHeader>
          <CardContent className="flex-1 overflow-auto p-0">
            <table className="w-full text-sm text-left">
              <thead className="bg-secondary/50 text-[10px] uppercase text-muted-foreground sticky top-0 z-10 backdrop-blur-sm border-y border-border">
                <tr>
                  <th className="px-4 py-3 cursor-pointer hover:text-white" onClick={() => handleSort('name')}>
                    Vehicle {sortConfig.key === 'name' && <ArrowUpDown className="inline w-3 h-3" />}
                  </th>
                  <th className="px-4 py-3 cursor-pointer hover:text-white" onClick={() => handleSort('class')}>
                    Class {sortConfig.key === 'class' && <ArrowUpDown className="inline w-3 h-3" />}
                  </th>
                  <th className="px-4 py-3 text-right cursor-pointer hover:text-white" onClick={() => handleSort('speed')}>
                    Speed {sortConfig.key === 'speed' && <ArrowUpDown className="inline w-3 h-3" />}
                  </th>
                  <th className="px-4 py-3 text-right cursor-pointer hover:text-white" onClick={() => handleSort('accel')}>
                    Accel {sortConfig.key === 'accel' && <ArrowUpDown className="inline w-3 h-3" />}
                  </th>
                  <th className="px-4 py-3 text-right cursor-pointer hover:text-white" onClick={() => handleSort('score')}>
                    Score {sortConfig.key === 'score' && <ArrowUpDown className="inline w-3 h-3" />}
                  </th>
                </tr>
              </thead>
              <tbody>
                {sortedAndFilteredVehicles.map(v => (
                  <tr 
                    key={v.name} 
                    className={`border-b border-border/30 hover:bg-white/5 cursor-pointer transition-colors ${selectedVehicleName === v.name ? 'bg-primary/10 border-l-2 border-l-primary' : 'border-l-2 border-l-transparent'}`}
                    onClick={() => setSelectedVehicleName(v.name)}
                  >
                    <td className="px-4 py-3 font-bold text-white">{v.name}</td>
                    <td className="px-4 py-3 text-muted-foreground">{v.class}</td>
                    <td className="px-4 py-3 text-right">{v.speed}</td>
                    <td className="px-4 py-3 text-right">{v.accel}</td>
                    <td className="px-4 py-3 text-right text-primary font-bold">{v.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
