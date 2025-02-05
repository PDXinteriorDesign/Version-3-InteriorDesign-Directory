import React from 'react';
import { Link } from 'react-router-dom';
import { City } from '../../types/location';
import { MapPin } from 'lucide-react';

interface CityGridProps {
  cities: City[];
  stateSlug: string;
}

export const CityGrid: React.FC<CityGridProps> = ({ cities, stateSlug }) => {
  return (
    <section>
      <h2 className="text-3xl font-serif mb-8">Popular Cities</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cities.map((city) => (
          <Link
            key={city.slug}
            to={`/location/${stateSlug}/${city.slug}`}
            className="group"
          >
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-coral-500 transition-colors">
                    {city.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{city.designerCount} Designers</p>
                </div>
                <MapPin className="w-6 h-6 text-coral-500" />
              </div>
              <div className="flex flex-wrap gap-2">
                {city.popularStyles.map((style) => (
                  <span
                    key={style}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {style}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};