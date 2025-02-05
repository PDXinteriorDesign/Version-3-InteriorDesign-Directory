import React from 'react';
import { FileText } from 'lucide-react';

export const TemplatesHeader: React.FC = () => {
  return (
    <div className="text-center mb-12">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-50 rounded-full mb-6">
        <FileText className="w-8 h-8 text-sage-600" />
      </div>
      <h2 className="text-3xl md:text-4xl font-serif mb-4">Business Templates</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Access our collection of professional templates designed specifically for interior designers. 
        These customizable documents will help streamline your business operations and maintain 
        consistency in your client communications.
      </p>
    </div>
  );
};