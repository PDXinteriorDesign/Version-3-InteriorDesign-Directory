import React, { useState } from 'react';
import { Search, MapPin, Loader } from 'lucide-react';
import { SearchFilters } from '../types';

interface SearchBarProps {
  onSearch: (filters: SearchFilters) => void;
  className?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch, className = '' }) => {
  const [location, setLocation] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [useGeolocation, setUseGeolocation] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault();
    }

    const filters: SearchFilters = {
      location,
      zipCode
    };

    if (useGeolocation) {
      try {
        setLoading(true);
        const position = await getCurrentPosition();
        filters.coordinates = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        filters.radius = 50; // 50 miles radius
      } catch (err) {
        setError('Unable to get your location. Please try entering it manually.');
      } finally {
        setLoading(false);
      }
    }

    onSearch(filters);
  };

  const getCurrentPosition = (): Promise<GeolocationPosition> => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error('Geolocation is not supported'));
        return;
      }

      navigator.geolocation.getCurrentPosition(resolve, reject, {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      });
    });
  };

  return (
    <form className={`w-full ${className}`} onSubmit={handleSearch}>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Enter city or state..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-gray-200 focus:border-sage-500 focus:ring-2 focus:ring-sage-200 transition-all"
          />
        </div>

        <div className="w-full md:w-36">
          <input
            type="text"
            placeholder="ZIP Code"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-sage-500 focus:ring-2 focus:ring-sage-200 transition-all"
          />
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => {
              setUseGeolocation(!useGeolocation);
              if (!useGeolocation) {
                handleSearch();
              }
            }}
            className={`w-12 h-12 flex items-center justify-center rounded-lg border-2 transition-all ${
              useGeolocation
                ? 'bg-sage-50 border-sage-500 text-sage-700'
                : 'border-gray-200 hover:border-sage-500'
            }`}
            title="Use my location"
          >
            {loading ? (
              <Loader className="w-5 h-5 animate-spin" />
            ) : (
              <MapPin className="w-5 h-5" />
            )}
          </button>

          <button
            type="submit"
            className="px-6 py-3 bg-azure-100 text-gray-900 rounded-lg hover:bg-azure-200 transition-colors flex items-center justify-center gap-2"
          >
            <Search className="w-5 h-5" />
            <span>Search</span>
          </button>
        </div>
      </div>

      {error && (
        <p className="mt-2 text-sm text-red-600">{error}</p>
      )}
    </form>
  );
};