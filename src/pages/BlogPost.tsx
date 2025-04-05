
import React, { useState, useEffect } from "react";
import { BlogLayout } from "@/components/layout/BlogLayout";
import { useParams } from "react-router-dom";
import { Callout } from "@/components/mdx/components/Callout";
import { InfoBox } from "@/components/mdx/components/InfoBox";
import { CodeBlock } from "@/components/mdx/components/CodeBlock";
import { ProsConsBox } from "@/components/mdx/components/ProsConsBox";
import { QuoteBlock } from "@/components/mdx/components/QuoteBlock";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface PostData {
  title: string;
  description: string;
  date: string;
  author: string;
  authorTitle: string;
  authorAvatar: string;
  category: string;
  featuredImage: string;
  content: string;
}

// This is a temporary placeholder function until we implement server-side rendering
// In a real implementation, we would fetch the actual MDX content based on the slug
const fetchBlogPost = (category: string, slug: string): PostData => {
  // Data for "10 Science-Backed Superfoods to Boost Your Immune System"
  if (slug === "superfoods-immune-system") {
    return {
      title: "10 Science-Backed Superfoods to Boost Your Immune System",
      description: "Discover the top 10 scientifically proven superfoods that can strengthen your immune system and help protect your body against illness.",
      date: "April 10, 2023",
      author: "Dr. Mark Thompson",
      authorTitle: "Immunologist, MD",
      authorAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
      category: "Health",
      featuredImage: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      content: ""
    };
  }

  // Data for "The Ultimate Guide to Greens Powder"
  if (slug === "greens-powder-guide") {
    return {
      title: "The Ultimate Guide to Greens Powder: What You Need to Know",
      description: "Discover everything you need to know about greens powders, their benefits, potential drawbacks, and how to choose the right one for your health needs.",
      date: "April 5, 2023",
      author: "Dr. Sarah Johnson",
      authorTitle: "Nutritionist, PhD",
      authorAvatar: "https://randomuser.me/api/portraits/women/44.jpg",
      category: "Health",
      featuredImage: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      content: ""
    };
  }

  // Data for "Understanding Macronutrients"
  if (slug === "macronutrients-guide") {
    return {
      title: "Understanding Macronutrients: A Beginner's Guide",
      description: "Learn about the three main macronutrients—proteins, carbohydrates, and fats—and how to balance them for optimal health and fitness.",
      date: "April 15, 2023",
      author: "Dr. Lisa Chen",
      authorTitle: "Clinical Nutritionist, PhD",
      authorAvatar: "https://randomuser.me/api/portraits/women/68.jpg",
      category: "Health",
      featuredImage: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      content: ""
    };
  }

  // Default placeholder data for any other slug
  return {
    title: "Blog Post",
    description: "This is a blog post description",
    date: "January 1, 2023",
    author: "Author Name",
    authorTitle: "Author Title",
    authorAvatar: "https://randomuser.me/api/portraits/lego/5.jpg",
    category: category || "uncategorized",
    featuredImage: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    content: ""
  };
};

// In a real implementation, we would use a library like next-mdx-remote
// to properly render MDX content. For now, this is a simplified example.
const BlogPost = () => {
  const { category, slug } = useParams<{ category: string; slug: string }>();
  const [post, setPost] = useState<PostData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (category && slug) {
      // In a real implementation, this would be an async fetch
      const postData = fetchBlogPost(category, slug);
      setPost(postData);
      setIsLoading(false);
    }
  }, [category, slug]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <BlogLayout
      title={post.title}
      description={post.description}
      category={post.category}
      slug={slug || ""}
    >
      <div className="mb-8">
        <img 
          src={post.featuredImage} 
          alt={post.title} 
          className="w-full h-64 md:h-96 object-cover rounded-xl mb-6"
        />
        <div className="flex items-center mb-6">
          <Avatar className="h-12 w-12 mr-4">
            <AvatarImage src={post.authorAvatar} alt={post.author} />
            <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium text-lg">{post.author}</p>
            <p className="text-muted-foreground">{post.authorTitle}</p>
          </div>
          <div className="ml-auto text-muted-foreground">
            Published on {post.date}
          </div>
        </div>
      </div>

      {/* This is a placeholder for the actual MDX content */}
      {/* In a real implementation, we would render the MDX content here */}

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
        </div>
      )}
    </BlogLayout>
  );
};

export default BlogPost;
