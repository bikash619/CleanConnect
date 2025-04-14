import React from 'react';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { useLocation } from 'wouter';

interface ServiceTemplateProps {
  title: string;
  description: string;
  longDescription: string[];
  benefits: string[];
  imageUrl: string;
  price: string;
  faqs?: Array<{ question: string; answer: string }>;
}

export default function ServiceTemplate({
  title,
  description,
  longDescription,
  benefits,
  imageUrl,
  price,
  faqs = []
}: ServiceTemplateProps) {
  const [, navigate] = useLocation();

  return (
    <div className="py-16">
      {/* Hero Section */}
      <div className="bg-primary text-white py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">{title}</h1>
              <p className="text-xl text-primary-50 mb-8">{description}</p>
              <div className="inline-block bg-white rounded-full px-4 py-2 text-primary font-semibold text-lg shadow-sm">
                Starting at {price}
              </div>
              <div className="mt-8 space-x-4">
                <Button 
                  onClick={() => navigate("/#booking")} 
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100 hover-lift shadow-md"
                >
                  Book Now
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => navigate("/#contact")} 
                  size="lg"
                  className="border-white text-purple-600 hover:bg-white/20 hover-lift"
                >
                  Get a Quote
                </Button>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl slide-in-right">
              <img 
                src={imageUrl} 
                alt={title} 
                className="w-full h-[400px] object-cover transition-transform hover:scale-105 duration-500"
              />
            </div>
          </div>
        </Container>
      </div>

      {/* Description Section */}
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-6 slide-up">
            <h2 className="text-3xl font-bold font-heading text-gray-900 mb-6">About Our {title} Service</h2>
            {longDescription.map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="bg-primary-50 p-8 rounded-xl shadow-sm slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold font-heading text-gray-900 mb-6">Benefits</h3>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                    </svg>
                  </span>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      {/* FAQs Section */}
      {faqs.length > 0 && (
        <div className="bg-light py-16">
          <Container>
            <h2 className="text-3xl font-bold font-heading text-gray-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-lg shadow-sm hover-shadow transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </Container>
        </div>
      )}

      {/* CTA Section */}
      <Container className="py-16">
        <div className="bg-accent rounded-2xl p-8 md:p-12 text-center shadow-lg slide-up">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-6">
            Ready to Experience Professional {title}?
          </h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Book your service today and enjoy a cleaner, fresher space. Our professional team is ready to assist you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate("/#booking")} 
              size="lg" 
              className="bg-white text-accent hover:bg-gray-100 hover-lift shadow-md"
            >
              Book Now
            </Button>
            <Button 
              variant="outline" 
              onClick={() => navigate("/#contact")} 
              size="lg"
              className="border-white text-purple-600 hover:bg-white/20 hover-lift"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
} 