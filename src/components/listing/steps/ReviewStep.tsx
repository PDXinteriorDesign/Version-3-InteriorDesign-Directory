import React from 'react';
import { ListingData } from '../../../types/listing';
import { Check } from 'lucide-react';

interface ReviewStepProps {
  formData: ListingData;
  onNext: () => void;
  onPrev: () => void;
}

export const ReviewStep: React.FC<ReviewStepProps> = ({
  formData,
  onNext,
  onPrev
}) => {
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-serif mb-6">Review Your Information</h2>

      <div className="space-y-8">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Business Information</h3>
          <dl className="grid grid-cols-2 gap-4">
            <div>
              <dt className="text-sm text-gray-600">Name</dt>
              <dd className="mt-1">{formData.businessInfo.name}</dd>
            </div>
            <div>
              <dt className="text-sm text-gray-600">Company</dt>
              <dd className="mt-1">{formData.businessInfo.company}</dd>
            </div>
            <div>
              <dt className="text-sm text-gray-600">Email</dt>
              <dd className="mt-1">{formData.businessInfo.email}</dd>
            </div>
            <div>
              <dt className="text-sm text-gray-600">Phone</dt>
              <dd className="mt-1">{formData.businessInfo.phone}</dd>
            </div>
            <div className="col-span-2">
              <dt className="text-sm text-gray-600">Website</dt>
              <dd className="mt-1">{formData.businessInfo.website}</dd>
            </div>
            <div className="col-span-2">
              <dt className="text-sm text-gray-600">Location</dt>
              <dd className="mt-1">{formData.businessInfo.location}</dd>
            </div>
          </dl>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Portfolio & Style</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-sm text-gray-600 mb-2">Description</h4>
              <p>{formData.portfolio.description}</p>
            </div>
            <div>
              <h4 className="text-sm text-gray-600 mb-2">Design Styles</h4>
              <div className="flex flex-wrap gap-2">
                {formData.portfolio.style.map((style, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white rounded-full text-sm border border-gray-200"
                  >
                    {style}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Services & Coverage</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-sm text-gray-600 mb-2">Services Offered</h4>
              <ul className="space-y-1">
                {formData.services.offerings.map((service, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="w-4 h-4 text-sage-600 mr-2" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm text-gray-600 mb-2">Service Areas</h4>
              <ul className="space-y-1">
                {formData.services.areas.map((area, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="w-4 h-4 text-sage-600 mr-2" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm text-gray-600 mb-2">Price Range</h4>
              <span className="text-lg font-medium">{formData.services.priceRange}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-end space-x-4">
        <button
          type="button"
          onClick={onPrev}
          className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Back
        </button>
        <button
          type="button"
          onClick={onNext}
          className="px-6 py-2 bg-sage-600 text-white rounded-lg hover:bg-sage-700 transition-colors"
        >
          Submit Listing
        </button>
      </div>
    </div>
  );
};