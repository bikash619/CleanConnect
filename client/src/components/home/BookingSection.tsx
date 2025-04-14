import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { bookingFormSchema } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "wouter";

type FormValues = {
  serviceType: string;
  homeSize: string;
  date: string;
  time: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  notes?: string;
  terms: boolean;
};

export default function BookingSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      serviceType: "",
      homeSize: "",
      date: "",
      time: "",
      name: "",
      phone: "",
      email: "",
      address: "",
      notes: "",
      terms: false,
    },
  });

  const bookingMutation = useMutation({
    mutationFn: async (data: FormValues) => {
      const res = await apiRequest("POST", "/api/bookings", data);
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Booking Submitted!",
        description: "We'll confirm your booking shortly. Thank you for choosing PurpleClean.",
        variant: "default",
      });
      form.reset();
      setIsSubmitting(false);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to submit booking. Please try again.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  });

  function onSubmit(data: FormValues) {
    setIsSubmitting(true);
    bookingMutation.mutate(data);
  }

  return (
    <section id="booking" className="py-24 bg-gradient-to-br from-primary/95 to-[#8D70FF]/95 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"></div>
      
      {/* Animated dots pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', 
          backgroundSize: '30px 30px' 
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 slide-up">
          <span className="text-sm font-medium bg-white/10 text-white px-4 py-1.5 rounded-full mb-4 inline-block backdrop-blur-sm">
            EASY BOOKING
          </span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-5">Book Your Cleaning Service</h2>
          <p className="text-white/90 max-w-2xl mx-auto text-lg">
            Schedule your cleaning service in minutes. We'll confirm your booking and send a professional team to your location.
          </p>
        </div>

        <Card className="bg-white text-gray-800 rounded-2xl shadow-2xl max-w-5xl mx-auto overflow-hidden border-none">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/5 bg-gradient-to-br from-primary to-[#8D70FF] text-white p-10 flex flex-col justify-center relative">
              <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute inset-0" style={{ 
                  backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', 
                  backgroundSize: '20px 20px' 
                }}></div>
              </div>
              
              <div className="relative z-10">
                <h3 className="font-heading font-bold text-2xl mb-6">Your Clean Home Is Just A Few Clicks Away</h3>
                
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <div className="bg-white/20 rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-0.5 backdrop-blur-sm">
                      <i className="fas fa-shield-alt text-lg"></i>
                    </div>
                    <div>
                      <h4 className="font-medium text-lg mb-1">100% Satisfaction Guarantee</h4>
                      <p className="text-white/80 text-sm">If you're not satisfied, we'll re-clean at no extra cost</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-white/20 rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-0.5 backdrop-blur-sm">
                      <i className="fas fa-user-check text-lg"></i>
                    </div>
                    <div>
                      <h4 className="font-medium text-lg mb-1">Professional, Vetted Cleaners</h4>
                      <p className="text-white/80 text-sm">All staff are background-checked and highly trained</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-white/20 rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-0.5 backdrop-blur-sm">
                      <i className="fas fa-calendar-alt text-lg"></i>
                    </div>
                    <div>
                      <h4 className="font-medium text-lg mb-1">Flexible Scheduling</h4>
                      <p className="text-white/80 text-sm">Choose times that work for your busy schedule</p>
                    </div>
                  </li>
                </ul>
                
                {/* Trustpilot-style rating widget */}
                <div className="mt-10 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                  <div className="flex items-center mb-2">
                    <div className="text-[#00b67a] flex mr-2">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <span className="text-sm">5.0 rating</span>
                  </div>
                  <p className="text-sm text-white/90">Based on <span className="font-medium">200+</span> satisfied customers</p>
                </div>
              </div>
            </div>
            
            <div className="md:w-3/5 p-10">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="serviceType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 font-semibold">Service Type</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            disabled={isSubmitting}
                          >
                            <FormControl>
                              <SelectTrigger className="w-full p-3 border-none bg-light rounded-lg focus:ring-2 focus:ring-primary/40 shadow-sm hover:bg-light/70 transition-all duration-300 form-field">
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="regular">Regular Cleaning</SelectItem>
                              <SelectItem value="deep">Deep Cleaning</SelectItem>
                              <SelectItem value="recurring">Recurring Service</SelectItem>
                              <SelectItem value="move">Move In/Out Cleaning</SelectItem>
                              <SelectItem value="office">Office Cleaning</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="homeSize"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 font-semibold">Home Size</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            disabled={isSubmitting}
                          >
                            <FormControl>
                              <SelectTrigger className="w-full p-3 border-none bg-light rounded-lg focus:ring-2 focus:ring-primary/40 shadow-sm hover:bg-light/70 transition-all duration-300 form-field">
                                <SelectValue placeholder="Select home size" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="studio">Studio</SelectItem>
                              <SelectItem value="1br">1 Bedroom</SelectItem>
                              <SelectItem value="2br">2 Bedrooms</SelectItem>
                              <SelectItem value="3br">3 Bedrooms</SelectItem>
                              <SelectItem value="4br">4+ Bedrooms</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-semibold">Preferred Date</FormLabel>
                        <FormControl>
                          <Input
                            type="date"
                            className="w-full p-3 border-none bg-light rounded-lg focus:ring-2 focus:ring-primary/40 shadow-sm hover:bg-light/70 transition-all duration-300 form-field"
                            disabled={isSubmitting}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="time"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-semibold">Preferred Time</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          disabled={isSubmitting}
                        >
                          <FormControl>
                            <SelectTrigger className="w-full p-3 border-none bg-light rounded-lg focus:ring-2 focus:ring-primary/40 shadow-sm hover:bg-light/70 transition-all duration-300 form-field">
                              <SelectValue placeholder="Select a time slot" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="morning">Morning (8:00 AM - 12:00 PM)</SelectItem>
                            <SelectItem value="afternoon">Afternoon (12:00 PM - 4:00 PM)</SelectItem>
                            <SelectItem value="evening">Evening (4:00 PM - 8:00 PM)</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 font-semibold">Full Name</FormLabel>
                          <FormControl>
                            <Input
                              className="w-full p-3 border-none bg-light rounded-lg focus:ring-2 focus:ring-primary/40 shadow-sm hover:bg-light/70 transition-all duration-300 form-field"
                              placeholder="Your full name"
                              disabled={isSubmitting}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 font-semibold">Phone Number</FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              className="w-full p-3 border-none bg-light rounded-lg focus:ring-2 focus:ring-primary/40 shadow-sm hover:bg-light/70 transition-all duration-300 form-field"
                              placeholder="Your phone number"
                              disabled={isSubmitting}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-semibold">Email Address</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            className="w-full p-3 border-none bg-light rounded-lg focus:ring-2 focus:ring-primary/40 shadow-sm hover:bg-light/70 transition-all duration-300 form-field"
                            placeholder="Your email address"
                            disabled={isSubmitting}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-semibold">Address</FormLabel>
                        <FormControl>
                          <Textarea
                            rows={3}
                            className="w-full p-3 border-none bg-light rounded-lg focus:ring-2 focus:ring-primary/40 shadow-sm hover:bg-light/70 transition-all duration-300 form-field"
                            placeholder="Your full address"
                            disabled={isSubmitting}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="notes"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-semibold">Special Instructions (Optional)</FormLabel>
                        <FormControl>
                          <Textarea
                            rows={2}
                            className="w-full p-3 border-none bg-light rounded-lg focus:ring-2 focus:ring-primary/40 shadow-sm hover:bg-light/70 transition-all duration-300 form-field"
                            placeholder="Any specific requirements or notes"
                            disabled={isSubmitting}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="terms"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-2 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            disabled={isSubmitting}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-gray-700">
                            I agree to the <Link href="/terms-and-conditions" className="text-accent hover:underline">Terms and Conditions</Link> and <Link href="/privacy-policy" className="text-accent hover:underline">Privacy Policy</Link>.
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-accent text-white py-4 px-8 rounded-full font-heading font-semibold text-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300 mt-4"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="mr-2 inline-block animate-spin">
                          <i className="fas fa-spinner"></i>
                        </span>
                        Processing...
                      </>
                    ) : (
                      "Book Your Cleaning"
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
