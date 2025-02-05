import { Location, City } from '../../types/location';

export const locationSchema = (location: Location) => ({
  "@context": "https://schema.org",
  "@type": "Place",
  "name": `Interior Designers in ${location.state}`,
  "description": location.metaDescription,
  "address": {
    "@type": "PostalAddress",
    "addressRegion": location.state,
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