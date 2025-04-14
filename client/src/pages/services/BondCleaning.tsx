import React from 'react';
import ServiceTemplate from './ServiceTemplate';

export default function BondCleaning() {
  return (
    <ServiceTemplate
      title="Bond Cleaning"
      description="Thorough end of lease cleaning to ensure you get your deposit back when moving out."
      longDescription={[
        "Our comprehensive bond cleaning service is specifically designed to help tenants get their full security deposit back when moving out of a rental property.",
        "We understand the strict requirements of real estate agents and landlords, and our cleaning checklist covers all the areas that are typically inspected during the final walkthrough.",
        "Our professional team cleans every corner of your property, from deep cleaning carpets and scrubbing bathrooms to degreasing kitchen surfaces and cleaning windows. We pay special attention to often-overlooked areas such as skirting boards, light fixtures, and inside cupboards.",
        "Our bond cleaning service comes with a satisfaction guarantee. If your agent or landlord identifies any cleaning issues within 72 hours of our service, we'll return to rectify them at no additional cost, ensuring you meet your lease obligations."
      ]}
      benefits={[
        "Maximizes your chance of getting your full bond deposit back",
        "Saves you time and stress during the moving process",
        "Professional cleaning that meets real estate standards",
        "Includes a 72-hour guarantee for peace of mind",
        "Comprehensive service covering all required areas",
        "Experienced cleaners who understand end-of-lease requirements"
      ]}
      imageUrl="/services/bond-cleaning.jpg"
      price="$250"
      faqs={[
        {
          question: "What does your bond cleaning service include?",
          answer: "Our bond cleaning service includes thorough cleaning of all rooms: kitchen (including inside appliances), bathrooms, bedrooms, living areas, hallways, and laundry. We clean walls, floors, windows, light fixtures, skirting boards, and inside cupboards and wardrobes."
        },
        {
          question: "How far in advance should I book bond cleaning?",
          answer: "We recommend booking your bond cleaning at least 1-2 weeks before your final inspection date to allow time for any touch-ups if needed. The property should be empty of all belongings for the most effective cleaning."
        },
        {
          question: "Do I need to provide cleaning supplies or equipment?",
          answer: "No, our team brings all necessary professional-grade cleaning equipment, supplies, and eco-friendly products to complete the job to the highest standard."
        },
        {
          question: "What if my property manager isn't satisfied with the cleaning?",
          answer: "Our bond cleaning comes with a 72-hour guarantee. If your property manager identifies any cleaning issues within this timeframe after our service, we'll return to rectify them at no additional cost."
        }
      ]}
    />
  );
} 