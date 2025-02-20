import React from 'react';
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
  const formatDesigner = (listing: any) => {
    const formattedDistance = listing.distance ? (
      <div className="flex items-center text-sm text-gray-600">
        <MapPin className="w-4 h-4 mr-1" />
        <span>{(parseFloat(listing.distance) * 1.60934).toFixed(1)} km away</span>
      </div>
    ) : userLocationPermission === false ? (
      <div className="flex items-center text-sm text-gray-500 italic">
        <MapPin className="w-4 h-4 mr-1" />
        <span>Enable location to see distance</span>
      </div>
    ) : null;

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
      distanceElement: formattedDistance,
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

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader className="w-6 h-6 animate-spin mr-2" />
        <span>Searching for designers...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-12">
        <p className="text-red-600 text-lg font-medium">{error}</p>
        <p className="text-gray-600 mt-2">
          Try searching with a different location or browse all designers.
        </p>
      </div>
    );
  }



  return (
    <div className="space-y-8">
      {designers.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Designers Found</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designers.map((designer) => (
              <DesignerCard
                key={designer.id}
                designer={formatDesigner(designer)}
              />
            ))}
          </div>
        </div>
      )}

      {nearbyDesigners.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Nearby Designers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nearbyDesigners.map((designer) => (
              <DesignerCard
                key={designer.id}
                designer={formatDesigner(designer)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};