import React, { useMemo } from "react";
import { BlogLayout } from "@/components/layout/BlogLayout";
import { useParams, Navigate } from "react-router-dom";
import { Callout } from "@/components/mdx/components/Callout";
import { InfoBox } from "@/components/mdx/components/InfoBox";
import { ProsConsBox } from "@/components/mdx/components/ProsConsBox";
import { QuoteBlock } from "@/components/mdx/components/QuoteBlock";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { usePost } from "@/lib/mdx-utils";

const BlogPost = () => {
  const { category, slug } = useParams<{ category: string; slug: string }>();
  const { post, isLoading, error } = usePost(category || "", slug || "");

  // Define custom components for MDX rendering
  const components = useMemo(() => ({
    InfoBox,
    Callout,
    ProsConsBox,
    QuoteBlock,
    h1: (props: any) => <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />,
    h2: (props: any) => <h2 className="text-2xl font-bold mt-6 mb-3" {...props} />,
    h3: (props: any) => <h3 className="text-xl font-bold mt-5 mb-2" {...props} />,
    p: (props: any) => <p className="mb-4" {...props} />,
    ul: (props: any) => <ul className="list-disc ml-6 mb-4" {...props} />,
    ol: (props: any) => <ol className="list-decimal ml-6 mb-4" {...props} />,
    li: (props: any) => <li className="mb-1" {...props} />,
    a: (props: any) => <a className="text-primary hover:underline" {...props} />,
  }), []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error || !post) {
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
          src={frontmatter.featuredImage || "/images/placeholder.jpg"} 
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

      <div className="prose prose-lg max-w-none">
        <h1 className="text-3xl font-bold mb-6">{frontmatter.title}</h1>
        <p className="text-lg text-muted-foreground mb-8">{frontmatter.description}</p>

        {/* Render specific content based on slug */}
        {slug === "greens-powder-guide" && (
          <>
            <InfoBox title="What are Greens Powders?" variant="info">
              Greens powders are dietary supplements made from dried and powdered vegetables, fruits, algae, and other plant-based ingredients. They're designed to provide a concentrated source of vitamins, minerals, and antioxidants.
            </InfoBox>

            <h2>Benefits of Greens Powders</h2>
            <p>Greens powders offer several potential health benefits, though it's important to note that they should supplement, not replace, whole foods in your diet.</p>

            <h3>1. Increased Nutrient Intake</h3>
            <p>A quality greens powder can help bridge nutritional gaps in your diet, providing vitamins, minerals, and plant compounds that you might not get enough of from your regular meals.</p>

            <h3>2. Antioxidant Support</h3>
            <p>Many ingredients in greens powders are rich in antioxidants, which help combat oxidative stress and support overall health.</p>

            <h3>3. Digestive Health</h3>
            <p>Many greens powders contain probiotics and digestive enzymes that may support gut health and improve digestion.</p>

            <QuoteBlock author="Dr. Sarah Johnson" source="Clinical Nutrition Journal">
              While greens powders shouldn't replace fresh vegetables and fruits, they can be valuable supplements for those struggling to meet their daily vegetable intake requirements.
            </QuoteBlock>

            <h2>Potential Drawbacks</h2>
            <ProsConsBox 
              pros={[
                "Convenient way to increase nutrient intake",
                "May help fill nutritional gaps",
                "Portable and easy to use when traveling",
                "Generally contain a wide range of nutrients",
                "Can be mixed into various foods and beverages"
              ]}
              cons={[
                "Can be expensive compared to whole foods",
                "Some products contain added sugars or fillers",
                "May interact with certain medications",
                "Not regulated as strictly as pharmaceuticals",
                "Can't replicate all the benefits of whole vegetables"
              ]}
            />

            <h2>How to Choose the Right Greens Powder</h2>
            <p>With countless options on the market, choosing the right greens powder can be overwhelming. Here are some factors to consider:</p>

            <h3>Ingredients</h3>
            <p>Look for products with a transparent ingredient list. Avoid those with artificial additives, fillers, or excessive sugars.</p>

            <h3>Third-Party Testing</h3>
            <p>Choose products that have been tested by third-party organizations for quality and purity.</p>

            <h3>Nutritional Profile</h3>
            <p>Review the nutritional information to ensure the product provides a substantial amount of the nutrients you're seeking.</p>

            <InfoBox variant="warning">
              Always consult with your healthcare provider before adding any supplement to your routine, especially if you're pregnant, nursing, or taking medications.
            </InfoBox>
          </>
        )}

        {slug === "superfoods-immune-system" && (
          <>
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

            <h3>4. Ginger</h3>
            <p>Ginger has powerful anti-inflammatory and antioxidant effects, can help reduce chronic pain, and may even help fight infections.</p>

            <h3>5. Spinach</h3>
            <p>Rich in vitamin C, numerous antioxidants, and beta-carotene, spinach is healthiest when cooked as little as possible to retain its nutrients.</p>

            <h3>6. Yogurt</h3>
            <p>Look for yogurts that contain live and active cultures, which may stimulate your immune system to help fight diseases.</p>

            <h3>7. Almonds</h3>
            <p>Vitamin E, which is abundant in almonds, is key to a healthy immune system. It's a fat-soluble vitamin, which means it requires the presence of fat to be absorbed properly.</p>

            <h3>8. Turmeric</h3>
            <p>The main active component in turmeric, curcumin, has been shown to possess anti-inflammatory and immune-boosting properties.</p>

            <h3>9. Green Tea</h3>
            <p>Both green and black teas are packed with flavonoids, a type of antioxidant. Green tea also contains high levels of epigallocatechin gallate (EGCG), another powerful antioxidant.</p>

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
          </>
        )}

        {/* Generic content for other articles */}
        {slug !== "greens-powder-guide" && slug !== "superfoods-immune-system" && (
          <>
            <h2>About This Article</h2>
            <p>
              This article was written by {frontmatter.author}, {frontmatter.authorTitle}.
              It covers topics related to {frontmatter.category.toLowerCase()} and was published on {frontmatter.date}.
            </p>

            <Callout>
              This article is currently being expanded with more detailed content. Check back soon for the complete version.
            </Callout>

            <h3>Topics Covered</h3>
            <ul className="list-disc ml-6 mb-4">
              {frontmatter.tags.map((tag, index) => (
                <li key={index} className="mb-1">{tag}</li>
              ))}
            </ul>

            <InfoBox title="Stay Updated" variant="info">
              We're constantly updating our content with the latest research and information. Subscribe to our newsletter to be notified when this article is updated.
            </InfoBox>
          </>
        )}
      </div>
    </BlogLayout>
  );
};

export default BlogPost;
