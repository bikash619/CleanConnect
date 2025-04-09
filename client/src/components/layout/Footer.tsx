import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-heading font-bold text-xl mb-4">PurpleClean</h3>
            <p className="mb-4">Professional cleaning services that deliver exceptional results. We make your home or office sparkle.</p>
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
              <li><a href="/#services" className="hover:text-light transition duration-300">Regular Cleaning</a></li>
              <li><a href="/#services" className="hover:text-light transition duration-300">Deep Cleaning</a></li>
              <li><a href="/#services" className="hover:text-light transition duration-300">Recurring Service</a></li>
              <li><a href="/#services" className="hover:text-light transition duration-300">Move In/Out Cleaning</a></li>
              <li><a href="/#services" className="hover:text-light transition duration-300">Office Cleaning</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-bold text-xl mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <i className="fas fa-map-marker-alt mr-2"></i>
                <span>123 Cleaning Street, Suite 456<br/>Sparkle City, SC 12345</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone-alt mr-2"></i>
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-2"></i>
                <span>info@purpleclean.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-700 mb-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} PurpleClean. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="/privacy-policy">
              <a className="hover:text-light transition duration-300">Privacy Policy</a>
            </Link>
            <Link href="/terms-and-conditions">
              <a className="hover:text-light transition duration-300">Terms of Service</a>
            </Link>
            <a href="#" className="hover:text-light transition duration-300">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
