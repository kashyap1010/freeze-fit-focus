import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    title: "Health",
    description: "Science-backed health information for optimal wellbeing",
    icon: "🫀",
    link: "/health",
    color: "bg-red-500/10",
    textColor: "text-red-600",
  },
  {
    title: "Fitness",
    description: "Workout programs and fitness advice for all levels",
    icon: "💪",
    link: "/fitness",
    color: "bg-blue-500/10",
    textColor: "text-blue-600",
  },
  {
    title: "Nutrition",
    description: "Balanced diet plans and nutritional guidance",
    icon: "🥗",
    link: "/nutrition",
    color: "bg-green-500/10",
    textColor: "text-green-600",
  },
  {
    title: "Exercise",
    description: "Detailed exercise techniques and form guides",
    icon: "🏋️",
    link: "/exercise",
    color: "bg-purple-500/10",
    textColor: "text-purple-600",
  },
];

export const CategoryGrid = () => {
  return (
    <section className="py-16 container">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-3">Browse by Category</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore content across our main knowledge areas
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <Link 
            key={index} 
            to={category.link} 
            className="group bg-card shadow-sm hover:shadow-md transition-shadow rounded-xl p-6 flex flex-col h-full border border-border"
          >
            <div className={`rounded-full w-12 h-12 flex items-center justify-center ${category.color} ${category.textColor} mb-4`}>
              <span className="text-2xl">{category.icon}</span>
            </div>
            <h3 className="text-xl font-bold mb-2">{category.title}</h3>
            <p className="text-muted-foreground text-sm mb-4">{category.description}</p>
            <div className="mt-auto flex items-center font-medium text-sm group-hover:text-primary transition-colors">
              Browse {category.title}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
