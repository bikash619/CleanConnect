import React from 'react';
import ServiceTemplate from './ServiceTemplate';

export default function GeneralCleaning() {
  return (
    <ServiceTemplate
      title="General Cleaning"
      description="Comprehensive general cleaning services to keep your home or office spotless."
      longDescription={[
        "Our professional general cleaning service is designed to maintain a clean, healthy, and organized environment in your home or office space.",
        "Our trained cleaning professionals use high-quality equipment and eco-friendly cleaning products to thoroughly clean all areas of your property, from living rooms and kitchens to bathrooms and bedrooms.",
        "We focus on both visible areas and hard-to-reach spots that often collect dust and allergens, ensuring a comprehensive clean that improves indoor air quality and creates a more comfortable space.",
        "Whether you need regular scheduled cleanings or a one-time deep clean, our general cleaning service can be customized to address your specific needs and preferences."
      ]}
      benefits={[
        "Saves you time and energy by outsourcing cleaning tasks",
        "Improves indoor air quality by removing dust and allergens",
        "Creates a more organized and comfortable living or working environment",
        "Reduces stress associated with maintaining cleanliness",
        "Professional cleaning extends the life of your furnishings and fixtures",
        "Customizable cleaning plans to meet your specific needs and budget"
      ]}
      imageUrl="/services/general-cleaning.jpg"
      price="$100"
      faqs={[
        {
          question: "How often should I schedule general cleaning services?",
          answer: "The frequency depends on your specific needs and lifestyle. Many residential clients prefer weekly or bi-weekly cleanings, while offices often opt for daily or several times per week. We can help you determine the optimal schedule based on your space and requirements."
        },
        {
          question: "What areas are included in your general cleaning service?",
          answer: "Our general cleaning typically includes dusting surfaces, vacuuming and mopping floors, cleaning and sanitizing bathrooms and kitchens, emptying trash, and tidying up common areas. We can customize the service to include or exclude specific tasks based on your preferences."
        },
        {
          question: "Do I need to provide cleaning supplies and equipment?",
          answer: "No, our cleaning teams come fully equipped with all professional-grade cleaning supplies and equipment needed to thoroughly clean your space. However, if you prefer that we use specific products due to allergies or environmental concerns, we're happy to accommodate your requests."
        },
        {
          question: "How long does a general cleaning service take?",
          answer: "The duration varies depending on the size of your space and the level of cleaning required. On average, a general cleaning for a standard 3-bedroom home takes 2-3 hours with a team of 2 cleaners. We can provide a more accurate estimate after learning more about your specific requirements."
        }
      ]}
    />
  );
} 