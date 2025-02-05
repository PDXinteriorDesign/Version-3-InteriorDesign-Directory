import React from 'react';
import { optimizeImageUrl, lazyLoadImage } from '../utils/performance';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  sizes?: string;
  className?: string;
  width?: number;
  height?: number;
}

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  sizes = '100vw',
  className,
  width,
  height
}) => {
  const breakpoints = [320, 640, 768, 1024, 1280];
  const srcSet = breakpoints
    .map(bp => `${optimizeImageUrl(src, bp)} ${bp}w`)
    .join(', ');

  return (
    <img
      {...lazyLoadImage({
        src: optimizeImageUrl(src, 1280),
        alt,
        className,
        width,
        height
      })}
      srcSet={srcSet}
      sizes={sizes}
    />
  );
};