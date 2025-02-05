import React from 'react';
import { Clock, User, Share2 } from 'lucide-react';

interface ArticleHeaderProps {
  title: string;
  author: string;
  readTime: string;
  image: string;
}

export const ArticleHeader: React.FC<ArticleHeaderProps> = ({
  title,
  author,
  readTime,
  image
}) => {
  return (
    <header>
      <div className="aspect-video relative mb-8">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-t-xl"
        />
      </div>

      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
        <div className="flex items-center">
          <User className="w-4 h-4 mr-1" />
          <span>{author}</span>
        </div>
        <div className="flex items-center">
          <Clock className="w-4 h-4 mr-1" />
          <span>{readTime}</span>
        </div>
        <button className="ml-auto flex items-center hover:text-coral-500 transition-colors">
          <Share2 className="w-4 h-4 mr-1" />
          Share
        </button>
      </div>

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6 text-gray-900">{title}</h1>
    </header>
  );
};