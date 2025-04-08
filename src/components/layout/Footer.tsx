import React from "react";
import { Link } from "react-router-dom";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  Mail,
  ArrowRight,
  SnowflakeIcon,
  BrainIcon,
  DumbbellIcon,
  HeartIcon,
  BookIcon,
  Github,
  Linkedin,
  MapPin,
  Phone
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 pt-16 text-gray-100">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-7 gap-8 mb-12">
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="inline-block">
              <div className="text-2xl font-bold flex items-center gap-1">
                <span className="text-white font-extrabold">Freeze</span>
                <span className="text-white/80 font-bold">Fit</span>
                <span className="text-white/60">Focus</span>
              </div>
            </Link>
            
            <p className="text-sm text-gray-300 leading-relaxed">
              Science-backed content on fitness, nutrition, and health to optimize your physical and mental performance.
            </p>
            
            <div className="flex items-center space-x-3 pt-2">
              <a 
                href="#" 
                aria-label="Facebook" 
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 border border-gray-700 text-gray-300 hover:text-primary hover:border-primary transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                aria-label="Instagram" 
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 border border-gray-700 text-gray-300 hover:text-primary hover:border-primary transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                aria-label="Twitter" 
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 border border-gray-700 text-gray-300 hover:text-primary hover:border-primary transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="#" 
                aria-label="YouTube" 
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 border border-gray-700 text-gray-300 hover:text-primary hover:border-primary transition-colors"
              >
                <Youtube size={18} />
              </a>
              <a 
                href="#" 
                aria-label="LinkedIn" 
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 border border-gray-700 text-gray-300 hover:text-primary hover:border-primary transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="font-semibold text-white mb-4">Categories</h3>
            <ul className="space-y-2.5">
              <li>
                <Link to="/health" className="text-gray-300 hover:text-primary transition-colors text-sm flex items-center gap-2">
                  <HeartIcon size={14} className="text-rose-400" />
                  Health
                </Link>
              </li>
              <li>
                <Link to="/fitness" className="text-gray-300 hover:text-primary transition-colors text-sm flex items-center gap-2">
                  <DumbbellIcon size={14} className="text-blue-400" />
                  Fitness
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="text-gray-300 hover:text-primary transition-colors text-sm flex items-center gap-2">
                  <BookIcon size={14} className="text-primary/90" />
                  All Articles
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2.5">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/subscribe" className="text-gray-300 hover:text-primary transition-colors text-sm">
                  Subscribe
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2.5">
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-primary transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-primary transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-gray-300 hover:text-primary transition-colors text-sm">
                  Disclaimer
                </Link>
              </li>
              
             
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-semibold text-white mb-4">Stay Updated</h3>
            <p className="text-sm text-gray-300 mb-4">
              Subscribe to our newsletter for the latest articles, tips, and exclusive content.
            </p>
            
            <div className="flex gap-2 mb-6">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-gray-800 border-gray-700 focus:border-primary rounded-md text-white placeholder:text-gray-400"
              />
              <Button className="bg-primary hover:bg-primary/90 rounded-md px-4 text-white">
                <ArrowRight size={16} />
              </Button>
            </div>
            
            <div className="space-y-2">
              
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-gray-400" />
                <a href="mailto:contact@freezefitfocus.com" className="text-sm text-gray-300 hover:text-primary">
                  contact@freezefitfocus.com
                </a>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400 text-center md:text-left">
              © {currentYear} FreezeFitFocus. All rights reserved.
            </p>
            
            <div className="flex items-center gap-6">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Github size={16} />
              </a>
              <a 
                href="#" 
                className="text-sm text-gray-400 hover:text-primary transition-colors"
              >
                Media Kit
              </a>
              <a 
                href="#" 
                className="text-sm text-gray-400 hover:text-primary transition-colors"
              >
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
