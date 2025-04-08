import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

export const NewsletterSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient with parallax */}
      <Parallax speed={-10} className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-blue-50/50" />
      </Parallax>
      
      {/* Background pattern with parallax */}
      <Parallax speed={-5} className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-5" 
          style={{ 
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E\")",
            backgroundSize: "16px 16px"
          }}
        />
      </Parallax>
      
      <div className="container mx-auto max-w-6xl px-6">
        <motion.div 
          className="bg-white rounded-2xl shadow-xl p-10 md:p-16 border border-gray-100 relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          {/* Decorative animated elements */}
          <motion.div 
            className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-xl -z-10"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.05, 0.1, 0.05]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          />
          <motion.div 
            className="absolute -bottom-32 -left-20 w-80 h-80 bg-blue-500/5 rounded-full blur-xl -z-10"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.05, 0.15, 0.05]
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          
          <div className="max-w-3xl mx-auto text-center relative">
            <motion.div 
              className="inline-block mb-6 px-6 py-2 bg-primary/10 text-primary font-medium rounded-full text-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Join Our Community
            </motion.div>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold tracking-tight mb-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Get Your Personalized Fitness Plan
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 mb-10 mx-auto max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Subscribe to receive your free personalized fitness plan along with weekly tips, workout ideas, and nutrition advice to help you achieve your goals.
            </motion.p>
            
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-lg px-8 py-6 shadow-md hover:shadow-lg transition-all">
                  <Link to="/subscribe" className="flex items-center gap-2 text-base">
                    Get Your Free Plan <ArrowRight className="ml-1 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-center gap-4 justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <motion.div 
                    key={i} 
                    className="w-8 h-8 rounded-full border-2 border-white overflow-hidden shadow-sm" 
                    style={{
                      backgroundImage: `url(https://randomuser.me/api/portraits/${i % 2 === 0 ? 'women' : 'men'}/${i + 20}.jpg)`,
                      backgroundSize: 'cover'
                    }}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 + (i * 0.1) }}
                  />
                ))}
              </div>
              <p className="text-sm text-gray-600">
                Join <span className="font-bold text-primary">50,000+</span> members who've transformed their health
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-6 border-t border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {[
                { number: "100+", label: "Workout Plans" },
                { number: "50+", label: "Nutrition Guides" },
                { number: "24/7", label: "Expert Support" },
                { number: "Free", label: "Weekly Updates" },
              ].map((stat, i) => (
                <motion.div 
                  key={i} 
                  className="text-center"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="font-bold text-xl text-primary">{stat.number}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
