import React, { useState } from 'react';
import { Mail, Check, ArrowRight } from 'lucide-react';

export const ListWithUsSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    website: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="bg-white rounded-xl p-8 shadow-sm">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif mb-6">List Your Design Business</h2>
          <p className="text-xl text-gray-600 mb-8">
            Get Your Interior Design Business Listed In Front Of Thousands Of Potential Clients
          </p>
          <div className="bg-sage-50 p-6 rounded-lg mb-8">
            <p className="text-gray-700 leading-relaxed">
              The Design Refuge is one of the leading interior design directories, dedicated to connecting 
              talented designers with clients seeking to transform their spaces. Our platform generates 
              significant targeted traffic from location-based searches, meaning people actively looking 
              for interior design services in their area.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">Why List With Us?</h3>
            <ul className="space-y-4">
              {[
                'Targeted exposure to qualified clients',
                'Location-based visibility',
                'Professional profile showcase',
                'Direct client inquiries',
                'Enhanced online presence',
                'Affordable annual listing'
              ].map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-5 h-5 text-sage-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Listing Package Includes</h3>
            <ul className="space-y-4">
              {[
                'Custom profile page',
                'Portfolio showcase',
                'Client reviews section',
                'Direct contact information',
                'Service area visibility',
                'SEO optimization'
              ].map((feature, index) => (
                <li key={index} className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-sage-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-sage-50 p-8 rounded-xl mb-12 text-center">
          <h3 className="text-2xl font-semibold mb-4"> To get listed on our directory, please fill out the contact form below.

Someone from our team will reach out to you within a few minutes. If you decide you want to be listed, the cost is $99 per year. </h3>
          <p className="text-gray-600">
            Investment in your business visibility and growth
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <h3 className="text-xl font-semibold mb-6">Get Listed Today</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-sage-500"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-sage-500"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company Name
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-sage-500"
                value={formData.company}
                onChange={(e) => setFormData({...formData, company: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-sage-500"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Website
              </label>
              <input
                type="url"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-sage-500"
                value={formData.website}
                onChange={(e) => setFormData({...formData, website: e.target.value})}
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Information
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-sage-500"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="inline-flex items-center px-6 py-3 bg-sage-600 text-white rounded-lg hover:bg-sage-700 transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              Submit Listing Request
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};