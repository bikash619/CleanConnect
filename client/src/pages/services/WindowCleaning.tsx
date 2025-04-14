import React from 'react';
import ServiceTemplate from './ServiceTemplate';

export default function WindowCleaning() {
  return (
    <ServiceTemplate
      title="Window Cleaning"
      description="Professional window cleaning service for crystal clear results, inside and out."
      longDescription={[
        "Our professional window cleaning service is designed to give you spotless, streak-free windows that enhance the appearance and natural light in your home or business.",
        "Using professional-grade equipment and eco-friendly cleaning solutions, our trained technicians ensure that every window is thoroughly cleaned – from the glass and frames to the tracks and sills.",
        "We carefully remove dirt, dust, water spots, fingerprints, and other residues that accumulate on glass surfaces over time. Our process leaves your windows looking pristine and extends their lifespan by removing corrosive contaminants.",
        "Whether you have standard windows, floor-to-ceiling windows, skylights, or hard-to-reach glass, our team has the expertise and tools to clean them safely and effectively."
      ]}
      benefits={[
        "Enhances natural light and improves views",
        "Extends the lifespan of your windows by removing corrosive contaminants",
        "Improves your property's curb appeal",
        "Removes allergens and improves indoor air quality",
        "Professional equipment reaches windows at any height safely",
        "Eco-friendly cleaning solutions that are safe for your family and pets"
      ]}
      imageUrl="/services/window-cleaning.jpg"
      price="$80"
      faqs={[
        {
          question: "How often should I have my windows professionally cleaned?",
          answer: "For residential properties, we recommend professional window cleaning twice a year. However, homes in areas with high pollution, near construction sites, or close to the ocean may benefit from quarterly cleaning."
        },
        {
          question: "Can you clean windows in rainy weather?",
          answer: "While light rain doesn't necessarily prevent window cleaning, heavy rain or storms will require rescheduling. Our cleaning solutions are designed to repel water, so a light rain after cleaning won't immediately ruin the results."
        },
        {
          question: "Do I need to do anything to prepare for window cleaning?",
          answer: "We recommend removing personal items from windowsills and ensuring clear access to each window by moving furniture or obstacles. This helps our team work efficiently and protects your belongings."
        },
        {
          question: "Do you clean screens and tracks as well?",
          answer: "Yes, our comprehensive window cleaning service includes cleaning the glass, frames, tracks, and screens to ensure your entire window system is spotless."
        }
      ]}
    />
  );
} 