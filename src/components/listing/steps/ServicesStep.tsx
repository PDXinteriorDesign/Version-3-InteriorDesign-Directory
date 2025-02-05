import React from 'react';
import { Plus, Minus } from 'lucide-react';
import { ListingData } from '../../../types/listing';
import { commonServices } from '../../../data/commonServices';

interface ServicesStepProps {
  formData: ListingData;
  updateFormData: (section: keyof ListingData, data: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

export const ServicesStep: React.FC<ServicesStepProps> = ({
  formData,
  updateFormData,
  onNext,
  onPrev
}) => {
  const handleServiceChange = (index: number, value: string) => {
    const newOfferings = [...formData.services.offerings];
    newOfferings[index] = value;
    updateFormData('services', {
      ...formData.services,
      offerings: newOfferings
    });
  };

  const addService = (service?: string) => {
    updateFormData('services', {
      ...formData.services,
      offerings: [...formData.services.offerings, service || '']
    });
  };

  const removeService = (index: number) => {
    const newOfferings = formData.services.offerings.filter((_, i) => i !== index);
    updateFormData('services', {
      ...formData.services,
      offerings: newOfferings
    });
  };

  const handleAreaChange = (index: number, value: string) => {
    const newAreas = [...formData.services.areas];
    newAreas[index] = value;
    updateFormData('services', {
      ...formData.services,
      areas: newAreas
    });
  };

  const addArea = (area?: string) => {
    updateFormData('services', {
      ...formData.services,
      areas: [...formData.services.areas, area || '']
    });
  };

  const removeArea = (index: number) => {
    const newAreas = formData.services.areas.filter((_, i) => i !== index);
    updateFormData('services', {
      ...formData.services,
      areas: newAreas
    });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-serif mb-6">Services & Coverage</h2>

      <div className="space-y-8">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-4">
            Services Offered
          </label>
          <div className="mb-4">
            <p className="text-sm text-gray-600 mb-2">Quick Add Services:</p>
            <div className="flex flex-wrap gap-2">
              {commonServices.offerings.map((service) => (
                <button
                  key={service}
                  type="button"
                  onClick={() => addService(service)}
                  className="px-3 py-1 bg-sage-50 text-sage-700 rounded-full hover:bg-sage-100 text-sm"
                >
                  + {service}
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            {formData.services.offerings.map((service, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="text"
                  value={service}
                  onChange={(e) => handleServiceChange(index, e.target.value)}
                  placeholder="e.g., Full Room Design"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-sage-500"
                />
                <button
                  type="button"
                  onClick={() => removeService(index)}
                  className="p-2 text-gray-500 hover:text-red-500"
                >
                  <Minus className="w-5 h-5" />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => addService()}
              className="flex items-center text-sage-600 hover:text-sage-700"
            >
              <Plus className="w-5 h-5 mr-1" />
              Add Custom Service
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-4">
            Service Areas
          </label>
          <div className="mb-4">
            <p className="text-sm text-gray-600 mb-2">Quick Add Areas:</p>
            <div className="flex flex-wrap gap-2">
              {commonServices.areas.map((area) => (
                <button
                  key={area}
                  type="button"
                  onClick={() => addArea(area)}
                  className="px-3 py-1 bg-sage-50 text-sage-700 rounded-full hover:bg-sage-100 text-sm"
                >
                  + {area}
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            {formData.services.areas.map((area, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="text"
                  value={area}
                  onChange={(e) => handleAreaChange(index, e.target.value)}
                  placeholder="e.g., Portland Metro Area"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-sage-500"
                />
                <button
                  type="button"
                  onClick={() => removeArea(index)}
                  className="p-2 text-gray-500 hover:text-red-500"
                >
                  <Minus className="w-5 h-5" />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => addArea()}
              className="flex items-center text-sage-600 hover:text-sage-700"
            >
              <Plus className="w-5 h-5 mr-1" />
              Add Custom Area
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-4">
            Price Range
          </label>
          <div className="flex gap-4">
            {commonServices.priceRanges.map((range) => (
              <button
                key={range}
                type="button"
                onClick={() => updateFormData('services', {
                  ...formData.services,
                  priceRange: range
                })}
                className={`px-6 py-2 rounded-lg border ${
                  formData.services.priceRange === range
                    ? 'bg-sage-600 text-white border-sage-600'
                    : 'border-gray-300 hover:border-sage-500'
                }`}
              >
                {range}
              </button>
            ))}
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
          Next
        </button>
      </div>
    </div>
  );
};