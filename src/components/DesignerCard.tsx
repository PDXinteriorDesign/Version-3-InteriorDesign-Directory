import React from 'react';
import { Star } from 'lucide-react';
import { Designer } from '../types';
import { Link } from 'react-router-dom';
import { optimizeImageUrl } from '../utils/performance';
import { getStyleColor } from '../utils/styles';

interface DesignerCardProps {
  designer: Designer;
}

export const DesignerCard: React.FC<DesignerCardProps> = ({ designer }) => {
  const mainStyle = designer.specialty[0];
  const styleColor = getStyleColor(mainStyle);
  console.log("Designer data:", {
    name: designer.name,
    businessLocation: designer.businessLocation,
    fullDesigner: designer
  });




  return (
    <Link to={`/designer/${designer.id}`} className="block group">

      <div className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border-t-4 ${styleColor.border}`}>
        <div className="relative h-64">
          <img
            src={optimizeImageUrl(designer.coverImage, 800)}
            alt={designer.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4`}>
            <div className="flex items-center space-x-3 mb-2">
              <img
                src={optimizeImageUrl(designer.profileImage, 100)}
                alt={designer.name}
                className="w-12 h-12 rounded-full border-2 border-white object-cover"
                loading="lazy"
              />
              <div>
                <h3 className="text-white text-xl font-semibold">{designer.name}</h3>
                <p className="text-white/90">{designer.company}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center mb-2">
            <div className="flex items-center text-yellow-400">
              <Star className="fill-current w-5 h-5" />
              <span className="ml-1 text-gray-900 font-medium">{designer.rating}</span>
            </div>
            <span className="text-gray-600 text-sm ml-2">({designer.reviewCount} reviews)</span>
          </div>
          <p className="text-gray-700 mb-3 line-clamp-3">{designer.personalBio}</p>
          <div className="flex flex-wrap gap-2 mb-3">
            {designer.specialty.slice(0, 2).map((spec, index) => (
              <span
                key={index}
                className={`px-2 py-1 text-sm rounded-full ${getStyleColor(spec).badge}`}
              >
                {spec}
              </span>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-gray-900 font-medium">
              {designer.businessLocation?.city}, {designer.businessLocation?.state}
            </span>
            <span className={`text-sm font-medium ${styleColor.text}`}>{designer.priceRange}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};