import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative py-20 md:py-28 bg-primary text-white">
      <div className="absolute inset-0 bg-black opacity-25 z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="font-heading font-bold text-4xl md:text-5xl leading-tight mb-4">
              Professional Cleaning Services for Your Home
            </h1>
            <p className="text-lg md:text-xl mb-8 text-light">
              Leave the cleaning to us. Our professional team delivers spotless results every time.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#booking">
                <Button variant="outline" className="bg-white text-primary hover:bg-light transition duration-300 shadow-lg w-full sm:w-auto font-heading px-6 py-3 h-auto text-base font-semibold">
                  Book Now
                </Button>
              </a>
              <a href="#services">
                <Button variant="outline" className="border-2 border-white hover:bg-white hover:text-primary transition duration-300 w-full sm:w-auto font-heading px-6 py-3 h-auto text-base font-semibold">
                  Our Services
                </Button>
              </a>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-10">
            <img 
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
              alt="Professional house cleaning" 
              className="rounded-lg shadow-xl w-full" 
              width="600" 
              height="400"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
