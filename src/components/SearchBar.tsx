import React, { useState, useRef } from 'react';
import { Search, MapPin, Loader } from 'lucide-react';
import { Autocomplete } from '@react-google-maps/api';
import { getDesignersByLocation, convertLocationToCoordinates } from '../lib/firebase/listings';

interface Coordinates {
  lat: number;
  lng: number;
}

interface Designer {
  id: string;
  businessLocation: {
    city: string;
    state: string;
  };
  coordinates?: Coordinates;
  distance?: string;
  [key: string]: any;
}

interface SearchFilters {
  location: string;
  zipCode: string;
  coordinates?: Coordinates;
  distance?: string;
}

interface SearchBarProps {
  onSearch: (filters: SearchFilters) => void;
  userCoords?: Coordinates;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch, userCoords }) => {
  const [location, setLocation] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [geoError, setGeoError] = useState<string | null>(null);
  const locationAutocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const zipAutocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371;
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const km = R * c;
    const miles = km * 0.621371;
    return `${miles.toFixed(1)} mi`;
  };

  const handleLocationSelect = async () => {
    const place = locationAutocompleteRef.current?.getPlace();
    if (place && place.geometry?.location) {
      setLoading(true);
      try {
        const cityComponent = place.address_components?.find(comp =>
          comp.types.includes('locality')
        );
        const stateComponent = place.address_components?.find(comp =>
          comp.types.includes('administrative_area_level_1')
        );

        const city = cityComponent?.long_name;
        const state = stateComponent?.long_name;

        if (city && state) {
          // Get designers from Firebase based on location
          const designers = await getDesignersByLocation({
            city,
            state
          });

          // Convert location to coordinates
          const coords = await convertLocationToCoordinates(city, state);
          console.log('🔍 Location coordinates:', coords);
          console.log('👩‍🎨 Designers found:', designers);

          if (coords && userCoords) {
            const distance = calculateDistance(
              userCoords.lat,
              userCoords.lng,
              coords.lat,
              coords.lng
            );
            console.log('📏 Distance:', distance);
          }

          setLocation(place.formatted_address || '');
          onSearch({
            location: place.formatted_address || '',
            zipCode,
            coordinates: coords || undefined
          });
        }
      } catch (error) {
        console.error('Error processing location:', error);
        setGeoError('Error processing location. Please try again.');
      } finally {
        setLoading(false);
      }
    }
  };

  const handleZipSelect = async () => {
    const place = zipAutocompleteRef.current?.getPlace();
    if (place && place.geometry?.location) {
      setLoading(true);
      try {
        const cityComponent = place.address_components?.find(comp =>
          comp.types.includes('locality')
        );
        const stateComponent = place.address_components?.find(comp =>
          comp.types.includes('administrative_area_level_1')
        );
        const postalCode = place.address_components?.find(comp =>
          comp.types.includes('postal_code')
        )?.long_name || '';

        const city = cityComponent?.long_name;
        const state = stateComponent?.long_name;

        if (city && state) {
          // Get designers from Firebase based on location
          const designers = await getDesignersByLocation({
            city,
            state
          });

          // Convert location to coordinates
          const coords = await convertLocationToCoordinates(city, state);
          console.log('🔍 ZIP location coordinates:', coords);
          console.log('👩‍🎨 Designers found:', designers);

          if (coords && userCoords) {
            const distance = calculateDistance(
              userCoords.lat,
              userCoords.lng,
              coords.lat,
              coords.lng
            );
            console.log('📏 Distance:', distance);
          }

          const cityState = [city, stateComponent?.short_name].filter(Boolean).join(', ');
          setLocation(cityState);
          setZipCode(postalCode);

          onSearch({
            location: cityState,
            zipCode: postalCode,
            coordinates: coords || undefined
          });
        }
      } catch (error) {
        console.error('Error processing ZIP location:', error);
        setGeoError('Error processing location. Please try again.');
      } finally {
        setLoading(false);
      }
    }
  };

  const handleGeolocation = () => {
    setLoading(true);
    setGeoError(null);

    if (!navigator.geolocation) {
      setGeoError('Geolocation is not supported by your browser');
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        try {
          const { latitude, longitude } = pos.coords;

          // Reverse geocode to get address
          const geocoder = new google.maps.Geocoder();
          geocoder.geocode(
            { location: { lat: latitude, lng: longitude } },
            async (results, status) => {
              if (status === 'OK' && results?.[0]) {
                const place = results[0];
                const cityComponent = place.address_components?.find(comp =>
                  comp.types.includes('locality')
                );
                const stateComponent = place.address_components?.find(comp =>
                  comp.types.includes('administrative_area_level_1')
                );
                const postalCode = place.address_components?.find(comp =>
                  comp.types.includes('postal_code')
                )?.long_name || '';

                const city = cityComponent?.long_name;
                const state = stateComponent?.long_name;

                if (city && state) {
                  // Get designers from Firebase based on location
                  const designers = await getDesignersByLocation({
                    city,
                    state
                  });

                  console.log('📍 Current location coords:', { lat: latitude, lng: longitude });
                  console.log('👩‍🎨 Nearby designers:', designers);

                  if (userCoords) {
                    const distance = calculateDistance(
                      userCoords.lat,
                      userCoords.lng,
                      latitude,
                      longitude
                    );
                    console.log('📏 Distance:', distance);
                  }

                  setLocation(place.formatted_address || 'Current Location');
                  setZipCode(postalCode);

                  onSearch({
                    location: place.formatted_address || 'Current Location',
                    zipCode: postalCode,
                    coordinates: { lat: latitude, lng: longitude }
                  });
                }
              } else {
                setGeoError('Unable to find address for your location');
              }
              setLoading(false);
            }
          );
        } catch (error) {
          console.error('Error processing geolocation:', error);
          setGeoError('Error processing your location. Please try again.');
          setLoading(false);
        }
      },
      (error) => {
        setLoading(false);
        console.error('Geolocation error:', error);
        switch (error.code) {
          case error.PERMISSION_DENIED:
            setGeoError('Location permission denied. Please enable location services.');
            break;
          case error.POSITION_UNAVAILABLE:
            setGeoError('Location information unavailable.');
            break;
          case error.TIMEOUT:
            setGeoError('Location request timed out.');
            break;
          default:
            setGeoError('An unknown error occurred.');
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      }
    );
  };

  return (
    <form className="w-full" onSubmit={(e) => e.preventDefault()}>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <MapPin
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
          />
          <Autocomplete
            onLoad={(autocomplete) => {
              locationAutocompleteRef.current = autocomplete;
              autocomplete.setTypes(['(cities)']);
            }}
            onPlaceChanged={handleLocationSelect}
            options={{
              fields: ['address_components', 'formatted_address', 'geometry'],
              types: ['(cities)']
            }}
          >
            <input
              type="text"
              placeholder="Enter city or state..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-gray-200 focus:border-sage-500 focus:ring-2 focus:ring-sage-200 transition-all"
            />
          </Autocomplete>
        </div>

        <div className="w-full md:w-36">
          <Autocomplete
            onLoad={(autocomplete) => {
              zipAutocompleteRef.current = autocomplete;
              autocomplete.setTypes(['postal_code']);
            }}
            onPlaceChanged={handleZipSelect}
            options={{
              fields: ['address_components', 'formatted_address', 'geometry'],
              types: ['postal_code']
            }}
          >
            <input
              type="text"
              placeholder="ZIP Code"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-sage-500 focus:ring-2 focus:ring-sage-200 transition-all"
            />
          </Autocomplete>
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={handleGeolocation}
            className="w-12 h-12 flex items-center justify-center rounded-lg border-2 border-gray-200 hover:border-sage-500 transition-all"
            title="Use my location"
          >
            {loading ? (
              <Loader className="w-5 h-5 animate-spin" />
            ) : (
              <MapPin className="w-5 h-5" />
            )}
          </button>

          <button
            type="button"
            onClick={handleLocationSelect}
            className="px-6 py-3 bg-azure-100 text-gray-900 rounded-lg hover:bg-azure-200 transition-colors flex items-center justify-center gap-2"
          >
            <Search className="w-5 h-5" />
            <span>Search</span>
          </button>
        </div>
      </div>
      {geoError && (
        <p className="mt-2 text-sm text-red-600">{geoError}</p>
      )}
    </form>
  );
};

export default SearchBar;