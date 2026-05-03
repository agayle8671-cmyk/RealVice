import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import ViceCity from "@/pages/ViceCity";
import Counties from "@/pages/Counties";
import Characters from "@/pages/Characters";
import Vehicles from "@/pages/Vehicles";
import Intel from "@/pages/Intel";
import Opinion from "@/pages/Opinion";
import Investigations from "@/pages/Investigations";
import Podcasts from "@/pages/Podcasts";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/vice-city" component={ViceCity} />
      <Route path="/counties" component={Counties} />
      <Route path="/characters" component={Characters} />
      <Route path="/vehicles" component={Vehicles} />
      <Route path="/intel" component={Intel} />
      <Route path="/opinion" component={Opinion} />
      <Route path="/investigations" component={Investigations} />
      <Route path="/podcasts" component={Podcasts} />
      <Route component={Home} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
