
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

// Define the content directory
const CONTENT_DIR = path.join(process.cwd(), "content");

// Function to get all MDX files from a directory
export const getMdxFiles = (dir: string): string[] => {
  const contentDir = path.join(CONTENT_DIR, dir);
  if (!fs.existsSync(contentDir)) {
    return [];
  }
  return fs.readdirSync(contentDir).filter(file => file.endsWith(".mdx"));
};

// Function to read and parse MDX content
export const getMdxContent = async (dir: string, slug: string) => {
  const filePath = path.join(CONTENT_DIR, dir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);
  
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "wrap" }]
      ]
    },
    scope: data,
  });

  return {
    frontmatter: data,
    slug,
    content: mdxSource
  };
};

// Function to get all posts metadata
export const getAllPosts = (category?: string) => {
  let allPosts: any[] = [];
  const categories = category ? [category] : ["health", "fitness", "exercise"];
  
  categories.forEach(cat => {
    const files = getMdxFiles(cat);
    const posts = files.map(file => {
      const filePath = path.join(CONTENT_DIR, cat, file);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContent);
      
      return {
        ...data,
        slug: file.replace(/\.mdx$/, ""),
        category: cat
      };
    });
    
    allPosts = [...allPosts, ...posts];
  });
  
  return allPosts.sort((a, b) => {
    if (new Date(a.date) > new Date(b.date)) {
      return -1;
    }
    return 1;
  });
};

// Function to get all categories with post counts
export const getCategories = () => {
  const categories = ["health", "fitness", "exercise"];
  return categories.map(category => {
    const files = getMdxFiles(category);
    return {
      name: category,
      count: files.length,
      slug: category.toLowerCase()
    };
  });
};
