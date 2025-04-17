
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import LimpezaCharacas from "./pages/services/LimpezaCharacas";
import ConservacaoLotes from "./pages/services/ConservacaoLotes";
import PinturaMuros from "./pages/services/PinturaMuros";
import PinturaCercas from "./pages/services/PinturaCercas";
import PinturaGrades from "./pages/services/PinturaGrades";
import ManutencaoJardins from "./pages/services/ManutencaoJardins";
import PlantioMudas from "./pages/services/PlantioMudas";
import ReparosEletricos from "./pages/services/ReparosEletricos";
import ReparosHidraulicos from "./pages/services/ReparosHidraulicos";
import SerralheriaLeve from "./pages/services/SerralheriaLeve";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/servicos" element={<Services />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/servicos/limpeza-de-chacaras" element={<LimpezaCharacas />} />
          <Route path="/servicos/conservacao-de-lotes" element={<ConservacaoLotes />} />
          <Route path="/servicos/pintura-de-muros-e-fachadas" element={<PinturaMuros />} />
          <Route path="/servicos/pintura-de-cercas" element={<PinturaCercas />} />
          <Route path="/servicos/pintura-de-grades-e-portoes" element={<PinturaGrades />} />
          <Route path="/servicos/manutencao-de-jardins" element={<ManutencaoJardins />} />
          <Route path="/servicos/plantio-de-mudas" element={<PlantioMudas />} />
          <Route path="/servicos/reparos-eletricos" element={<ReparosEletricos />} />
          <Route path="/servicos/reparos-hidraulicos" element={<ReparosHidraulicos />} />
          <Route path="/servicos/serralheria-leve" element={<SerralheriaLeve />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
