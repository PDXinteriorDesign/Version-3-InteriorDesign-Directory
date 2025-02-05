import React from 'react';

interface ArticleSectionProps {
  title: string;
  children: React.ReactNode;
}

export const ArticleSection: React.FC<ArticleSectionProps> = ({ title, children }) => {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-serif text-gray-900 mb-4">{title}</h2>
      <div className="text-gray-800 leading-relaxed space-y-4">
        {children}
      </div>
    </section>
  );
};