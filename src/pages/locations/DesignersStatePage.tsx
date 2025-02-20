import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getLocationBySlug } from '../../data/locations';
import { Navbar } from '../../components/Navbar';
import { MapPin } from 'lucide-react';

export const DesignersStatePage: React.FC = () => {
  const { state } = useParams<{ state: string }>();


  const stateSlug = state?.toLowerCase() || '';

  const location = getLocationBySlug(stateSlug);


  // Handle case where state is not found
  if (!location) {
    console.error("❌ State location not found:", state);
    return <div>design State Location not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Interior Designers in {location.name} | The Design Refuge</title>
        <meta
          name="description"
          content={`Find top interior designers in ${location.name}. Browse portfolios, read reviews, and connect with the best local designers for your project.`}
        />
      </Helmet>

      <Navbar />

      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Breadcrumb Navigation */}
        <div className="mb-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <Link to="/" className="text-gray-500 hover:text-gray-700">
                  Home
                </Link>
              </li>
              <li className="text-gray-500">/</li>
              <li>
                <Link to="/designers" className="text-gray-500 hover:text-gray-700">
                  Designers
                </Link>
              </li>
              <li className="text-gray-500">/</li>
              <li className="text-gray-900 font-medium">{location.name}</li>
            </ol>
          </nav>
        </div>

        {/* Header Section */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-12">
          <div className="p-8">
            <h1 className="text-4xl font-serif mb-4">
              Interior Designers in {location.name}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Find and connect with the best interior designers across {location.name}.
              Browse portfolios, read reviews, and discover the perfect designer for your project.
            </p>
          </div>
        </div>

        {/* Cities List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {location.cities.map((city) => (
            <Link
              key={city.slug}
              to={`/designers/${location.slug}/${city.slug}`}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                <h2 className="text-2xl font-serif mb-2">{city.name}</h2>
                <p className="text-gray-600 mb-4">{city.description}</p>
                <div className="flex items-center text-sage-600">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>View Designers</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};
