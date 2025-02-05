import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { locationContent } from '../../utils/seo/locationContent';
import { generateMetaKeywords } from '../../utils/seo/keywords';
import { Navbar } from '../../components/Navbar';
import { SearchBar } from '../../components/SearchBar';
import { DesignerGrid } from '../../components/locations/DesignerGrid';
import { designers } from '../../data/designers';

export const LocalLocationPage: React.FC = () => {
  const { city } = useParams<{ city: string }>();
  const content = locationContent[city?.toLowerCase() || ''];
  
  if (!content) {
    return <div>Location not found</div>;
  }

  const localDesigners = designers.filter(d => 
    d.location.toLowerCase().includes(city?.toLowerCase() || '')
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{content.title}</title>
        <meta name="description" content={content.description} />
        <meta name="keywords" content={generateMetaKeywords(city || '', content.specialties)} />
      </Helmet>

      <Navbar />

      <main>
        <div className="bg-gradient-to-br from-white via-sage-50 to-azure-50 py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-serif mb-4">{content.title}</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl">
              {content.intro}
            </p>
            <div className="max-w-2xl">
              <SearchBar onSearch={() => {}} />
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
          <DesignerGrid designers={localDesigners} />

          <section className="bg-white rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-serif mb-6">Popular {city} Areas</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {content.neighborhoods.map((neighborhood) => (
                <div key={neighborhood} className="p-4 bg-gray-50 rounded-lg">
                  {neighborhood}
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-serif mb-6">Design Specialties in {city}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-4">Popular Services</h3>
                <ul className="space-y-2">
                  {content.specialties.map((specialty) => (
                    <li key={specialty} className="flex items-center">
                      <span className="w-2 h-2 bg-sage-500 rounded-full mr-2" />
                      {specialty}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Popular Styles</h3>
                <ul className="space-y-2">
                  {content.popularStyles.map((style) => (
                    <li key={style} className="flex items-center">
                      <span className="w-2 h-2 bg-sage-500 rounded-full mr-2" />
                      {style}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};