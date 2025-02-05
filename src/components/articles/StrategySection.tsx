import React from 'react';

interface StrategySectionProps {
  number: number;
  title: string;
  bigIdea: string;
  description: string;
  steps: string[];
}

export const StrategySection: React.FC<StrategySectionProps> = ({
  number,
  title,
  bigIdea,
  description,
  steps
}) => {
  return (
    <div className="mb-12">
      <h3 className="text-xl font-semibold mb-3">{number}. {title}</h3>
      <div className="bg-sage-50 p-4 rounded-lg mb-4">
        <p className="font-medium">The Big Idea: {bigIdea}</p>
      </div>
      <p className="text-gray-800 mb-4">{description}</p>
      <div>
        <h4 className="font-medium mb-2">How to Make It Happen:</h4>
        <ul className="space-y-2">
          {steps.map((step, index) => (
            <li key={index} className="flex items-start">
              <span className="text-sage-600 mr-2">•</span>
              <span>{step}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};