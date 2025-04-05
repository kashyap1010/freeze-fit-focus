
import React from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Helmet } from "react-helmet-async";
import { usePosts } from "@/lib/mdx-utils";
import { CategoryArticles } from "@/components/CategoryArticles";

const Exercise = () => {
  const { posts, isLoading } = usePosts("exercise");

  return (
    <MainLayout>
      <Helmet>
        <title>Exercise Articles | FitFreeze</title>
        <meta name="description" content="Learn proper exercise techniques, form guides, and workout routines for effective and safe training." />
      </Helmet>

      <CategoryArticles
        posts={posts}
        isLoading={isLoading}
        title="Exercise Articles"
        description="Master proper exercise techniques, follow comprehensive form guides, and discover effective workout routines for safe and efficient training."
      />
    </MainLayout>
  );
};

export default Exercise;
