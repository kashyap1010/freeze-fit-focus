import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MenuIcon, X } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <Link 
            to="/" 
            className="text-2xl font-bold text-dark flex items-center"
          >
            <span className="text-gradient">Fit</span>
            <span>Freeze</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link 
            to="/exercise" 
            className="text-base font-medium text-dark hover:text-primary transition-colors"
          >
            Exercise
          </Link>
          <Link 
            to="/fitness" 
            className="text-base font-medium text-dark hover:text-primary transition-colors"
          >
            Fitness
          </Link>
          <Link 
            to="/health" 
            className="text-base font-medium text-dark hover:text-primary transition-colors"
          >
            Health
          </Link>
          <Link 
            to="/nutrition" 
            className="text-base font-medium text-dark hover:text-primary transition-colors"
          >
            Nutrition
          </Link>
          <Link 
            to="/subscribe" 
            className="bg-primary text-white hover:bg-primary/90 py-2 px-4 rounded-md transition-colors"
          >
            Get Your Free Plan
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-dark" 
          onClick={toggleMenu} 
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="container md:hidden py-4 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/exercise" 
              className="text-base font-medium text-dark hover:text-primary transition-colors p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Exercise
            </Link>
            <Separator />
            <Link 
              to="/fitness" 
              className="text-base font-medium text-dark hover:text-primary transition-colors p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Fitness
            </Link>
            <Separator />
            <Link 
              to="/health" 
              className="text-base font-medium text-dark hover:text-primary transition-colors p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Health
            </Link>
            <Separator />
            <Link 
              to="/nutrition" 
              className="text-base font-medium text-dark hover:text-primary transition-colors p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Nutrition
            </Link>
            <Link 
              to="/subscribe" 
              className="bg-primary text-white hover:bg-primary/90 w-full py-2 px-4 rounded-md mt-4 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Your Free Plan
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
