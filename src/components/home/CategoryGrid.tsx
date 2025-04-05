
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { getCategories } from "@/lib/mdx-utils";

interface CategoryProps {
  title: string;
  description: string;
  icon: string;
  link: string;
  bgImage: string;
  count: number;
}

// Map category names to their descriptions and icons
const getCategoryDetails = (name: string): Omit<CategoryProps, 'link' | 'count'> => {
  switch (name.toLowerCase()) {
    case 'health':
      return {
        title: "Health",
        description: "Nutrition, immune support, sleep, and wellness",
        icon: "🍏",
        bgImage: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      };
    case 'fitness':
      return {
        title: "Fitness",
        description: "Training methodologies, HIIT, and recovery",
        icon: "💪",
        bgImage: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      };
    case 'exercise':
      return {
        title: "Exercise",
        description: "Technique, form guides, and workout routines",
        icon: "🏋️",
        bgImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      };
    default:
      return {
        title: name,
        description: "Explore our content",
        icon: "📚",
        bgImage: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      };
  }
};

const CategoryCard = ({ category }: { category: CategoryProps }) => {
  return (
    <Link 
      to={category.link}
      className="group relative overflow-hidden rounded-2xl transition-all hover:shadow-xl h-64"
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url(${category.bgImage})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
      <div className="absolute bottom-0 left-0 p-6 z-10 w-full">
        <span className="text-3xl mb-2 block">{category.icon}</span>
        <h3 className="text-xl font-bold text-white mb-1">{category.title}</h3>
        <p className="text-white/80 text-sm mb-3">{category.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-white/90 text-sm font-medium">
            <span>Explore</span>
            <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </div>
          <span className="text-white/80 text-sm">{category.count} articles</span>
        </div>
      </div>
    </Link>
  );
};

export const CategoryGrid = () => {
  // Get categories with their post counts
  const categoriesData = getCategories();
  
  // Map the category data to our component props
  const categories = categoriesData.map(category => {
    const details = getCategoryDetails(category.name);
    return {
      ...details,
      title: category.name,
      link: `/${category.slug}`,
      count: category.count
    };
  });

  return (
    <section className="py-16">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Explore Categories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dive into our expertly curated content categories
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};
