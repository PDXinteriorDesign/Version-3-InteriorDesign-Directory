import React from 'react';
import { BookOpen } from 'lucide-react';

export const ResourcesHero: React.FC = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-sage-50 to-terracotta-50 opacity-50" />
        <div className="absolute inset-0" style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          opacity: 0.1
        }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 text-center">
        <BookOpen className="w-16 h-16 mx-auto mb-6 text-sage-600" />
        <h1 className="text-4xl md:text-5xl font-serif mb-4">Resources for Interior Designers</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover professional resources, insights, and connect with fellow designers to grow your business and craft.
        </p>
      </div>
    </div>
  );
};