import React from 'react';
import { Navbar } from '../components/Navbar';
import { SEOHead } from '../components/SEOHead';
import { ProfitCalculator } from '../components/resources/ProfitCalculator';
import { BackToResourcesButton } from '../components/BackToResourcesButton';

export const ProfitCalculatorPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Interior Design Project Profit Calculator | The Design Refuge"
        description="Calculate project costs, revenue, and profit margins with our free interior design business calculator. Optimize your pricing strategy and improve profitability."
      />
      
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 py-12">
        <BackToResourcesButton />
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif mb-4">Project Profit Calculator</h1>
            <p className="text-xl text-gray-600">
              Make informed decisions about your project pricing and profitability
            </p>
          </div>
          
          <ProfitCalculator />
          
          <div className="mt-12 bg-white rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-serif mb-6">How to Use This Calculator</h2>
            <div className="space-y-4 text-gray-800">
              <p>
                Our profit calculator helps interior designers estimate project profitability by considering:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Project fees and revenue</li>
                <li>Material and supply costs</li>
                <li>Labor costs based on hours and rates</li>
                <li>Overhead expenses as a percentage</li>
              </ul>
              <p>
                Enter your project details in the calculator above to get instant insights into your potential profit and margins.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};