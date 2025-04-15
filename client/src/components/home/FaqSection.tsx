import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Faq } from "@shared/schema";
import { staticFaqs } from "@/lib/staticData";

// Check if we're in a production environment (works on any domain)
const isProdEnv = import.meta.env.PROD;

export default function FaqSection() {
  const [openedFaqs, setOpenedFaqs] = useState<Set<number>>(new Set());
  
  const { data: faqs, isLoading, error } = useQuery<Faq[]>({
    queryKey: ['/api/faqs'],
    // Use static data in production
    enabled: !isProdEnv,
    initialData: isProdEnv ? staticFaqs : undefined,
  });

  // Use static data directly in production
  const displayFaqs = isProdEnv ? staticFaqs : faqs;

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
    <section id="faq" className="py-24 md:py-32 bg-light relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/4 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full translate-y-1/4 -translate-x-1/4"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 slide-up">
          <span className="text-sm font-medium text-accent bg-primary/10 px-4 py-1.5 rounded-full mb-4 inline-block">FAQ</span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-primary">
            <span className="relative inline-block">
              Frequently Asked Questions
              <svg className="absolute w-full -bottom-1 left-0 opacity-30" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9C30 3.16667 127 -5.5 297 9" stroke="#6C3DF4" strokeWidth="6" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Find answers to commonly asked questions about our cleaning services.
          </p>
        </div>

        {isLoading && !isProdEnv && (
          <div className="text-center py-10">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary border-t-2"></div>
            <p className="mt-4 text-gray-500">Loading FAQs...</p>
          </div>
        )}

        {error && !isProdEnv && (
          <div className="text-center py-10 bg-red-50 rounded-lg border border-red-100 p-6">
            <div className="text-red-500 text-4xl mb-3">
              <i className="fas fa-exclamation-circle"></i>
            </div>
            <p className="text-red-600 font-medium">Error loading FAQs. Please try again later.</p>
          </div>
        )}

        {displayFaqs && displayFaqs.length > 0 && (
          <div className="max-w-3xl mx-auto divide-y divide-gray-200 slide-up">
            {displayFaqs.map((faq) => (
              <div key={faq.id} className="py-5">
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="flex w-full justify-between items-center text-left"
                >
                  <h3 className="text-lg font-medium text-primary">{faq.question}</h3>
                  <span className="ml-6 flex-shrink-0">
                    <i className={`fas ${openedFaqs.has(faq.id) ? 'fa-minus' : 'fa-plus'} text-primary`}></i>
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
