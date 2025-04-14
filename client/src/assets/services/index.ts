// Service Images
export const SERVICE_IMAGES = {
  'Window Cleaning': '/services/window-cleaning.jpg',
  'Gutters Cleaning': '/services/gutters-cleaning.jpg',
  'Bond Cleaning': '/services/bond-cleaning.jpg',
  'Solar Panel Cleaning': '/services/solar-panel-cleaning.jpg',
  'General Cleaning': '/services/general-cleaning.jpg',
  'Blinds Cleaning': '/services/blinds-cleaning.jpg',
  'Carpet & Upholstery Cleaning': '/services/carpet-upholstery-cleaning.jpg',
  'Tile & Grout Cleaning': '/services/tile-grout-cleaning.jpg'
} as const;

// Helper function to get service image URL
export const getServiceImage = (serviceName: string): string | undefined => {
  return SERVICE_IMAGES[serviceName as keyof typeof SERVICE_IMAGES];
}; 