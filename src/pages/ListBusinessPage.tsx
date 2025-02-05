import React from 'react';
import { Navbar } from '../components/Navbar';
import { SEOHead } from '../components/SEOHead';
import { ListingFlow } from '../components/listing/ListingFlow';

export const ListBusinessPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="List Your Interior Design Business | The Design Refuge"
        description="Join our curated directory of interior designers. Showcase your work to potential clients and grow your business."
      />
      
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 py-12">
        <ListingFlow />
      </main>
    </div>
  );
};