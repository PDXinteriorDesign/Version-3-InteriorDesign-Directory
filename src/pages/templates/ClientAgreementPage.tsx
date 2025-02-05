import React from 'react';
import { Navbar } from '../../components/Navbar';
import { SEOHead } from '../../components/SEOHead';
import { BackToResourcesButton } from '../../components/BackToResourcesButton';
import { FileText, Download } from 'lucide-react';
import { generateClientAgreement } from '../../utils/pdfGenerator';

export const ClientAgreementPage: React.FC = () => {
  const handleDownload = () => {
    try {
      const doc = generateClientAgreement();
      doc.save('interior-design-client-agreement.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
      // You could add user feedback here if needed
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Client Agreement Template | The Design Refuge"
        description="Download our professional interior design client agreement template to establish clear terms and protect your business interests."
      />
      
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 py-12">
        <BackToResourcesButton />
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-serif mb-4">Client Agreement Template</h1>
            <p className="text-xl text-gray-600 mb-8">
              A comprehensive contract template to establish clear terms and protect both parties
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold mb-2">Professional Agreement Template</h2>
                <p className="text-gray-600">
                  Download our carefully crafted client agreement template in PDF format.
                </p>
              </div>
              <FileText className="w-8 h-8 text-sage-600" />
            </div>

            <div className="bg-sage-50 p-6 rounded-lg mb-6">
              <h3 className="font-semibold mb-2">Template Includes:</h3>
              <ul className="space-y-2 text-gray-800">
                <li>• Detailed scope of work section</li>
                <li>• Clear project timeline structure</li>
                <li>• Comprehensive payment terms</li>
                <li>• Client responsibilities</li>
                <li>• Revision and cancellation policies</li>
              </ul>
            </div>

            <button
              onClick={handleDownload}
              className="flex items-center justify-center w-full px-6 py-3 bg-sage-600 text-white rounded-lg hover:bg-sage-700 transition-colors"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Template
            </button>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Usage Instructions</h2>
            <div className="prose max-w-none text-gray-800">
              <ol className="space-y-4">
                <li>
                  <strong>Customize the Template:</strong>
                  <p>Replace the placeholder text with your business information and specific terms.</p>
                </li>
                <li>
                  <strong>Review with Legal Counsel:</strong>
                  <p>Have a legal professional review and adjust the agreement to ensure it meets your local requirements.</p>
                </li>
                <li>
                  <strong>Use Consistently:</strong>
                  <p>Implement the agreement for all new clients to maintain professional standards.</p>
                </li>
                <li>
                  <strong>Keep Records:</strong>
                  <p>Maintain signed copies of all agreements for your records.</p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};