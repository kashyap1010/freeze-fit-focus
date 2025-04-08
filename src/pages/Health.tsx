import React from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Helmet } from "react-helmet-async";
import { usePosts } from "@/lib/mdx-utils";
import { CategoryArticles } from "@/components/CategoryArticles";

const Health: React.FC = () => {
  const { posts: healthPosts, isLoading } = usePosts("health");

  return (
    <MainLayout>
      <Helmet>
        <title>Health & Nutrition Articles | FreezeFitFocus</title>
        <meta name="description" content="Discover evidence-based health articles covering nutrition, sleep optimization, stress management, and holistic wellness approaches for optimal wellbeing." />
        <meta property="og:title" content="Health & Nutrition Articles | FreezeFitFocus" />
        <meta property="og:description" content="Science-backed insights on nutrition, sleep optimization, and stress management to support your fitness journey." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/health" />
        <meta property="og:image" content="/images/health-featured.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="keywords" content="nutrition guides, sleep optimization, stress management, healthy eating, wellness tips, diet plans" />
        <link rel="canonical" href="/health" />
      </Helmet>
      
      <CategoryArticles
        posts={healthPosts}
        isLoading={isLoading}
        title="Health & Nutrition Articles"
        description="Discover evidence-based insights on nutrition, sleep optimization, stress management, and holistic wellness approaches to support your fitness journey and overall wellbeing."
      />
    </MainLayout>
  );
};

export default Health;
