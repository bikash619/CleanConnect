import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Service } from "@shared/schema";
import { getServiceImage } from '../../assets/services';
import { Link } from "wouter";

export default function ServicesSection() {
  const { data: services, isLoading, error } = useQuery<Service[]>({
    queryKey: ['/api/services'],
  });

  // Featured services - show only 4 on the homepage
  const featuredServices = services?.slice(0, 4);

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

        {isLoading && (
          <div className="text-center py-10">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary border-t-2"></div>
            <p className="mt-4 text-gray-500">Loading our professional services...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-10 bg-red-50 rounded-lg border border-red-100 p-6">
            <div className="text-red-500 text-4xl mb-3">
              <i className="fas fa-exclamation-circle"></i>
            </div>
            <p className="text-red-600 font-medium">Error loading services. Please try again later.</p>
          </div>
        )}

        {featuredServices && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredServices.map((service, index) => (
              <Card 
                key={service.id} 
                className="service-card border-none bg-white shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full rounded-xl overflow-hidden slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-48 w-full overflow-hidden relative group">
                  {service.imageUrl ? (
                    <img
                      src={getServiceImage(service.name) || service.imageUrl}
                      alt={service.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-light flex items-center justify-center">
                      <i className={`${getServiceIcon(service.name)} text-5xl text-primary/50`}></i>
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                    {service.price}
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center mb-4">
                    <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 shadow-sm">
                      <i className={getServiceIcon(service.name)}></i>
                    </div>
                    <h3 className="font-heading font-semibold text-xl text-primary">{service.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-6 text-sm flex-grow">{service.description}</p>
                  <div className="grid grid-cols-2 gap-3 mt-auto pt-4">
                    <a href="#booking" className="block">
                      <Button className="w-full bg-white text-purple-600 hover:bg-primary hover:text-white border border-primary transition-all duration-300 rounded-full shadow-sm hover:shadow-md font-medium">
                        Book Now
                      </Button>
                    </a>
                    <Link href={`/services/${service.name.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}>
                      <a className="block">
                        <Button variant="outline" className="w-full border-gray-300 text-primary hover:bg-gray-100 hover:text-primary transition-all duration-300 rounded-full shadow-sm hover:shadow-md font-medium">
                          Details
                        </Button>
                      </a>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <div className="text-center mt-16 flex flex-col items-center slide-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-gray-700 mb-5 max-w-xl">
            We offer a complete range of professional cleaning services to meet all your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/services">
              <a className="block">
                <Button className="bg-white hover:bg-primary border border-primary text-primary hover:text-white transition-all duration-300 px-8 py-3 h-auto text-lg font-heading font-semibold rounded-full shadow-md hover:shadow-lg btn-primary">
                  View All Services <i className="fas fa-arrow-right ml-2"></i>
                </Button>
              </a>
            </Link>
            <a href="#booking">
              <Button className="bg-primary hover:bg-accent text-white transition duration-300 px-8 py-3 h-auto text-lg font-heading font-semibold rounded-full shadow-lg btn-primary">
                Schedule Cleaning <i className="fas fa-calendar-check ml-2"></i>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Helper function to assign icons based on service name
function getServiceIcon(serviceName: string): string {
  const icons: Record<string, string> = {
    "Window Cleaning": "fas fa-window-restore",
    "Gutters Cleaning": "fas fa-house",
    "Bond Cleaning": "fas fa-key",
    "Solar Panel Cleaning": "fas fa-solar-panel",
    "General Cleaning": "fas fa-broom",
    "Blinds Cleaning": "fas fa-blinds",
    "Carpet & Upholstery Cleaning": "fas fa-couch",
    "Tile & Grout Cleaning": "fas fa-border-all"
  };
  
  return icons[serviceName] || "fas fa-spray-can-sparkles";
}
