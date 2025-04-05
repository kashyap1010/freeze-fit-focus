import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useFeaturedPosts } from "@/lib/mdx-utils";

export const FeaturedArticles = () => {
  const { posts, isLoading, error } = useFeaturedPosts(3);

  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Articles</h2>
            <p className="text-muted-foreground max-w-2xl">
              Discover our most popular science-backed content to help you on your fitness journey
            </p>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0">
            <Link to="/health">
              View All Articles <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : error ? (
          <div className="text-center py-10">
            <p className="text-muted-foreground">Unable to load featured articles. Please try again later.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.frontmatter.featuredImage || "/images/placeholder.jpg"} 
                    alt={post.frontmatter.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                  />
                  <Badge className="absolute top-4 left-4 bg-primary hover:bg-primary/90">
                    {post.category}
                  </Badge>
                </div>
                <CardHeader className="p-4 pb-2 flex-grow">
                  <Link to={`/${post.category}/${post.slug}`}>
                    <CardTitle className="text-xl hover:text-primary transition-colors">
                      {post.frontmatter.title}
                    </CardTitle>
                  </Link>
                  <CardDescription className="text-sm text-muted-foreground">
                    {`${Math.ceil(post.frontmatter.description.length / 100)} min read`}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {post.frontmatter.description}
                  </p>
                </CardContent>
                <CardFooter className="p-4 pt-2 flex items-center gap-2 mt-auto border-t">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={post.frontmatter.authorAvatar} alt={post.frontmatter.author} />
                    <AvatarFallback>{post.frontmatter.author.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium leading-none">{post.frontmatter.author}</p>
                    <p className="text-xs text-muted-foreground">{post.frontmatter.date}</p>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
