import React from 'react';
import { MapPin } from 'lucide-react';

interface NeighborhoodSectionProps {
  neighborhoods: string[];
  cityName: string;
}

export const NeighborhoodSection: React.FC<NeighborhoodSectionProps> = ({
  neighborhoods,
  cityName
}) => {
  return (
    <section className="bg-white rounded-xl p-8 shadow-sm">
      <h2 className="text-2xl font-serif mb-6">Popular {cityName} Neighborhoods</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {neighborhoods.map((neighborhood) => (
          <div
            key={neighborhood}
            className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <MapPin className="w-4 h-4 text-coral-500 mr-2" />
            <span className="text-gray-700">{neighborhood}</span>
          </div>
        ))}
      </div>
    </section>
  );
};