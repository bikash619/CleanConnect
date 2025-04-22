import React from 'react';
import ServiceTemplate from './ServiceTemplate';

export default function BlindsCleaning() {
  return (
    <ServiceTemplate
      title="Blinds Cleaning"
      description="Specialized cleaning for all types of blinds and window treatments."
      longDescription={[
        "Our professional blinds cleaning service is designed to remove dust, allergens, and grime that accumulate on your window treatments over time.",
        "We clean all types of blinds including venetian, vertical, roller, roman, honeycomb, and wooden blinds, using specialized equipment and techniques tailored to each material.",
        "Our thorough cleaning process removes not just surface dust but also embedded dirt and allergens that regular dusting can't eliminate, helping to improve indoor air quality and extend the life of your window treatments.",
        "We take special care with delicate materials and mechanisms to ensure your blinds are not just clean but also functioning properly after our service."
      ]}
      benefits={[
        "Removes dust, allergens, and bacteria that accumulate on blinds",
        "Improves indoor air quality by eliminating a major dust collector",
        "Extends the life of your window treatments",
        "Enhances the appearance of your windows and overall room aesthetics",
        "Saves you time and effort from the challenging task of blind cleaning",
        "Professional cleaning reaches areas that are difficult to clean at home"
      ]}
      imageUrl="/services/blinds-cleaning.jpg"
      price="$90"
      faqs={[
        {
          question: "How often should blinds be professionally cleaned?",
          answer: "For most homes, we recommend professional blinds cleaning every 12-18 months. However, homes with smokers, pets, or high dust levels may benefit from more frequent cleaning, perhaps every 6-12 months."
        },
        {
          question: "Do you clean blinds on-site or take them away?",
          answer: "We typically clean blinds on-site using specialized equipment and techniques. For heavily soiled blinds or certain specialty materials, we may recommend our ultrasonic cleaning process which requires removal and reinstallation."
        },
        {
          question: "Can you clean all types of blinds?",
          answer: "Yes, we have specialized cleaning methods for all types of window treatments including venetian blinds, vertical blinds, wooden blinds, fabric blinds, roller shades, roman shades, and cellular/honeycomb shades."
        },
        {
          question: "Will the cleaning process damage my blinds?",
          answer: "No, our cleaning technicians are trained to use techniques and products that are appropriate for each specific material and type of blind. We take special care with delicate mechanisms and fabrics to ensure your blinds remain in excellent condition."
        }
      ]}
    />
  );
} 