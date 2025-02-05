import React from 'react';
import { useParams } from 'react-router-dom';
import { designers } from '../data/designers';
import { DesignerCard } from '../components/DesignerCard';
import { SearchBar } from '../components/SearchBar';
import { SEOHead } from '../components/SEOHead';
import { formatLocation } from '../utils/location';
import { useDesignerSearch } from '../hooks/useDesignerSearch';

export const LocationPage: React.FC = () => {
  const { state, city } = useParams<{ state: string; city: string }>();
  const locationStr = city ? `${city}, ${state}` : state;
  
  const { filteredDesigners } = useDesignerSearch(designers, {
    location: locationStr
  });

  const seoTitle = `Top Interior Designers in ${locationStr}`;
  const seoDescription = `Find the best interior designers and design firms in ${locationStr}. Browse portfolios, read reviews, and connect with top-rated interior designers near you.`;

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        meta={[
          {
            name: 'keywords',
            content: `interior designers ${locationStr}, home design ${locationStr}, interior decorators ${locationStr}, home renovation ${locationStr}`
          }
        ]}
      />

      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Interior Designers in {locationStr}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Find and connect with the best interior designers in your area
          </p>
          <SearchBar onSearch={() => {}} />
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        {filteredDesigners.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDesigners.map((designer) => (
              <DesignerCard key={designer.id} designer={designer} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              No designers found in {locationStr}
            </h2>
            <p className="text-gray-600">
              Try searching in nearby areas or adjusting your search criteria.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};