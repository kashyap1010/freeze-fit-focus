
import React from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Helmet } from "react-helmet-async";
import { usePosts } from "@/lib/mdx-utils";
import { CategoryArticles } from "@/components/CategoryArticles";

const Nutrition = () => {
  // We can filter health posts that have the "nutrition" tag for now
  const { posts: healthPosts, isLoading } = usePosts("health");
  const nutritionPosts = healthPosts.filter(post => 
    post.frontmatter.tags.includes("nutrition")
  );

  return (
    <MainLayout>
      <Helmet>
        <title>Nutrition Articles | FitFreeze</title>
        <meta name="description" content="Explore evidence-based nutrition articles for better health and performance." />
      </Helmet>

      <CategoryArticles
        posts={nutritionPosts}
        isLoading={isLoading}
        title="Nutrition Articles"
        description="Discover evidence-based nutrition strategies, dietary insights, and meal planning tips for optimal health and athletic performance."
      />
    </MainLayout>
  );
};

export default Nutrition;
