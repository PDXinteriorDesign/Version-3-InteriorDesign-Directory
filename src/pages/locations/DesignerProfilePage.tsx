import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getLocationBySlug, getCityBySlug } from '../../data/locations';
import { Navbar } from '../../components/Navbar';
import { Phone, Mail, Globe, MapPin, Star, Image } from 'lucide-react';

export const DesignerProfilePage: React.FC = () => {
  const { state, city, designerSlug } = useParams<{ state: string; city: string; designerSlug: string }>();
  const location = getLocationBySlug(state || '');
  const cityData = getCityBySlug(state || '', city || '');
  const { designer, loading, error } = useDesigner(designerSlug || '');

  if (!location || !cityData || !designer) {
    return <div>Designer not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{designer.name} - Interior Designer in {cityData.name}, {location.name} | The Design Refuge</title>
        <meta name="description" content={`${designer.name} is a professional interior designer in ${cityData.name}, ${location.name}. View portfolio, services, and contact information.`} />
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
              <li>
                <Link to={`/designers/${location.slug}/${cityData.slug}`} className="text-gray-500 hover:text-gray-700">{cityData.name}</Link>
              </li>
              <li className="text-gray-500">/</li>
              <li className="text-gray-900 font-medium">{designer.name}</li>
            </ol>
          </nav>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
              <div className="aspect-video relative">
                <img
                  src={designer.coverImage}
                  alt={`${designer.name}'s featured project`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h1 className="text-3xl font-serif mb-2">{designer.name}</h1>
                <p className="text-xl text-gray-600 mb-6">{designer.company}</p>
                <div className="prose max-w-none">
                  {designer.bio}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-serif mb-6">Portfolio</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {designer.portfolio.map((image, index) => (
                    <div key={index} className="aspect-square rounded-lg overflow-hidden">
                      <img
                        src={image}
                        alt={`${designer.name}'s portfolio piece ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden sticky top-4">
              <div className="p-6">
                <h2 className="text-xl font-serif mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <a
                    href={`tel:${designer.phone}`}
                    className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <Phone className="w-5 h-5 text-sage-600 mr-3" />
                    <span>{designer.phone}</span>
                  </a>
                  <a
                    href={`mailto:${designer.email}`}
                    className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <Mail className="w-5 h-5 text-sage-600 mr-3" />
                    <span>{designer.email}</span>
                  </a>
                  <a
                    href={designer.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <Globe className="w-5 h-5 text-sage-600 mr-3" />
                    <span>Visit Website</span>
                  </a>
                </div>

                <div className="mt-6">
                  <h3 className="font-medium mb-3">Specialties</h3>
                  <div className="flex flex-wrap gap-2">
                    {designer.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-sage-50 text-sage-700 rounded-full text-sm"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};