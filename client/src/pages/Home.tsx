import { Helmet } from "react-helmet";
import HeroSection from "@/components/home/HeroSection";
import TrustIndicators from "@/components/home/TrustIndicators";
import ServicesSection from "@/components/home/ServicesSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import BookingSection from "@/components/home/BookingSection";
import AboutSection from "@/components/home/AboutSection";
import ContactSection from "@/components/home/ContactSection";
import FaqSection from "@/components/home/FaqSection";
import CtaSection from "@/components/home/CtaSection";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>PurpleClean | Professional Cleaning Services</title>
        <meta name="description" content="Professional home cleaning services tailored to your needs. Book online today for a sparkling clean home." />
        <meta name="keywords" content="cleaning service, house cleaning, professional cleaners, home cleaning, office cleaning" />
        <meta property="og:title" content="PurpleClean | Professional Cleaning Services" />
        <meta property="og:description" content="Professional home cleaning services tailored to your needs." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PurpleClean | Professional Cleaning Services" />
        <meta name="twitter:description" content="Professional home cleaning services tailored to your needs." />
        <link rel="canonical" href="https://purpleclean.com" />
      </Helmet>

      <HeroSection />
      <TrustIndicators />
      <ServicesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <BookingSection />
      <AboutSection />
      <ContactSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
