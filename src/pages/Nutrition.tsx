
import React from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Helmet } from "react-helmet-async";

const Nutrition = () => {
  return (
    <MainLayout>
      <Helmet>
        <title>Nutrition Articles | FitFreeze</title>
        <meta 
          name="description" 
          content="Discover science-backed nutrition plans and advice from certified experts to help you achieve your health goals." 
        />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <h1 className="text-4xl font-bold mb-6 text-gradient">Nutrition</h1>
        
        <p className="text-lg mb-8">
          Explore our comprehensive collection of nutrition articles, diet plans, and expert advice
          to help you make informed decisions about your dietary needs.
        </p>
        
        {/* Placeholder for article listing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-card rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
            <p className="text-muted-foreground">
              We're currently working on bringing you high-quality nutrition content.
              Check back soon for insightful articles and guides!
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Nutrition;
