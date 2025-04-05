
// This is a client-side version of the MDX utilities
// Since we can't access the filesystem directly in the browser,
// we'll use a different approach to load the MDX content

import { useEffect, useState } from "react";

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
}

export interface Post {
  slug: string;
  frontmatter: PostFrontmatter;
  category: string;
}

// Mock data for development - in a real Next.js app, these would be loaded from the filesystem
const mockPosts: Post[] = [
  {
    slug: "greens-powder-guide",
    category: "health",
    frontmatter: {
      title: "The Ultimate Guide to Greens Powder: What You Need to Know",
      description: "Discover everything you need to know about greens powders, their benefits, potential drawbacks, and how to choose the right one for your health needs.",
      date: "2023-04-05",
      author: "Dr. Sarah Johnson",
      authorTitle: "Nutritionist, PhD",
      authorAvatar: "https://randomuser.me/api/portraits/women/44.jpg",
      featuredImage: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "Health",
      tags: ["nutrition", "supplements", "health foods"]
    }
  },
  {
    slug: "superfoods-immune-system",
    category: "health",
    frontmatter: {
      title: "10 Science-Backed Superfoods to Boost Your Immune System",
      description: "Discover the top 10 scientifically proven superfoods that can strengthen your immune system and help protect your body against illness.",
      date: "2023-04-10",
      author: "Dr. Mark Thompson",
      authorTitle: "Immunologist, MD",
      authorAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
      featuredImage: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "Health",
      tags: ["nutrition", "immune system", "superfoods"]
    }
  },
  {
    slug: "macronutrients-guide",
    category: "health",
    frontmatter: {
      title: "Understanding Macronutrients: A Beginner's Guide to Balanced Nutrition",
      description: "Learn about the three main macronutrients—proteins, carbohydrates, and fats—and how to balance them for optimal health and fitness.",
      date: "2023-04-15",
      author: "Dr. Lisa Chen",
      authorTitle: "Clinical Nutritionist, PhD",
      authorAvatar: "https://randomuser.me/api/portraits/women/68.jpg",
      featuredImage: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "Health",
      tags: ["nutrition", "macronutrients", "diet"]
    }
  },
  {
    slug: "sleep-optimization",
    category: "health",
    frontmatter: {
      title: "Sleep Optimization: How to Improve Your Rest for Better Health",
      description: "Discover science-backed strategies to optimize your sleep quality, improve recovery, and enhance overall health through better sleep habits.",
      date: "2023-04-20",
      author: "Dr. James Wilson",
      authorTitle: "Sleep Specialist, MD",
      authorAvatar: "https://randomuser.me/api/portraits/men/62.jpg",
      featuredImage: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "Health",
      tags: ["sleep", "recovery", "health"]
    }
  },
  {
    slug: "hiit-workouts",
    category: "fitness",
    frontmatter: {
      title: "5 Full-Body HIIT Workouts for Maximum Efficiency",
      description: "Discover five science-backed HIIT workout routines that deliver maximum results in minimal time, perfect for busy individuals looking to improve fitness.",
      date: "2023-04-25",
      author: "Alex Rivera",
      authorTitle: "Certified Strength and Conditioning Specialist",
      authorAvatar: "https://randomuser.me/api/portraits/women/22.jpg",
      featuredImage: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "Fitness",
      tags: ["workouts", "HIIT", "time-efficient"]
    }
  },
  {
    slug: "progressive-overload",
    category: "fitness",
    frontmatter: {
      title: "Progressive Overload: The Key to Continuous Strength Gains",
      description: "Learn how to apply progressive overload principles to your strength training for continuous improvement and optimal muscle development.",
      date: "2023-05-01",
      author: "Dr. Michael Reynolds",
      authorTitle: "Exercise Physiologist, PhD",
      authorAvatar: "https://randomuser.me/api/portraits/men/42.jpg",
      featuredImage: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      category: "Fitness",
      tags: ["strength training", "muscle growth", "workout progress"]
    }
  },
  {
    slug: "mobility-vs-flexibility",
    category: "fitness",
    frontmatter: {
      title: "Mobility vs. Flexibility: What's the Difference and Why You Need Both",
      description: "Understand the crucial differences between mobility and flexibility, and learn why both are essential components of a well-rounded fitness program.",
      date: "2023-05-05",
      author: "Dr. Sophia Kim",
      authorTitle: "Physical Therapist, DPT",
      authorAvatar: "https://randomuser.me/api/portraits/women/36.jpg",
      featuredImage: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1526&q=80",
      category: "Fitness",
      tags: ["mobility", "flexibility", "movement", "joint health"]
    }
  },
  {
    slug: "recovery-strategies",
    category: "fitness",
    frontmatter: {
      title: "Recovery Strategies: How to Optimize Your Post-Workout Routine",
      description: "Learn evidence-based recovery techniques to reduce soreness, accelerate healing, and improve performance between training sessions.",
      date: "2023-05-10",
      author: "Emma Rodriguez",
      authorTitle: "Sports Recovery Specialist, MS",
      authorAvatar: "https://randomuser.me/api/portraits/women/58.jpg",
      featuredImage: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1520&q=80",
      category: "Fitness",
      tags: ["recovery", "performance", "muscle soreness", "training"]
    }
  },
  {
    slug: "compound-movements-guide",
    category: "exercise",
    frontmatter: {
      title: "Perfect Form Guide: Mastering the 5 Essential Compound Movements",
      description: "Learn proper technique for the five fundamental compound exercises—squats, deadlifts, bench press, overhead press, and rows—for maximum strength and safety.",
      date: "2023-05-15",
      author: "Coach David Chen",
      authorTitle: "Strength Coach, CSCS",
      authorAvatar: "https://randomuser.me/api/portraits/men/76.jpg",
      featuredImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "Exercise",
      tags: ["strength training", "technique", "compound movements"]
    }
  },
  {
    slug: "bodyweight-training",
    category: "exercise",
    frontmatter: {
      title: "Bodyweight Training: Building Strength Without Equipment",
      description: "Discover how to build impressive strength, muscle, and conditioning using only your bodyweight with progressive calisthenics techniques.",
      date: "2023-05-20",
      author: "Tyler Morgan",
      authorTitle: "Calisthenics Specialist, NSCA-CPT",
      authorAvatar: "https://randomuser.me/api/portraits/men/89.jpg",
      featuredImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "Exercise",
      tags: ["bodyweight", "calisthenics", "home workout", "no equipment"]
    }
  },
  {
    slug: "heart-rate-zones",
    category: "exercise",
    frontmatter: {
      title: "The Science of Cardio: Finding Your Optimal Heart Rate Zones",
      description: "Learn how to calculate and train in the right heart rate zones to maximize cardiovascular benefits and achieve your specific fitness goals.",
      date: "2023-05-25",
      author: "Dr. Jessica Martinez",
      authorTitle: "Cardiovascular Researcher, PhD",
      authorAvatar: "https://randomuser.me/api/portraits/women/82.jpg",
      featuredImage: "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
      category: "Exercise",
      tags: ["cardio", "heart rate", "endurance", "training zones"]
    }
  },
  {
    slug: "joint-friendly-exercises",
    category: "exercise",
    frontmatter: {
      title: "Joint-Friendly Exercises for All Ages and Fitness Levels",
      description: "Discover low-impact, joint-friendly exercises that provide effective workouts without placing excessive stress on your joints.",
      date: "2023-05-30",
      author: "Dr. Robert Lee",
      authorTitle: "Orthopedic Specialist, MD",
      authorAvatar: "https://randomuser.me/api/portraits/men/52.jpg",
      featuredImage: "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
      category: "Exercise",
      tags: ["low impact", "joint health", "seniors", "rehabilitation"]
    }
  }
];

// Function to get all posts
export const getAllPosts = (category?: string): Post[] => {
  if (category) {
    return mockPosts.filter(post => post.category.toLowerCase() === category.toLowerCase());
  }
  return mockPosts;
};

// Function to get a single post by slug and category
export const getPostBySlug = (category: string, slug: string): Post | undefined => {
  return mockPosts.find(
    post => post.slug === slug && post.category.toLowerCase() === category.toLowerCase()
  );
};

// Function to get featured posts
export const getFeaturedPosts = (count: number = 3): Post[] => {
  return mockPosts.slice(0, count);
};

// Function to get categories with counts
export const getCategories = () => {
  const categories = [...new Set(mockPosts.map(post => post.category.toLowerCase()))];
  return categories.map(category => {
    const count = mockPosts.filter(post => post.category.toLowerCase() === category).length;
    return {
      name: category.charAt(0).toUpperCase() + category.slice(1), // Capitalize
      count,
      slug: category
    };
  });
};

// Hook to get posts with loading state
export const usePosts = (category?: string) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching delay
    const timer = setTimeout(() => {
      setPosts(getAllPosts(category));
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [category]);

  return { posts, isLoading };
};

// Hook to get a single post with loading state
export const usePost = (category: string, slug: string) => {
  const [post, setPost] = useState<Post | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching delay
    const timer = setTimeout(() => {
      setPost(getPostBySlug(category, slug));
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [category, slug]);

  return { post, isLoading };
};
