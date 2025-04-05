
import React from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Helmet } from "react-helmet-async";
import { usePosts } from "@/lib/mdx-utils";
import { CategoryArticles } from "@/components/CategoryArticles";

const Fitness = () => {
  const { posts, isLoading } = usePosts("fitness");

  return (
    <MainLayout>
      <Helmet>
        <title>Fitness Articles | FitFreeze</title>
        <meta name="description" content="Discover training methodologies, HIIT workouts, and recovery techniques to optimize your fitness journey." />
      </Helmet>

      <CategoryArticles
        posts={posts}
        isLoading={isLoading}
        title="Fitness Articles"
        description="Discover effective training methodologies, high-intensity interval training workouts, and recovery techniques to optimize your fitness journey."
      />
    </MainLayout>
  );
};

export default Fitness;
