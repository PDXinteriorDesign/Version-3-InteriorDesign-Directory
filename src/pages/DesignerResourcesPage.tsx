import React from 'react';
import { Navbar } from '../components/Navbar';
import { SEOHead } from '../components/SEOHead';
import { ResourcesHero } from '../components/resources/ResourcesHero';
import { ResourcesGrid } from '../components/resources/ResourcesGrid';
import { CommunitySection } from '../components/resources/CommunitySection';
import { Footer } from '../components/Footer';

export const DesignerResourcesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Resources for Interior Designers | The Design Refuge"
        description="Access professional resources, articles, and insights for interior designers. List your business in our directory and grow your client base."
      />
      
      <Navbar />
      
      <ResourcesHero />
      
      <main className="max-w-7xl mx-auto px-4 py-12 space-y-16">
        <ResourcesGrid />
        <CommunitySection />
      </main>

      <Footer />
    </div>
  );
};