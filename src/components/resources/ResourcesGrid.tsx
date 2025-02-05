import React from 'react';
import { FileText, Book, Calculator, DollarSign } from 'lucide-react';
import { ResourceCard } from './ResourceCard';

const resources = [
  {
    icon: FileText,
    title: 'Business Templates',
    description: 'Professional templates for contracts, proposals, and client agreements.',
    link: '/resources/templates'
  },
  {
    icon: Book,
    title: 'Design Guides',
    description: 'Comprehensive guides on design principles, trends, and best practices.',
    link: '/resources/guides'
  },
  {
    icon: Calculator,
    title: 'Profit Calculator',
    description: 'Calculate project costs, revenue, and profit margins.',
    link: '/profit-calculator'
  },
  {
    icon: DollarSign,
    title: 'Growth Strategies',
    description: 'Expert insights and proven strategies to grow your interior design business.',
    link: '/resources/growth-strategies'
  }
];

export const ResourcesGrid: React.FC = () => {
  return (
    <section>
      <h2 className="text-3xl font-serif mb-8">Professional Resources</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {resources.map((resource, index) => (
          <ResourceCard key={index} {...resource} />
        ))}
      </div>
    </section>
  );
};