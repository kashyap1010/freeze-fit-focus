
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ArticleProps {
  title: string;
  description: string;
  category: string;
  image: string;
  author: {
    name: string;
    avatar: string;
    credentials: string;
  };
  readTime: string;
  slug: string;
}

const articles: ArticleProps[] = [
  {
    title: "The Ultimate Guide to Greens Powder",
    description: "Discover everything you need to know about greens powders, their benefits, potential drawbacks, and how to choose the right one for your health needs.",
    category: "Health",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    author: {
      name: "Dr. Sarah Johnson",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      credentials: "Nutritionist, PhD",
    },
    readTime: "8 min read",
    slug: "greens-powder-guide",
  },
  {
    title: "10 Science-Backed Superfoods to Boost Your Immune System",
    description: "Discover the top 10 scientifically proven superfoods that can strengthen your immune system and help protect your body against illness.",
    category: "Health",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    author: {
      name: "Dr. Mark Thompson",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      credentials: "Immunologist, MD",
    },
    readTime: "10 min read",
    slug: "superfoods-immune-system",
  },
  {
    title: "Understanding Macronutrients: A Beginner's Guide",
    description: "Learn about the three main macronutrients—proteins, carbohydrates, and fats—and how to balance them for optimal health and fitness.",
    category: "Health",
    image: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    author: {
      name: "Dr. Lisa Chen",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      credentials: "Clinical Nutritionist, PhD",
    },
    readTime: "7 min read",
    slug: "macronutrients-guide",
  },
];

const ArticleCard = ({ article }: { article: ArticleProps }) => {
  return (
    <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <Badge className="absolute top-4 left-4 bg-primary hover:bg-primary/90">
          {article.category}
        </Badge>
      </div>
      <CardHeader className="p-4 pb-2">
        <Link to={`/${article.category.toLowerCase()}/${article.slug}`}>
          <CardTitle className="text-xl group-hover:text-primary transition-colors">
            {article.title}
          </CardTitle>
        </Link>
        <CardDescription className="text-sm text-muted-foreground">
          {article.readTime}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-muted-foreground text-sm line-clamp-2">
          {article.description}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src={article.author.avatar} alt={article.author.name} />
            <AvatarFallback>{article.author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium leading-none">{article.author.name}</p>
            <p className="text-xs text-muted-foreground">{article.author.credentials}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export const FeaturedArticles = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Featured Articles</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Science-backed insights to guide your fitness journey
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <ArticleCard key={index} article={article} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/health" className="inline-flex items-center text-primary font-medium hover:underline">
            Browse all health articles
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
