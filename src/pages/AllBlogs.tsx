import React, { useEffect, useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Helmet } from "react-helmet-async";
import { usePosts } from "@/lib/mdx-utils";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { SearchIcon, FilterIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { Post } from "@/lib/mdx-utils";

const AllBlogs = () => {
  const { posts, isLoading } = usePosts();
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  // Filter posts based on search term and category
  useEffect(() => {
    let result = [...posts];
    
    // Apply search filter
    if (searchTerm) {
      const lowerSearchTerm = searchTerm.toLowerCase();
      result = result.filter(post => 
        post.frontmatter.title.toLowerCase().includes(lowerSearchTerm) ||
        post.frontmatter.description.toLowerCase().includes(lowerSearchTerm) ||
        post.frontmatter.tags.some(tag => tag.toLowerCase().includes(lowerSearchTerm))
      );
    }
    
    // Apply category filter
    if (categoryFilter !== "all") {
      result = result.filter(post => 
        post.category.toLowerCase() === categoryFilter.toLowerCase()
      );
    }
    
    setFilteredPosts(result);
    setCurrentPage(1); // Reset to first page when filters change
  }, [posts, searchTerm, categoryFilter]);

  // Get all unique categories
  const categories = ["all", ...new Set(posts.map(post => post.category.toLowerCase()))];
  
  // Get current posts for pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Handle pagination
  const paginate = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <MainLayout>
      <Helmet>
        <title>All Articles | FitFreeze</title>
        <meta name="description" content="Browse all our articles on health, fitness, nutrition, and exercise." />
      </Helmet>

      <section className="py-16 container">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">All Articles</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Explore our comprehensive collection of articles covering health, fitness, nutrition, and exercise topics.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input 
              placeholder="Search articles..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9"
            />
          </div>
          <div className="w-full md:w-64">
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger>
                <div className="flex items-center">
                  <FilterIcon className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Filter by category" />
                </div>
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="text-center py-16 bg-muted/30 rounded-lg">
            <div className="text-5xl mb-4">🔍</div>
            <h2 className="text-2xl font-bold mb-2">No articles found</h2>
            <p className="text-muted-foreground mb-6">
              We couldn't find any articles matching your search criteria.
            </p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm("");
                setCategoryFilter("all");
              }}
            >
              Clear Filters
            </Button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentPosts.map((post, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.frontmatter.featuredImage || "/images/placeholder.jpg"} 
                      alt={post.frontmatter.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                    />
                    <Badge className="absolute top-4 left-4 bg-primary hover:bg-primary/90">
                      {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
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

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-12">
                <div className="flex items-center gap-1">
                  <Button 
                    variant="outline" 
                    size="icon"
                    disabled={currentPage === 1}
                    onClick={() => paginate(currentPage - 1)}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => {
                    // Show only current page, first, last, and pages around current
                    if (
                      pageNumber === 1 || 
                      pageNumber === totalPages || 
                      (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                    ) {
                      return (
                        <Button
                          key={pageNumber}
                          variant={currentPage === pageNumber ? "default" : "outline"}
                          size="sm"
                          onClick={() => paginate(pageNumber)}
                          className="min-w-8"
                        >
                          {pageNumber}
                        </Button>
                      );
                    } 
                    // Show ellipsis for gaps
                    else if (
                      (pageNumber === 2 && currentPage > 3) || 
                      (pageNumber === totalPages - 1 && currentPage < totalPages - 2)
                    ) {
                      return <span key={pageNumber} className="px-2">...</span>;
                    }
                    return null;
                  })}
                  
                  <Button 
                    variant="outline" 
                    size="icon"
                    disabled={currentPage === totalPages}
                    onClick={() => paginate(currentPage + 1)}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* Results summary */}
            <div className="text-center text-sm text-muted-foreground mt-4">
              Showing {indexOfFirstPost + 1} - {Math.min(indexOfLastPost, filteredPosts.length)} of {filteredPosts.length} articles
            </div>
          </>
        )}
      </section>
    </MainLayout>
  );
};

export default AllBlogs; 