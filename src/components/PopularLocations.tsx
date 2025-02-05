import React from 'react';
import { LocationLink } from './LocationLink';

const popularLocations = [
  { state: 'California', cities: ['Los Angeles', 'San Francisco', 'San Diego'] },
  { state: 'Oregon', cities: ['Portland', 'Eugene', 'Bend'] },
  { state: 'Washington', cities: ['Seattle', 'Bellevue', 'Kirkland'] },
  { state: 'Nevada', cities: ['Las Vegas', 'Reno', 'Henderson'] },
  { state: 'Arizona', cities: ['Phoenix', 'Scottsdale', 'Tucson'] }
];

export const PopularLocations: React.FC = () => {
  return (
    <div className="hidden md:block bg-white rounded-lg shadow-sm p-8 mx-4">
      <h2 className="text-4xl font-serif mb-8 text-center">Popular Locations</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-[1920px] mx-auto">
        {popularLocations.map(({ state, cities }) => (
          <div key={state} className="text-center">
            <LocationLink
              state={state}
              className="font-medium text-gray-900 hover:text-sage-600 text-xl inline-block mb-4"
            >
              {state}
            </LocationLink>
            <ul className="space-y-2">
              {cities.map((city) => (
                <li key={city}>
                  <LocationLink
                    state={state}
                    city={city}
                    className="text-gray-600 hover:text-sage-600 text-sm"
                  >
                    {city}
                  </LocationLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};