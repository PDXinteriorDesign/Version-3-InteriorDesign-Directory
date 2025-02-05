import React from 'react';
import { Navbar } from '../components/Navbar';
import { SEOHead } from '../components/SEOHead';
import { BackToResourcesButton } from '../components/BackToResourcesButton';
import { TemplatesHeader } from '../components/templates/TemplatesHeader';
import { TemplatesGrid } from '../components/templates/TemplatesGrid';

export const BusinessTemplatesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Business Templates for Interior Designers | The Design Refuge"
        description="Download professional business templates designed for interior designers. Access client intake forms, proposals, contracts, and more."
      />
      
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 py-12">
        <BackToResourcesButton />
        <TemplatesHeader />
        <TemplatesGrid />
      </main>
    </div>
  );
};