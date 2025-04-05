
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0 w-full h-full bg-dark/60 z-10"></div>
      <div className="absolute inset-0 w-full h-full">
        <div className="bg-gradient-to-r from-dark via-dark/70 to-dark/50 absolute inset-0 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1571019613914-85f342c6a11e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')" 
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="container relative z-20 pt-24 pb-32 md:pt-32 md:pb-40">
        <div className="max-w-3xl space-y-6 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-gradient">Science-backed</span> Fitness For Real Results
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl">
            Discover expert-crafted workouts, nutrition plans, and tools designed to help you reach your fitness goals faster and more effectively.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white"
            >
              Get Your Free Plan
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white/10"
            >
              <Play className="mr-2 h-4 w-4" />
              Watch Success Stories
            </Button>
          </div>
          <p className="text-sm opacity-75">
            Join 50,000+ members who've transformed their health with our science-backed approach
          </p>
        </div>
      </div>
    </section>
  );
};
