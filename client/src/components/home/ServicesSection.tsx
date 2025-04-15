import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Service } from "@shared/schema";
import { Link } from "wouter";
import { staticServices } from "@/lib/staticData";
import { ServiceImage } from "@/components/ui/service-image";

// Check if we're in a production environment (Vercel deployment)
const isVercelProduction = import.meta.env.PROD && window.location.hostname.includes('vercel.app');

export default function ServicesSection() {
  const { data: services, isLoading, error } = useQuery<Service[]>({
    queryKey: ['/api/services'],
    // Use static data if on Vercel
    enabled: !isVercelProduction,
    initialData: isVercelProduction ? staticServices : undefined,
  });

  // Use static data directly if on Vercel
  const allServices = isVercelProduction ? staticServices : services;
  
  // Featured services - show only 4 on the homepage
  const featuredServices = allServices?.slice(0, 4);

  return (
    <section id="services" className="py-24 md:py-32 bg-light relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/4 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full translate-y-1/4 -translate-x-1/4"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 slide-up">
          <span className="text-sm font-medium text-accent bg-primary/10 px-4 py-1.5 rounded-full mb-4 inline-block">FEATURED SERVICES</span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-primary">
            <span className="relative inline-block">
              Our Most Popular Services
              <svg className="absolute w-full -bottom-1 left-0 opacity-30" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9C30 3.16667 127 -5.5 297 9" stroke="#6C3DF4" strokeWidth="6" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our most requested cleaning solutions, tailored for exceptional results and customer satisfaction.
          </p>
        </div>

        {isLoading && !isVercelProduction && (
          <div className="text-center py-10">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary border-t-2"></div>
            <p className="mt-4 text-gray-500">Loading our professional services...</p>
          </div>
        )}

        {error && !isVercelProduction && (
          <div className="text-center py-10 bg-red-50 rounded-lg border border-red-100 p-6">
            <div className="text-red-500 text-4xl mb-3">
              <i className="fas fa-exclamation-circle"></i>
            </div>
            <p className="text-red-600 font-medium">Error loading services. Please try again later.</p>
          </div>
        )}

        {featuredServices && featuredServices.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
            {featuredServices.map((service) => (
              <Card key={service.id} className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 slide-up h-full">
                <div className="relative h-52 overflow-hidden">
                  <ServiceImage 
                    serviceName={service.name}
                    imagePath={service.imageUrl}
                    className="transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center mb-2">
                    <span className="flex items-center justify-center w-10 h-10 mr-3 rounded-full bg-primary/10">
                      <i className={getServiceIcon(service.name) || "fas fa-spray-can-sparkles"}></i>
                    </span>
                    <h3 className="font-heading font-semibold text-lg text-primary">{service.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-3 line-clamp-2">{service.description}</p>
                  <p className="font-heading font-semibold text-primary mb-4">{service.price}</p>
                  <div className="grid grid-cols-2 gap-3 mt-auto">
                    <Button 
                      asChild
                      variant="outline" 
                      className="border-primary text-primary hover:bg-white/20"
                    >
                      <Link href="#booking">Book Now</Link>
                    </Button>
                    <Button asChild className="bg-white text-primary border border-primary hover:bg-primary/10">
                      <Link href={`/services/${service.name.toLowerCase().replace(/\s+/g, '-')}`}>Details</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <div className="flex justify-center space-x-4 slide-up">
          <Button asChild variant="default" className="bg-primary text-white px-6 py-2 rounded-lg shadow-lg hover:bg-accent transition duration-300">
            <Link href="/services">View All Services</Link>
          </Button>
          <Button asChild variant="outline" className="border-primary text-primary px-6 py-2 rounded-lg hover:bg-white/20 transition duration-300">
            <Link href="#booking">Get a Quote</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function getServiceIcon(serviceName: string): string | undefined {
  const serviceIcons: Record<string, string> = {
    "Regular Cleaning": "fas fa-broom",
    "Deep Cleaning": "fas fa-soap",
    "Move In/Out Cleaning": "fas fa-truck-ramp-box",
    "Window Cleaning": "fas fa-window-maximize",
    "Gutters Cleaning": "fas fa-house-chimney",
    "Blinds Cleaning": "fas fa-shower",
    "Carpet & Upholstery Cleaning": "fas fa-couch",
    "Tile & Grout Cleaning": "fas fa-brush"
  };
  
  return serviceIcons[serviceName];
}
