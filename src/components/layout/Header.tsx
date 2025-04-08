import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  MenuIcon, 
  X, 
  SearchIcon, 
  ChevronDown,
  SnowflakeIcon,
  DumbbellIcon,
  BookIcon,
  BrainIcon,
  HeartIcon
} from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  // Track scroll position for header styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-sm' : 'bg-white/95 backdrop-blur-md'
      }`}
    >
      <div className="container mx-auto max-w-6xl px-6">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-3">
            <Link 
              to="/" 
              className="text-2xl font-bold flex items-center gap-1"
            >
              <span className="text-primary font-extrabold">Freeze</span>
              <span className="text-primary/80 font-bold">Fit</span>
              <span className="text-primary/60">Focus</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <div className="relative group px-1">
              <button 
                className={`flex items-center gap-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                  isActive('/blogs') || isActive('/health') || isActive('/fitness') || 
                  isActive('/cold-exposure') || isActive('/mindfulness')
                    ? 'text-primary bg-primary/10' 
                    : 'text-gray-800 hover:text-primary hover:bg-gray-50'
                }`}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                Articles <ChevronDown size={16} className="opacity-70" />
              </button>
              
              <div 
                className={`absolute left-0 top-full pt-2 ${isDropdownOpen ? 'block' : 'hidden'} group-hover:block`}
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <div className="bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden w-[280px]">
                  <div className="p-2">
                    <Link 
                      to="/blogs" 
                      className={`flex items-center gap-2 p-2.5 rounded-md text-sm font-medium transition-colors ${
                        isActive('/blogs') ? 'bg-primary/10 text-primary' : 'hover:bg-gray-50'
                      }`}
                    >
                      <BookIcon size={18} className="text-primary/70" />
                      <div>
                        <div className="font-medium">All Articles</div>
                        <div className="text-xs text-gray-500">Browse all categories</div>
                      </div>
                    </Link>
                    
                    <Link 
                      to="/health" 
                      className={`flex items-center gap-2 p-2.5 rounded-md text-sm font-medium transition-colors ${
                        isActive('/health') ? 'bg-primary/10 text-primary' : 'hover:bg-gray-50'
                      }`}
                    >
                      <HeartIcon size={18} className="text-rose-500" />
                      <div>
                        <div className="font-medium">Health & Nutrition</div>
                        <div className="text-xs text-gray-500">Optimize your wellbeing</div>
                      </div>
                    </Link>
                    
                    <Link 
                      to="/fitness" 
                      className={`flex items-center gap-2 p-2.5 rounded-md text-sm font-medium transition-colors ${
                        isActive('/fitness') ? 'bg-primary/10 text-primary' : 'hover:bg-gray-50'
                      }`}
                    >
                      <DumbbellIcon size={18} className="text-blue-500" />
                      <div>
                        <div className="font-medium">Fitness & Training</div>
                        <div className="text-xs text-gray-500">Workout strategies</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <Link 
              to="/about" 
              className={`py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                isActive('/about') 
                  ? 'text-primary bg-primary/10' 
                  : 'text-gray-800 hover:text-primary hover:bg-gray-50'
              }`}
            >
              About Us
            </Link>
            
            <Link 
              to="/contact" 
              className={`py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                isActive('/contact') 
                  ? 'text-primary bg-primary/10' 
                  : 'text-gray-800 hover:text-primary hover:bg-gray-50'
              }`}
            >
              Contact
            </Link>
            
            <div className="mx-2 h-6 w-px bg-gray-200"></div>
            
            <Link 
              to="/blogs"
              className="p-2.5 text-gray-500 hover:text-primary rounded-md transition-colors"
              aria-label="Search articles"
            >
              <SearchIcon size={18} />
            </Link>
            
            <Link 
              to="/subscribe" 
              className="ml-1 bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded-md transition-colors text-sm font-medium"
            >
              Get Started Free
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 lg:hidden">
            <Link 
              to="/blogs"
              className="p-2 text-gray-500 hover:text-primary rounded-md transition-colors"
              aria-label="Search articles"
            >
              <SearchIcon size={20} />
            </Link>
            
            <button 
              className="p-2 text-gray-800 rounded-md hover:bg-gray-100" 
              onClick={toggleMenu} 
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <MenuIcon size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ease-in-out">
          <div className="container mx-auto max-w-6xl px-6 py-4 space-y-4">
            <div className="space-y-1">
              <div className="text-xs uppercase text-gray-500 font-medium px-2 pb-1">Articles</div>
              <Link 
                to="/blogs" 
                className={`flex items-center gap-2 p-3 rounded-md transition-colors ${
                  isActive('/blogs') ? 'bg-primary/10 text-primary' : 'hover:bg-gray-50'
                }`}
              >
                <BookIcon size={18} className="text-primary/70" />
                <span className="font-medium">All Articles</span>
              </Link>
              
              <Link 
                to="/health" 
                className={`flex items-center gap-2 p-3 rounded-md transition-colors ${
                  isActive('/health') ? 'bg-primary/10 text-primary' : 'hover:bg-gray-50'
                }`}
              >
                <HeartIcon size={18} className="text-rose-500" />
                <span className="font-medium">Health & Nutrition</span>
              </Link>
              
              <Link 
                to="/fitness" 
                className={`flex items-center gap-2 p-3 rounded-md transition-colors ${
                  isActive('/fitness') ? 'bg-primary/10 text-primary' : 'hover:bg-gray-50'
                }`}
              >
                <DumbbellIcon size={18} className="text-blue-500" />
                <span className="font-medium">Fitness & Training</span>
              </Link>
            </div>
            
            <div className="h-px bg-gray-100 my-2"></div>
            
            <div className="space-y-1">
              <Link 
                to="/about" 
                className={`block p-3 rounded-md transition-colors ${
                  isActive('/about') ? 'bg-primary/10 text-primary' : 'hover:bg-gray-50'
                }`}
              >
                About Us
              </Link>
              
              <Link 
                to="/contact" 
                className={`block p-3 rounded-md transition-colors ${
                  isActive('/contact') ? 'bg-primary/10 text-primary' : 'hover:bg-gray-50'
                }`}
              >
                Contact
              </Link>
            </div>
            
            <div className="pt-2">
              <Link 
                to="/subscribe" 
                className="bg-primary text-white hover:bg-primary/90 w-full py-3 px-4 rounded-md text-center block font-medium"
              >
                Get Started Free
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
