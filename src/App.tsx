
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import Console from "./pages/Console";
import Strategy from "./pages/Strategy";
import Risk from "./pages/Risk";
import Events from "./pages/Events";
import Data from "./pages/Data";
import Reports from "./pages/Reports";
import Broker from "./pages/Broker";
import NotFoundPage from "./pages/NotFoundPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/console" element={<Console />} />
            <Route path="/strategy" element={<Strategy />} />
            <Route path="/risk" element={<Risk />} />
            <Route path="/events" element={<Events />} />
            <Route path="/data" element={<Data />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/broker" element={<Broker />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
