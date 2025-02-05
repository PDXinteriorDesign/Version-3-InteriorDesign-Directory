import React from 'react';
import { Navbar } from '../components/Navbar';
import { SEOHead } from '../components/SEOHead';
import { Footer } from '../components/Footer';

export const FindDesignerPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-sage-50">
      <SEOHead
        title="Find Your Dream Interior Designer | The Design Refuge"
        description="Take our style quiz and find the perfect interior designer for your project. Connect with top-rated designers who match your style and budget."
      />
      
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-serif mb-6">Find Your Dream Designer</h1>
        <p className="text-xl text-gray-600 mb-12">Coming soon! Take our style quiz and get matched with the perfect designer for your project.</p>
      </main>

      <Footer />
    </div>
  );
};