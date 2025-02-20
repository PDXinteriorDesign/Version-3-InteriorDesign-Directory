import React, { useEffect, useState } from 'react';
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
  // Add state to track if component has loaded
  const [isLoaded, setIsLoaded] = useState(false);

  // Set loaded state after component mounts
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Force re-render when designers data changes
  useEffect(() => {
    if (designers.length > 0 || nearbyDesigners.length > 0) {
      setIsLoaded(true);
    }
  }, [designers, nearbyDesigners]);

  const formatDesigner = (listing: any) => {
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
      distance: listing.distance,
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

  // Create separate distance badge component
  const DistanceBadge = ({ designer, hasPermission }: { designer: Designer, hasPermission?: boolean }) => {
    // Check for distance data
    if (!designer.distance && hasPermission !== false) return null;

    // Use setTimeout to ensure the badge renders after everything else
    const [showBadge, setShowBadge] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setShowBadge(true);
      }, 100);

      return () => clearTimeout(timer);
    }, []);

    if (!showBadge) return null;

    return (
      <div className="absolute top-3 right-3 bg-white/95 rounded-full px-3 py-1 text-sm shadow-md flex items-center text-gray-700 z-50 pointer-events-none">
        <MapPin size={14} className="mr-1 text-gray-600" />
        {designer.distance ?
          <span>{designer.distance} km away</span> :
          <span>Enable location</span>
        }
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
          <h2 className="text-2xl font-serif mb-6">
            {designers.length} designers found
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designers.map((designer) => (
              <div key={designer.id} className="relative overflow-visible">
                <DesignerCard designer={formatDesigner(designer)} />
                <DistanceBadge
                  designer={designer}
                  hasPermission={userLocationPermission}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {nearbyDesigners.length > 0 && (
        <div>
          <h2 className="text-2xl font-serif mb-6">Nearby Designers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nearbyDesigners.map((designer) => (
              <div key={designer.id} className="relative overflow-visible">
                <DesignerCard designer={formatDesigner(designer)} />
                <DistanceBadge
                  designer={designer}
                  hasPermission={userLocationPermission}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};