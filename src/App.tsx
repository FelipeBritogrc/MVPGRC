
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Careers from "./pages/Careers";
import Ethics from "./pages/Ethics";
import ClubePage from "./pages/ClubePage";
import History from "./pages/History";
import Newsletter from "./pages/Newsletter";
import NoticiaDetalhada from "./pages/NoticiaDetalhada";
import Brands from "./pages/Brands";
import Apps from "./pages/Apps";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/ethics" element={<Ethics />} />
          <Route path="/clube/:id" element={<ClubePage />} />
          <Route path="/history" element={<History />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/noticias/:id" element={<NoticiaDetalhada />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
