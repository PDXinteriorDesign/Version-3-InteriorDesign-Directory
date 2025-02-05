import React from 'react';
import { GuideCard } from './GuideCard';

const guides = [
  {
    title: "Bohemian (Boho) Chic",
    description: "Master the art of creating free-spirited, eclectic spaces with rich textures, vibrant colors, and global influences.",
    image: "https://images.unsplash.com/photo-1522444195799-478538b28823?auto=format&fit=crop&q=80",
    slug: "bohemian-chic",
    category: "Eclectic Design"
  },
  {
    title: "Industrial Style",
    description: "Learn how to create authentic urban spaces using raw materials, exposed elements, and vintage-inspired pieces.",
    image: "https://images.unsplash.com/photo-1515542706656-8e6ef17a1521?auto=format&fit=crop&q=80",
    slug: "industrial-style",
    category: "Urban Design"
  },
  {
    title: "Mid-Century Modern",
    description: "Discover how to create timeless spaces with clean lines, organic forms, and iconic furniture pieces.",
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80",
    slug: "mid-century-modern",
    category: "Classic Design"
  }
];

export const DesignGuidesGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {guides.map((guide) => (
        <GuideCard key={guide.slug} {...guide} />
      ))}
    </div>
  );
};