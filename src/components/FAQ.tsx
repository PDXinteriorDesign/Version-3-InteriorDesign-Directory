import React from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string | JSX.Element;
}

const defaultFAQs: FAQItem[] = [
  {
    question: 'How much does an interior designer cost?',
    answer: (
      <div className="space-y-3">
        <p>Interior designer costs typically fall into several pricing models:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><span className="font-medium">Hourly Rate:</span> $100-$500 per hour, depending on experience and location</li>
          <li><span className="font-medium">Flat Fee:</span> $2,000-$12,000+ per room, based on project scope</li>
          <li><span className="font-medium">Cost Plus:</span> Designer purchases at wholesale + 15-35% markup</li>
          <li><span className="font-medium">Square Footage:</span> $10-$17 per square foot for larger projects</li>
        </ul>
        <p className="text-gray-800 mt-3">
          Initial consultations typically range from $150-$500, which may be credited toward your project.
        </p>
      </div>
    )
  },
  {
    question: 'Is hiring an interior designer worth the cost?',
    answer: (
      <div className="space-y-3">
        <p>Hiring an interior designer can be a valuable investment for several reasons:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><span className="font-medium">Professional Expertise:</span> Access to design knowledge, space planning, and color theory</li>
          <li><span className="font-medium">Cost Savings:</span> Avoid expensive mistakes and get access to trade discounts</li>
          <li><span className="font-medium">Time Efficiency:</span> Save time on research, sourcing, and project management</li>
          <li><span className="font-medium">Increased Property Value:</span> Professional design can enhance your home's resale value</li>
          <li><span className="font-medium">Stress Reduction:</span> Handle contractor coordination and project timeline management</li>
        </ul>
      </div>
    )
  },
  {
    question: 'What questions should I ask an interior designer?',
    answer: (
      <div className="space-y-3">
        <p>Key questions to ask during your initial consultation:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>What is your design process and timeline?</li>
          <li>How do you charge for your services?</li>
          <li>Can you work within my budget?</li>
          <li>Have you worked on similar projects?</li>
          <li>How do you handle project management and contractor coordination?</li>
          <li>What is your communication style and availability?</li>
          <li>Can you provide references from recent clients?</li>
          <li>What happens if I'm not satisfied with an aspect of the design?</li>
        </ul>
      </div>
    )
  },
  {
    question: 'What should I prepare before hiring an interior designer?',
    answer: (
      <div className="space-y-3">
        <p>Before your first meeting, prepare the following:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><span className="font-medium">Inspiration:</span> Collect images of styles you like</li>
          <li><span className="font-medium">Budget:</span> Determine your total investment range</li>
          <li><span className="font-medium">Timeline:</span> Have a desired completion date in mind</li>
          <li><span className="font-medium">Scope:</span> List specific rooms or areas to be designed</li>
          <li><span className="font-medium">Constraints:</span> Note any unchangeable elements or restrictions</li>
        </ul>
      </div>
    )
  }
];

interface FAQProps {
  faqs?: FAQItem[];
  title?: string;
}

export const FAQ: React.FC<FAQProps> = ({ faqs = defaultFAQs, title = "Frequently Asked Questions" }) => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section className="bg-white rounded-xl p-8 shadow-sm">
      <h2 className="text-2xl font-serif mb-8 text-center">{title}</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex justify-between items-center py-4 text-left"
            >
              <h3 className="text-lg font-semibold pr-8 text-gray-900">{faq.question}</h3>
              {openIndex === index ? (
                <Minus className="w-5 h-5 text-coral-500 flex-shrink-0" />
              ) : (
                <Plus className="w-5 h-5 text-coral-500 flex-shrink-0" />
              )}
            </button>
            {openIndex === index && (
              <div className="pb-4 text-gray-800 prose max-w-none">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};