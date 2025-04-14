import { Helmet } from "react-helmet";
import { Card, CardContent } from "@/components/ui/card";

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Spark Pro Cleaning</title>
        <meta name="description" content="Privacy Policy for Spark Pro Cleaning services." />
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <Card className="max-w-4xl mx-auto">
          <CardContent className="pt-6 px-6 pb-10">
            <div className="prose prose-lg max-w-none">
              <h1 className="text-3xl font-heading font-bold text-primary mb-6">Privacy Policy</h1>
              
              <p>Last updated: {new Date().toLocaleDateString()}</p>
              
              <h2 className="text-xl font-heading font-semibold text-primary mt-8 mb-4">1. Introduction</h2>
              <p>
                At Spark Pro Cleaning, we respect your privacy and are committed to protecting your personal data.
                This privacy policy will inform you about how we look after your personal data when you visit our
                website and tell you about your privacy rights and how the law protects you.
              </p>
              
              <h2 className="text-xl font-heading font-semibold text-primary mt-8 mb-4">2. Data We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Name, email address, phone number, and home address</li>
                <li>Booking preferences and service history</li>
                <li>Payment information (processed securely through our payment provider)</li>
                <li>Communication preferences</li>
                <li>Website usage information through cookies</li>
              </ul>
              
              <h2 className="text-xl font-heading font-semibold text-primary mt-8 mb-4">3. How We Use Your Data</h2>
              <p>We use your personal data for the following purposes:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>To provide and manage your cleaning services</li>
                <li>To process payments and bookings</li>
                <li>To communicate with you about your service</li>
                <li>To improve our services and website experience</li>
                <li>For marketing purposes if you have consented</li>
              </ul>
              
              <h2 className="text-xl font-heading font-semibold text-primary mt-8 mb-4">4. Cookies Policy</h2>
              <p>
                Our website uses cookies to enhance your browsing experience. You can control cookies through your browser settings.
                Essential cookies are required for the website to function properly. Analytics cookies help us understand how you use our site.
              </p>
              
              <h2 className="text-xl font-heading font-semibold text-primary mt-8 mb-4">5. Data Security</h2>
              <p>
                We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used,
                or accessed in an unauthorized way. We limit access to your personal data to those employees, agents, contractors,
                and other third parties who have a business need to know.
              </p>
              
              <h2 className="text-xl font-heading font-semibold text-primary mt-8 mb-4">6. Your Rights</h2>
              <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>The right to access your personal data</li>
                <li>The right to request correction of your personal data</li>
                <li>The right to request erasure of your personal data</li>
                <li>The right to object to processing of your personal data</li>
                <li>The right to request restriction of processing your personal data</li>
                <li>The right to data portability</li>
              </ul>
              
              <h2 className="text-xl font-heading font-semibold text-primary mt-8 mb-4">7. Changes to Privacy Policy</h2>
              <p>
                We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page
                and updating the "last updated" date.
              </p>
              
              <h2 className="text-xl font-heading font-semibold text-primary mt-8 mb-4">8. Contact Us</h2>
              <p>
                If you have any questions about this privacy policy or our privacy practices, please contact us at:
              </p>
              <address className="not-italic mt-2">
                Email: info@sparkpros.com.au<br />
                Phone: 0482 089 848<br />
                Address: Sydney, Australia
              </address>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
