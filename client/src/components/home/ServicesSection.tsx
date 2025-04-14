import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Service } from "@shared/schema";

export default function ServicesSection() {
  const { data: services, isLoading, error } = useQuery<Service[]>({
    queryKey: ['/api/services'],
  });

  return (
    <section id="services" className="py-20 bg-white relative">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-light/50 rounded-full -translate-y-1/4 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-light/50 rounded-full translate-y-1/4 -translate-x-1/4"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-accent bg-light px-4 py-1.5 rounded-full mb-4 inline-block">OUR EXPERTISE</span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-primary">
            <span className="relative inline-block">
              Professional Cleaning Services
              <svg className="absolute w-full -bottom-1 left-0 opacity-30" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9C30 3.16667 127 -5.5 297 9" stroke="#6C3DF4" strokeWidth="6" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Choose from our range of expert cleaning solutions designed for exceptional results and customer satisfaction.
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

        {services && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.id} 
                className="service-card border-none bg-white shadow-lg hover-shadow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-48 w-full overflow-hidden rounded-t-lg">
                  <img 
                    src={service.imageUrl} 
                    alt={service.name} 
                    className="w-full h-full object-cover service-image"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {service.price}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
                      <i className={getServiceIcon(service.name)}></i>
                    </div>
                    <h3 className="font-heading font-semibold text-xl text-primary">{service.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-6 text-sm">{service.description}</p>
                  <a href="#booking" className="block">
                    <Button className="w-full bg-white hover:bg-primary text-primary hover:text-white border border-primary transition-all duration-300 rounded-full shadow-sm hover:shadow-md font-medium">
                      Book This Service
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <div className="text-center mt-16 slide-up">
          <a href="#booking">
            <Button className="bg-primary hover:bg-accent text-white transition duration-300 px-10 py-4 h-auto text-lg font-heading font-semibold rounded-full shadow-lg btn-primary">
              Schedule Your Cleaning <i className="fas fa-long-arrow-alt-right ml-2"></i>
            </Button>
          </a>
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
