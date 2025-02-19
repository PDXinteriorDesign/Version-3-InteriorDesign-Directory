import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getLocationBySlug, getCityBySlug } from '../../data/locations';
import { Navbar } from '../../components/Navbar';
import { DesignerCard } from '../../components/DesignerCard';
import { useDesignerSearch } from '../../hooks/useDesignerSearch';
import { DesignerFilters } from '../../components/DesignerFilters';
import { Loader } from 'lucide-react';



export const DesignersCityPage: React.FC = () => {
  const { state, city } = useParams<{ state: string; city: string }>();
  const location = getLocationBySlug(state || '');
  const cityData = getCityBySlug(state || '', city || '');

  const [filters, setFilters] = useState({
    state: location?.name || '',
    city: cityData?.name || '',
    minRating: 0,
    styles: [],
    priceRange: '',
  });

  const { designers, loading, error } = useDesignerSearch({
    state: filters.state,
    city: filters.city,
  });

  const formattedDesigners = designers.map(listing => ({
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
  }));

  

  const handleFilterChange = (name: string, value: string | number | string[]) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleClearFilters = () => {
    setFilters({
      state: location?.name || '',
      city: cityData?.name || '',
      minRating: 0,
      styles: [],
      priceRange: '',
    });
  };

  if (!location || !cityData) {
    return <div>City location not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Interior Designers in {cityData.name}, {location.name} | The Design Refuge</title>
        <meta name="description" content={cityData.description} />
      </Helmet>

      <Navbar />

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li><Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link></li>
              <li className="text-gray-500">/</li>
              <li><Link to="/designers" className="text-gray-500 hover:text-gray-700">Designers</Link></li>
              <li className="text-gray-500">/</li>
              <li><Link to={`/designers/${location.slug}`} className="text-gray-500 hover:text-gray-700">{location.name}</Link></li>
              <li className="text-gray-500">/</li>
              <li className="text-gray-900 font-medium">{cityData.name}</li>
            </ol>
          </nav>
        </div>

        <div className="bg-white rounded-xl shadow-sm mb-12">
          <div className="p-8">
            <h1 className="text-4xl font-serif mb-4">
              Interior Designers in {cityData.name}, {location.name}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mb-8">{cityData.description}</p>

            <DesignerFilters
              filters={filters}
              onFilterChange={handleFilterChange}
              onClearFilters={handleClearFilters}
            />
          </div>
        </div>

        {loading ? (
          <Loader className="w-10 h-10 animate-spin text-gray-500 mx-auto" />
        ) : error ? (
          <div className="text-center py-12 text-red-600">{error}</div>
        ) : designers && designers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {formattedDesigners.map((designer) => (
              <DesignerCard
                key={designer.id}
                designer={designer}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">No designers found</div>
        )}
      </main>
    </div>
  );
};