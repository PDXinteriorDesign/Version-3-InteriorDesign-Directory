import React from 'react';
import { ExternalLink } from 'lucide-react';

interface CityGuideProps {
  content: {
    cityGuide: {
      title: string;
      sections: Array<{
        title: string;
        content: string;
      }>;
    };
    designTips: {
      title: string;
      tips: string[];
    };
    localResources: {
      title: string;
      resources: Array<{
        name: string;
        description: string;
        website: string;
      }>;
    };
  };
}

export const CityGuide: React.FC<CityGuideProps> = ({ content }) => {
  return (
    <div className="space-y-12">
      {/* City Guide Section */}
      <section className="bg-white rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-serif mb-6">{content.cityGuide.title}</h2>
        <div className="space-y-8">
          {content.cityGuide.sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold mb-3">{section.title}</h3>
              <p className="text-gray-700 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Design Tips Section */}
      <section className="bg-white rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-serif mb-6">{content.designTips.title}</h2>
        <ul className="space-y-4">
          {content.designTips.tips.map((tip, index) => (
            <li key={index} className="flex items-start">
              <span className="text-sage-600 mr-2">•</span>
              <span className="text-gray-700">{tip}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Local Resources Section */}
      <section className="bg-white rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-serif mb-6">{content.localResources.title}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {content.localResources.resources.map((resource, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold mb-2">{resource.name}</h3>
              <p className="text-gray-600 mb-3">{resource.description}</p>
              <a
                href={resource.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sage-600 hover:text-sage-700"
              >
                Visit Website
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};