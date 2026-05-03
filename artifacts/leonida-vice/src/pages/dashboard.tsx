import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LCN_STOCKS, BAWSAQ_STOCKS, COUNTIES, BUSINESSES, INTEL_ITEMS } from "@/lib/mock-data";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis } from "recharts";
import { Activity, AlertTriangle, Globe, Zap, TrendingUp, TrendingDown, Target } from "lucide-react";

export default function Dashboard() {
  const topLcn = LCN_STOCKS.sort((a, b) => Number(b.changePct) - Number(a.changePct)).slice(0, 3);
  const topBawsaq = BAWSAQ_STOCKS.sort((a, b) => Number(b.changePct) - Number(a.changePct)).slice(0, 3);
  
  const sentimentScore = 78.4;
  
  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* LCN Summary */}
        <Card className="border-primary/20 bg-black/50 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-10 -mt-10" />
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              LCN INDEX
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-4">12,450.22 <span className="text-primary text-lg ml-2">+1.2%</span></div>
            <div className="space-y-2 text-sm">
              {topLcn.map(s => (
                <div key={s.ticker} className="flex justify-between items-center border-b border-border/50 pb-1">
                  <span className="font-bold">{s.ticker}</span>
                  <span>${s.price}</span>
                  <span className={Number(s.change) >= 0 ? "text-primary" : "text-destructive"}>
                    {Number(s.change) >= 0 ? "+" : ""}{s.changePct}%
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* BAWSAQ Summary */}
        <Card className="border-primary/20 bg-black/50 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-10 -mt-10" />
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Globe className="w-5 h-5 text-primary" />
              BAWSAQ INDEX
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-4">8,921.05 <span className="text-destructive text-lg ml-2">-0.8%</span></div>
            <div className="space-y-2 text-sm">
              {topBawsaq.map(s => (
                <div key={s.ticker} className="flex justify-between items-center border-b border-border/50 pb-1">
                  <span className="font-bold">{s.ticker}</span>
                  <span>${s.price}</span>
                  <span className={Number(s.change) >= 0 ? "text-primary" : "text-destructive"}>
                    {Number(s.change) >= 0 ? "+" : ""}{s.changePct}%
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Sentiment */}
        <Card className="border-primary/20 bg-black/50 backdrop-blur-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Activity className="w-5 h-5 text-primary" />
              SENTIMENT SCORE
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center pt-4">
            <div className="relative w-32 h-32 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="64" cy="64" r="56" className="stroke-muted fill-none" strokeWidth="8" />
                <circle cx="64" cy="64" r="56" className="stroke-primary fill-none transition-all duration-1000" strokeWidth="8" strokeDasharray="351.8" strokeDashoffset={351.8 - (351.8 * sentimentScore) / 100} />
              </svg>
              <div className="absolute text-4xl font-bold text-primary">{sentimentScore}</div>
            </div>
            <div className="mt-4 text-sm text-muted-foreground uppercase tracking-widest">Bullish Bias</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Counties */}
        <Card className="col-span-1 border-primary/20 bg-black/50">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              COUNTY OUTLOOK
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {COUNTIES.map(c => (
              <div key={c.name} className="p-3 border border-border bg-card/50 hover:border-primary/50 transition-colors cursor-crosshair">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-bold text-primary">{c.name}</h4>
                  <span className={`text-xs px-2 py-0.5 border ${c.risk === 'HIGH' ? 'border-destructive text-destructive' : c.risk === 'LOW' ? 'border-primary text-primary' : 'border-yellow-500 text-yellow-500'}`}>
                    RISK: {c.risk}
                  </span>
                </div>
                <div className="text-xs text-muted-foreground">{c.areas}</div>
                <div className="text-xs mt-1">ROI Potential: <span className="text-white font-bold">{c.roi}</span></div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Intel Feed */}
        <Card className="col-span-1 border-primary/20 bg-black/50">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-primary" />
              LIVE INTELLIGENCE
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 max-h-[450px] overflow-y-auto pr-2 custom-scrollbar">
            {INTEL_ITEMS.slice(0, 5).map(item => (
              <div key={item.id} className="relative pl-4 border-l-2 border-primary/30 py-1 hover:border-primary transition-colors">
                <div className="absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-primary" />
                <div className="flex gap-2 text-xs mb-1">
                  <span className={`font-bold ${item.class === 'CONFIRMED' ? 'text-primary' : item.class === 'UNVERIFIED' ? 'text-yellow-500' : 'text-blue-400'}`}>
                    [{item.class}]
                  </span>
                  <span className="text-muted-foreground">{item.time}</span>
                  <span className="text-muted-foreground">SRC:{item.source}</span>
                </div>
                <div className="font-bold text-sm mb-1">{item.title}</div>
                <div className="text-xs text-muted-foreground line-clamp-2">{item.excerpt}</div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Business Performance */}
        <Card className="col-span-1 border-primary/20 bg-black/50">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              ENTERPRISE YIELD
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {BUSINESSES.map((biz, i) => {
              const data = Array.from({ length: 10 }, (_, idx) => ({ val: biz.baseValue * (0.8 + Math.random() * 0.4) }));
              return (
                <div key={biz.id} className="p-3 border border-border bg-card/50">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-bold text-sm">{biz.name}</h4>
                    <span className="text-xs text-primary">${(biz.baseValue / 1000).toFixed(0)}k Base</span>
                  </div>
                  <div className="h-12 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={data}>
                        <Line type="monotone" dataKey="val" stroke="hsl(var(--primary))" strokeWidth={2} dot={false} isAnimationActive={false} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
