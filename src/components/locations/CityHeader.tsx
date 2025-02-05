import React from 'react';
import { City } from '../../types/location';
import { Location } from '../../types/location';
import { SearchBar } from '../SearchBar';
import { MapPin, DollarSign, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { formatLocationWithState } from '../../utils/location/stateAbbreviations';

interface CityHeaderProps {
  city: City;
  state: Location;
}

export const CityHeader: React.FC<CityHeaderProps> = ({ city, state }) => {
  const formattedLocation = formatLocationWithState(city.name, state.state);

  return (
    <div className="bg-gradient-to-br from-white via-sage-50 to-azure-50 py-12">
      <Helmet>
        <title>Interior Designers in {formattedLocation} | The Design Refuge</title>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-6">
          <Link 
            to={`/location/${state.stateSlug}`}
            className="text-gray-600 hover:text-coral-500 transition-colors"
          >
            {state.state}
          </Link>
          <span className="mx-2">›</span>
          <span className="text-gray-900">{city.name}</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-serif mb-4">
          Interior Designers in {formattedLocation}
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl">
          Find and connect with the best interior designers in {city.name}. Browse portfolios, 
          read reviews, and transform your space with local design expertise.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6">
            <MapPin className="w-6 h-6 text-sage-600 mb-3" />
            <h3 className="font-semibold mb-2">Service Area</h3>
            <p className="text-gray-600">{city.neighborhoods.length} neighborhoods covered</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6">
            <DollarSign className="w-6 h-6 text-sage-600 mb-3" />
            <h3 className="font-semibold mb-2">Average Price</h3>
            <p className="text-gray-600">{city.averagePrice}</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6">
            <Palette className="w-6 h-6 text-sage-600 mb-3" />
            <h3 className="font-semibold mb-2">Popular Styles</h3>
            <div className="flex flex-wrap gap-2">
              {city.popularStyles.map((style, index) => (
                <span key={index} className="text-sm text-gray-600">{style}</span>
              ))}
            </div>
          </div>
        </div>

        <SearchBar onSearch={() => {}} />
      </div>
    </div>
  );
};