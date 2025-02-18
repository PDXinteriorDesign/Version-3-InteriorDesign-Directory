import React, { useState, useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { SEOHead } from '../components/SEOHead';
import { designers } from '../data/designers';
import { DesignerCard } from '../components/DesignerCard';
import { designerSchema } from '../utils/schema';
import { useListings } from '../hooks/useListings';
import { Loader } from 'lucide-react';
import { DesignerFilters } from '../components/DesignerFilters';

export const DesignersPage: React.FC = () => {
  const { listings, loading, error } = useListings({ status: 'approved' });
  const [filters, setFilters] = useState({
    state: '',
    city: '',
    minRating: 4,
    styles: [] as string[],
    priceRange: ''
  });

  // Convert listings to designer format
  const listingDesigners = listings.map(listing => ({
    id: listing.id,
    name: listing.businessInfo.name,
    company: listing.businessInfo.company,
    rating: 5,
    reviewCount: 0,
    specialty: listing.portfolio.style,
    description: listing.portfolio.description,
    personalBio: listing.portfolio.description,
    profileImage: listing.portfolio.images[0] || '/placeholder-profile.jpg',
    coverImage: listing.portfolio.images[1] || '/placeholder-cover.jpg',
    portfolioImages: listing.portfolio.images,
    location: listing.businessLocation ?
      `${listing.businessLocation.city}, ${listing.businessLocation.state}` :
      'Location not specified',
    experience: 1,
    contact: {
      phone: listing.businessInfo.phone,
      email: listing.businessInfo.email,
      website: listing.businessInfo.website
    },
    services: listing.services.offerings,
    priceRange: listing.services.priceRange,
    source: 'firebase',
  }));

  const allDesigners = [...designers, ...listingDesigners];

  // Filter designers based on selected filters
  const filteredDesigners = allDesigners.filter(designer => {
    // Filter by source (firebase)
    if (designer.source !== 'firebase') return false;

    // Filter by location
    if (filters.state && (!designer.location || !designer.location.toLowerCase().includes(filters.state.toLowerCase()))) {
      return false;
    }
    if (filters.city && (!designer.location || !designer.location.toLowerCase().includes(filters.city.toLowerCase()))) {
      return false;
    }

    // Filter by rating
    if (designer.rating < filters.minRating) {
      return false;
    }

    // Filter by design styles
    if (filters.styles.length > 0 && !filters.styles.some(style =>
      designer.specialty.includes(style)
    )) {
      return false;
    }

    // Filter by price range
    if (filters.priceRange && designer.priceRange !== filters.priceRange) {
      return false;
    }

    return true;
  });

  const handleFilterChange = (name: string, value: string | number | string[]) => {
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleClearFilters = () => {
    setFilters({
      state: '',
      city: '',
      minRating: 4,
      styles: [],
      priceRange: ''
    });
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Interior Designers Directory",
    "description": "Browse our curated selection of top interior designers and find the perfect match for your project.",
    "hasPart": filteredDesigners.map(designer => designerSchema(designer))
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Browse Interior Designers | The Design Refuge"
        description="Discover talented interior designers in your area. Browse portfolios, read reviews, and find the perfect designer for your project."
        schema={schema}
        canonicalUrl="/designers"
      />

      <Navbar />

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Our Interior Designers</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Browse our curated selection of top interior designers and find the perfect match for your project
          </p>
        </div>

        <DesignerFilters
          filters={filters}
          onFilterChange={handleFilterChange}
          onClearFilters={handleClearFilters}
        />

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <Loader className="w-8 h-8 animate-spin text-sage-600" />
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-600">{error}</p>
          </div>
        ) : (
          <>
            <div className="mb-8 text-gray-600">
              {filteredDesigners.length} designer{filteredDesigners.length !== 1 ? 's' : ''} found
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDesigners.map(designer => (
                <DesignerCard key={designer.id} designer={designer} />
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
};