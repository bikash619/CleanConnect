import { Service, Testimonial, Faq } from "@shared/schema";

// Static data for services
export const staticServices: Service[] = [
  {
    id: 5,
    name: "Gutters Cleaning",
    description: "Removal of debris and blockages from gutters to ensure proper water flow and prevent damage.",
    imageUrl: "/services/gutters-cleaning.jpg",
    price: "From $120",
    sortOrder: 5
  },
  {
    id: 6,
    name: "Blinds Cleaning",
    description: "Detailed cleaning of all types of blinds to remove dust and allergens for a healthier home.",
    imageUrl: "/services/blinds-cleaning.jpg",
    price: "From $90",
    sortOrder: 6
  },
  {
    id: 7,
    name: "Carpet & Upholstery Cleaning",
    description: "Deep cleaning for carpets and upholstery to remove stains, odors, and allergens.",
    imageUrl: "/services/carpet-upholstery-cleaning.jpg",
    price: "From $120",
    sortOrder: 7
  },
  {
    id: 8,
    name: "Tile & Grout Cleaning",
    description: "Professional cleaning of tile surfaces and grout lines to restore their original appearance.",
    imageUrl: "/services/tile-grout-cleaning.jpg",
    price: "From $180",
    sortOrder: 8
  }
];

// Static data for testimonials
export const staticTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    content: "Spark Pro Cleaning has been cleaning my home for over 6 months now, and I couldn't be happier with their service. The team is professional, thorough, and always on time.",
    rating: 5,
    imageUrl: "https://randomuser.me/api/portraits/women/42.jpg",
    displayOrder: 1
  },
  {
    id: 2,
    name: "Michael Rivera",
    content: "I booked a deep cleaning service for my apartment, and I was blown away by the results. Every corner was spotless. Will definitely use their services again!",
    rating: 5,
    imageUrl: "https://randomuser.me/api/portraits/men/32.jpg",
    displayOrder: 2
  },
  {
    id: 3,
    name: "Jennifer Chen",
    content: "As a busy professional, I don't have time to keep my home as clean as I'd like. Spark Pro Cleaning's recurring service has been a lifesaver! Highly recommend!",
    rating: 5,
    imageUrl: "https://randomuser.me/api/portraits/women/68.jpg",
    displayOrder: 3
  }
];

// Static data for FAQs
export const staticFaqs: Faq[] = [
  {
    id: 1,
    question: "What cleaning services do you offer?",
    answer: "We offer a wide range of cleaning services including regular home cleaning, deep cleaning, move-in/move-out cleaning, window cleaning, carpet cleaning, and commercial cleaning services.",
    displayOrder: 1
  },
  {
    id: 2,
    question: "How do I schedule a cleaning service?",
    answer: "You can schedule a cleaning service through our website by using our online booking form, or by contacting our customer service team via phone or email.",
    displayOrder: 2
  },
  {
    id: 3,
    question: "Are your cleaning products eco-friendly?",
    answer: "Yes, we use environmentally friendly cleaning products that are effective yet safe for your family, pets, and the environment.",
    displayOrder: 3
  },
  {
    id: 4,
    question: "Do I need to be home during the cleaning service?",
    answer: "No, you don't need to be home during the cleaning service. Many of our clients provide us with a key or access code. We ensure all our staff are thoroughly background-checked and trustworthy.",
    displayOrder: 4
  },
  {
    id: 5,
    question: "What is your cancellation policy?",
    answer: "We require at least 24 hours notice for cancellations to avoid a cancellation fee. Please contact our customer service team as soon as possible if you need to reschedule.",
    displayOrder: 5
  },
  {
    id: 6,
    question: "Do you provide all the cleaning supplies and equipment?",
    answer: "Yes, our professional cleaners bring all necessary cleaning supplies and equipment. However, if you prefer that we use specific products you have, please let us know in advance.",
    displayOrder: 6
  }
]; 