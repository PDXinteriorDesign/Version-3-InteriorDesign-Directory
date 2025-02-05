import React from 'react';
import { Clock, Award, Globe } from 'lucide-react';
import { BusinessHours, Award as DesignerAward } from '../types';

interface BusinessInfoProps {
  hours: BusinessHours;
  awards: DesignerAward[];
  certifications: string[];
  languages: string[];
  projectMinimum?: number;
  consultationFee?: number;
}

export const BusinessInfo: React.FC<BusinessInfoProps> = ({
  hours,
  awards,
  certifications,
  languages,
  projectMinimum,
  consultationFee,
}) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
        <div className="space-y-2">
          {Object.entries(hours).map(([day, time]) => (
            <div key={day} className="flex justify-between text-sm">
              <span className="capitalize text-gray-600">{day}</span>
              <span className="text-gray-900">{time || 'Closed'}</span>
            </div>
          ))}
        </div>
      </div>

      {awards.length > 0 && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4">Awards & Recognition</h3>
          <div className="space-y-3">
            {awards.map((award, index) => (
              <div key={index} className="flex items-start">
                <Award className="w-5 h-5 text-yellow-400 mr-2 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-900">{award.title}</h4>
                  <p className="text-sm text-gray-600">
                    {award.organization} - {award.year}
                  </p>
                  {award.description && (
                    <p className="text-sm text-gray-600 mt-1">{award.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="space-y-4">
        {certifications.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold mb-2">Certifications</h3>
            <div className="flex flex-wrap gap-2">
              {certifications.map((cert, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        )}

        <div>
          <h3 className="text-lg font-semibold mb-2">Languages</h3>
          <div className="flex flex-wrap gap-2">
            {languages.map((lang, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>

        {(projectMinimum || consultationFee) && (
          <div className="border-t pt-4 mt-4">
            {projectMinimum && (
              <p className="text-sm text-gray-600 mb-2">
                Project Minimum: ${projectMinimum.toLocaleString()}
              </p>
            )}
            {consultationFee && (
              <p className="text-sm text-gray-600">
                Consultation Fee: ${consultationFee.toLocaleString()}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};