import React from 'react';
import { SearchBar } from './SearchBar';
import { Logo } from './Logo';
import { Sparkles, Star, Users, Home } from 'lucide-react';



export const HeroSection: React.FC = () => {

  const handleSearch = (filters: SearchFilters) => {
    console.log('Search filters:', filters);
    // Handle the search results
  };



  return (
    <div className="relative bg-gradient-to-br from-sage-100 via-sage-50 to-azure-50 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-coral-200/20 via-azure-200/20 to-transparent" />
        <div className="absolute inset-0" style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          opacity: 0.1
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-12 pb-16 md:pt-16 md:pb-24">
        <div className="text-center mb-10">
          <div className="flex justify-center mb-6">
            <div className="relative animate-float">
              <Logo className="w-20 h-20 md:w-24 md:h-24" />
              <Sparkles className="absolute -top-4 -right-4 w-8 h-8 text-coral-400 animate-pulse" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4 tracking-tight">
            <span className="block bg-gradient-to-r from-coral-500 via-azure-500 to-sage-500 bg-clip-text text-transparent animate-gradient leading-tight">
              The Design Refuge
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed px-4">
            Explore, Inspire, Create – Portland's Design Destination
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-12">
          <SearchBar onSearch={handleSearch}
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          <div className="p-4 md:p-6 rounded-xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            <Users className="w-8 h-8 mx-auto mb-4 text-coral-500" />
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-coral-500 to-coral-600 bg-clip-text text-transparent">500+</div>
            <div className="text-gray-700 mt-2">Designers</div>
          </div>
          <div className="p-4 md:p-6 rounded-xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            <Home className="w-8 h-8 mx-auto mb-4 text-azure-500" />
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-azure-500 to-azure-600 bg-clip-text text-transparent">50+</div>
            <div className="text-gray-700 mt-2">Cities</div>
          </div>
          <div className="p-4 md:p-6 rounded-xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            <Star className="w-8 h-8 mx-auto mb-4 text-sage-500" />
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-sage-500 to-sage-600 bg-clip-text text-transparent">1000+</div>
            <div className="text-gray-700 mt-2">Projects</div>
          </div>
          <div className="p-4 md:p-6 rounded-xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            <Star className="w-8 h-8 mx-auto mb-4 text-coral-500 fill-current" />
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-coral-500 to-coral-600 bg-clip-text text-transparent">4.8</div>
            <div className="text-gray-700 mt-2">Avg. Rating</div>
          </div>
        </div>
      </div>
    </div>
  );
};