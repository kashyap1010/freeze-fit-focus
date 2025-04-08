import React from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Helmet } from "react-helmet-async";
import { usePosts } from "@/lib/mdx-utils";
import { CategoryArticles } from "@/components/CategoryArticles";

const Fitness: React.FC = () => {
  const { posts: fitnessPosts, isLoading } = usePosts("fitness");

  return (
    <MainLayout>
      <Helmet>
        <title>Fitness & Training Articles | FreezeFitFocus</title>
        <meta name="description" content="Access science-backed fitness articles on strength training, cardio techniques, workout programming, and effective recovery methods for optimal physical performance." />
        <meta property="og:title" content="Fitness & Training Articles | FreezeFitFocus" />
        <meta property="og:description" content="Science-backed workout routines, strength training programs, cardio techniques, and recovery strategies for your fitness goals." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/fitness" />
        <meta property="og:image" content="/images/fitness-featured.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="keywords" content="strength training, workout programs, cardio techniques, fitness recovery, HIIT workouts, mobility exercises" />
        <link rel="canonical" href="/fitness" />
      </Helmet>
      
      <CategoryArticles
        posts={fitnessPosts}
        isLoading={isLoading}
        title="Fitness & Training Articles"
        description="Discover science-backed workout routines, strength training programs, cardio techniques, and recovery strategies designed to help you achieve your fitness goals efficiently and safely."
      />
    </MainLayout>
  );
};

export default Fitness;
