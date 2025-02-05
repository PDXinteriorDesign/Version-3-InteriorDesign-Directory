import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const BackToResourcesButton: React.FC = () => {
  return (
    <div className="mb-8">
      <Link 
        to="/for-designers"
        className="inline-flex items-center text-gray-600 hover:text-coral-500 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Resources
      </Link>
    </div>
  );
};