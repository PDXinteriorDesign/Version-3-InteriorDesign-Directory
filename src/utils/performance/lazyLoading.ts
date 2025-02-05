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