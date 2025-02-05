import React from 'react';
import { Navbar } from '../components/Navbar';
import { SEOHead } from '../components/SEOHead';
import { ArticleCard } from '../components/articles/ArticleCard';
import { articles } from '../data/articles';
import { BackToResourcesButton } from '../components/BackToResourcesButton';

export const ArticlesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Interior Design Articles & Resources | The Design Refuge"
        description="Explore our collection of interior design articles, tips, and insights to help you create beautiful spaces and grow your design business."
      />
      
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 py-12">
        <BackToResourcesButton />
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Design Articles & Insights</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay informed with the latest trends, tips, and expert advice in interior design
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </main>
    </div>
  );
};