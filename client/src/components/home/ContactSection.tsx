import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { contactFormSchema } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "wouter";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
  privacy: boolean;
};

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      privacy: false,
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: FormValues) => {
      const res = await apiRequest("POST", "/api/contact", data);
      return res.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Message Sent!",
        description: `Thank you for contacting us. ${data.emailSent ? "A confirmation email has been sent to your inbox." : ""} We'll get back to you shortly.`,
        variant: "default",
      });
      form.reset();
      setIsSubmitting(false);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message. Please try again.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  });

  function onSubmit(data: FormValues) {
    setIsSubmitting(true);
    contactMutation.mutate(data);
  }

  const contactInfo = [
    {
      icon: "fas fa-map-marker-alt",
      title: "Address",
      content: "Sydney, Australia"
    },
    {
      icon: "fas fa-phone-alt",
      title: "Phone",
      content: "0482 089 848"
    },
    {
      icon: "fas fa-envelope",
      title: "Email",
      content: "info@sparkpros.com.au"
    },
    {
      icon: "fas fa-clock",
      title: "Hours",
      content: "Monday - Friday: 8:00 AM - 8:00 PM\nSaturday: 9:00 AM - 5:00 PM\nSunday: Closed"
    }
  ];

  return (
    <section id="contact" className="py-16 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-3 text-primary">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Have questions or need more information? Get in touch with our friendly team.</p>
        </div>

        <Card className="flex flex-col md:flex-row rounded-lg overflow-hidden shadow-lg bg-white">
          <div className="md:w-1/2 p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-semibold">Name</FormLabel>
                      <FormControl>
                        <Input
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-accent focus:border-accent"
                          placeholder="Your name"
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
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-semibold">Email</FormLabel>
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
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-semibold">Subject</FormLabel>
                      <FormControl>
                        <Input
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-accent focus:border-accent"
                          placeholder="Subject of your message"
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
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-semibold">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={4}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-accent focus:border-accent"
                          placeholder="Your message"
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
                  name="privacy"
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
                          I agree to the <Link href="/privacy-policy" className="text-accent hover:underline">Privacy Policy</Link>.
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-primary text-white py-3 px-6 rounded-lg font-heading font-semibold hover:bg-accent transition duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="mr-2 inline-block animate-spin">
                        <i className="fas fa-spinner"></i>
                      </span>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </Form>
          </div>
          <div className="md:w-1/2 bg-primary text-white p-8 flex flex-col justify-center">
            <h3 className="font-heading font-bold text-2xl mb-6">Get In Touch</h3>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div className="flex items-start" key={index}>
                  <div className="text-2xl mr-4">
                    <i className={info.icon}></i>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-lg">{info.title}</h4>
                    <p className="whitespace-pre-line">{info.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="font-heading font-semibold text-lg mb-3">Follow Us</h4>
              <div className="flex flex-wrap gap-4 md:gap-6">
                <a href="#" className="text-white hover:text-light transition duration-300" aria-label="Facebook">
                  <i className="fab fa-facebook-f text-xl"></i>
                </a>
                <a href="#" className="text-white hover:text-light transition duration-300" aria-label="Twitter">
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a href="#" className="text-white hover:text-light transition duration-300" aria-label="Instagram">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a href="#" className="text-white hover:text-light transition duration-300" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in text-xl"></i>
                </a>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}