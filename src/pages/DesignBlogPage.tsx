import React from 'react';
import { Navbar } from '../components/Navbar';
import { SEOHead } from '../components/SEOHead';
import { Footer } from '../components/Footer';
import { Pen, Mail, Clock, BookOpen } from 'lucide-react';

export const DesignBlogPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Design Blog - Coming Soon | The Design Refuge"
        description="Stay tuned for expert insights, design trends, and inspiration from our community of interior designers. Our blog is currently under construction and will launch soon!"
      />
      
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="bg-gradient-to-br from-sage-50 to-azure-50 p-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/30 backdrop-blur rounded-full mb-6">
              <Pen className="w-8 h-8 text-sage-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif mb-4">Our Blog is Coming Soon</h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Our designers are crafting quality content to help you create beautiful, functional spaces
            </p>
          </div>

          <div className="p-8 md:p-12">
            <div className="max-w-2xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <BookOpen className="w-12 h-12 mx-auto mb-4 text-sage-600" />
                  <h3 className="font-semibold mb-2">Expert Insights</h3>
                  <p className="text-gray-600">
                    In-depth articles from experienced interior designers
                  </p>
                </div>
                <div className="text-center">
                  <Clock className="w-12 h-12 mx-auto mb-4 text-sage-600" />
                  <h3 className="font-semibold mb-2">Latest Trends</h3>
                  <p className="text-gray-600">
                    Stay updated with current design trends and innovations
                  </p>
                </div>
                <div className="text-center">
                  <Mail className="w-12 h-12 mx-auto mb-4 text-sage-600" />
                  <h3 className="font-semibold mb-2">Get Notified</h3>
                  <p className="text-gray-600">
                    Be the first to read our latest articles
                  </p>
                </div>
              </div>

              <div className="bg-sage-50 p-8 rounded-xl text-center">
                <h2 className="text-2xl font-serif mb-4">Stay in the Loop</h2>
                <p className="text-gray-600 mb-6">
                  Subscribe to our newsletter and be the first to know when our blog launches. 
                  Get exclusive design tips and inspiration delivered to your inbox.
                </p>
                <form className="flex max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent"
                  />
                  <button className="px-6 py-2 bg-sage-600 text-white rounded-r-lg hover:bg-sage-700 transition-colors">
                    Notify Me
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};