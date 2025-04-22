import React from 'react';
import ServiceTemplate from './ServiceTemplate';

export default function CarpetUpholsteryCleaning() {
  return (
    <ServiceTemplate
      title="Carpet & Upholstery Cleaning"
      description="Deep cleaning for carpets and upholstery to remove stains, odors, and allergens."
      longDescription={[
        "Our professional carpet and upholstery cleaning service uses advanced extraction methods to remove deeply embedded dirt, allergens, stains, and odors from your carpets, rugs, and furniture.",
        "We utilize hot water extraction (steam cleaning) along with eco-friendly, powerful cleaning solutions that break down stubborn stains and soil without damaging delicate fibers or leaving harmful residues.",
        "Our process not only improves the appearance of your carpets and upholstery but also extends their lifespan by removing abrasive particles that wear down fibers over time.",
        "From everyday dirt and pet stains to tough marks and unpleasant odors, our comprehensive cleaning approach leaves your carpets, rugs, and furniture looking, feeling, and smelling fresh and revitalized."
      ]}
      benefits={[
        "Removes deeply embedded dirt, stains, and allergens",
        "Eliminates dust mites, pet dander, and other common allergens",
        "Extends the life of your carpets and upholstered furniture",
        "Improves indoor air quality and creates a healthier living environment",
        "Restores the appearance and texture of carpets and upholstery",
        "Eco-friendly cleaning solutions safe for children and pets"
      ]}
      imageUrl="/services/carpet-upholstery-cleaning.jpg"
      price="$120"
      faqs={[
        {
          question: "How long does it take for carpets to dry after cleaning?",
          answer: "Depending on factors like humidity, air circulation, and carpet thickness, drying typically takes 6-12 hours. We use powerful extraction equipment to remove as much moisture as possible, and we can provide fans to speed up drying time if needed."
        },
        {
          question: "Can you remove all types of stains from carpets and upholstery?",
          answer: "We can remove most common stains including food, beverages, pet accidents, and dirt. Some stains (like certain dyes, ink, or very old stains) may be permanent. Our technicians will assess each stain and use the appropriate treatment method for best results."
        },
        {
          question: "Is your carpet cleaning safe for children and pets?",
          answer: "Yes, we use eco-friendly, non-toxic cleaning solutions that are safe for both children and pets. We recommend keeping pets and children off the carpeted areas until they are completely dry after cleaning."
        },
        {
          question: "How often should carpets and upholstery be professionally cleaned?",
          answer: "For most homes, we recommend professional carpet cleaning every 12-18 months. High-traffic areas or homes with children, pets, or allergies may benefit from more frequent cleaning, perhaps every 6-9 months. Upholstery should typically be cleaned every 12-24 months depending on usage."
        }
      ]}
    />
  );
} 