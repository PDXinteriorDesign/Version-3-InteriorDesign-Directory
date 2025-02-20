import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Designer } from '../types';
import { DesignerCard } from './DesignerCard';
import { Loader, MapPin } from 'lucide-react';

interface SearchResultsProps {
  designers: Designer[];
  nearbyDesigners: Designer[];
  loading: boolean;
  error: string | null;
  userLocationPermission?: boolean;
}

export const SearchResults: React.FC<SearchResultsProps> = ({
  designers,
  nearbyDesigners,
  loading,
  error,
  userLocationPermission
}) => {
  const [searchParams] = useSearchParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);


  useEffect(() => {
    if (designers.length > 0 || nearbyDesigners.length > 0) {
      setIsLoaded(true);
    }
  }, [designers, nearbyDesigners]);

  const formatDesigner = (listing: any) => {
    // Get the stored distance from URL params
    const storedDistance = searchParams.get(`distance-${listing.id}`);

    return {
      id: listing.id,
      name: listing.businessInfo?.name || '',
      company: listing.businessInfo?.company || '',
      rating: 5,
      reviewCount: 0,
      specialty: listing.portfolio?.style || [],
      description: listing.portfolio?.description || '',
      personalBio: listing.portfolio?.description || '',
      profileImage: (listing.portfolio?.images && listing.portfolio.images[0]) || '/placeholder-profile.jpg',
      coverImage: (listing.portfolio?.images && listing.portfolio.images[1]) || '/placeholder-cover.jpg',
      portfolioImages: listing.portfolio?.images || [],
      location: listing.businessLocation ?
        `${listing.businessLocation.city || ''}, ${listing.businessLocation.state || ''}` :
        'Location not specified',
      distance: storedDistance || listing.distance,
      experience: parseInt(listing.businessInfo?.experience ?? '0') || 1,
      contact: {
        phone: listing.businessInfo?.phone || '',
        email: listing.businessInfo?.email || '',
        website: listing.businessInfo?.website || ''
      },
      services: listing.services?.offerings || [],
      priceRange: listing.services?.priceRange || '',
      source: 'firebase',
      slug: listing.slug || listing.id,
    };
  };

  const DistanceBadge = ({ designer, hasPermission, setUserLocation }: {
    designer: Designer,
    hasPermission?: boolean,
    setUserLocation: (location: { lat: number; lng: number }) => void
  }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const storedDistance = searchParams.get(`distance-${designer.id}`);
    const distance = storedDistance || designer.distance;
    const [locationError, setLocationError] = useState<string | null>(null);
    const [requestingLocation, setRequestingLocation] = useState(false);
    const [calculatedDistance, setCalculatedDistance] = useState<string | null>(null);

    const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
      const R = 6371; // Earth's radius in km
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

    const handleEnableLocation = () => {
      setRequestingLocation(true);
      setLocationError(null);

      if (!navigator.geolocation) {
        setLocationError("Geolocation is not supported by your browser.");
        setRequestingLocation(false);
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLoc = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setUserLocation(userLoc);

          // Calculate distance if designer has coordinates
          if (designer.coordinates) {
            const newDistance = calculateDistance(
              userLoc.lat,
              userLoc.lng,
              designer.coordinates.lat,
              designer.coordinates.lng
            );
            setCalculatedDistance(newDistance);

            // Update URL params with new distance
            const newSearchParams = new URLSearchParams(searchParams);
            newSearchParams.set(`distance-${designer.id}`, newDistance);
            setSearchParams(newSearchParams);
          }

          setRequestingLocation(false);
        },
        (error) => {
          setLocationError(error.message);
          setRequestingLocation(false);
        }
      );
    };

    // Use calculated distance if available, otherwise fall back to props
    const displayDistance = calculatedDistance || distance;

    if (!displayDistance && hasPermission !== false) return null;

    return (
      <div className="absolute top-3 right-3 bg-white/95 rounded-full px-3 py-1 text-sm shadow-md flex items-center text-gray-700 z-50">
        <MapPin size={14} className="mr-1 text-gray-600" />
        {displayDistance ? (
          <span>{displayDistance}</span>
        ) : (
          <button
            onClick={handleEnableLocation}
            className="text-blue-600 hover:underline disabled:text-gray-400"
            disabled={requestingLocation}
          >
            {requestingLocation ? "Requesting..." : "Enable location"}
          </button>
        )}
        {locationError && <p className="text-red-500 text-xs mt-1">{locationError}</p>}
      </div>
    );
  };



  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <Loader className="animate-spin mr-2" />
        <span>Searching for designers...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="text-xl font-medium text-gray-800 mb-2">{error}</div>
        <p className="text-gray-600">
          Try searching with a different location or browse all designers.
        </p>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="flex justify-center items-center py-12">
        <Loader className="animate-spin mr-2" />
        <span>Loading results...</span>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {designers.length > 0 && (
        <div>
          <h2 className="mb-8 text-gray-600">
            {designers.length} designers found
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designers.map((designer) => (
              <div key={designer.id} className="relative overflow-visible">
                <DesignerCard designer={formatDesigner(designer)} />
                <DistanceBadge
                  designer={designer}
                  hasPermission={userLocationPermission}
                  setUserLocation={setUserLocation}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {nearbyDesigners.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Nearby Designers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nearbyDesigners.map((designer) => (
              <div key={designer.id} className="relative overflow-visible">
                <DesignerCard designer={formatDesigner(designer)} />
                <DistanceBadge
                  designer={designer}
                  hasPermission={userLocationPermission}
                  setUserLocation={setUserLocation} />
              </div>
            ))}
          </div>
        </div>
      )}

      {!designers.length && !nearbyDesigners.length && !loading && !error && (
        <div className="text-center py-12">
          <div className="text-xl font-medium text-gray-800 mb-2">
            No designers found in this area
          </div>
          <p className="text-gray-600">
            Try expanding your search to find more designers.
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchResults;