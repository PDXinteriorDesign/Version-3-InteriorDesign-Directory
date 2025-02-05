export const optimizeImageUrl = (url: string, width: number): string => {
  if (url.includes('unsplash.com')) {
    return `${url}&w=${width}&q=80&auto=format`;
  }
  
  if (url.startsWith('/')) {
    return `${url}?w=${width}&q=80`;
  }
  
  return url;
};