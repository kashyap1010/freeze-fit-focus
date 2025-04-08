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
import { SearchIcon, FilterIcon, ChevronLeft, ChevronRight, ArrowRight, Clock } from "lucide-react";
import { Post } from "@/lib/mdx-utils";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

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
        <title>Knowledge Base: All Articles | FreezeFitFocus</title>
        <meta name="description" content="Explore evidence-based articles on health, fitness, nutrition, and exercise to optimize your wellness journey with science-backed insights." />
        <meta property="og:title" content="Knowledge Base: All Articles | FreezeFitFocus" />
        <meta property="og:description" content="Explore evidence-based articles on health, fitness, nutrition, and exercise to optimize your wellness journey." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/blogs" />
        <meta property="og:image" content="/images/blog-featured.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="keywords" content="fitness articles, health guides, wellness tips, exercise techniques" />
        <link rel="canonical" href="/blogs" />
      </Helmet>

      <div className="bg-gray-50 py-16 border-b border-gray-100 relative overflow-hidden">
        {/* Parallax background elements */}
        <Parallax speed={-10} className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-blue-50/50 to-transparent" />
        </Parallax>
        
        {/* Animated decorative elements */}
        <motion.div 
          className="absolute -top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.08, 0.05] 
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl -z-10"
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.05, 0.1, 0.05] 
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        <div className="container mx-auto max-w-6xl px-6">
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="inline-block rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Knowledge Base
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              All Articles
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-600 max-w-3xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Explore our comprehensive collection of evidence-based articles covering health, fitness, 
              nutrition, and exercise topics to help you on your wellness journey.
            </motion.p>
          </motion.div>

          {/* Filters */}
          <motion.div 
            className="flex flex-col md:flex-row gap-4 mt-10 bg-white p-4 rounded-xl shadow-sm border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="relative flex-1">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input 
                placeholder="Search articles..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary/20 rounded-lg"
              />
            </div>
            <div className="w-full md:w-64">
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="border-gray-200 rounded-lg">
                  <div className="flex items-center">
                    <FilterIcon className="mr-2 h-4 w-4 text-gray-500" />
                    <SelectValue placeholder="Filter by category" />
                  </div>
                </SelectTrigger>
                <SelectContent className="rounded-lg">
                  {categories.map((category) => (
                    <SelectItem key={category} value={category} className="capitalize">
                      {category === "all" ? "All Categories" : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </motion.div>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-6">
          {isLoading ? (
            <motion.div 
              className="flex justify-center py-20"
              animate={{ 
                rotate: 360 
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                ease: "linear" 
              }}
            >
              <div className="rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </motion.div>
          ) : filteredPosts.length === 0 ? (
            <motion.div 
              className="text-center py-16 bg-gray-50 rounded-lg border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-5xl mb-4">🔍</div>
              <h2 className="text-2xl font-bold mb-3">No articles found</h2>
              <p className="text-gray-600 mb-8 max-w-lg mx-auto">
                We couldn't find any articles matching your search criteria. Try adjusting your filters or search term.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchTerm("");
                    setCategoryFilter("all");
                  }}
                  className="rounded-lg px-6 py-2 border-primary text-primary hover:bg-primary/5"
                >
                  Clear Filters
                </Button>
              </motion.div>
            </motion.div>
          ) : (
            <>
              <motion.div 
                className="mb-8 flex justify-between items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-sm text-gray-600">
                  Showing <span className="font-medium">{filteredPosts.length}</span> articles
                  {categoryFilter !== "all" && (
                    <span> in <span className="text-primary font-medium capitalize">{categoryFilter}</span></span>
                  )}
                </div>
                
                {searchTerm && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSearchTerm("")}
                      className="text-xs rounded-full px-3 h-7 border-gray-200"
                    >
                      "{searchTerm}" <span className="ml-1 text-gray-400">×</span>
                    </Button>
                  </motion.div>
                )}
              </motion.div>

              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {currentPosts.map((post, index) => (
                  <motion.div 
                    key={index} 
                    variants={itemVariants}
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="overflow-hidden shadow-md hover:shadow-xl transition-shadow h-full flex flex-col bg-white border-gray-200 rounded-xl">
                      <div className="relative h-52 overflow-hidden">
                        <motion.img 
                          src={post.frontmatter.featuredImage || "/images/placeholder.jpg"} 
                          alt={post.frontmatter.title}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                        <Badge className="absolute top-4 left-4 bg-primary hover:bg-primary/90 text-white text-xs px-3 py-1 rounded-full font-medium capitalize">
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
                          Read Article 
                          <motion.div
                            className="inline-block ml-1"
                            initial={{ x: 0 }}
                            whileHover={{ x: 3 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ArrowRight className="h-3 w-3" />
                          </motion.div>
                        </Link>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>

              {/* Pagination */}
              {totalPages > 1 && (
                <motion.div 
                  className="flex justify-center mt-16"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="flex items-center gap-2 bg-white rounded-lg shadow-sm border border-gray-200 p-1">
                    <motion.div
                      whileHover={{ x: -2 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <Button 
                        variant="outline" 
                        size="icon"
                        disabled={currentPage === 1}
                        onClick={() => paginate(currentPage - 1)}
                        className="h-9 w-9 rounded-md border-0 text-gray-600 hover:bg-gray-50"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                    </motion.div>
                    
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => {
                      // Show only current page, first, last, and pages around current
                      if (
                        pageNumber === 1 || 
                        pageNumber === totalPages || 
                        (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                      ) {
                        return (
                          <motion.div
                            key={pageNumber}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          >
                            <Button
                              variant={currentPage === pageNumber ? "default" : "ghost"}
                              size="sm"
                              onClick={() => paginate(pageNumber)}
                              className={`min-w-9 h-9 rounded-md ${
                                currentPage === pageNumber 
                                  ? "bg-primary text-white" 
                                  : "text-gray-700 hover:bg-gray-50"
                              }`}
                            >
                              {pageNumber}
                            </Button>
                          </motion.div>
                        );
                      } 
                      // Show ellipsis for gaps
                      else if (
                        (pageNumber === 2 && currentPage > 3) || 
                        (pageNumber === totalPages - 1 && currentPage < totalPages - 2)
                      ) {
                        return (
                          <div key={pageNumber} className="flex items-center justify-center w-9 h-9">
                            <span className="text-gray-400">...</span>
                          </div>
                        );
                      }
                      return null;
                    })}
                    
                    <motion.div
                      whileHover={{ x: 2 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <Button 
                        variant="outline" 
                        size="icon"
                        disabled={currentPage === totalPages}
                        onClick={() => paginate(currentPage + 1)}
                        className="h-9 w-9 rounded-md border-0 text-gray-600 hover:bg-gray-50"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </>
          )}
        </div>
      </section>
    </MainLayout>
  );
};

export default AllBlogs; 