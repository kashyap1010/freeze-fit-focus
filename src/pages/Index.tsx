
import React from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedArticles } from "@/components/home/FeaturedArticles";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <MainLayout>
      <Helmet>
        <title>FitFreeze - Science-backed Fitness Content & Tools</title>
        <meta 
          name="description" 
          content="Discover science-backed fitness programs, nutrition plans, and workout tools designed by certified experts to help you achieve your health goals." 
        />
      </Helmet>
      <HeroSection />
      <FeaturedArticles />
      <CategoryGrid />
      <NewsletterSection />
    </MainLayout>
  );
};

export default Index;
