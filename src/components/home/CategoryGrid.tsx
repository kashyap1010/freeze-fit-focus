import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Health",
    description: "Science-backed health information for optimal wellbeing",
    icon: "🫀",
    link: "/health",
    color: "bg-red-100",
    borderColor: "border-red-200",
    textColor: "text-red-600",
    hoverColor: "group-hover:bg-red-50",
  },
  {
    title: "Fitness",
    description: "Workout programs and fitness advice for all levels",
    icon: "💪",
    link: "/fitness",
    color: "bg-blue-100",
    borderColor: "border-blue-200",
    textColor: "text-blue-600",
    hoverColor: "group-hover:bg-blue-50",
  },
  {
    title: "Nutrition",
    description: "Balanced diet plans and nutritional guidance",
    icon: "🥗",
    link: "/nutrition",
    color: "bg-green-100",
    borderColor: "border-green-200",
    textColor: "text-green-600",
    hoverColor: "group-hover:bg-green-50",
  },
  {
    title: "Exercise",
    description: "Detailed exercise techniques and form guides",
    icon: "🏋️",
    link: "/exercise",
    color: "bg-purple-100",
    borderColor: "border-purple-200",
    textColor: "text-purple-600",
    hoverColor: "group-hover:bg-purple-50",
  },
];

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export const CategoryGrid = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-gray-50 to-transparent -z-10" />
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto max-w-6xl px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">Browse by Category</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore content across our main knowledge areas
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {categories.map((category, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Link 
                to={category.link} 
                className={`group bg-white rounded-xl p-6 flex flex-col h-full border ${category.borderColor} hover:shadow-lg transition-all duration-300`}
              >
                <motion.div 
                  className={`rounded-2xl w-16 h-16 flex items-center justify-center ${category.color} ${category.textColor} mb-6 transition-colors duration-300 ${category.hoverColor}`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span className="text-3xl">{category.icon}</span>
                </motion.div>
                <h3 className={`text-xl font-bold mb-3 ${category.textColor}`}>{category.title}</h3>
                <p className="text-gray-600 text-base mb-6 flex-grow">{category.description}</p>
                <div className={`mt-auto flex items-center font-medium ${category.textColor} transition-colors`}>
                  Browse {category.title}
                  <motion.div
                    className="inline-block ml-2"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-lg text-muted-foreground mb-6">
            Can't find what you're looking for? Check out our comprehensive library.
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
              Browse All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
