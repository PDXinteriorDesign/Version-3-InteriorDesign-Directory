export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": `https://thedesignrefuge.com${item.url}`
  }))
});

export const generateLocalBusinessSchema = (city: string, state: string) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": `Interior Designers in ${city}, ${state}`,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": city,
    "addressRegion": state,
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "45.5155",
    "longitude": "-122.6789"
  }
});

export const designerSchema = (designer: { company: string; id: string; coverImage: string; description: string; priceRange: string; contact: { phone: string; email: string; website: string }; rating: number; reviewCount: number }) => ({
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

export const generateLocationSchema = (location: { state: string; city?: string }) => ({
  "@context": "https://schema.org",
  "@type": "Place",
  "name": location.city
    ? `Interior Designers in ${location.city}, ${location.state}`
    : `Interior Designers in ${location.state}`,
  "address": {
    "@type": "PostalAddress",
    "addressRegion": location.state,
    "addressLocality": location.city || '',
    "addressCountry": "US"
  }
});

export const citySchema = (state: Location, city: City) => ({
  "@context": "https://schema.org",
  "@type": "Place",
  "name": `Interior Designers in ${city.name}, ${state.state}`,
  "description": city.metaDescription,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": city.name,
    "addressRegion": state.state,
    "addressCountry": "US"
  }
});