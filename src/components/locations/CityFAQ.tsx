import React from 'react';

interface CityFAQProps {
  city: string;
  state: string;
}

export const CityFAQ: React.FC<CityFAQProps> = ({ city, state }) => {
  const faqs = [
    {
      question: `What should I look for in a ${city} interior designer?`,
      answer: `When choosing an interior designer in ${city}, consider their experience with local architecture and design styles, knowledge of ${state} building codes, and their portfolio of local projects. Look for designers who understand the unique characteristics of ${city} homes and lifestyle.`
    },
    {
      question: `How long does an interior design project typically take in ${city}?`,
      answer: 'Project timelines vary based on scope, but most residential projects take 3-6 months from concept to completion. Larger renovations or new construction projects may take 6-12 months or longer.'
    },
    {
      question: `What's the process of working with a ${city} interior designer?`,
      answer: 'The process typically begins with an initial consultation, followed by concept development, design presentations, procurement, and installation. Many designers offer both in-person and virtual services to accommodate different needs and budgets.'
    }
  ];

  return (
    <section className="bg-white rounded-xl p-8 shadow-sm">
      <h2 className="text-2xl font-serif mb-8">Frequently Asked Questions</h2>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};