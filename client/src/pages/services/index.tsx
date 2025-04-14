import React from 'react';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { getServiceImage } from '@/assets/services';

// Service data
const services = [
  {
    id: 1,
    name: 'Window Cleaning',
    description: 'Professional window cleaning for crystal clear results.',
    price: 'From $80',
    slug: 'window-cleaning',
    imageUrl: '/services/window-cleaning.jpg'
  },
  {
    id: 2,
    name: 'Gutters Cleaning',
    description: 'Complete gutter cleaning to remove debris and ensure proper water flow.',
    price: 'From $120',
    slug: 'gutters-cleaning',
    imageUrl: '/services/gutters-cleaning.jpg'
  },
  {
    id: 3,
    name: 'Bond Cleaning',
    description: 'Thorough end of lease cleaning to ensure you get your deposit back.',
    price: 'From $250',
    slug: 'bond-cleaning',
    imageUrl: '/services/bond-cleaning.jpg'
  },
  {
    id: 4,
    name: 'Solar Panel Cleaning',
    description: 'Specialized cleaning for your solar panels to maintain efficiency.',
    price: 'From $150',
    slug: 'solar-panel-cleaning',
    imageUrl: '/services/solar-panel-cleaning.jpg'
  },
  {
    id: 5,
    name: 'General Cleaning',
    description: 'Regular home cleaning services for a consistently clean space.',
    price: 'From $100',
    slug: 'general-cleaning',
    imageUrl: '/services/general-cleaning.jpg'
  },
  {
    id: 6,
    name: 'Blinds Cleaning',
    description: 'Detailed cleaning of all types of blinds and window treatments.',
    price: 'From $90',
    slug: 'blinds-cleaning',
    imageUrl: '/services/blinds-cleaning.jpg'
  },
  {
    id: 7,
    name: 'Carpet & Upholstery Cleaning',
    description: 'Deep cleaning for carpets and upholstery to remove stains and allergens.',
    price: 'From $120',
    slug: 'carpet-upholstery-cleaning',
    imageUrl: '/services/carpet-upholstery-cleaning.jpg'
  },
  {
    id: 8,
    name: 'Tile & Grout Cleaning',
    description: 'Restore the original look of your tiles and grout lines.',
    price: 'From $180',
    slug: 'tile-grout-cleaning',
    imageUrl: '/services/tile-grout-cleaning.jpg'
  }
];

export default function ServicesIndex() {
  return (
    <div className="py-16 bg-light">
      {/* Hero Section */}
      <div className="bg-primary text-white py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 slide-up">
              Our Professional Cleaning Services
            </h1>
            <p className="text-xl text-primary-100 mb-10 slide-up" style={{ animationDelay: '0.1s' }}>
              Discover our full range of professional cleaning services designed to keep your home or business spotless and healthy.
            </p>
            <Button 
              onClick={() => window.location.href = "/#booking"} 
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 hover-lift shadow-md slide-up"
              style={{ animationDelay: '0.2s' }}
            >
              Book a Service
            </Button>
          </div>
        </Container>
      </div>

      {/* Services Grid */}
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 service-card slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.imageUrl || getServiceImage(service.name)}
                  alt={service.name}
                  className="w-full h-full object-cover transition-all duration-500 hover:scale-110 service-image"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900 font-heading">{service.name}</h3>
                  <span className="bg-primary-50 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {service.price}
                  </span>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="flex justify-between">
                  <Link href={`/services/${service.slug}`}>
                    <a className="text-primary font-medium hover:text-accent transition-colors">
                      Learn more →
                    </a>
                  </Link>
                  <Button variant="outline" asChild className="text-primary border-primary hover:bg-primary-50 hover:text-purple-600">
                    <Link href="/#booking">
                      <a>Book Now</a>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Why Choose Us */}
      <div className="bg-white py-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12 slide-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-heading">
              Why Choose CleanConnect
            </h2>
            <p className="text-gray-600">
              We deliver exceptional cleaning services with attention to detail, reliability, and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-light p-6 rounded-xl text-center hover-shadow transition-all duration-300 slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-primary/10 text-primary rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 font-heading">Experienced Team</h3>
              <p className="text-gray-600">Our professional cleaners have years of experience and extensive training.</p>
            </div>

            <div className="bg-light p-6 rounded-xl text-center hover-shadow transition-all duration-300 slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-primary/10 text-primary rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 font-heading">Guaranteed Service</h3>
              <p className="text-gray-600">We stand by our work with satisfaction guarantees on all our services.</p>
            </div>

            <div className="bg-light p-6 rounded-xl text-center hover-shadow transition-all duration-300 slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-primary/10 text-primary rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"/>
                  <path d="M8 4.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V9a.5.5 0 0 1-1 0V7.5H6a.5.5 0 0 1 0-1h1.5V5a.5.5 0 0 1 .5-.5z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 font-heading">Eco-Friendly</h3>
              <p className="text-gray-600">We use environmentally responsible cleaning products and methods.</p>
            </div>

            <div className="bg-light p-6 rounded-xl text-center hover-shadow transition-all duration-300 slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-primary/10 text-primary rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 font-heading">Custom Solutions</h3>
              <p className="text-gray-600">We tailor our services to meet your specific cleaning needs and preferences.</p>
            </div>
          </div>
        </Container>
      </div>

      {/* CTA Section */}
      <Container className="py-16">
        <div className="bg-accent rounded-2xl p-8 md:p-12 text-center shadow-lg slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
            Ready to Experience the Difference?
          </h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Book your cleaning service today and enjoy a cleaner, healthier space. Our professional team is ready to exceed your expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => window.location.href = "/#booking"} 
              size="lg" 
              className="bg-white text-accent hover:bg-gray-100 hover-lift shadow-md"
            >
              Book Now
            </Button>
            <Button 
              variant="outline" 
              onClick={() => window.location.href = "/#contact"} 
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