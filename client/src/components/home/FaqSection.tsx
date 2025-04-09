import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Faq } from "@shared/schema";

export default function FaqSection() {
  const [openedFaqs, setOpenedFaqs] = useState<Set<number>>(new Set());
  
  const { data: faqs, isLoading, error } = useQuery<Faq[]>({
    queryKey: ['/api/faqs'],
  });

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

        {isLoading && (
          <div className="text-center py-10">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            <p className="mt-2">Loading FAQs...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-10 text-red-500">
            <p>Error loading FAQs. Please try again later.</p>
          </div>
        )}

        {faqs && (
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq) => (
              <div className="mb-4" key={faq.id}>
                <button 
                  className="w-full flex justify-between items-center p-4 bg-light rounded-lg text-left font-heading font-semibold text-primary hover:bg-gray-200 transition duration-300"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={openedFaqs.has(faq.id)}
                  aria-controls={`faq-content-${faq.id}`}
                >
                  <span>{faq.question}</span>
                  <i className={`fas fa-chevron-down transform transition-transform duration-300 ${openedFaqs.has(faq.id) ? 'rotate-180' : ''}`}></i>
                </button>
                <div 
                  id={`faq-content-${faq.id}`}
                  className={`bg-white p-4 border-l-2 border-primary rounded-b-lg mt-1 ${openedFaqs.has(faq.id) ? '' : 'hidden'}`}
                >
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
