// This is a client-side version of the MDX utilities
// Since we can't access the filesystem directly in the browser,
// we'll use a different approach to load the MDX content

import { useEffect, useState } from "react";
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

// Type definitions for our content
export interface PostFrontmatter {
  title: string;
  description: string;
  date: string;
  author: string;
  authorTitle: string;
  authorAvatar: string;
  featuredImage: string;
  category: string;
  tags: string[];
  featured?: boolean; // Added featured flag
}

export interface Post {
  slug: string;
  frontmatter: PostFrontmatter;
  category: string;
  content?: string;
  mdxSource?: any;
}

// Available MDX files in content directory
const availableFiles = [
  'stress-management-techniques',
  'healthy-sleep-habits',
  'gut-health-guide',
  'joint-friendly-exercises',
  'heart-rate-zones'
];

const categories = ['health', 'fitness', 'exercise', 'nutrition'];

// Function to load MDX content
async function fetchMdxContent(slug: string): Promise<{ content: string; data: any } | null> {
  try {
    const response = await fetch(`/content/${slug}.mdx`);
    if (!response.ok) {
      console.warn(`File not found: /content/${slug}.mdx`);
      return null;
    }
    
    const rawContent = await response.text();
    return matter(rawContent);
  } catch (error) {
    console.error(`Error fetching MDX for ${slug}:`, error);
    return null;
  }
}

// Function to get all posts
export const getAllPosts = async (category?: string): Promise<Post[]> => {
  const posts: Post[] = [];
  
  for (const slug of availableFiles) {
    try {
      const mdxData = await fetchMdxContent(slug);
      if (mdxData) {
        const { content, data } = mdxData;
        
        // Determine category from frontmatter or slug
        let postCategory = data.category?.toLowerCase() || '';
        if (!postCategory) {
          // Try to determine from slug
          for (const cat of categories) {
            if (slug.includes(cat)) {
              postCategory = cat;
              break;
            }
          }
          // Default to first category if not found
          if (!postCategory) postCategory = categories[0];
        }
        
        // Skip if category filter provided and doesn't match
        if (category && postCategory.toLowerCase() !== category.toLowerCase()) {
          continue;
        }
        
        const post: Post = {
          slug,
          category: postCategory,
          frontmatter: {
            title: data.title || 'Untitled Post',
            description: data.description || '',
            date: data.date || new Date().toISOString().split('T')[0],
            author: data.author || 'Anonymous',
            authorTitle: data.authorTitle || '',
            authorAvatar: data.authorAvatar || '/placeholder.svg',
            featuredImage: data.featuredImage || '/placeholder.svg',
            category: postCategory.charAt(0).toUpperCase() + postCategory.slice(1),
            tags: data.tags || [],
            featured: data.featured || false
          },
          content
        };
        
        posts.push(post);
      }
    } catch (error) {
      console.error(`Error processing ${slug}:`, error);
    }
  }
  
  return posts;
};

// Function to get a single post by slug and category
export const getPostBySlug = async (category: string, slug: string): Promise<Post | undefined> => {
  try {
    const mdxData = await fetchMdxContent(slug);
    if (!mdxData) return undefined;
    
    const { content, data } = mdxData;
    
    return {
      slug,
      category: category.toLowerCase(),
      frontmatter: {
        title: data.title || 'Untitled Post',
        description: data.description || '',
        date: data.date || new Date().toISOString().split('T')[0],
        author: data.author || 'Anonymous',
        authorTitle: data.authorTitle || '',
        authorAvatar: data.authorAvatar || '/placeholder.svg',
        featuredImage: data.featuredImage || '/placeholder.svg',
        category: category.charAt(0).toUpperCase() + category.slice(1),
        tags: data.tags || [],
        featured: data.featured || false
      },
      content
    };
  } catch (error) {
    console.error(`Error fetching post ${category}/${slug}:`, error);
    return undefined;
  }
};

// Function to get featured posts
export const getFeaturedPosts = async (count: number = 3): Promise<Post[]> => {
  const allPosts = await getAllPosts();
  // Filter posts with featured: true and limit to count
  return allPosts
    .filter(post => post.frontmatter.featured)
    .slice(0, count);
};

// Function to get categories with counts
export const getCategories = async () => {
  const allPosts = await getAllPosts();
  const categoryMap = new Map<string, number>();
  
  // Count posts by category
  allPosts.forEach(post => {
    const category = post.category.toLowerCase();
    categoryMap.set(category, (categoryMap.get(category) || 0) + 1);
  });
  
  // Format categories
  return Array.from(categoryMap.entries()).map(([category, count]) => ({
    name: category.charAt(0).toUpperCase() + category.slice(1), // Capitalize
    count,
    slug: category
  }));
};

// Hook to get posts with loading state
export const usePosts = (category?: string) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        
        // Use direct file loading approach
        const files = availableFiles;
        const loadedPosts: Post[] = [];
        
        for (const slug of files) {
          try {
            // Try to fetch the file directly
            const response = await fetch(`/content/${slug}.mdx`);
            
            if (response.ok) {
              const rawContent = await response.text();
              
              // Extract frontmatter
              const frontmatterMatch = rawContent.match(/---\n([\s\S]*?)\n---/);
              
              if (frontmatterMatch && frontmatterMatch[1]) {
                const frontmatterText = frontmatterMatch[1];
                const frontmatterLines = frontmatterText.split('\n');
                
                // Parse frontmatter manually
                const frontmatter: Partial<PostFrontmatter> = {};
                let postCategory = '';
                
                frontmatterLines.forEach(line => {
                  const [key, ...valueParts] = line.split(':');
                  if (key && valueParts.length) {
                    const value = valueParts.join(':').trim();
                    // Remove quotes if present
                    const cleanValue = value.replace(/^"(.*)"$/, '$1');
                    
                    if (key.trim() === 'title') frontmatter.title = cleanValue;
                    if (key.trim() === 'description') frontmatter.description = cleanValue;
                    if (key.trim() === 'date') frontmatter.date = cleanValue;
                    if (key.trim() === 'author') frontmatter.author = cleanValue;
                    if (key.trim() === 'authorTitle') frontmatter.authorTitle = cleanValue;
                    if (key.trim() === 'authorAvatar') frontmatter.authorAvatar = cleanValue;
                    if (key.trim() === 'featuredImage') frontmatter.featuredImage = cleanValue;
                    if (key.trim() === 'category') {
                      frontmatter.category = cleanValue;
                      postCategory = cleanValue.toLowerCase();
                    }
                    if (key.trim() === 'featured') frontmatter.featured = cleanValue === 'true';
                    if (key.trim() === 'tags') {
                      try {
                        // Parse tags array
                        const tagsStr = cleanValue.replace(/[\[\]]/g, '');
                        frontmatter.tags = tagsStr.split(',').map(tag => tag.trim().replace(/^"(.*)"$/, '$1'));
                      } catch (e) {
                        frontmatter.tags = [];
                      }
                    }
                  }
                });
                
                // If no category found in frontmatter, try to determine from slug
                if (!postCategory) {
                  for (const cat of categories) {
                    if (slug.includes(cat)) {
                      postCategory = cat;
                      frontmatter.category = cat.charAt(0).toUpperCase() + cat.slice(1);
                      break;
                    }
                  }
                  
                  // Default to first category if still not found
                  if (!postCategory) {
                    postCategory = categories[0];
                    frontmatter.category = categories[0].charAt(0).toUpperCase() + categories[0].slice(1);
                  }
                }
                
                // Skip if category filter provided and doesn't match
                if (category && postCategory.toLowerCase() !== category.toLowerCase()) {
                  continue;
                }
                
                // Create post object
                const post: Post = {
                  slug,
                  category: postCategory,
                  frontmatter: {
                    title: frontmatter.title || 'Untitled Post',
                    description: frontmatter.description || '',
                    date: frontmatter.date || new Date().toISOString().split('T')[0],
                    author: frontmatter.author || 'Anonymous',
                    authorTitle: frontmatter.authorTitle || '',
                    authorAvatar: frontmatter.authorAvatar || '/placeholder.svg',
                    featuredImage: frontmatter.featuredImage || '/placeholder.svg',
                    category: frontmatter.category || 'Uncategorized',
                    tags: frontmatter.tags || [],
                    featured: frontmatter.featured || false
                  }
                };
                
                loadedPosts.push(post);
              }
            }
          } catch (e) {
            console.error(`Error loading ${slug}:`, e);
          }
        }
        
        setPosts(loadedPosts);
      } catch (err) {
        console.error("Error fetching posts:", err);
        setError(err instanceof Error ? err : new Error('Failed to fetch posts'));
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchPosts();
  }, [category]);

  return { posts, isLoading, error };
};

// Hook to get a single post with loading state
export const usePost = (category: string, slug: string) => {
  const [post, setPost] = useState<Post | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setIsLoading(true);
        console.log(`Fetching post: ${category}/${slug}`);
        
        // Try to fetch the file directly
        const response = await fetch(`/content/${slug}.mdx`);
        
        if (response.ok) {
          const rawContent = await response.text();
          
          // Extract frontmatter
          const frontmatterMatch = rawContent.match(/---\n([\s\S]*?)\n---/);
          
          if (frontmatterMatch && frontmatterMatch[1]) {
            const frontmatterText = frontmatterMatch[1];
            const frontmatterLines = frontmatterText.split('\n');
            
            // Parse frontmatter manually
            const frontmatter: Partial<PostFrontmatter> = {};
            let postCategory = category.toLowerCase();
            
            frontmatterLines.forEach(line => {
              const [key, ...valueParts] = line.split(':');
              if (key && valueParts.length) {
                const value = valueParts.join(':').trim();
                // Remove quotes if present
                const cleanValue = value.replace(/^"(.*)"$/, '$1');
                
                if (key.trim() === 'title') frontmatter.title = cleanValue;
                if (key.trim() === 'description') frontmatter.description = cleanValue;
                if (key.trim() === 'date') frontmatter.date = cleanValue;
                if (key.trim() === 'author') frontmatter.author = cleanValue;
                if (key.trim() === 'authorTitle') frontmatter.authorTitle = cleanValue;
                if (key.trim() === 'authorAvatar') frontmatter.authorAvatar = cleanValue;
                if (key.trim() === 'featuredImage') frontmatter.featuredImage = cleanValue;
                if (key.trim() === 'category') {
                  frontmatter.category = cleanValue;
                  postCategory = cleanValue.toLowerCase();
                }
                if (key.trim() === 'featured') frontmatter.featured = cleanValue === 'true';
                if (key.trim() === 'tags') {
                  try {
                    // Parse tags array
                    const tagsStr = cleanValue.replace(/[\[\]]/g, '');
                    frontmatter.tags = tagsStr.split(',').map(tag => tag.trim().replace(/^"(.*)"$/, '$1'));
                  } catch (e) {
                    frontmatter.tags = [];
                  }
                }
              }
            });
            
            // Get content part
            const contentStart = rawContent.indexOf('---', rawContent.indexOf('---') + 3) + 3;
            const contentText = rawContent.substring(contentStart);
            
            // Create post object
            const loadedPost: Post = {
              slug,
              category: postCategory,
              frontmatter: {
                title: frontmatter.title || 'Untitled Post',
                description: frontmatter.description || '',
                date: frontmatter.date || new Date().toISOString().split('T')[0],
                author: frontmatter.author || 'Anonymous',
                authorTitle: frontmatter.authorTitle || '',
                authorAvatar: frontmatter.authorAvatar || '/placeholder.svg',
                featuredImage: frontmatter.featuredImage || '/placeholder.svg',
                category: frontmatter.category || category.charAt(0).toUpperCase() + category.slice(1),
                tags: frontmatter.tags || [],
                featured: frontmatter.featured || false
              },
              content: contentText
            };
            
            console.log(`Successfully loaded post: ${category}/${slug}`);
            setPost(loadedPost);
          } else {
            throw new Error(`Invalid frontmatter format in ${slug}.mdx`);
          }
        } else {
          console.warn(`Post file not found: ${slug}.mdx`);
          throw new Error(`Post not found: ${category}/${slug}`);
        }
      } catch (err) {
        console.error("Error loading post:", err);
        setError(err instanceof Error ? err : new Error('Post not found'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [category, slug]);

  return { post, isLoading, error };
};

// Hook to get featured posts with loading state
export const useFeaturedPosts = (count: number = 3) => {
  const { posts, isLoading, error } = usePosts();
  const [featuredPosts, setFeaturedPosts] = useState<Post[]>([]);

  useEffect(() => {
    if (!isLoading && posts.length > 0) {
      // Filter posts that have featured: true
      const featured = posts.filter(post => post.frontmatter.featured);
      
      // If none are explicitly featured, take the most recent posts
      const results = featured.length > 0 
        ? featured.slice(0, count)
        : posts
            .sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime())
            .slice(0, count);
      
      setFeaturedPosts(results);
    }
  }, [posts, isLoading, count]);

  return { posts: featuredPosts, isLoading, error };
};
