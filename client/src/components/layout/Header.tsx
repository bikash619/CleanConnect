import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import logoSvg from "@/assets/logo.svg";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close mobile menu when location changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`bg-white text-primary sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-lg py-2' : 'py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/">
            <a className="font-heading font-bold flex items-center">
              <img src={logoSvg} alt="PurpleClean Logo" className="h-10 w-auto" />
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <a 
              href="/#services" 
              className="relative font-medium hover:text-accent transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-accent after:left-0 after:-bottom-1 after:transition-all hover:after:w-full"
            >
              Services
            </a>
            <a 
              href="/#how-it-works" 
              className="relative font-medium hover:text-accent transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-accent after:left-0 after:-bottom-1 after:transition-all hover:after:w-full"
            >
              How It Works
            </a>
            <a 
              href="/#testimonials" 
              className="relative font-medium hover:text-accent transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-accent after:left-0 after:-bottom-1 after:transition-all hover:after:w-full"
            >
              Testimonials
            </a>
            <a 
              href="/#about" 
              className="relative font-medium hover:text-accent transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-accent after:left-0 after:-bottom-1 after:transition-all hover:after:w-full"
            >
              About Us
            </a>
            <a 
              href="/#contact" 
              className="relative font-medium hover:text-accent transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-accent after:left-0 after:-bottom-1 after:transition-all hover:after:w-full"
            >
              Contact
            </a>
            <a href="/#booking">
              <Button 
                className="bg-primary hover:bg-accent text-white font-heading font-semibold hover-lift px-6 py-2 h-auto rounded-full shadow-md"
              >
                Book Now
              </Button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-primary focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-3 bg-white rounded-lg shadow-lg fade-in">
            <div className="flex flex-col">
              <a href="/#services" className="text-primary px-4 py-3 hover:bg-light rounded-md transition duration-300">Services</a>
              <a href="/#how-it-works" className="text-primary px-4 py-3 hover:bg-light rounded-md transition duration-300">How It Works</a>
              <a href="/#testimonials" className="text-primary px-4 py-3 hover:bg-light rounded-md transition duration-300">Testimonials</a>
              <a href="/#about" className="text-primary px-4 py-3 hover:bg-light rounded-md transition duration-300">About Us</a>
              <a href="/#contact" className="text-primary px-4 py-3 hover:bg-light rounded-md transition duration-300">Contact</a>
              <a href="/#booking" className="m-4 mt-2">
                <Button className="w-full bg-primary hover:bg-accent text-white font-heading font-semibold rounded-full shadow-md">
                  Book Now
                </Button>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
