import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BUSINESSES } from "@/lib/mock-data";
import { Calculator as CalcIcon, DollarSign, Clock, ShieldAlert, CheckCircle2, TrendingUp } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

export default function Calculator() {
  const [selectedBiz, setSelectedBiz] = useState(BUSINESSES[0].id);
  const biz = BUSINESSES.find(b => b.id === selectedBiz) || BUSINESSES[0];
  
  const [supplyCost, setSupplyCost] = useState(biz.supplyCost);
  const [timeHours, setTimeHours] = useState(biz.cycleHours);
  const [productValue, setProductValue] = useState(biz.baseValue);
  const [riskLevel, setRiskLevel] = useState(5);

  // Auto-update inputs when business changes
  const handleBizChange = (val: string) => {
    setSelectedBiz(val);
    const newBiz = BUSINESSES.find(b => b.id === val);
    if (newBiz) {
      setSupplyCost(newBiz.supplyCost);
      setTimeHours(newBiz.cycleHours);
      setProductValue(newBiz.baseValue);
    }
  };

  // Calculations
  const grossProfit = productValue;
  const netProfit = grossProfit - supplyCost;
  const hourlyRate = timeHours > 0 ? netProfit / timeHours : 0;
  // Risk adjustment: higher risk lowers the effective ROI slightly for comparison
  const riskPenalty = riskLevel * 0.05; // 5% penalty per risk point
  const riskAdjustedProfit = netProfit * (1 - riskPenalty);
  const roi = supplyCost > 0 ? (netProfit / supplyCost) * 100 : Infinity;
  
  return (
    <div className="max-w-6xl mx-auto gap-6 flex flex-col">
      <div className="flex items-center justify-between border-b border-primary/20 pb-4">
        <div>
          <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
            <CalcIcon className="w-6 h-6" />
            ROI ENGINE
          </h2>
          <p className="text-muted-foreground text-sm mt-1">Calculate yield, risk-adjusted returns, and time efficiency.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Controls */}
        <Card className="lg:col-span-4 border-primary/20 bg-black/50">
          <CardHeader>
            <CardTitle className="text-lg">PARAMETERS</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label className="text-xs uppercase text-muted-foreground">Enterprise Type</Label>
              <Select value={selectedBiz} onValueChange={handleBizChange}>
                <SelectTrigger className="bg-black border-primary/30 rounded-none font-mono">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-card border-primary/30 rounded-none font-mono text-sm">
                  {BUSINESSES.map(b => (
                    <SelectItem key={b.id} value={b.id} className="rounded-none focus:bg-primary focus:text-black">
                      {b.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-xs uppercase text-muted-foreground">Supply Cost ($)</Label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input 
                  type="number" 
                  value={supplyCost} 
                  onChange={e => setSupplyCost(Number(e.target.value))}
                  className="pl-10 bg-black border-primary/30 rounded-none font-mono"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-xs uppercase text-muted-foreground">Product Value ($)</Label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input 
                  type="number" 
                  value={productValue} 
                  onChange={e => setProductValue(Number(e.target.value))}
                  className="pl-10 bg-black border-primary/30 rounded-none font-mono"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-xs uppercase text-muted-foreground">Time Investment (Hours)</Label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input 
                  type="number" 
                  value={timeHours} 
                  onChange={e => setTimeHours(Number(e.target.value))}
                  className="pl-10 bg-black border-primary/30 rounded-none font-mono"
                  step="0.5"
                />
              </div>
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex justify-between items-center">
                <Label className="text-xs uppercase text-muted-foreground">Operational Risk</Label>
                <span className="text-primary font-bold">{riskLevel}/10</span>
              </div>
              <Slider 
                value={[riskLevel]} 
                onValueChange={v => setRiskLevel(v[0])} 
                max={10} min={1} step={1}
                className="py-4"
              />
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="lg:col-span-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="border-primary/20 bg-black/50">
              <CardContent className="pt-6">
                <div className="text-xs text-muted-foreground uppercase tracking-widest mb-2">Net Profit</div>
                <div className={`text-3xl font-bold ${netProfit >= 0 ? 'text-primary' : 'text-destructive'}`}>
                  ${netProfit.toLocaleString()}
                </div>
                <div className="text-xs text-muted-foreground mt-2 break-all">
                  FORMULA: {productValue} - {supplyCost}
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-black/50">
              <CardContent className="pt-6">
                <div className="text-xs text-muted-foreground uppercase tracking-widest mb-2">Hourly Rate</div>
                <div className="text-3xl font-bold text-white">
                  ${hourlyRate.toLocaleString(undefined, { maximumFractionDigits: 0 })}/hr
                </div>
                <div className="text-xs text-muted-foreground mt-2">
                  Efficiency Metric
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-black/50">
              <CardContent className="pt-6 relative overflow-hidden">
                <div className="text-xs text-muted-foreground uppercase tracking-widest mb-2">Raw ROI</div>
                <div className="text-3xl font-bold text-white">
                  {roi === Infinity ? '∞' : `${roi.toLocaleString(undefined, { maximumFractionDigits: 1 })}%`}
                </div>
                <div className="text-xs text-muted-foreground mt-2">
                  Return on Capital
                </div>
                {roi > 500 && roi !== Infinity && (
                  <div className="absolute top-2 right-2 text-primary">
                    <TrendingUp className="w-8 h-8 opacity-20" />
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <Card className="border-primary/20 bg-black/50">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <ShieldAlert className="w-5 h-5" />
                RISK ANALYSIS
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-card/50 border border-border p-4 mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-bold">Risk-Adjusted Value</span>
                  <span className="text-xl font-bold text-yellow-500">${riskAdjustedProfit.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                </div>
                <div className="text-xs text-muted-foreground">
                  Accounts for potential losses from raids, staff fees, and griefing based on a risk level of {riskLevel}.
                  Penalty applied: -{(riskPenalty * 100).toFixed(0)}%
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-black/50">
            <CardHeader>
              <CardTitle className="text-lg">BASE ENTERPRISE COMPARISON</CardTitle>
            </CardHeader>
            <CardContent className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-muted-foreground border-b border-border">
                  <tr>
                    <th className="px-2 py-2">Enterprise</th>
                    <th className="px-2 py-2 text-right">Cost</th>
                    <th className="px-2 py-2 text-right">Value</th>
                    <th className="px-2 py-2 text-right">Hours</th>
                    <th className="px-2 py-2 text-right">$/Hr</th>
                    <th className="px-2 py-2"></th>
                  </tr>
                </thead>
                <tbody>
                  {BUSINESSES.map(b => {
                    const bNet = b.baseValue - b.supplyCost;
                    const bHr = b.cycleHours > 0 ? bNet / b.cycleHours : 0;
                    const isGold = b.id === 'nightclub'; // Mock gold standard
                    return (
                      <tr key={b.id} className="border-b border-border/30 hover:bg-white/5 transition-colors">
                        <td className="px-2 py-3 font-bold flex items-center gap-2">
                          {b.name}
                          {isGold && <CheckCircle2 className="w-4 h-4 text-primary" />}
                        </td>
                        <td className="px-2 py-3 text-right text-muted-foreground">${(b.supplyCost/1000).toFixed(0)}k</td>
                        <td className="px-2 py-3 text-right text-white">${(b.baseValue/1000).toFixed(0)}k</td>
                        <td className="px-2 py-3 text-right text-muted-foreground">{b.cycleHours}h</td>
                        <td className="px-2 py-3 text-right text-primary font-bold">${bHr.toLocaleString(undefined, {maximumFractionDigits:0})}</td>
                        <td className="px-2 py-3 text-right">
                          {isGold && <span className="text-[10px] bg-primary text-black px-2 py-0.5 font-bold">GOLD STD</span>}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
