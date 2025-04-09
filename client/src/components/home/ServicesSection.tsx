import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Service } from "@shared/schema";

export default function ServicesSection() {
  const { data: services, isLoading, error } = useQuery<Service[]>({
    queryKey: ['/api/services'],
  });

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-3 text-primary">Our Cleaning Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Choose from our range of professional cleaning services designed to keep your home spotless.</p>
        </div>

        {isLoading && (
          <div className="text-center py-10">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            <p className="mt-2">Loading services...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-10 text-red-500">
            <p>Error loading services. Please try again later.</p>
          </div>
        )}

        {services && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.slice(0, 3).map((service) => (
                <Card key={service.id} className="overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="h-48 w-full overflow-hidden">
                    <img 
                      src={service.imageUrl} 
                      alt={service.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-heading font-semibold text-xl mb-2 text-primary">{service.name}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-accent font-heading font-bold text-lg">{service.price}</span>
                      <a href="#booking">
                        <Button className="bg-primary text-white hover:bg-accent transition duration-300">
                          Book Now
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              {services.slice(3, 5).map((service) => (
                <Card key={service.id} className="overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="h-48 w-full overflow-hidden">
                    <img 
                      src={service.imageUrl} 
                      alt={service.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-heading font-semibold text-xl mb-2 text-primary">{service.name}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-accent font-heading font-bold text-lg">{service.price}</span>
                      <a href="#booking">
                        <Button className="bg-primary text-white hover:bg-accent transition duration-300">
                          Book Now
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}

        <div className="text-center mt-12">
          <a href="#booking">
            <Button className="bg-accent text-white hover:bg-primary transition duration-300 px-8 py-3 h-auto text-lg font-heading font-semibold shadow-md">
              Schedule Your Cleaning
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
