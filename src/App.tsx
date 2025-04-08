import React, { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Nutrition from "./pages/Nutrition";
import Health from "./pages/Health";
import Fitness from "./pages/Fitness";
import Exercise from "./pages/Exercise";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";
import Subscribe from "./pages/Subscribe";
import AllBlogs from "./pages/AllBlogs";
import { HelmetProvider } from "react-helmet-async";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import TermsOfService from "./pages/legal/TermsOfService";
import MedicalDisclaimer from "./pages/legal/MedicalDisclaimer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { ParallaxProvider } from 'react-scroll-parallax';
import AOS from 'aos';
import 'aos/dist/aos.css';

const queryClient = new QueryClient();

const App = () => {
  // Initialize AOS animation library
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      offset: 100,
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ParallaxProvider>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/nutrition" element={<Nutrition />} />
                <Route path="/health" element={<Health />} />
                <Route path="/fitness" element={<Fitness />} />
                <Route path="/exercise" element={<Exercise />} />
                
                <Route path="/blogs" element={<AllBlogs />} />
                <Route path="/:category/:slug" element={<BlogPost />} />
                
                <Route path="/subscribe" element={<Subscribe />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsOfService />} />
                <Route path="/disclaimer" element={<MedicalDisclaimer />} />

                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </ParallaxProvider>
          </BrowserRouter>
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default App;
