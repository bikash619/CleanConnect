import React from 'react';
import ServiceTemplate from './ServiceTemplate';

export default function GuttersCleaning() {
  return (
    <ServiceTemplate
      title="Gutters Cleaning"
      description="Complete gutter cleaning service to remove debris and ensure proper water flow."
      longDescription={[
        "Our professional gutter cleaning service is designed to keep your gutters free from leaves, twigs, dirt, and other debris that can cause blockages and water damage to your property.",
        "Blocked gutters can lead to water overflow, which can damage your roof, walls, and foundation. Our thorough cleaning service ensures that rainwater flows freely through your gutters and downpipes, protecting your home from costly water damage.",
        "Our experienced technicians use professional equipment to safely access and clean your gutters. We remove all debris, check for proper water flow, and identify any potential issues with your gutter system that may need attention.",
        "Regular gutter maintenance is an essential part of home care, particularly after autumn when leaves fall and before the rainy season. Our service helps prevent pest infestations, mold growth, and structural damage to your property."
      ]}
      benefits={[
        "Prevents water damage to your roof, walls, and foundation",
        "Reduces the risk of basement flooding",
        "Prevents pest infestations and mold growth",
        "Extends the life of your gutter system",
        "Improves the efficiency of your rainwater collection system",
        "Helps maintain your home's structural integrity"
      ]}
      imageUrl="/services/gutters-cleaning.jpg"
      price="$120"
      faqs={[
        {
          question: "How often should gutters be cleaned?",
          answer: "Most homes benefit from gutter cleaning twice a year – typically in spring and fall. However, homes surrounded by trees may require more frequent cleaning, especially after storms or heavy leaf fall."
        },
        {
          question: "What happens if I don't clean my gutters?",
          answer: "Neglected gutters can lead to water overflow, which can damage your roof, fascia boards, walls, and foundation. Standing water in gutters can also attract pests and lead to mold growth."
        },
        {
          question: "Can you install gutter guards?",
          answer: "Yes, we offer gutter guard installation services to help minimize debris buildup in your gutters. While guards reduce the frequency of cleaning needed, they don't eliminate the need for occasional maintenance."
        },
        {
          question: "Will you check for and repair gutter damage?",
          answer: "Our technicians will inspect your gutters during cleaning and inform you of any damage or issues that need attention. We can provide minor repairs during the cleaning visit or schedule a separate service for more extensive repairs."
        }
      ]}
    />
  );
} 