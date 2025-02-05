import React from 'react';
import { BookOpen } from 'lucide-react';

export const DesignGuidesHeader: React.FC = () => {
  return (
    <div className="text-center mb-12">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-50 rounded-full mb-6">
        <BookOpen className="w-8 h-8 text-sage-600" />
      </div>
      <h2 className="text-3xl md:text-4xl font-serif mb-4">Interior Design Style Guides</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Explore our comprehensive design guides to master different interior styles. 
        Whether you're expanding your expertise or seeking inspiration, these guides 
        provide practical insights and visual references to help you create stunning spaces.
      </p>
    </div>
  );
};