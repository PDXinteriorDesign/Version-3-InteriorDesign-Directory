import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <footer className="bg-sage-700 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-coral-500/10 via-azure-500/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 py-16 relative">
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl flex items-center gap-4 mb-6 transform hover:scale-105 transition-transform">
            <Logo className="w-12 h-12 text-white" />
            <div>
              <h3 className="text-2xl font-serif bg-gradient-to-r from-coral-400 to-azure-400 bg-clip-text text-transparent">
                The Design Refuge
              </h3>
              <p className="text-white/80">Where Vision Meets Design</p>
            </div>
          </div>
          <p className="text-lg text-white/80 max-w-xl text-center">
            The Design Refuge - Your preferred directory for everything design
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-serif mb-6 text-coral-400">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-white/80 hover:text-coral-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-coral-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-serif mb-6 text-azure-400">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/for-designers" className="text-white/80 hover:text-azure-400 transition-colors">
                  For Designers
                </Link>
              </li>
              <li>
                <Link to="/list-with-us" className="text-white/80 hover:text-azure-400 transition-colors">
                  List Your Business
                </Link>
              </li>
              <li>
                <Link to="/designers" className="text-white/80 hover:text-azure-400 transition-colors">
                  Browse Designers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-serif mb-6 text-sage-400">Stay Inspired</h3>
            <p className="text-white/80 mb-4">
              Join our community for the latest design trends and inspiration.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-coral-500 focus:border-transparent"
              />
              <button className="px-6 py-2 bg-coral-500 text-white rounded-r-lg hover:bg-coral-600 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};