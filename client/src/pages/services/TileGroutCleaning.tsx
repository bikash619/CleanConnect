import React from 'react';
import ServiceTemplate from './ServiceTemplate';

export default function TileGroutCleaning() {
  return (
    <ServiceTemplate
      title="Tile & Grout Cleaning"
      description="Professional cleaning to restore the original beauty of your tiles and grout lines."
      longDescription={[
        "Our specialized tile and grout cleaning service removes built-up dirt, grime, mold, and mildew that regular mopping simply can't reach, especially in grout lines and textured tiles.",
        "We use professional-grade equipment including high-pressure cleaning systems and specialized cleaning solutions that break down embedded soil and extract it completely from your tile and grout surfaces.",
        "After cleaning, we can apply a protective sealant to your grout lines to help prevent future staining and make regular maintenance easier, extending the life and appearance of your tiled surfaces.",
        "Our service is suitable for all types of tile including ceramic, porcelain, natural stone, and quarry tile, with cleaning methods tailored to each specific material's requirements and sensitivities."
      ]}
      benefits={[
        "Restores tile and grout to its original appearance",
        "Removes stubborn stains, mold, and mildew from grout lines",
        "Extends the life of your tiled surfaces",
        "Creates a more hygienic environment by eliminating bacteria",
        "Optional grout sealing prevents future staining and simplifies maintenance",
        "Improves the overall appearance of kitchens, bathrooms, and other tiled areas"
      ]}
      imageUrl="/services/tile-grout-cleaning.jpg"
      price="$180"
      faqs={[
        {
          question: "How long does professional tile and grout cleaning take?",
          answer: "The time required depends on the area size, level of soiling, and tile type. On average, a standard bathroom takes 1-2 hours, while a kitchen floor might take 2-3 hours. Larger areas like entire homes will require more time."
        },
        {
          question: "Is grout sealing necessary after cleaning?",
          answer: "While not mandatory, we highly recommend grout sealing after cleaning. Grout is porous and easily absorbs spills and dirt. Sealing creates a protective barrier that prevents staining and makes regular cleaning more effective, extending the time between professional cleanings."
        },
        {
          question: "Can you remove all stains from grout?",
          answer: "We can remove most stains from grout, including common dirt, food spills, and soap scum. However, some severe stains that have penetrated deeply or caused permanent discoloration might not be completely removable. In these cases, grout recoloring might be recommended as an alternative solution."
        },
        {
          question: "How soon can I walk on my floors after tile cleaning?",
          answer: "You can walk on your tile floors immediately after cleaning, though we recommend limiting traffic for 30 minutes to allow the surface to dry completely. If grout sealing is applied, you should avoid water contact and heavy traffic for 24 hours to allow the sealant to cure properly."
        }
      ]}
    />
  );
} 