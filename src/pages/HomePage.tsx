import React from 'react';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { designers } from '../data/designers';
import { DesignerCard } from '../components/DesignerCard';
import { SearchBar } from '../components/SearchBar';
import { CoverageArea } from '../components/CoverageArea';
import { SEOHead } from '../components/SEOHead';
import { HeroSection } from '../components/HeroSection';
import { Navbar } from '../components/Navbar';
import { Logo } from '../components/Logo';
import { useListings } from '../hooks/useListings';
import { FAQ } from '../components/FAQ';
import { DesignExplorationSection } from '../components/DesignExplorationSection';
import { Footer } from '../components/Footer';

export const HomePage: React.FC = () => {
  const { listings, loading, error } = useListings({ status: 'approved' });

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
    location: `${listing.businessLocation.city}, ${listing.businessLocation.state}`,
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
  const featuredDesigners = allDesigners
    .filter(designer => designer.source === 'firebase')
    .slice(0, 6);

  return (
    <div className="min-h-screen bg-sage-50">
      <SEOHead
        title="The Design Refuge | Find Your Perfect Interior Designer"
        description="Connect with top-rated local interior designers. Browse portfolios, read reviews, and find the perfect designer for your home renovation project."
      />

      <Navbar />
      <HeroSection />
      <DesignExplorationSection />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <CoverageArea />
      </div>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-16">
          <h2 className="text-4xl font-serif mb-3">Featured Designers</h2>
          <p className="text-xl text-gray-600 mb-8">Discover exceptional talent in your area</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDesigners.map(designer => (
              <DesignerCard key={designer.id} designer={designer} />
            ))}
          </div>
        </div>

        <div className="mb-16">
          <FAQ title="Interior Designer or Decorator FAQs" />
        </div>
      </main>

      <Footer />
    </div>
  );
};