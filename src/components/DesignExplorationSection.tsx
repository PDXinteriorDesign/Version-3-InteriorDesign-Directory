import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Palette, Image, PiggyBank } from 'lucide-react';

export const DesignExplorationSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Find Your Dream Designer Card */}
          <Link 
            to="/designers"
            className="group bg-gradient-to-br from-sage-50 to-sage-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <Search className="w-10 h-10 text-sage-600 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-serif text-gray-900 mb-2">Find Your Dream Designer</h3>
            <p className="text-gray-600 mb-4">Discover the perfect designer for your style and budget through our personalized matching system.</p>
            <span className="text-sage-600 font-medium group-hover:text-sage-700 transition-colors">
              Browse Designers →
            </span>
          </Link>

          {/* Browse by Style Card */}
          <Link 
            to="/design-styles"
            className="group bg-gradient-to-br from-coral-50 to-coral-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <Palette className="w-10 h-10 text-coral-500 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-serif text-gray-900 mb-2">Browse by Style</h3>
            <p className="text-gray-600 mb-4">Explore different design styles and find inspiration for your perfect space.</p>
            <span className="text-coral-500 font-medium group-hover:text-coral-600 transition-colors">
              Explore Styles →
            </span>
          </Link>

          {/* Project Gallery Card */}
          <Link 
            to="/project-gallery"
            className="group bg-gradient-to-br from-azure-50 to-azure-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <Image className="w-10 h-10 text-azure-500 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-serif text-gray-900 mb-2">Project Gallery</h3>
            <p className="text-gray-600 mb-4">Get inspired by our curated collection of stunning interior design transformations.</p>
            <span className="text-azure-500 font-medium group-hover:text-azure-600 transition-colors">
              View Gallery →
            </span>
          </Link>

          {/* Budget-Friendly Design Card */}
          <Link 
            to="/budget-design"
            className="group bg-gradient-to-br from-terracotta-50 to-terracotta-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <PiggyBank className="w-10 h-10 text-terracotta-500 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-serif text-gray-900 mb-2">Design on a Budget</h3>
            <p className="text-gray-600 mb-4">Discover affordable design solutions and tips to transform your space without breaking the bank.</p>
            <span className="text-terracotta-500 font-medium group-hover:text-terracotta-600 transition-colors">
              Learn More →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};