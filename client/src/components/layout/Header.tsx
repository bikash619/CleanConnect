import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";

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
    <header className={`bg-primary text-white sticky top-0 z-50 ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/">
            <a className="font-heading font-bold text-2xl flex items-center">
              <i className="fas fa-broom mr-2"></i>
              <span>PurpleClean</span>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 items-center">
            <a href="/#services" className="hover:text-light transition duration-300">Services</a>
            <a href="/#how-it-works" className="hover:text-light transition duration-300">How It Works</a>
            <a href="/#testimonials" className="hover:text-light transition duration-300">Testimonials</a>
            <a href="/#about" className="hover:text-light transition duration-300">About Us</a>
            <a href="/#contact" className="hover:text-light transition duration-300">Contact</a>
            <a href="/#booking">
              <Button variant="outline" className="font-heading font-semibold hover:bg-light">
                Book Now
              </Button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-3 pb-3">
            <div className="flex flex-col space-y-3">
              <a href="/#services" className="hover:bg-secondary px-3 py-2 rounded transition duration-300">Services</a>
              <a href="/#how-it-works" className="hover:bg-secondary px-3 py-2 rounded transition duration-300">How It Works</a>
              <a href="/#testimonials" className="hover:bg-secondary px-3 py-2 rounded transition duration-300">Testimonials</a>
              <a href="/#about" className="hover:bg-secondary px-3 py-2 rounded transition duration-300">About Us</a>
              <a href="/#contact" className="hover:bg-secondary px-3 py-2 rounded transition duration-300">Contact</a>
              <a href="/#booking" className="bg-white text-primary px-3 py-2 rounded font-heading font-semibold text-center">Book Now</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
