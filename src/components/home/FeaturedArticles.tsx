import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useFeaturedPosts } from "@/lib/mdx-utils";

export const FeaturedArticles = () => {
  const { posts, isLoading, error } = useFeaturedPosts(3);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-14">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-3">Featured Articles</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Discover our most popular science-backed content to help you on your fitness journey
            </p>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0 rounded-lg px-5 border-primary text-primary hover:bg-primary/5">
            <Link to="/blogs" className="flex items-center gap-2">
              View All Articles <ArrowRight className="h-4 w-4" />
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
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col bg-white border-gray-200 rounded-xl">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.frontmatter.featuredImage || "/images/placeholder.jpg"} 
                    alt={post.frontmatter.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <Badge className="absolute top-4 left-4 bg-primary hover:bg-primary/90 text-white text-xs px-3 py-1 rounded-full font-medium">
                    {post.category}
                  </Badge>
                </div>
                <CardHeader className="p-6 pb-2 flex-grow">
                  <Link to={`/${post.category}/${post.slug}`}>
                    <CardTitle className="text-xl font-bold hover:text-primary transition-colors line-clamp-2">
                      {post.frontmatter.title}
                    </CardTitle>
                  </Link>
                  <CardDescription className="text-sm text-gray-500 flex items-center mt-2">
                    <Clock className="h-3.5 w-3.5 mr-1 text-gray-400" />
                    {`${Math.ceil(post.frontmatter.description.length / 100)} min read`}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-2">
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {post.frontmatter.description}
                  </p>
                </CardContent>
                <CardFooter className="p-6 pt-3 flex items-center mt-auto border-t border-gray-100">
                  <Link to={`/${post.category}/${post.slug}`} className="ml-auto text-primary hover:text-primary/90 transition-colors text-sm font-medium flex items-center gap-1">
                    Read More <ArrowRight className="h-3 w-3" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
