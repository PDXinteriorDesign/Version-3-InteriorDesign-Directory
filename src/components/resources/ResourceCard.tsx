import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface ResourceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
}

export const ResourceCard: React.FC<ResourceCardProps> = ({
  icon: Icon,
  title,
  description,
  link
}) => {
  return (
    <Link
      to={link}
      className="block bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
    >
      <Icon className="w-8 h-8 text-sage-600 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Link>
  );
};