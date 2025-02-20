import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { WelcomeStep } from './steps/WelcomeStep';
import { BusinessInfoStep } from './steps/BusinessInfoStep';
import { PortfolioStep } from './steps/PortfolioStep';
import { ServicesStep } from './steps/ServicesStep';
import { ReviewStep } from './steps/ReviewStep';
import { ProgressBar } from './ProgressBar';
import { ListingData } from '../../types/listing';
import { createListing } from '../../lib/firebase/listings';

export const ListingFlow: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<ListingData>({
    businessInfo: {
      name: '',
      email: '',
      phone: '',
      website: '',
      company: '',
    },
    businessLocation: { // Add this
      city: '',
      state: '',
    },
    portfolio: {
      description: '',
      images: [],
      style: [],
    },
    services: {
      offerings: [],
      areas: [],
      priceRange: '',
    }
  });


  const updateFormData = (section: keyof ListingData, data: any) => {
    setFormData(prev => ({
      ...prev,
      [section]: { ...prev[section], ...data }
    }));
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      setError(null);

      const listingId = await createListing(formData);


      // Redirect to success page
      navigate('/list-with-us/success', {
        state: {
          listingId,
          businessName: formData.businessInfo.company
        }
      });
    } catch (err) {
      setError('Failed to submit listing. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const steps = [
    { title: 'Welcome', component: WelcomeStep },
    { title: 'Business Info', component: BusinessInfoStep },
    { title: 'Portfolio', component: PortfolioStep },
    { title: 'Services', component: ServicesStep },
    { title: 'Review', component: ReviewStep }
  ];

  const CurrentStep = steps[step - 1].component;

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="p-8">
        <ProgressBar currentStep={step} totalSteps={steps.length} steps={steps} />

        {error && (
          <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        <div className="mt-8">
          <CurrentStep
            formData={formData}
            updateFormData={updateFormData}
            onNext={step === steps.length ? handleSubmit : nextStep}
            onPrev={prevStep}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
};