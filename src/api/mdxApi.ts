import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { Post, PostFrontmatter } from '@/lib/mdx-utils';

// Mock implementation to simulate server-side file reading
// In a real app, this would access the filesystem
export async function getMdxContent(category: string, slug: string): Promise<{ content: string; frontmatter: PostFrontmatter } | null> {
  try {
    // This simulates reading from the filesystem
    // In production, use actual file reads
    const response = await fetch(`/content/${category}/${slug}.mdx`);
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

export async function getAllPosts(): Promise<Post[]> {
  const categories = ['health', 'fitness', 'exercise', 'nutrition'];
  let allPosts: Post[] = [];
  
  for (const category of categories) {
    try {
      // This would be a directory read in a real app
      const response = await fetch(`/api/content-list?category=${category}`);
      if (!response.ok) continue;
      
      const posts = await response.json();
      allPosts = [...allPosts, ...posts];
    } catch (error) {
      console.error(`Error reading ${category} posts:`, error);
    }
  }
  
  return allPosts;
}

export async function getPostsByCategory(category: string): Promise<Post[]> {
  try {
    // This would be a directory read in a real app
    const response = await fetch(`/api/content-list?category=${category}`);
    if (!response.ok) return [];
    
    return await response.json();
  } catch (error) {
    console.error(`Error reading ${category} posts:`, error);
    return [];
  }
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
      frontmatter: mdxData.frontmatter,
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
  // This would be generated from a build script in a real app
  const contentListsByCategory = {
    health: [
      { 
        slug: 'superfoods-immune-system',
        frontmatter: {
          title: "10 Science-Backed Superfoods to Boost Your Immune System",
          description: "Discover the top 10 scientifically proven superfoods that can strengthen your immune system and help protect your body against illness.",
          date: "2023-04-10",
          author: "Dr. Mark Thompson",
          authorTitle: "Immunologist, MD",
          authorAvatar: "/images/authors/mark-thompson.jpg",
          featuredImage: "/images/posts/superfoods.jpg",
          category: "Health",
          tags: ["nutrition", "immune system", "superfoods"]
        },
        category: 'health'
      },
      // Add other health posts here
    ],
    fitness: [
      // Add fitness posts here
    ],
    // Add other categories
  };
  
  // Expose this data through API routes
  window.__CONTENT_LISTS__ = contentListsByCategory;
}

// This would be provided by a real API server
export async function setupMockApis() {
  await setupContentListApi();
  
  // Mock the /api/content-list endpoint
  const originalFetch = window.fetch;
  window.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
    const url = typeof input === 'string' ? input : input instanceof URL ? input.toString() : input.url;
    
    if (url.startsWith('/api/content-list')) {
      const params = new URL(url, window.location.origin).searchParams;
      const category = params.get('category');
      
      if (category && window.__CONTENT_LISTS__?.[category]) {
        return new Response(JSON.stringify(window.__CONTENT_LISTS__[category]), {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        });
      }
      
      return new Response(JSON.stringify([]), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    if (url.startsWith('/api/post')) {
      const params = new URL(url, window.location.origin).searchParams;
      const category = params.get('category');
      const slug = params.get('slug');
      
      if (category && slug && window.__CONTENT_LISTS__?.[category]) {
        const post = window.__CONTENT_LISTS__[category].find(p => p.slug === slug);
        if (post) {
          return new Response(JSON.stringify(post), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
          });
        }
      }
      
      return new Response(null, { status: 404 });
    }
    
    if (url.startsWith('/api/posts')) {
      const params = new URL(url, window.location.origin).searchParams;
      const category = params.get('category');
      
      if (category && window.__CONTENT_LISTS__?.[category]) {
        return new Response(JSON.stringify(window.__CONTENT_LISTS__[category]), {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        });
      }
      
      // Return all posts
      const allPosts = Object.values(window.__CONTENT_LISTS__ || {}).flat();
      return new Response(JSON.stringify(allPosts), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Pass through to the original fetch for other requests
    return originalFetch(input, init);
  };
}

// Type definition for the content lists global
declare global {
  interface Window {
    __CONTENT_LISTS__?: Record<string, Post[]>;
  }
} 