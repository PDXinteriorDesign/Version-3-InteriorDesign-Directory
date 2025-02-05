import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "w-6 h-6", showText = false }) => {
  return (
    <div className={`flex items-center ${showText ? 'space-x-3' : ''}`}>
      <div className={`relative ${className}`}>
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            d="M20 80 L50 30 L80 80 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-current"
          />
          <path
            d="M35 80 C35 60 50 40 50 40 C50 40 65 60 65 80"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-current"
          />
          <path
            d="M50 40 C50 40 45 35 40 30 M50 40 C50 40 55 35 60 30"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-current"
          />
        </svg>
      </div>
      {showText && (
        <div className="flex flex-col">
          <span className="text-xl font-serif text-current">The Design Refuge</span>
        </div>
      )}
    </div>
  );
};