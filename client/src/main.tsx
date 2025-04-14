import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Add Google Fonts
const linkElement = document.createElement("link");
linkElement.rel = "stylesheet";
linkElement.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Open+Sans:wght@300;400;600&display=swap";
document.head.appendChild(linkElement);

// Add page title and meta description
const title = document.createElement("title");
title.textContent = "Spark Pro Cleaning | Professional Cleaning Services";
document.head.appendChild(title);

const metaDescription = document.createElement("meta");
metaDescription.name = "description";
metaDescription.content = "Professional home cleaning services tailored to your needs. Book online today for a sparkling clean home.";
document.head.appendChild(metaDescription);

// Font Awesome for icons
const fontAwesomeLink = document.createElement("link");
fontAwesomeLink.rel = "stylesheet";
fontAwesomeLink.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
document.head.appendChild(fontAwesomeLink);

createRoot(document.getElementById("root")!).render(<App />);
