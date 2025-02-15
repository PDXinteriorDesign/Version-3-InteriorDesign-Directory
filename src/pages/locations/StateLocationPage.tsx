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

  // Ensure location exists
  const location = state ? getLocationBySlug(state) : undefined;

  // Ensure designers have businessLocation before filtering
  const stateDesigners = location
    ? designers.filter(d =>
      d.businessLocation &&
      d.businessLocation.state.toLowerCase() === location.state.toLowerCase()
    )
    : [];

  if (!location) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-2xl font-bold">State Location not found</h1>
        </div>
      </div>
    );
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
