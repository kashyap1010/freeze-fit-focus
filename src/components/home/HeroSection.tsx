import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-background -z-10" />
      
      {/* Abstract shapes */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
      
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gradient block">Freeze.</span>
                <span className="block">Fit.</span>
                <span className="block">Focus.</span>
              </h1>
              <p className="mt-6 text-xl text-muted-foreground max-w-md">
                Science-backed fitness programs, nutrition advice, and wellness strategies for a balanced, healthier life.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/subscribe">Get Your Free Plan</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/exercise">Explore Workouts</Link>
              </Button>
            </div>
            
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className="w-10 h-10 rounded-full border-2 border-background overflow-hidden"
                    style={{
                      backgroundImage: `url(https://randomuser.me/api/portraits/${i % 2 === 0 ? 'women' : 'men'}/${i + 30}.jpg)`,
                      backgroundSize: 'cover'
                    }}
                  />
                ))}
              </div>
              <div className="text-sm">
                <span className="font-medium">1,000+</span> people joined this month
              </div>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl transform -rotate-2">
              <img 
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Person fitness training"
                className="object-cover w-full h-full"
              />
            </div>
            
            {/* Feature cards */}
            <div className="absolute -bottom-6 -left-12 bg-card shadow-lg rounded-lg p-4 w-48 transform rotate-3">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-green-500/20 w-8 h-8 flex items-center justify-center text-green-600">✓</div>
                <div className="font-medium">Proven Results</div>
              </div>
            </div>
            
            <div className="absolute -top-8 -right-8 bg-card shadow-lg rounded-lg p-4 w-48 transform -rotate-3">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-blue-500/20 w-8 h-8 flex items-center justify-center text-blue-600">🔬</div>
                <div className="font-medium">Science-Backed</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Features list */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-20">
          {[
            { icon: "🏋️", title: "Workouts", description: "Programs for all levels" },
            { icon: "🥗", title: "Nutrition", description: "Meal plans & recipes" },
            { icon: "🧠", title: "Wellness", description: "Mind-body balance" },
            { icon: "📊", title: "Progress", description: "Track your journey" }
          ].map((feature, i) => (
            <div key={i} className="text-center space-y-2">
              <div className="text-3xl">{feature.icon}</div>
              <h3 className="font-bold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
