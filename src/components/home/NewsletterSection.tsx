import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const NewsletterSection = () => {
  return (
    <section className="py-16 bg-primary/5 border-y">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Get Your Personalized Fitness Plan
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to receive your free personalized fitness plan along with weekly tips, workout ideas, and nutrition advice to help you achieve your goals.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link to="/subscribe" className="flex items-center">
              Get Your Free Plan <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Join 50,000+ members who've transformed their health with our science-backed approach
          </p>
        </div>
      </div>
    </section>
  );
};
