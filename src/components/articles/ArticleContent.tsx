import React from 'react';

interface ArticleContentProps {
  children: React.ReactNode;
}

export const ArticleContent: React.FC<ArticleContentProps> = ({ children }) => {
  return (
    <div className="prose max-w-none text-gray-800">
      {children}
    </div>
  );
};