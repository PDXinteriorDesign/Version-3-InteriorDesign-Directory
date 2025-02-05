import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getLocationBySlug } from '../../data/locations';
import { LocationHeader } from '../../components/locations/LocationHeader';
import { CityGrid } from '../../components/locations/CityGrid';
import { DesignerGrid } from '../../components/locations/DesignerGrid';
import { LocationFAQ } from '../../components/locations/LocationFAQ';
import { generateLocationSchema } from '../../utils/schema';
import { Navbar } from '../../components/Navbar';
import { designers } from '../../data/designers';

export const StateLocationPage: React.FC = () => {
  const { state } = useParams<{ state: string }>();
  const location = getLocationBySlug(state || '');
  const stateDesigners = designers.filter(d => 
    d.location.toLowerCase().includes(location?.state.toLowerCase() || '')
  );

  if (!location) {
    return <div>Location not found</div>;
  }

  const schema = generateLocationSchema(location);

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Interior Designers in {location.state} | The Design Refuge</title>
        <meta name="description" content={location.metaDescription} />
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>

      <Navbar />

      <main>
        <LocationHeader location={location} />
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
          <CityGrid cities={location.cities} stateSlug={location.stateSlug} />
          <DesignerGrid designers={stateDesigners} />
          <LocationFAQ state={location.state} />
        </div>
      </main>
    </div>
  );
};