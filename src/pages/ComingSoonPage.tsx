import React from 'react';
import { Navbar } from '../components/Navbar';
import { SEOHead } from '../components/SEOHead';
import { Users, Clock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ComingSoonPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Coming Soon - Designer Community | The Design Refuge"
        description="Join our upcoming community of interior designers. Connect, share insights, and grow together. Stay tuned for the launch!"
      />
      
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link 
            to="/for-designers"
            className="inline-flex items-center text-gray-600 hover:text-coral-500 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Resources
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-br from-sage-50 to-azure-50 p-12 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/30 backdrop-blur rounded-full mb-6">
              <Users className="w-10 h-10 text-sage-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif mb-4">Coming Soon</h1>
            <p className="text-xl text-gray-700">Our Designer Community is Under Construction</p>
          </div>

          <div className="p-8 md:p-12">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-lg text-gray-700 mb-6">
                  We're building an exclusive community platform for interior designers to connect, 
                  share insights, and grow together. Stay tuned for our launch!
                </p>
                <div className="inline-flex items-center text-sage-600">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>Launching Soon</span>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <h3 className="font-semibold mb-2">Network</h3>
                  <p className="text-gray-600">Connect with fellow designers and industry experts</p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <h3 className="font-semibold mb-2">Learn</h3>
                  <p className="text-gray-600">Access exclusive workshops and learning resources</p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <h3 className="font-semibold mb-2">Grow</h3>
                  <p className="text-gray-600">Expand your business through collaboration</p>
                </div>
              </div>

              <div className="text-center">
                <h2 className="text-2xl font-serif mb-4">Be the First to Know</h2>
                <p className="text-gray-600 mb-6">
                  Sign up to receive updates about our community launch and early access opportunities.
                </p>
                <div className="flex max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent"
                  />
                  <button className="px-6 py-2 bg-sage-600 text-white rounded-r-lg hover:bg-sage-700 transition-colors">
                    Notify Me
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};