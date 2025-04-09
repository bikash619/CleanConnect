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
    <section id="booking" className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-3">Book Your Cleaning Service</h2>
          <p className="text-light max-w-2xl mx-auto">Schedule your cleaning service in minutes. We'll confirm your booking and send a professional team to your location.</p>
        </div>

        <Card className="bg-white text-gray-800 rounded-lg shadow-xl max-w-4xl mx-auto overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-accent text-white p-8 flex flex-col justify-center">
              <h3 className="font-heading font-bold text-2xl mb-4">Your Clean Home Is Just A Few Clicks Away</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <i className="fas fa-check-circle mr-3 text-xl"></i>
                  <span>100% Satisfaction Guarantee</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle mr-3 text-xl"></i>
                  <span>Professional, Vetted Cleaners</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle mr-3 text-xl"></i>
                  <span>Flexible Scheduling</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle mr-3 text-xl"></i>
                  <span>Easy Online Booking</span>
                </li>
              </ul>
            </div>
            <div className="md:w-2/3 p-8">
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
                              <SelectTrigger className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-accent focus:border-accent">
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
                              <SelectTrigger className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-accent focus:border-accent">
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
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-accent focus:border-accent"
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
                            <SelectTrigger className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-accent focus:border-accent">
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
                              className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-accent focus:border-accent"
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
                              className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-accent focus:border-accent"
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
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-accent focus:border-accent"
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
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-accent focus:border-accent"
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
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-accent focus:border-accent"
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
                    className="w-full bg-accent text-white py-3 px-6 rounded-lg font-heading font-semibold text-lg hover:bg-primary transition duration-300"
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
