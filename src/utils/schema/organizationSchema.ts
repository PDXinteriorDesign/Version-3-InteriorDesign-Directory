export const organizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "The Design Refuge",
  "url": "https://thedesignrefuge.com",
  "logo": "https://thedesignrefuge.com/logo.png",
  "description": "Connect with top-rated local interior designers. Browse portfolios, read reviews, and find the perfect designer for your home renovation project.",
  "email": "pdxinteriordesign@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Portland",
    "addressRegion": "OR",
    "addressCountry": "US"
  }
});