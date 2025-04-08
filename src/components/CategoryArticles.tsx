import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Post } from "@/lib/mdx-utils";
import { ArrowRight, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

interface CategoryArticlesProps {
  posts: Post[];
  isLoading: boolean;
  title: string;
  description: string;
}

// Animation variants
const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

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

export const CategoryArticles: React.FC<CategoryArticlesProps> = ({ 
  posts, 
  isLoading, 
  title, 
  description 
}) => {
  return (
    <>
      <div className="bg-gray-50 py-16 border-b border-gray-100 relative overflow-hidden">
        {/* Background decorative elements */}
        <Parallax speed={-10} className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-blue-50/50 to-transparent" />
        </Parallax>
        
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
        
        <div className="container mx-auto max-w-6xl px-6">
          <motion.div 
            className="mb-6"
            initial="hidden"
            animate="visible"
            variants={headerVariants}
          >
            <motion.div 
              className="inline-block rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {title.split(' ')[0]}
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {title}
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-600 max-w-3xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {description}
            </motion.p>
          </motion.div>
        </div>
      </div>
      
      <section className="py-16 container mx-auto max-w-6xl px-6">
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
        ) : posts.length === 0 ? (
          <motion.div 
            className="text-center py-16 bg-gray-50 rounded-lg border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-5xl mb-4">📚</div>
            <h2 className="text-2xl font-bold mb-3">No articles found</h2>
            <p className="text-gray-600 mb-6 max-w-lg mx-auto">
              We're working on adding more content to this category. Check back soon!
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link 
                to="/blogs" 
                className="inline-flex items-center px-5 py-2.5 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg transition-colors"
              >
                Browse All Articles <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
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
              <h2 className="text-2xl font-bold">Latest Articles</h2>
              <div className="text-sm text-gray-600">
                <span className="font-medium">{posts.length}</span> articles in this category
              </div>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {posts.map((post, index) => (
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
                        {post.frontmatter.category || post.category}
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
                    <CardFooter className="p-6 pt-3 flex items-center gap-3 mt-auto border-t border-gray-100">
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
            
            <motion.div 
              className="mt-16 text-center border-t border-gray-100 pt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-4">Looking for more content?</h3>
              <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                Explore our complete collection of articles across all categories
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <Link 
                  to="/blogs" 
                  className="inline-flex items-center px-5 py-2.5 bg-primary/10 text-primary font-medium rounded-lg hover:bg-primary/20 transition-colors"
                >
                  Browse All Articles <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </section>
    </>
  );
};
