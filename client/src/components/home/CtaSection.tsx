import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function CtaSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-accent to-primary text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl floating"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white opacity-10 rounded-full translate-y-1/2 -translate-x-1/4 blur-3xl floating" style={{animationDelay: '1s'}}></div>
      
      {/* Animated dots pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', 
          backgroundSize: '20px 20px' 
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <span className="bg-white/20 text-white px-4 py-1.5 rounded-full text-sm font-medium mb-6 inline-block backdrop-blur-sm shadow-lg">
            <i className="fas fa-sparkles mr-2"></i> Transform Your Space Today
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-5xl mb-6 slide-up">Ready for a Spotless, Fresh Home?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-white/90 leading-relaxed slide-up" style={{animationDelay: '0.1s'}}>
            Experience the difference our professional cleaning services can make. Our team of experts is ready to exceed your expectations.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 slide-up" style={{animationDelay: '0.2s'}}>
            <a href="#booking">
              <Button 
                className="bg-white text-primary hover:bg-light transition duration-300 px-8 py-4 h-auto text-lg font-heading font-semibold rounded-full shadow-xl hover-lift"
              >
                <i className="fas fa-calendar-check mr-2"></i> Book Your Cleaning
              </Button>
            </a>
            <Link href="/services">
              <a>
                <Button 
                  variant="outline" 
                  className="border-2 border-white text-purple-600 hover:bg-white/20 transition duration-300 px-8 py-4 h-auto text-lg font-heading font-semibold rounded-full shadow-md hover-lift"
                >
                  <i className="fas fa-arrow-right mr-2"></i> Explore All Services
                </Button>
              </a>
            </Link>
          </div>
          
          {/* Stats */}
          <div className="mt-16 pt-10 border-t border-white/20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center slide-up" style={{animationDelay: '0.3s'}}>
              <div className="text-4xl font-bold font-heading mb-2">2,500+</div>
              <div className="text-white/80">Happy Customers</div>
            </div>
            <div className="text-center slide-up" style={{animationDelay: '0.4s'}}>
              <div className="text-4xl font-bold font-heading mb-2">8+</div>
              <div className="text-white/80">Professional Services</div>
            </div>
            <div className="text-center slide-up" style={{animationDelay: '0.5s'}}>
              <div className="text-4xl font-bold font-heading mb-2">100%</div>
              <div className="text-white/80">Satisfaction Guaranteed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
