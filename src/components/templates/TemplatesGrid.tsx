import React from 'react';
import { TemplateCard } from './TemplateCard';

const templates = [
  {
    title: "Client Intake Form",
    description: "A comprehensive online form to gather essential project information and client preferences during the initial consultation.",
    fileType: "Online Form",
    previewImage: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&q=80",
    slug: "client-intake-form"
  }
  // More templates will be added here as they become available
];

export const TemplatesGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {templates.map((template) => (
        <TemplateCard key={template.slug} {...template} />
      ))}
    </div>
  );
};