import React from 'react';
import { Location } from '../../types/location';
import { SearchBar } from '../SearchBar';

interface LocationHeaderProps {
  location: Location;
}

export const LocationHeader: React.FC<LocationHeaderProps> = ({ location }) => {
  return (
    <div className="bg-gradient-to-br from-white via-sage-50 to-azure-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-serif mb-4">
          Interior Designers in {location.state}
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl">
          Find and connect with the best interior designers across {location.state}. 
          Browse portfolios, read reviews, and transform your space with local design expertise.
        </p>
        <div className="max-w-2xl">
          <SearchBar onSearch={() => {}} />
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          {location.popularDesignStyles.map((style) => (
            <span key={style} className="px-4 py-2 bg-white rounded-full text-gray-700 shadow-sm">
              {style}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};