import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Testimonial } from "@shared/schema";

export default function TestimonialsSection() {
  const { data: testimonials, isLoading, error } = useQuery<Testimonial[]>({
    queryKey: ['/api/testimonials'],
  });

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-3 text-primary">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Don't just take our word for it. Here's what our satisfied customers have to say.</p>
        </div>

        {isLoading && (
          <div className="text-center py-10">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            <p className="mt-2">Loading testimonials...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-10 text-red-500">
            <p>Error loading testimonials. Please try again later.</p>
          </div>
        )}

        {testimonials && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-light rounded-lg p-6 shadow-md relative">
                <div className="text-accent text-4xl absolute -top-4 left-4">
                  <i className="fas fa-quote-left"></i>
                </div>
                <CardContent className="pt-6 px-0">
                  <p className="text-gray-700 mb-4">{testimonial.content}</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img 
                        src={testimonial.imageUrl} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover" 
                        width="48" 
                        height="48"
                      />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-primary">{testimonial.name}</h4>
                      <div className="text-yellow-400 flex">
                        {[...Array(5)].map((_, i) => (
                          <i 
                            key={i} 
                            className={`fas ${i < testimonial.rating ? 'fa-star' : i === Math.floor(testimonial.rating) && testimonial.rating % 1 !== 0 ? 'fa-star-half-alt' : 'fa-star text-gray-300'}`}
                          ></i>
                        ))}
                      </div>
                    </div>
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
