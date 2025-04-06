import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { Post, PostFrontmatter } from '@/lib/mdx-utils';

// Improved implementation to load MDX content
export async function getMdxContent(category: string, slug: string): Promise<{ content: string; frontmatter: PostFrontmatter } | null> {
  try {
    // Try direct path first
    let response = await fetch(`/content/${slug}.mdx`);
    
    // If not found, try with category in path
    if (!response.ok) {
      response = await fetch(`/content/${category}/${slug}.mdx`);
    }
    
    if (!response.ok) throw new Error('MDX file not found');
    
    const rawContent = await response.text();
    const { content, data } = matter(rawContent);
    
    return {
      content,
      frontmatter: data as PostFrontmatter
    };
  } catch (error) {
    console.error('Error reading MDX file:', error);
    return null;
  }
}

// Function to get all file names from the content directory
async function getContentFileList(): Promise<string[]> {
  try {
    // In a real app, this would be an API call to get the list of MDX files
    // For this demo, we'll just return a hardcoded list
    return [
      'stress-management-techniques.mdx',
      'healthy-sleep-habits.mdx',
      'gut-health-guide.mdx',
      'greens-powder-guide.mdx',
      'superfoods-immune-system.mdx',
      'bodyweight-training.mdx',
      'hiit-workouts.mdx',
      'joint-friendly-exercises.mdx',
      'mobility-vs-flexibility.mdx',
      'macronutrients-guide.mdx',
      'recovery-strategies.mdx',
      'sleep-optimization.mdx',
      'progressive-overload.mdx',
      'compound-movements-guide.mdx',
      'heart-rate-zones.mdx'
    ];
  } catch (error) {
    console.error('Error getting content file list:', error);
    return [];
  }
}

export async function getAllPosts(): Promise<Post[]> {
  const categories = ['health', 'fitness', 'exercise', 'nutrition'];
  let allPosts: Post[] = [];
  
  // Get a list of all MDX files
  const fileList = await getContentFileList();
  
  // Process each file to extract frontmatter
  for (const filename of fileList) {
    try {
      const slug = filename.replace('.mdx', '');
      
      // Try to determine the category from the filename or slug
      let category = '';
      for (const cat of categories) {
        if (slug.includes(cat)) {
          category = cat;
          break;
        }
      }
      
      // If category not found in filename, just assign to the first category
      if (!category) {
        category = categories[0];
      }
      
      // Get the MDX content and frontmatter
      const mdxData = await getMdxContent(category, slug);
      if (mdxData) {
        allPosts.push({
          slug,
          category,
          frontmatter: {
            ...mdxData.frontmatter,
            // Ensure category is set
            category: category.charAt(0).toUpperCase() + category.slice(1)
          }
        });
      }
    } catch (error) {
      console.error(`Error processing file ${filename}:`, error);
    }
  }
  
  return allPosts;
}

export async function getPostsByCategory(category: string): Promise<Post[]> {
  const allPosts = await getAllPosts();
  return allPosts.filter(post => 
    post.category.toLowerCase() === category.toLowerCase()
  );
}

export async function getPostBySlug(category: string, slug: string): Promise<Post | null> {
  try {
    const mdxData = await getMdxContent(category, slug);
    if (!mdxData) return null;
    
    const mdxSource = await serialize(mdxData.content, {
      mdxOptions: {
        rehypePlugins: [
          rehypeSlug,
          [rehypeAutolinkHeadings, { behavior: 'wrap' }]
        ],
      },
    });
    
    return {
      slug,
      category,
      frontmatter: {
        ...mdxData.frontmatter,
        category: category.charAt(0).toUpperCase() + category.slice(1)
      },
      content: mdxData.content,
      mdxSource
    };
  } catch (error) {
    console.error('Error processing MDX:', error);
    return null;
  }
}

// Helper to load all content lists for the app
export async function setupContentListApi() {
  try {
    const allPosts = await getAllPosts();
    
    // Group posts by category
    const contentListsByCategory: Record<string, Post[]> = {};
    
    for (const post of allPosts) {
      const category = post.category.toLowerCase();
      if (!contentListsByCategory[category]) {
        contentListsByCategory[category] = [];
      }
      contentListsByCategory[category].push(post);
    }
    
    // Expose this data through API routes
    window.__CONTENT_LISTS__ = contentListsByCategory;
    
    return contentListsByCategory;
  } catch (error) {
    console.error('Error setting up content list API:', error);
    return {};
  }
}

// Mock implementation to simulate API calls
export async function setupMockApis() {
  console.log('Setting up mock APIs for content');
  
  // Nothing to do here since we're going to use the mock data directly
  return true;
}

// Type definition for the content lists global
declare global {
  interface Window {
    __CONTENT_LISTS__?: Record<string, Post[]>;
  }
} 