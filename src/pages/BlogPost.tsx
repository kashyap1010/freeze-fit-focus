import React from "react";
import { BlogLayout } from "@/components/layout/BlogLayout";
import { useParams, Navigate } from "react-router-dom";
import { Callout } from "@/components/mdx/components/Callout";
import { InfoBox } from "@/components/mdx/components/InfoBox";
import { CodeBlock } from "@/components/mdx/components/CodeBlock";
import { ProsConsBox } from "@/components/mdx/components/ProsConsBox";
import { QuoteBlock } from "@/components/mdx/components/QuoteBlock";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { usePost } from "@/lib/mdx-utils";

const BlogPost = () => {
  const { category, slug } = useParams<{ category: string; slug: string }>();
  const { post, isLoading } = usePost(category || "", slug || "");

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!post) {
    return <Navigate to="/not-found" />;
  }

  const { frontmatter } = post;

  return (
    <BlogLayout
      title={frontmatter.title}
      description={frontmatter.description}
      category={frontmatter.category}
      slug={slug || ""}
    >
      <div className="mb-8">
        <img 
          src={frontmatter.featuredImage} 
          alt={frontmatter.title} 
          className="w-full h-64 md:h-96 object-cover rounded-xl mb-6"
        />
        <div className="flex flex-col md:flex-row md:items-center mb-6 gap-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src={frontmatter.authorAvatar} alt={frontmatter.author} />
            <AvatarFallback>{frontmatter.author.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium text-lg">{frontmatter.author}</p>
            <p className="text-muted-foreground">{frontmatter.authorTitle}</p>
          </div>
          <div className="md:ml-auto text-muted-foreground">
            Published on {frontmatter.date}
          </div>
        </div>
      </div>

      {slug === "superfoods-immune-system" && (
        <div className="prose prose-lg max-w-none">
          <InfoBox title="What are Superfoods?" variant="info">
            Superfoods are nutrient-rich foods considered to be especially beneficial for health and well-being. They're packed with vitamins, minerals, antioxidants, and other compounds that support optimal body function.
          </InfoBox>

          <h2>Understanding Immune System Support</h2>
          <p>Your immune system is your body's natural defense mechanism against harmful pathogens. While no single food can prevent illness, a nutrient-rich diet can help support immune function and potentially reduce the risk of illness.</p>

          <QuoteBlock author="Dr. Andrew Weil" source="Eating Well for Optimum Health">
            The food you eat can be either the safest and most powerful form of medicine or the slowest form of poison.
          </QuoteBlock>

          <h2>Top 10 Immune-Boosting Superfoods</h2>
          <p>Here are ten scientifically-validated superfoods that can help strengthen your immune system:</p>

          <h3>1. Citrus Fruits</h3>
          <InfoBox variant="success">
            Citrus fruits like oranges, grapefruits, and lemons are high in vitamin C, which may help increase white blood cell production—key players in fighting infections.
          </InfoBox>

          <h3>2. Berries</h3>
          <p>Berries contain powerful antioxidants called anthocyanins that have immune-supporting properties. Blueberries, strawberries, and blackberries are particularly beneficial.</p>

          <h3>3. Garlic</h3>
          <Callout>
            Garlic contains compounds like allicin that have been shown to boost the disease-fighting response of white blood cells when they encounter viruses.
          </Callout>

          <h3>10. Broccoli</h3>
          <ProsConsBox 
            pros={[
              "Supercharged with vitamins A, C, and E",
              "Rich in antioxidants and fiber",
              "Contains many other nutrients that support immunity",
              "Versatile in cooking applications",
              "Relatively affordable year-round"
            ]}
            cons={[
              "May cause digestive discomfort for some people",
              "Loses nutrients if overcooked",
              "Some people dislike the taste",
              "May interact with blood-thinning medications",
              "Not suitable for people with certain thyroid conditions in large amounts"
            ]}
          />

          <h2>How to Incorporate These Superfoods Into Your Diet</h2>
          <CodeBlock language="markdown">
{`# Simple Immune-Boosting Smoothie

- 1 cup spinach
- 1/2 cup blueberries
- 1/4 cup plain yogurt
- 1 tbsp almond butter
- 1/2 inch fresh ginger
- Water and ice as needed
- Optional: 1 tsp turmeric powder

Blend all ingredients until smooth.`}
          </CodeBlock>
        </div>
      )}

      {slug !== "superfoods-immune-system" && (
        <div className="prose prose-lg max-w-none">
          <p>This content would be dynamically loaded from the MDX file in a full implementation. For now, please check out our featured article on <a href="/health/superfoods-immune-system">Immune-Boosting Superfoods</a>.</p>
          
          <p>Title: {frontmatter.title}</p>
          <p>Description: {frontmatter.description}</p>
          <p>Author: {frontmatter.author}</p>
          <p>Category: {frontmatter.category}</p>
          
          <h2>Tags</h2>
          <ul>
            {frontmatter.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>
      )}
    </BlogLayout>
  );
};

export default BlogPost;
