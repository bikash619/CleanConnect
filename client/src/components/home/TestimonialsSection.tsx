import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Testimonial } from "@shared/schema";
import { staticTestimonials } from "@/lib/staticData";

// Check if we're in a production environment (works on any domain)
const isProdEnv = import.meta.env.PROD;

export default function TestimonialsSection() {
  const { data: testimonials, isLoading, error } = useQuery<Testimonial[]>({
    queryKey: ['/api/testimonials'],
    // Use static data in production
    enabled: !isProdEnv,
    initialData: isProdEnv ? staticTestimonials : undefined,
  });

  // Use static data directly in production
  const displayTestimonials = isProdEnv ? staticTestimonials : testimonials;

  return (
    <section id="testimonials" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full -translate-y-1/4 -translate-x-1/4"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full translate-y-1/4 translate-x-1/4"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-14 slide-up">
          <span className="text-sm font-medium text-accent bg-accent/10 px-4 py-1.5 rounded-full mb-4 inline-block">CLIENT TESTIMONIALS</span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-primary">
            <span className="relative inline-block">
              What Our Clients Say
              <svg className="absolute w-full -bottom-1 left-0 opacity-30" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9C30 3.16667 127 -5.5 297 9" stroke="#6C3DF4" strokeWidth="6" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Hear about the exceptional cleaning experiences our valued customers have had with our services.
          </p>
        </div>

        {isLoading && !isProdEnv && (
          <div className="text-center py-10">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary border-t-2"></div>
            <p className="mt-4 text-gray-500">Loading testimonials...</p>
          </div>
        )}

        {error && !isProdEnv && (
          <div className="text-center py-10 bg-red-50 rounded-lg border border-red-100 p-6">
            <div className="text-red-500 text-4xl mb-3">
              <i className="fas fa-exclamation-circle"></i>
            </div>
            <p className="text-red-600 font-medium">Error loading testimonials. Please try again later.</p>
          </div>
        )}

        {displayTestimonials && displayTestimonials.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 slide-up">
            {displayTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="h-full bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="flex items-center mb-6">
                    <div className="h-14 w-14 rounded-full overflow-hidden mr-4">
                      <img 
                        src={testimonial.imageUrl} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(testimonial.name);
                        }}
                      />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-lg text-primary">{testimonial.name}</h4>
                      <div className="flex text-yellow-400">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <i key={i} className="fas fa-star"></i>
                        ))}
                      </div>
                    </div>
                  </div>
                  <blockquote className="italic text-gray-600 flex-grow mb-4">"{testimonial.content}"</blockquote>
                  <div className="text-primary">
                    <i className="fas fa-quote-right"></i>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
