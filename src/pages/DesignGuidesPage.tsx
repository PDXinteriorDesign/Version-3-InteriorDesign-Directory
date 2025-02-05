import React from 'react';
import { Navbar } from '../components/Navbar';
import { SEOHead } from '../components/SEOHead';
import { BackToResourcesButton } from '../components/BackToResourcesButton';
import { DesignGuidesHeader } from '../components/guides/DesignGuidesHeader';
import { DesignGuidesGrid } from '../components/guides/DesignGuidesGrid';

export const DesignGuidesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Interior Design Style Guides | The Design Refuge"
        description="Explore comprehensive guides on different interior design styles. Learn techniques, color schemes, and key elements to master various design aesthetics."
      />
      
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 py-12">
        <BackToResourcesButton />
        <DesignGuidesHeader />
        <DesignGuidesGrid />
      </main>
    </div>
  );
};