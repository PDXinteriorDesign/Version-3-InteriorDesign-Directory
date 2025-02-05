import React from 'react';
import { Navbar } from '../components/Navbar';
import { SEOHead } from '../components/SEOHead';
import { Users, Star, Search, Heart } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="About The Design Refuge | Your Interior Design Directory"
        description="Learn about The Design Refuge's mission to connect homeowners with the best interior designers and how we're transforming the way people find design professionals."
      />
      
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-sage-50 to-terracotta-50 p-12 text-center">
            <h1 className="text-5xl font-serif mb-4">About Us</h1>
            <h2 className="text-2xl font-serif text-gray-700">Welcome to The Design Refuge</h2>
          </div>

          <div className="p-8 md:p-12 space-y-12">
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed">
                At The Design Refuge, we are dedicated to connecting homeowners, businesses, and individuals with the best interior design firms and professionals in the industry. Our platform is designed to simplify the process of finding the perfect designer for your unique needs and projects.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-serif mb-6">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                Our mission is to provide a comprehensive and user-friendly directory that showcases top-tier interior design firms from your local area and around the country! We aim to bridge the gap between clients and designers, ensuring that every project is matched with the right expertise and style.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-serif mb-6">How We Started</h3>
              <p className="text-gray-700 leading-relaxed">
                The Design Refuge was born out of a passion for beautiful and functional spaces. Recognizing the challenges of finding the right interior designer, we set out to create a platform that would make this process easier, more efficient, and enjoyable. Our team is composed of industry experts and tech enthusiasts who are committed to delivering a superior user experience.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-serif mb-6">Our Approach</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">Quality Assurance</h4>
                  <p className="text-gray-600">We thoroughly vet each interior design firm to ensure they meet our high standards of quality, professionalism, and customer satisfaction.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">User-Friendly Interface</h4>
                  <p className="text-gray-600">Our platform is designed to be intuitive and easy to navigate, allowing you to quickly find and compare different designers.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-serif mb-6">Why Choose The Design Refuge?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-6">
                  <Search className="w-8 h-8 mx-auto mb-4 text-sage-600" />
                  <h4 className="font-semibold mb-2">Easy Search</h4>
                  <p className="text-gray-600 text-sm">Find the perfect designer with our advanced search tools</p>
                </div>
                <div className="text-center p-6">
                  <Star className="w-8 h-8 mx-auto mb-4 text-sage-600" />
                  <h4 className="font-semibold mb-2">Quality Guaranteed</h4>
                  <p className="text-gray-600 text-sm">Every listed firm meets our high standards</p>
                </div>
                <div className="text-center p-6">
                  <Users className="w-8 h-8 mx-auto mb-4 text-sage-600" />
                  <h4 className="font-semibold mb-2">Expert Community</h4>
                  <p className="text-gray-600 text-sm">Connect with verified design professionals</p>
                </div>
                <div className="text-center p-6">
                  <Heart className="w-8 h-8 mx-auto mb-4 text-sage-600" />
                  <h4 className="font-semibold mb-2">Personalized Match</h4>
                  <p className="text-gray-600 text-sm">Find designers that match your style</p>
                </div>
              </div>
            </div>

            <div className="text-center bg-sage-50 p-8 rounded-xl">
              <h3 className="text-2xl font-serif mb-4">Join Our Community</h3>
              <p className="text-gray-700 max-w-2xl mx-auto">
                At The Design Refuge, we are more than just a directory; we are a community of design enthusiasts and professionals. Join us to stay updated on the latest design trends, tips, and industry news.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};