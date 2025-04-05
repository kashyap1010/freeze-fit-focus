
import React from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Helmet } from "react-helmet-async";
import { usePosts } from "@/lib/mdx-utils";
import { CategoryArticles } from "@/components/CategoryArticles";

const Health = () => {
  const { posts, isLoading } = usePosts("health");

  return (
    <MainLayout>
      <Helmet>
        <title>Health Articles | FitFreeze</title>
        <meta name="description" content="Explore our health articles on nutrition, immune support, sleep, and wellness." />
      </Helmet>

      <CategoryArticles
        posts={posts}
        isLoading={isLoading}
        title="Health Articles"
        description="Explore our comprehensive collection of articles on nutrition, immune support, sleep optimization, and overall wellness."
      />
    </MainLayout>
  );
};

export default Health;
