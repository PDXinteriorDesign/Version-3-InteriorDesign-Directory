import React from 'react';
import { Navbar } from '../components/Navbar';
import { SEOHead } from '../components/SEOHead';
import { Mail, Clock, MapPin } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Contact The Design Refuge | Get in Touch"
        description="Contact The Design Refuge for questions about our interior design directory or to learn more about listing your design business."
      />
      
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-sage-50 to-terracotta-50 p-12 text-center">
            <h1 className="text-5xl font-serif mb-4">Contact Us</h1>
            <p className="text-xl text-gray-700">We'd love to hear from you</p>
          </div>

          <div className="p-8 md:p-12">
            <div className="max-w-2xl mx-auto">
              <div className="grid gap-8">
                <div className="flex items-center p-6 bg-gray-50 rounded-xl">
                  <Mail className="w-8 h-8 text-sage-600 mr-6" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                    <a 
                      href="mailto:pdxinteriordesign@gmail.com"
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      pdxinteriordesign@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center p-6 bg-gray-50 rounded-xl">
                  <Clock className="w-8 h-8 text-sage-600 mr-6" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Response Time</h3>
                    <p className="text-gray-600">We typically respond within 24-48 hours</p>
                  </div>
                </div>

                <div className="flex items-center p-6 bg-gray-50 rounded-xl">
                  <MapPin className="w-8 h-8 text-sage-600 mr-6" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Location</h3>
                    <p className="text-gray-600">Portland, Oregon</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center bg-sage-50 p-8 rounded-xl">
                <h2 className="text-2xl font-serif mb-4">Are you an Interior Designer?</h2>
                <p className="text-gray-700 mb-6">
                  Interested in listing your design business in our directory? 
                  Get in touch with us to learn more about our platform and how we can help grow your business.
                </p>
                <a
                  href="mailto:pdxinteriordesign@gmail.com?subject=Designer Listing Inquiry"
                  className="inline-flex items-center px-6 py-3 bg-sage-600 text-white rounded-lg hover:bg-sage-700 transition-colors"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};