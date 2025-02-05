import React from 'react';
import { Navbar } from '../../components/Navbar';
import { SEOHead } from '../../components/SEOHead';
import { BackToResourcesButton } from '../../components/BackToResourcesButton';
import { ClientIntakeForm } from '../../components/templates/ClientIntakeForm';

export const ClientIntakeFormPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Client Intake Form | The Design Refuge"
        description="Use our professional online client intake form designed specifically for interior designers to gather essential project information."
      />
      
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 py-12">
        <BackToResourcesButton />
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-serif mb-4">Client Intake Form</h1>
            <p className="text-xl text-gray-600 mb-8">
              A comprehensive online form to gather essential project information and client preferences 
              during the initial consultation.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
            <h2 className="text-xl font-semibold mb-4">About This Form</h2>
            <div className="prose max-w-none">
              <p>
                This client intake form is designed to help interior designers gather comprehensive 
                information about their clients' needs, preferences, and project requirements.
            
              </p>
            </div>
          </div>

          <ClientIntakeForm />
        </div>
      </main>
    </div>
  );
};