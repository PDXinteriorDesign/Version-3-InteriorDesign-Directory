export const optimizeImageUrl = (url: string, width: number): string => {
  // Handle Unsplash images
  if (url.includes('unsplash.com')) {
    return `${url}&w=${width}&q=80&auto=format`;
  }
  
  // Handle internal images
  if (url.startsWith('/')) {
    return `${url}?w=${width}&q=80`;
  }
  
  return url;
};

export const lazyLoadImage = (props: {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}): React.HTMLAttributes<HTMLImageElement> => {
  return {
    ...props,
    loading: 'lazy',
    decoding: 'async',
    onError: (e: React.SyntheticEvent<HTMLImageElement>) => {
      const target = e.target as HTMLImageElement;
      target.onerror = null;
      target.src = '/images/placeholder.jpg';
    }
  };
};