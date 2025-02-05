import { City } from '../../../../types/location';

export const portland: City = {
  name: 'Portland',
  slug: 'portland',
  metaDescription: 'Find Portland\'s best interior designers specializing in eco-friendly, modern, and Pacific Northwest design styles. Connect with local experts who understand Portland\'s unique aesthetic.',
  designerCount: 85,
  popularStyles: ['Pacific Northwest Modern', 'Eco-Minimalist', 'Industrial'],
  averagePrice: '$150-300/hour',
  neighborhoods: [
    'Pearl District',
    'Alberta Arts District',
    'Hawthorne',
    'Division/Clinton',
    'Sellwood-Moreland',
    'Northwest District',
    'Mississippi Avenue',
    'South Waterfront'
  ],
  content: {
    cityGuide: {
      title: 'Portland Design: Eclectic, Sustainable, and Northwest Modern',
      sections: [
        {
          title: 'Unique Design Culture',
          content: 'Portland\'s interior design scene is a reflection of the city\'s commitment to sustainability, creativity, and authenticity. Designers here masterfully blend eco-friendly practices with modern aesthetics, creating spaces that are both beautiful and environmentally conscious.'
        },
        {
          title: 'Neighborhood Character',
          content: 'Each Portland neighborhood brings its own design personality. The Pearl District showcases industrial-modern lofts, Alberta Arts celebrates eclectic creativity, while Sellwood-Moreland embraces historic charm with modern updates. This diversity allows designers to create unique spaces that reflect each area\'s character.'
        },
        {
          title: 'Maker Culture & Local Materials',
          content: 'Portland\'s strong maker culture influences interior design through locally crafted furniture, custom fixtures, and artisanal details. Designers often collaborate with local craftspeople to create unique pieces that tell a story and support the community.'
        }
      ]
    },
    designTips: {
      title: 'Navigating the Portland Design Scene: Your Guide to Hiring an Interior Designer',
      tips: [
        'Look for designers with experience in sustainable and eco-friendly practices',
        'Check their familiarity with Portland\'s historic home requirements',
        'Ask about their relationships with local artisans and makers',
        'Verify their understanding of Portland\'s permitting process',
        'Ensure they have experience with your neighborhood\'s architectural style',
        'Look for LEED certification or other green building credentials'
      ]
    },
    localResources: {
      title: 'Portland Design Resources',
      resources: [
        {
          name: 'Portland Design Events',
          description: 'Calendar of local design shows, open houses, and workshops',
          website: 'https://designportland.org'
        },
        {
          name: 'ASID Oregon Chapter',
          description: 'Professional interior design organization',
          website: 'https://or.asid.org'
        },
        {
          name: 'Portland Materials Resource Center',
          description: 'Sustainable building materials library',
          website: 'https://pdxmrc.org'
        }
      ]
    }
  }
};