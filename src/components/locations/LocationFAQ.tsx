import React from 'react';

interface LocationFAQProps {
  state: string;
}

export const LocationFAQ: React.FC<LocationFAQProps> = ({ state }) => {
  const faqs = [
    {
      question: `How much do interior designers in ${state} typically charge?`,
      answer: `Interior designer rates in ${state} vary based on experience and services offered. Most designers charge either by the hour ($100-300/hour) or by project. Some may also charge a percentage of the total project cost.`
    },
    {
      question: `What services do interior designers in ${state} offer?`,
      answer: 'Services typically include space planning, design concept development, furniture selection, color consultation, project management, and full-service interior design. Many designers also offer virtual design services.'
    },
    {
      question: 'How do I choose the right interior designer?',
      answer: 'Look for designers whose portfolio matches your style preferences, read client reviews, and consider their experience with projects similar to yours. Most importantly, ensure they understand your vision and budget.'
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