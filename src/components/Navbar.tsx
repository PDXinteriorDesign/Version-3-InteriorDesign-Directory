import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Users, Phone, FileText, Palette, Image, BookOpen, ChevronDown, Menu, X } from 'lucide-react';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Close resources dropdown when mobile menu is toggled
    if (isResourcesOpen) setIsResourcesOpen(false);
  };

  return (
    <nav className="bg-sage-700 shadow-lg relative z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center mr-12 group">
              <Logo className="w-12 h-12 text-white transition-all duration-300" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 flex-1">
            <Link to="/" className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors text-sm">
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            
            <Link to="/designers" className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors text-sm">
              <Users className="w-4 h-4" />
              <span>Find A Designer</span>
            </Link>

            <Link to="/design-styles" className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors text-sm">
              <Palette className="w-4 h-4" />
              <span>Design Styles</span>
            </Link>

            <Link to="/project-gallery" className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors text-sm">
              <Image className="w-4 h-4" />
              <span>Project Gallery</span>
            </Link>

            <div className="relative group">
              <button 
                className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors text-sm"
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
              >
                <BookOpen className="w-4 h-4" />
                <span>Design Resources</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link 
                  to="/resources/tips"
                  className="block px-4 py-2 text-gray-700 hover:bg-sage-50 hover:text-sage-700 text-sm"
                >
                  Design Tips & Advice
                </Link>
                <Link 
                  to="/budget-design"
                  className="block px-4 py-2 text-gray-700 hover:bg-sage-50 hover:text-sage-700 text-sm"
                >
                  Budgeting for Design
                </Link>
                <Link 
                  to="/resources/diy"
                  className="block px-4 py-2 text-gray-700 hover:bg-sage-50 hover:text-sage-700 text-sm"
                >
                  DIY Projects
                </Link>
                <Link 
                  to="/resources/blog"
                  className="block px-4 py-2 text-gray-700 hover:bg-sage-50 hover:text-sage-700 text-sm"
                >
                  Design Blog
                </Link>
              </div>
            </div>

            <Link to="/contact" className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors text-sm">
              <Phone className="w-4 h-4" />
              <span>Contact</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <Link
              to="/list-with-us"
              className="px-6 py-3 bg-[#FDF5E6] text-sage-700 font-medium rounded-lg hover:bg-[#FAE5C7] hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 text-sm"
            >
              List Your Business
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white p-2 hover:bg-sage-600 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-4 pt-2 pb-4 bg-sage-700 border-t border-sage-600">
          <Link 
            to="/"
            className="block py-3 text-white hover:bg-sage-600 rounded-lg px-3 transition-colors"
            onClick={toggleMobileMenu}
          >
            <div className="flex items-center space-x-2">
              <Home className="w-4 h-4" />
              <span>Home</span>
            </div>
          </Link>

          <Link 
            to="/designers"
            className="block py-3 text-white hover:bg-sage-600 rounded-lg px-3 transition-colors"
            onClick={toggleMobileMenu}
          >
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>Find A Designer</span>
            </div>
          </Link>

          <Link 
            to="/design-styles"
            className="block py-3 text-white hover:bg-sage-600 rounded-lg px-3 transition-colors"
            onClick={toggleMobileMenu}
          >
            <div className="flex items-center space-x-2">
              <Palette className="w-4 h-4" />
              <span>Design Styles</span>
            </div>
          </Link>

          <Link 
            to="/project-gallery"
            className="block py-3 text-white hover:bg-sage-600 rounded-lg px-3 transition-colors"
            onClick={toggleMobileMenu}
          >
            <div className="flex items-center space-x-2">
              <Image className="w-4 h-4" />
              <span>Project Gallery</span>
            </div>
          </Link>

          <button
            onClick={() => setIsResourcesOpen(!isResourcesOpen)}
            className="w-full text-left py-3 text-white hover:bg-sage-600 rounded-lg px-3 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <BookOpen className="w-4 h-4" />
                <span>Design Resources</span>
              </div>
              <ChevronDown className={`w-4 h-4 transform transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`} />
            </div>
          </button>

          {isResourcesOpen && (
            <div className="pl-8 mt-2 space-y-2">
              <Link 
                to="/resources/tips"
                className="block py-2 text-white/90 hover:text-white transition-colors"
                onClick={toggleMobileMenu}
              >
                Design Tips & Advice
              </Link>
              <Link 
                to="/budget-design"
                className="block py-2 text-white/90 hover:text-white transition-colors"
                onClick={toggleMobileMenu}
              >
                Budgeting for Design
              </Link>
              <Link 
                to="/resources/diy"
                className="block py-2 text-white/90 hover:text-white transition-colors"
                onClick={toggleMobileMenu}
              >
                DIY Projects
              </Link>
              <Link 
                to="/resources/blog"
                className="block py-2 text-white/90 hover:text-white transition-colors"
                onClick={toggleMobileMenu}
              >
                Design Blog
              </Link>
            </div>
          )}

          <Link 
            to="/contact"
            className="block py-3 text-white hover:bg-sage-600 rounded-lg px-3 transition-colors"
            onClick={toggleMobileMenu}
          >
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>Contact</span>
            </div>
          </Link>

          <Link
            to="/list-with-us"
            className="block mt-4 px-6 py-3 bg-[#FDF5E6] text-sage-700 font-medium rounded-lg hover:bg-[#FAE5C7] text-center"
            onClick={toggleMobileMenu}
          >
            List Your Business
          </Link>
        </div>
      </div>
    </nav>
  );
};