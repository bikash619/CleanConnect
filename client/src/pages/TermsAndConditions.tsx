import { Helmet } from "react-helmet";
import { Card, CardContent } from "@/components/ui/card";

export default function TermsAndConditions() {
  return (
    <>
      <Helmet>
        <title>Terms and Conditions | Spark Pro Cleaning</title>
        <meta name="description" content="Terms and Conditions for Spark Pro Cleaning services." />
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <Card className="max-w-4xl mx-auto">
          <CardContent className="pt-6 px-6 pb-10">
            <div className="prose prose-lg max-w-none">
              <h1 className="text-3xl font-heading font-bold text-primary mb-6">Terms and Conditions</h1>
              
              <p>Last updated: {new Date().toLocaleDateString()}</p>
              
              <h2 className="text-xl font-heading font-semibold text-primary mt-8 mb-4">1. Agreement to Terms</h2>
              <p>
                By using our website and services, you agree to be bound by these Terms and Conditions.
                Please read these terms carefully before using our services.
              </p>
              
              <h2 className="text-xl font-heading font-semibold text-primary mt-8 mb-4">2. Services Description</h2>
              <p>
                Spark Pro Cleaning provides professional cleaning services for residential and commercial properties.
                The specific services to be provided will be those selected by you during the booking process.
              </p>
              
              <h2 className="text-xl font-heading font-semibold text-primary mt-8 mb-4">3. Booking and Cancellation</h2>
              <p>
                3.1 Bookings can be made through our website, by phone, or via email.<br />
                3.2 We require at least 24 hours' notice for any cancellations or rescheduling.<br />
                3.3 Cancellations with less than 24 hours' notice may incur a cancellation fee of up to 50% of the service cost.<br />
                3.4 No-shows will be charged the full service amount.
              </p>
              
              <h2 className="text-xl font-heading font-semibold text-primary mt-8 mb-4">4. Payment Terms</h2>
              <p>
                4.1 Payment is due at the time of service unless otherwise agreed upon.<br />
                4.2 We accept credit/debit cards, bank transfers, and cash payments.<br />
                4.3 For recurring services, payment will be automatically processed before each scheduled service.<br />
                4.4 Prices are subject to change with notice.
              </p>
              
              <h2 className="text-xl font-heading font-semibold text-primary mt-8 mb-4">5. Satisfaction Guarantee</h2>
              <p>
                5.1 We aim to provide 100% satisfaction with our cleaning services.<br />
                5.2 If you are not satisfied with any aspect of our service, please contact us within 24 hours of the service completion.<br />
                5.3 We will return to address any concerns at no additional cost.
              </p>
              
              <h2 className="text-xl font-heading font-semibold text-primary mt-8 mb-4">6. Liability and Insurance</h2>
              <p>
                6.1 Our cleaners are fully insured and bonded.<br />
                6.2 We take responsibility for any damage caused by our staff during the cleaning process.<br />
                6.3 Any claims for damage must be reported within 24 hours of service completion.<br />
                6.4 We are not liable for damage due to pre-existing conditions, normal wear and tear, or acts of nature.
              </p>
              
              <h2 className="text-xl font-heading font-semibold text-primary mt-8 mb-4">7. Access to Property</h2>
              <p>
                7.1 You agree to provide safe and reasonable access to your property at the scheduled time.<br />
                7.2 If we cannot access your property at the scheduled time, a cancellation fee may apply.
              </p>
              
              <h2 className="text-xl font-heading font-semibold text-primary mt-8 mb-4">8. Modifications to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website.
                Your continued use of our services after any changes indicates your acceptance of the modified terms.
              </p>
              
              <h2 className="text-xl font-heading font-semibold text-primary mt-8 mb-4">9. Contact Information</h2>
              <p>
                If you have any questions about these Terms and Conditions, please contact us at:
              </p>
              <address className="not-italic mt-2">
                Email: info@sparkpro.com<br />
                Phone: (555) 123-4567<br />
                Address: 123 Cleaning Street, Suite 456, Sparkle City, SC 12345
              </address>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
