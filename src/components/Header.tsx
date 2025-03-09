
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full py-4 px-6 md:px-12 transition-all duration-300",
        {
          "bg-white/80 backdrop-blur-md shadow-sm": scrolled,
          "bg-transparent": !scrolled,
        }
      )}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-lg font-medium">
          <span className="font-semibold">Portfolio</span>
        </Link>

        {isMobile ? (
          <>
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-full bg-secondary/80 hover:bg-secondary transition-colors"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {isMenuOpen && (
              <div className="fixed inset-0 top-[60px] z-40 bg-white animate-fade-in">
                <nav className="flex flex-col items-center justify-center h-full gap-8 text-lg">
                  <Link 
                    to="/" 
                    className="hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link 
                    to="/blog" 
                    className="hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Blog
                  </Link>
                </nav>
              </div>
            )}
          </>
        ) : (
          <nav className="flex items-center space-x-8 text-sm">
            <Link 
              to="/" 
              className="hover:text-primary transition-colors link-underline"
            >
              Home
            </Link>
            <Link 
              to="/blog" 
              className="hover:text-primary transition-colors link-underline"
            >
              Blog
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
