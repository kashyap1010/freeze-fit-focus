import React from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedArticles } from "@/components/home/FeaturedArticles";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <MainLayout>
      <Helmet>
        <title>FreezeFitFocus - Science-backed Fitness & Health Optimization</title>
        <meta 
          name="description" 
          content="Discover evidence-based fitness programs and health optimization strategies designed to enhance your physical and mental performance." 
        />
        <meta property="og:title" content="FreezeFitFocus - Science-backed Fitness & Health Optimization" />
        <meta property="og:description" content="Evidence-based fitness programs and health optimization strategies to enhance physical and mental performance." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/images/home-hero.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="keywords" content="fitness science, health optimization, physical performance, mental performance" />
        <link rel="canonical" href="/" />
      </Helmet>
      <HeroSection />
      <FeaturedArticles />
      <CategoryGrid />
      <NewsletterSection />
    </MainLayout>
  );
};

export default Index;
