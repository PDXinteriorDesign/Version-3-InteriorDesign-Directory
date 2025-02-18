import React, { useState, useEffect } from 'react';
import { Filter, Star, MapPin, Palette, ChevronDown } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

interface DesignerFiltersProps {
  filters: {
    state: string;
    city: string;
    minRating: number;
    styles: string[];
    priceRange: string;
  };
  onFilterChange: (name: string, value: string | number | string[]) => void;
  onClearFilters: () => void;
}

const designStyles = [
  'Modern', 'Contemporary', 'Traditional', 'Transitional',
  'Industrial', 'Scandinavian', 'Bohemian', 'Mid-Century Modern'
];

const priceRanges = ['$', '$$', '$$$', '$$$$'];
const states = ['Oregon', 'Washington', 'California', 'Nevada', 'Arizona'];

export const DesignerFilters: React.FC<DesignerFiltersProps> = ({
  filters,
  onFilterChange,
  onClearFilters
}) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const updateURL = (name: string, value: string | number | string[]) => {
    const searchParams = new URLSearchParams(location.search);

    if (name === 'state') {
      if (typeof value === 'string' && value) {
        let newPath = `/designers/${value.toLowerCase()}`;

        const otherParams = new URLSearchParams();
        searchParams.forEach((val, key) => {
          if (key !== 'state') {
            otherParams.set(key, val);
          }
        });

        const queryString = otherParams.toString();
        if (queryString) {
          newPath += `?${queryString}`;
        }

        navigate(newPath);
        return;
      }
    } else {
      if (Array.isArray(value)) {
        if (value.length > 0) {
          searchParams.set(name, value.join(','));
        } else {
          searchParams.delete(name);
        }
      } else if (value) {
        searchParams.set(name, value.toString());
      } else {
        searchParams.delete(name);
      }

      let newPath = location.pathname;
      const queryString = searchParams.toString();
      if (queryString) {
        newPath += `?${queryString}`;
      }

      navigate(newPath);
    }
  };

  const handleFilterChange = (name: string, value: string | number | string[]) => {
    onFilterChange(name, value);
    updateURL(name, value);
  };

  const handleClearFilters = () => {
    onClearFilters();
    navigate('/designers');
  };

  useEffect(() => {
    const path = location.pathname.split('/');
    const state = path[2];
    const searchParams = new URLSearchParams(location.search);

    if (state) {
      const formattedState = state.charAt(0).toUpperCase() + state.slice(1).toLowerCase();
      onFilterChange('state', formattedState);
    }

    searchParams.forEach((value, key) => {
      if (key === 'styles') {
        onFilterChange(key, value.split(','));
      } else if (key === 'minRating') {
        onFilterChange(key, parseFloat(value));
      } else if (key !== 'state') {
        onFilterChange(key, value);
      }
    });
  }, []);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };




  return (
    <div className="bg-white rounded-xl shadow-sm mb-8">
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-600">
            <Filter className="w-4 h-4" />
            <span className="text-sm">Filter By:</span>
          </div>
          {(filters.state || filters.city || filters.styles.length > 0 || filters.priceRange) && (
            <button
              onClick={handleClearFilters}
              className="text-sm text-gray-500 hover:text-sage-600 transition-colors"
            >
              Clear All
            </button>
          )}
        </div>
      </div>

      <div className="flex flex-wrap divide-x divide-gray-100">
        {/* Location Filter */}
        <div className="relative">
          <button
            onClick={() => toggleDropdown('location')}
            className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
          >
            <MapPin className="w-4 h-4" />
            <span>{filters.state || filters.city ? `${filters.city || filters.state}` : 'Location'}</span>
            <ChevronDown className="w-4 h-4" />
          </button>

          {activeDropdown === 'location' && (
            <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg p-4 z-10">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">State</label>
                  <select
                    value={filters.state}
                    onChange={(e) => handleFilterChange('state', e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg"
                  >
                    <option value="">All States</option>
                    {states.map(state => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">City</label>
                  <input
                    type="text"
                    value={filters.city}
                    onChange={(e) => handleFilterChange('city', e.target.value)}
                    placeholder="Enter city name"
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Style Filter */}
        <div className="relative">
          <button
            onClick={() => toggleDropdown('style')}
            className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
          >
            <Palette className="w-4 h-4" />
            <span>{filters.styles.length ? `${filters.styles.length} Selected` : 'Style'}</span>
            <ChevronDown className="w-4 h-4" />
          </button>

          {activeDropdown === 'style' && (
            <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg p-4 z-10">
              <div className="grid grid-cols-2 gap-2">
                {designStyles.map((style) => (
                  <button
                    key={style}
                    onClick={() => {
                      const newStyles = filters.styles.includes(style)
                        ? filters.styles.filter((s) => s !== style)
                        : [...filters.styles, style];
                      onFilterChange('styles', newStyles);
                    }}
                    className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${filters.styles.includes(style)
                      ? 'bg-sage-600 text-white'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                      }`}
                  >
                    {style}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Rating Filter */}
        <div className="relative">
          <button
            onClick={() => toggleDropdown('rating')}
            className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
          >
            <Star className="w-4 h-4" />
            <span>{filters.minRating ? `${filters.minRating}+ Stars` : 'Rating'}</span>
            <ChevronDown className="w-4 h-4" />
          </button>

          {activeDropdown === 'rating' && (
            <div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg p-4 z-10">
              <div className="space-y-2">
                {[4, 4.5, 5].map((rating) => (
                  <button
                    key={rating}
                    onClick={() => onFilterChange('minRating', rating)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${filters.minRating === rating
                      ? 'bg-sage-600 text-white'
                      : 'hover:bg-gray-50'
                      }`}
                  >
                    <span>{rating}+ Stars</span>
                    <Star className={`w-4 h-4 ${filters.minRating === rating ? 'fill-current' : ''}`} />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Price Range Filter */}
        <div className="relative">
          <button
            onClick={() => toggleDropdown('price')}
            className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
          >
            <span>Price</span>
            <span>{filters.priceRange || ''}</span>
            <ChevronDown className="w-4 h-4" />
          </button>

          {activeDropdown === 'price' && (
            <div className="absolute top-full right-0 mt-1 bg-white rounded-lg shadow-lg p-4 z-10">
              <div className="space-y-2">
                {priceRanges.map((range) => (
                  <button
                    key={range}
                    onClick={() => onFilterChange('priceRange', range)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${filters.priceRange === range
                      ? 'bg-sage-600 text-white'
                      : 'hover:bg-gray-50'
                      }`}
                  >
                    {range}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};