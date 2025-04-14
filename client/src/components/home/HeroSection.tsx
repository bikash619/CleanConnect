import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-br from-primary to-[#8D70FF] text-white">
      {/* Abstract shapes */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl"></div>
      
      {/* Animated dots pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', 
          backgroundSize: '30px 30px' 
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-16 md:mb-0 slide-in-left">
            <span className="bg-white/20 text-white px-4 py-1 rounded-full text-sm font-medium mb-4 inline-block backdrop-blur-sm">
              #1 Rated Cleaning Service
            </span>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              Expert Cleaning <span className="text-white relative">
                Services
                <svg className="absolute w-full -bottom-2 left-0 opacity-70" viewBox="0 0 200 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 10C24.6667 3.33333 78.6667 -4.4 174 10" stroke="white" strokeWidth="8" strokeLinecap="round"/>
                </svg>
              </span> for Your Home
            </h1>
            <p className="text-lg md:text-xl mb-10 text-white/90 max-w-md">
              From windows to deep cleaning, our professional team delivers exceptional results that exceed expectations every time.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <a href="#booking">
                <Button className="bg-white text-primary hover:bg-light/90 transition duration-300 shadow-xl w-full sm:w-auto font-heading px-8 py-4 h-auto text-base font-semibold rounded-full btn-primary">
                  Book Now
                </Button>
              </a>
              <a href="#services">
                <Button variant="outline" className="border-2 border-white/70 hover:bg-white/10 hover:border-white backdrop-blur-sm transition duration-300 w-full sm:w-auto font-heading px-8 py-4 h-auto text-base font-semibold rounded-full">
                  Explore Services
                </Button>
              </a>
            </div>
            
            {/* Trust badges */}
            <div className="flex items-center mt-10 space-x-6">
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-xs border border-white/30">
                      {i}+
                    </div>
                  ))}
                </div>
                <span className="ml-3 text-sm text-white/90">Years<br/>Experience</span>
              </div>
              <div className="h-10 w-px bg-white/20"></div>
              <div className="flex items-center">
                <div className="text-yellow-300 text-sm">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <span className="ml-2 text-sm text-white/90">5-star<br/>rated</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 md:pl-10 relative slide-in-right">
            {/* Decorative elements */}
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute -left-5 -bottom-5 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
            
            {/* Image with modern styling */}
            <div className="relative p-3 bg-gradient-to-tr from-white/20 to-white/5 backdrop-blur-sm rounded-2xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                alt="Professional house cleaning" 
                className="rounded-xl w-full object-cover h-[400px]" 
                width="600" 
                height="400"
              />
              
              {/* Floating badge */}
              <div className="absolute -left-6 bottom-10 bg-white py-2 px-4 rounded-lg shadow-lg text-primary font-medium text-sm flex items-center">
                <div className="bg-primary rounded-full h-8 w-8 flex items-center justify-center mr-2 text-white">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <span>100% Satisfaction<br/>Guaranteed</span>
              </div>
              
              {/* Floating badge 2 */}
              <div className="absolute -right-6 top-10 bg-white py-2 px-4 rounded-lg shadow-lg text-primary font-medium text-sm flex items-center">
                <div className="bg-primary rounded-full h-8 w-8 flex items-center justify-center mr-2 text-white">
                  <i className="fas fa-calendar-check"></i>
                </div>
                <span>Online Booking<br/>Available 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave bottom */}
      <div className="absolute -bottom-1 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
          <path fill="#ffffff" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
}
