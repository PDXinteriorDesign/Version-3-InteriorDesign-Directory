import { Metadata } from '../types/seo';

export const generateMetadata = (
  title: string,
  description: string,
  path: string,
  imageUrl?: string
): Metadata => {
  const baseUrl = 'https://thedesignrefuge.com';
  const fullUrl = `${baseUrl}${path}`;
  const defaultImage = `${baseUrl}/images/og-default.jpg`;

  return {
    title: `${title} | The Design Refuge`,
    description,
    canonical: fullUrl,
    openGraph: {
      title,
      description,
      url: fullUrl,
      type: 'website',
      image: imageUrl || defaultImage,
      siteName: 'The Design Refuge'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      image: imageUrl || defaultImage
    }
  };
};

export const generateImageAlt = (imageName: string, context: string): string => {
  return `${imageName} - ${context} interior design inspiration`;
};