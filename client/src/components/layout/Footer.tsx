import { Link } from "wouter";
import { useEffect, useState } from "react";

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 800);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-primary text-white pt-12 pb-6 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-heading font-bold text-xl mb-4">Spark Pro Cleaning</h3>
            <p className="mb-4">Professional cleaning services that deliver exceptional results. Spark with Pros for your home or office.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-light transition duration-300" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white hover:text-light transition duration-300" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white hover:text-light transition duration-300" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white hover:text-light transition duration-300" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-heading font-bold text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/#services" className="hover:text-light transition duration-300">Services</a></li>
              <li><a href="/#how-it-works" className="hover:text-light transition duration-300">How It Works</a></li>
              <li><a href="/#testimonials" className="hover:text-light transition duration-300">Testimonials</a></li>
              <li><a href="/#about" className="hover:text-light transition duration-300">About Us</a></li>
              <li><a href="/#contact" className="hover:text-light transition duration-300">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-bold text-xl mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="/#services" className="hover:text-light transition duration-300">Window Cleaning</a></li>
              <li><a href="/#services" className="hover:text-light transition duration-300">Gutters Cleaning</a></li>
              <li><a href="/#services" className="hover:text-light transition duration-300">Bond Cleaning</a></li>
              <li><a href="/#services" className="hover:text-light transition duration-300">Solar Panel Cleaning</a></li>
              <li><a href="/#services" className="hover:text-light transition duration-300">General Cleaning</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-bold text-xl mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <i className="fas fa-map-marker-alt mr-2"></i>
                <span>Sydney, Australia</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone-alt mr-2"></i>
                <span>0482 089 848</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-2"></i>
                <span>info@sparkpros.com.au</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-700 mb-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Spark Pro Cleaning. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="/privacy-policy" className="hover:text-light transition duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-light transition duration-300">
              Terms of Service
            </Link>
            <a href="#" className="hover:text-light transition duration-300">Sitemap</a>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button 
          onClick={scrollToTop}
          className="fixed right-6 bottom-6 bg-accent text-white p-3 rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300 z-50 animate-fade-in"
          aria-label="Back to top"
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
    </footer>
  );
}
