import { useState, useEffect } from 'react';

interface ServiceImageProps {
  serviceName: string;
  imagePath: string;
  className?: string;
  width?: number;
  height?: number;
}

export function ServiceImage({ 
  serviceName, 
  imagePath, 
  className = "",
  width = 320,
  height = 208
}: ServiceImageProps) {
  const [imageError, setImageError] = useState(false);
  const [imageSrc, setImageSrc] = useState(imagePath);
  
  // Normalize paths and handle special cases
  useEffect(() => {
    // For Gutters Cleaning, ensure we're using the right path
    if (serviceName === "Gutters Cleaning") {
      setImageSrc("/services/gutters-cleaning.jpg");
    }
  }, [serviceName]);
  
  // Clean up service name to match file naming convention
  const getFormattedName = (name: string) => {
    return name.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');
  };
  
  // Handle image error by trying fallback paths
  const handleImageError = () => {
    console.error(`Failed to load image: ${imageSrc}`);
    
    if (!imageError) {
      // First fallback: try using the formatted service name
      const formattedName = getFormattedName(serviceName);
      const fallbackPath = `/services/${formattedName}.jpg`;
      console.log(`Trying fallback path: ${fallbackPath}`);
      setImageSrc(fallbackPath);
      setImageError(true);
    } else {
      // Last resort: use generic cleaning image
      setImageSrc("/services/general-cleaning.jpg");
    }
  };
  
  return (
    <img 
      src={imageSrc}
      alt={serviceName}
      className={`w-full h-full object-cover ${className}`}
      width={width}
      height={height}
      loading="eager"
      onError={handleImageError}
    />
  );
}