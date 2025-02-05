export const seoKeywords = {
  general: [
    'interior designers',
    'interior design services',
    'home interior design',
    'commercial interior design',
    'residential interior design',
    'interior design styles',
    'interior decorator near me',
    'affordable interior designers'
  ],
  portland: [
    'Portland interior designers',
    'best interior designers in Portland',
    'affordable interior decorators Portland',
    'modern interior design Portland',
    'eco-friendly interior design Portland',
    'Pearl District interior designers',
    'Alberta Arts District home decorators'
  ],
  beaverton: [
    'Beaverton interior designers',
    'interior decorators in Beaverton OR',
    'home staging services Beaverton',
    'modern kitchen design Beaverton'
  ],
  tualatin: [
    'Tualatin interior designers',
    'interior design firms Tualatin OR',
    'custom interiors Tualatin',
    'best living room decorators in Tualatin'
  ],
  services: [
    'interior design consultation Portland OR',
    'kitchen remodeling services Beaverton',
    'color consultation Tualatin',
    'home staging Portland',
    'sustainable interior design Oregon'
  ]
};

export const generateMetaKeywords = (location: string, services: string[] = []): string => {
  const baseKeywords = seoKeywords.general;
  const locationKeywords = seoKeywords[location as keyof typeof seoKeywords] || [];
  const serviceKeywords = services.map(service => `${service} ${location}`);
  
  return [...baseKeywords, ...locationKeywords, ...serviceKeywords].join(', ');
};