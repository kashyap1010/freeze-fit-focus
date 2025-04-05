
import React from "react";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  Mail,
  ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-bold flex items-center">
              <span className="text-gradient">Fit</span>
              <span>Freeze</span>
            </Link>
            <p className="text-sm text-white/80">
              Science-backed fitness content and interactive tools to help you achieve your health goals.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-primary transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/workouts" className="text-white/80 hover:text-primary transition-colors">
                  Workouts
                </Link>
              </li>
              <li>
                <Link to="/nutrition" className="text-white/80 hover:text-primary transition-colors">
                  Nutrition
                </Link>
              </li>
              <li>
                <Link to="/tools" className="text-white/80 hover:text-primary transition-colors">
                  Tools
                </Link>
              </li>
              <li>
                <Link to="/experts" className="text-white/80 hover:text-primary transition-colors">
                  Experts
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-white/80 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-white/80 hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-white/80 hover:text-primary transition-colors">
                  Medical Disclaimer
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-white/80 hover:text-primary transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Newsletter</h3>
            <p className="text-sm text-white/80">
              Join our newsletter to stay updated with our latest fitness tips and exclusive content.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-white/10 border-white/20 focus:border-primary text-white placeholder:text-white/50"
              />
              <Button size="icon" className="bg-primary hover:bg-primary/90">
                <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </div>

        <Separator className="bg-white/10 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} FitFreeze. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="mailto:info@fitfreeze.com" className="text-sm text-white/60 hover:text-primary flex items-center gap-2 transition-colors">
              <Mail size={14} />
              <span>info@fitfreeze.com</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
