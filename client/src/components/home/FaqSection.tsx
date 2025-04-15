import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Faq } from "@shared/schema";
import { staticFaqs } from "@/lib/staticData";

// Check if we're in a production environment (Vercel deployment)
const isVercelProduction = import.meta.env.PROD && window.location.hostname.includes('vercel.app');

export default function FaqSection() {
  const [openedFaqs, setOpenedFaqs] = useState<Set<number>>(new Set());
  
  const { data: faqs, isLoading, error } = useQuery<Faq[]>({
    queryKey: ['/api/faqs'],
    // Use static data if on Vercel
    enabled: !isVercelProduction,
    initialData: isVercelProduction ? staticFaqs : undefined,
  });

  // Use static data directly if on Vercel
  const displayFaqs = isVercelProduction ? staticFaqs : faqs;

  const toggleFaq = (faqId: number) => {
    const newOpenedFaqs = new Set(openedFaqs);
    if (newOpenedFaqs.has(faqId)) {
      newOpenedFaqs.delete(faqId);
    } else {
      newOpenedFaqs.add(faqId);
    }
    setOpenedFaqs(newOpenedFaqs);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-3 text-primary">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Find answers to common questions about our cleaning services.</p>
        </div>

        {isLoading && !isVercelProduction && (
          <div className="text-center py-10">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            <p className="mt-2">Loading FAQs...</p>
          </div>
        )}

        {error && !isVercelProduction && (
          <div className="text-center py-10 text-red-500">
            <p>Error loading FAQs. Please try again later.</p>
          </div>
        )}

        {displayFaqs && displayFaqs.length > 0 && (
          <div className="max-w-3xl mx-auto divide-y divide-gray-200">
            {displayFaqs.map((faq) => (
              <div key={faq.id} className="py-5">
                <button
                  className="flex justify-between items-center w-full text-left focus:outline-none"
                  onClick={() => toggleFaq(faq.id)}
                >
                  <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                  <span className={`text-primary transition-transform duration-300 ${openedFaqs.has(faq.id) ? 'transform rotate-180' : ''}`}>
                    <i className="fas fa-chevron-down"></i>
                  </span>
                </button>
                {openedFaqs.has(faq.id) && (
                  <div className="mt-3 text-gray-600">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
