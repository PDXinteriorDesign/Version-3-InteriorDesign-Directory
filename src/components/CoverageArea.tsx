import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Users, Building, Compass } from 'lucide-react';
import { locations } from '../data/locations';

export const CoverageArea: React.FC = () => {
  return (
    <section className="relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-sage-50/50 via-white/50 to-azure-50/50 rounded-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-coral-500/5 via-azure-500/5 to-transparent" />
      
      <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-100">
        <div className="p-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Where We Serve</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Connecting you with exceptional interior designers across the Western United States
            </p>
          </div>

          {/* State Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {Object.values(locations).map((location) => (
              <Link
                key={location.slug}
                to={`/designers/${location.slug}`}
                className="group relative bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                {/* Hover effect background */}
                <div className="absolute inset-0 bg-gradient-to-br from-sage-50/0 via-sage-50/10 to-sage-50/30 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-serif mb-2 group-hover:text-sage-600 transition-colors">
                        {location.name}
                      </h3>
                      <div className="flex items-center text-gray-600 text-sm">
                        <Building className="w-4 h-4 mr-1" />
                        <span>{location.cities.length} Major Cities</span>
                      </div>
                    </div>
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-sage-50 group-hover:bg-sage-100 transition-colors">
                      <MapPin className="w-5 h-5 text-sage-600" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    {location.cities.slice(0, 3).map((city) => (
                      <Link
                        key={city.slug}
                        to={`/designers/${location.slug}/${city.slug}`}
                        className="block text-gray-600 hover:text-sage-600 transition-colors"
                      >
                        • {city.name}
                      </Link>
                    ))}
                    {location.cities.length > 3 && (
                      <div className="text-sage-600 text-sm font-medium">
                        +{location.cities.length - 3} more cities
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center p-6 bg-gradient-to-br from-sage-50 to-sage-100/50 rounded-xl">
              <Users className="w-6 h-6 text-sage-600 mr-3" />
              <span className="text-gray-800 font-medium">200+ Designers</span>
            </div>
            <div className="flex items-center justify-center p-6 bg-gradient-to-br from-coral-50 to-coral-100/50 rounded-xl">
              <Building className="w-6 h-6 text-coral-500 mr-3" />
              <span className="text-gray-800 font-medium">20+ Major Cities</span>
            </div>
            <div className="flex items-center justify-center p-6 bg-gradient-to-br from-azure-50 to-azure-100/50 rounded-xl">
              <Compass className="w-6 h-6 text-azure-500 mr-3" />
              <span className="text-gray-800 font-medium">5 Western States</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
