import React from 'react';
import ServiceTemplate from './ServiceTemplate';

export default function SolarPanelCleaning() {
  return (
    <ServiceTemplate
      title="Solar Panel Cleaning"
      description="Specialized cleaning for your solar panels to maintain maximum efficiency and performance."
      longDescription={[
        "Our solar panel cleaning service helps maintain the efficiency and performance of your solar energy system by removing dirt, dust, bird droppings, pollen, and other debris that accumulate on the surface of your panels.",
        "Dirty solar panels can lose up to 25% of their efficiency, which directly impacts your energy production and cost savings. Regular cleaning ensures your investment continues to perform optimally throughout the year.",
        "We use specialized soft-washing techniques and purified, deionized water to clean your solar panels without causing damage. Our methods are environmentally friendly and designed specifically for the delicate nature of solar panel surfaces.",
        "Our technicians are trained in safe roof work practices and use appropriate safety equipment to access and clean your panels, whether they're on a roof, ground-mounted, or integrated into other structures."
      ]}
      benefits={[
        "Increased energy output and efficiency",
        "Extended lifespan of your solar system",
        "Maximum return on your solar investment",
        "Prevention of hot spots that can damage panels",
        "Safe and professional cleaning without roof damage",
        "Eco-friendly cleaning methods with no harsh chemicals"
      ]}
      imageUrl="/services/solar-panel-cleaning.jpg"
      price="$150"
      faqs={[
        {
          question: "How often should solar panels be cleaned?",
          answer: "For optimal performance, we recommend cleaning solar panels 2-4 times per year, depending on your location, nearby trees, local wildlife, and environmental conditions. Areas with high pollen, dust, or bird activity may require more frequent cleaning."
        },
        {
          question: "Does rain clean solar panels?",
          answer: "While rain can wash away some loose dust, it often leaves mineral deposits and doesn't remove stuck-on debris like bird droppings, tree sap, or pollen. Professional cleaning is still necessary for optimal performance."
        },
        {
          question: "Is it safe to clean solar panels myself?",
          answer: "DIY solar panel cleaning can be dangerous due to roof access risks and potential damage to the panels. Our professionals have proper safety equipment, specialized cleaning tools, and techniques to safely and effectively clean your panels."
        },
        {
          question: "Will cleaning damage my solar panels?",
          answer: "Our cleaning methods are specifically designed for solar panels. We use soft brushes, purified water, and gentle techniques that won't scratch or damage the delicate surfaces of your panels."
        }
      ]}
    />
  );
} 