import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

export const HeroSection = () => {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden">
      {/* Background gradient and effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white -z-10" />
      
      {/* Parallax background elements */}
      <Parallax speed={-10} className="absolute top-0 right-0 w-full h-full -z-10">
        <div className="bg-[url('/images/hero-pattern.svg')] bg-no-repeat bg-cover opacity-5 w-full h-full" />
      </Parallax>
      
      {/* Animated blue accent circles */}
      <motion.div 
        className="absolute top-1/3 right-10 w-72 h-72 bg-primary opacity-10 rounded-full blur-3xl -z-10"
        animate={{ 
          scale: [1, 1.05, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/4 left-10 w-56 h-56 bg-blue-400 opacity-5 rounded-full blur-3xl -z-10"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.1, 0.05]
        }}
        transition={{ 
          duration: 7, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      {/* Content container */}
      <div className="container mx-auto max-w-6xl px-6">
        <motion.div 
          className="text-center mb-12 md:mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.span 
            className="inline-block rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Transform Your Well-Being
          </motion.span>
          <motion.h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
            <motion.span 
              className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-700 block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Health. Fitness.
            </motion.span>
            <motion.span 
              className="block mt-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Performance.
            </motion.span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            Evidence-based strategies for optimizing your physical and mental performance through deliberate movement and focused awareness.
          </motion.p>
        </motion.div>

        {/* CTA buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 rounded-lg px-8 py-6 text-lg">
            <Link to="/subscribe">
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-lg border-primary text-primary hover:bg-primary/5 px-8 py-6 text-lg">
            <Link to="/blogs">Explore Articles</Link>
          </Button>
        </motion.div>

        {/* Featured image/video section with parallax */}
        <Parallax speed={5} className="relative mx-auto max-w-4xl">
          <motion.div 
            className="aspect-video bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Person in ice bath demonstrating cold exposure therapy"
              className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
            />
            
            {/* Play button overlay for video appearance */}
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-full p-5 cursor-pointer hover:bg-white transition-colors shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Stats cards positioned over the video with animations */}
          <motion.div 
            className="absolute -bottom-10 -left-10 md:-left-20 bg-white shadow-xl rounded-xl p-4 md:p-6 w-60 transform rotate-2 border border-gray-100"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xl">⚡</div>
              <div>
                <div className="text-2xl font-bold text-gray-900">94%</div>
                <div className="text-sm text-gray-600">Improved performance</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="absolute -top-10 -right-10 md:-right-20 bg-white shadow-xl rounded-xl p-4 md:p-6 w-60 transform -rotate-2 border border-gray-100"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xl">🧠</div>
              <div>
                <div className="text-2xl font-bold text-gray-900">78%</div>
                <div className="text-sm text-gray-600">Increased focus</div>
              </div>
            </div>
          </motion.div>
        </Parallax>
      </div>
    </section>
  );
};
