
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Post, getFeaturedPosts } from "@/lib/mdx-utils";

interface ArticleCardProps {
  article: Post;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={article.frontmatter.featuredImage}
          alt={article.frontmatter.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <Badge className="absolute top-4 left-4 bg-primary hover:bg-primary/90">
          {article.frontmatter.category}
        </Badge>
      </div>
      <CardHeader className="p-4 pb-2">
        <Link to={`/${article.category}/${article.slug}`}>
          <CardTitle className="text-xl group-hover:text-primary transition-colors">
            {article.frontmatter.title}
          </CardTitle>
        </Link>
        <CardDescription className="text-sm text-muted-foreground">
          {`${Math.ceil(article.frontmatter.description.length / 100)} min read`}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-muted-foreground text-sm line-clamp-2">
          {article.frontmatter.description}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src={article.frontmatter.authorAvatar} alt={article.frontmatter.author} />
            <AvatarFallback>{article.frontmatter.author.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium leading-none">{article.frontmatter.author}</p>
            <p className="text-xs text-muted-foreground">{article.frontmatter.authorTitle}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export const FeaturedArticles = () => {
  // Get the featured articles
  const featuredArticles = getFeaturedPosts(3);

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
          {featuredArticles.map((article, index) => (
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
