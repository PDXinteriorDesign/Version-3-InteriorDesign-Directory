import React from 'react';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';

interface TemplateCardProps {
  title: string;
  description: string;
  fileType: string;
  previewImage: string;
  slug: string;
}

export const TemplateCard: React.FC<TemplateCardProps> = ({
  title,
  description,
  fileType,
  previewImage,
  slug
}) => {
  return (
    <Link 
      to={`/resources/templates/${slug}`}
      className="group block bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
    >
      <div className="aspect-[16/9] relative overflow-hidden">
        <img
          src={previewImage}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium">
            {fileType}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-sage-600 transition-colors">
              {title}
            </h3>
            <p className="text-gray-600">
              {description}
            </p>
          </div>
          <FileText className="w-6 h-6 text-sage-600 flex-shrink-0 mt-1" />
        </div>
      </div>
    </Link>
  );
};