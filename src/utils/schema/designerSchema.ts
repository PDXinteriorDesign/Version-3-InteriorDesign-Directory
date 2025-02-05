import { Designer } from '../../types';

export const designerSchema = (designer: Designer) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": designer.company,
  "@id": `https://thedesignrefuge.com/designer/${designer.id}`,
  "image": designer.coverImage,
  "description": designer.description,
  "priceRange": designer.priceRange,
  "telephone": designer.contact.phone,
  "email": designer.contact.email,
  "url": designer.contact.website,
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": designer.rating,
    "reviewCount": designer.reviewCount
  }
});