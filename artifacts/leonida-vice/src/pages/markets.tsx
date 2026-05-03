import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LCN_STOCKS, BAWSAQ_STOCKS } from "@/lib/mock-data";
import { ResponsiveContainer, LineChart, Line } from "recharts";
import { Activity, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

function StockTable({ data }: { data: typeof LCN_STOCKS }) {
  const [filter, setFilter] = useState("");
  
  const filtered = data.filter(s => 
    s.ticker.toLowerCase().includes(filter.toLowerCase()) || 
    s.company.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input 
          placeholder="SEARCH TICKER OR COMPANY..." 
          className="pl-10 bg-black/50 border-primary/30 focus-visible:ring-primary rounded-none font-mono uppercase"
          value={filter}
          onChange={e => setFilter(e.target.value)}
        />
      </div>
      
      <div className="border border-border overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-secondary/50 border-b border-border text-xs uppercase text-muted-foreground">
            <tr>
              <th className="px-4 py-3 font-medium">Ticker</th>
              <th className="px-4 py-3 font-medium">Company</th>
              <th className="px-4 py-3 font-medium text-right">Price</th>
              <th className="px-4 py-3 font-medium text-right">Change</th>
              <th className="px-4 py-3 font-medium text-right">Vol</th>
              <th className="px-4 py-3 font-medium text-center">Signal</th>
              <th className="px-4 py-3 font-medium text-center w-24">Trend</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((stock) => {
              const isPos = Number(stock.change) >= 0;
              const chartData = stock.history.map((val, i) => ({ i, val }));
              return (
                <tr key={stock.ticker} className={`border-b border-border/50 hover:bg-white/5 transition-colors ${isPos ? 'hover:bg-primary/5' : 'hover:bg-destructive/5'}`}>
                  <td className="px-4 py-3 font-bold">{stock.ticker}</td>
                  <td className="px-4 py-3 text-muted-foreground">{stock.company}</td>
                  <td className="px-4 py-3 text-right font-mono">${stock.price}</td>
                  <td className={`px-4 py-3 text-right font-mono ${isPos ? 'text-primary' : 'text-destructive'}`}>
                    {isPos ? '+' : ''}{stock.change} ({isPos ? '+' : ''}{stock.changePct}%)
                  </td>
                  <td className="px-4 py-3 text-right font-mono text-muted-foreground">
                    {(stock.volume / 1000).toFixed(1)}k
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className={`text-[10px] px-2 py-1 border ${
                      stock.signal === 'BUY' ? 'border-primary text-primary' : 
                      stock.signal === 'SELL' ? 'border-destructive text-destructive' : 
                      'border-yellow-500 text-yellow-500'
                    }`}>
                      {stock.signal}
                    </span>
                  </td>
                  <td className="px-4 py-1 h-10 w-24">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={chartData}>
                        <Line type="monotone" dataKey="val" stroke={isPos ? "hsl(var(--primary))" : "hsl(var(--destructive))"} strokeWidth={1.5} dot={false} isAnimationActive={false} />
                      </LineChart>
                    </ResponsiveContainer>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function Markets() {
  return (
    <div className="flex flex-col gap-6 max-w-6xl mx-auto">
      <div className="flex items-center justify-between border-b border-primary/20 pb-4">
        <div>
          <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
            <Activity className="w-6 h-6" />
            LEONIDA EXCHANGE NETWORK
          </h2>
          <p className="text-muted-foreground text-sm mt-1">Real-time asset valuation and sentiment tracking.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <Tabs defaultValue="lcn" className="w-full">
            <TabsList className="bg-black border border-border w-full justify-start rounded-none h-12 p-0 mb-6">
              <TabsTrigger value="lcn" className="rounded-none h-full data-[state=active]:bg-primary data-[state=active]:text-black font-bold uppercase px-8">
                LCN (Liberty City National)
              </TabsTrigger>
              <TabsTrigger value="bawsaq" className="rounded-none h-full data-[state=active]:bg-primary data-[state=active]:text-black font-bold uppercase px-8">
                BAWSAQ
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="lcn" className="mt-0 outline-none">
              <StockTable data={LCN_STOCKS} />
            </TabsContent>
            <TabsContent value="bawsaq" className="mt-0 outline-none">
              <StockTable data={BAWSAQ_STOCKS} />
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card className="border-primary/20 bg-black/50">
            <CardHeader>
              <CardTitle className="text-lg">MARKET SENTIMENT</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-xs mb-2">
                    <span className="text-primary">BUY PRESSURE</span>
                    <span>68%</span>
                  </div>
                  <div className="h-2 w-full bg-secondary overflow-hidden">
                    <div className="h-full bg-primary w-[68%]" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-2">
                    <span className="text-destructive">SELL PRESSURE</span>
                    <span>32%</span>
                  </div>
                  <div className="h-2 w-full bg-secondary overflow-hidden">
                    <div className="h-full bg-destructive w-[32%]" />
                  </div>
                </div>
                
                <div className="pt-4 border-t border-border/50">
                  <h4 className="text-xs font-bold text-muted-foreground mb-3 uppercase">Top Movers</h4>
                  <div className="space-y-2">
                    {LCN_STOCKS.concat(BAWSAQ_STOCKS).sort((a,b) => Number(b.changePct) - Number(a.changePct)).slice(0,3).map(s => (
                      <div key={s.ticker} className="flex justify-between text-sm">
                        <span className="font-bold">{s.ticker}</span>
                        <span className="text-primary">+{s.changePct}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
