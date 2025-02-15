import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getLocationBySlug, getCityBySlug } from '../../data/locations';
import { Navbar } from '../../components/Navbar';
import { DesignerCard } from '../../components/DesignerCard';
import { useDesignerSearch } from '../../hooks/useDesignerSearch';
import { DesignerFilters } from '../../components/DesignerFilters';

export const DesignersCityPage: React.FC = () => {
  const { state, city } = useParams<{ state: string; city: string }>();
  const location = getLocationBySlug(state || '');
  const cityData = getCityBySlug(state || '', city || '');

  const { designers, loading, error } = useDesignerSearch({
    state: location?.name,
    city: cityData?.name
  });

  if (!location || !cityData) {
    return <div>city Location not found</div>;
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
              <li>
                <Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link>
              </li>
              <li className="text-gray-500">/</li>
              <li>
                <Link to="/designers" className="text-gray-500 hover:text-gray-700">Designers</Link>
              </li>
              <li className="text-gray-500">/</li>
              <li>
                <Link to={`/designers/${location.slug}`} className="text-gray-500 hover:text-gray-700">{location.name}</Link>
              </li>
              <li className="text-gray-500">/</li>
              <li className="text-gray-900 font-medium">{cityData.name}</li>
            </ol>
          </nav>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-12">
          <div className="p-8">
            <h1 className="text-4xl font-serif mb-4">Interior Designers in {cityData.name}, {location.name}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mb-8">
              {cityData.description}
            </p>
            <DesignerFilters />
          </div>
        </div>

        {loading ? (
          <div className="text-center py-12">Loading designers...</div>
        ) : error ? (
          <div className="text-center py-12 text-red-600">{error}</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designers.map((designer) => (
              <DesignerCard
                key={designer.id}
                designer={designer}
                href={`/designers/${location.slug}/${cityData.slug}/${designer.slug}`}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};