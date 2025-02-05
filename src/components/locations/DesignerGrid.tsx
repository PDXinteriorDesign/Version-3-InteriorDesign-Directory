import React from 'react';
import { Designer } from '../../types';
import { DesignerCard } from '../DesignerCard';

interface DesignerGridProps {
  designers: Designer[];
}

export const DesignerGrid: React.FC<DesignerGridProps> = ({ designers }) => {
  return (
    <section>
      <h2 className="text-3xl font-serif mb-8">Featured Designers</h2>
      {designers.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designers.map((designer) => (
            <DesignerCard key={designer.id} designer={designer} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-xl shadow-sm">
          <p className="text-gray-600 mb-4">No designers found in this area yet.</p>
          <p className="text-sm text-gray-500">
            Check back soon or browse designers in nearby areas.
          </p>
        </div>
      )}
    </section>
  );
};