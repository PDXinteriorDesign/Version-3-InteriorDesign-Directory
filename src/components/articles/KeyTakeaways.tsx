import React from 'react';

interface KeyTakeawaysProps {
  points: string[];
}

export const KeyTakeaways: React.FC<KeyTakeawaysProps> = ({ points }) => {
  return (
    <div className="bg-sage-50 p-6 rounded-lg my-12">
      <h3 className="text-xl font-serif text-gray-900 mb-4">Key Takeaways</h3>
      <ul className="space-y-2">
        {points.map((point, index) => (
          <li key={index} className="flex items-start">
            <span className="text-sage-600 mr-2">•</span>
            <span className="text-gray-800">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};