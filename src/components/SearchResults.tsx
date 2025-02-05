import React from 'react';
import { Designer } from '../types';
import { DesignerCard } from './DesignerCard';
import { Loader } from 'lucide-react';

interface SearchResultsProps {
  designers: Designer[];
  nearbyDesigners: Designer[];
  loading: boolean;
  error: string | null;
}

export const SearchResults: React.FC<SearchResultsProps> = ({
  designers,
  nearbyDesigners,
  loading,
  error
}) => {
  if (loading) {
    return (
      <div className="text-center py-12">
        <Loader className="w-8 h-8 animate-spin mx-auto text-coral-500 mb-4" />
        <p className="text-gray-600">Searching for designers...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12 bg-white rounded-xl shadow-sm">
        <p className="text-gray-600 mb-4">{error}</p>
        <p className="text-sm text-gray-500">
          Try searching with a different location or browse all designers.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {designers.length > 0 && (
        <section>
          <h2 className="text-2xl font-serif mb-6">Designers Found</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designers.map((designer) => (
              <DesignerCard key={designer.id} designer={designer} />
            ))}
          </div>
        </section>
      )}

      {nearbyDesigners.length > 0 && (
        <section>
          <h2 className="text-2xl font-serif mb-6">Nearby Designers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nearbyDesigners.map((designer) => (
              <DesignerCard key={designer.id} designer={designer} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};