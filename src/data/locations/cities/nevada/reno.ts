import { City } from '../../../../types/location';

export const reno: City = {
  name: 'Reno',
  slug: 'reno',
  metaDescription: 'Connect with Reno\'s best interior designers offering mountain modern and contemporary design solutions. Find experts who understand the unique blend of urban and mountain living.',
  designerCount: 40,
  popularStyles: ['Mountain Modern', 'Urban Contemporary', 'Rustic Modern'],
  averagePrice: '$125-275/hour',
  neighborhoods: [
    'Midtown',
    'Old Southwest',
    'South Reno',
    'Northwest Reno',
    'Downtown',
    'Somersett',
    'Caughlin Ranch',
    'Damonte Ranch'
  ],
  content: {
    cityGuide: {
      title: 'Reno Design: Mountain Modern Meets Urban Chic',
      sections: [
        {
          title: 'Evolving Design Scene',
          content: 'Reno\'s design landscape is evolving rapidly, combining mountain modern aesthetics with urban sophistication. The city\'s proximity to Lake Tahoe and its growing tech presence influence design choices, creating spaces that are both contemporary and connected to nature.'
        },
        {
          title: 'Neighborhood Character',
          content: 'Midtown showcases eclectic, artistic designs in restored historic homes. South Reno features contemporary new builds with mountain views. Northwest Reno balances luxury with natural elements in established neighborhoods.'
        },
        {
          title: 'Sustainable Focus',
          content: 'Reno designers increasingly emphasize sustainable and eco-friendly design solutions, incorporating energy-efficient features and locally sourced materials that reflect the region\'s environmental consciousness.'
        }
      ]
    },
    designTips: {
      title: 'Your Guide to Hiring an Interior Designer in Reno',
      tips: [
        'Seek designers familiar with mountain climate considerations',
        'Look for experience with both modern and traditional mountain styles',
        'Check their knowledge of local building codes and altitude considerations',
        'Verify their experience with similar properties in your area',
        'Ask about their approach to sustainable design practices'
      ]
    },
    localResources: {
      title: 'Reno Design Resources',
      resources: [
        {
          name: 'ASID Nevada Chapter',
          description: 'Professional interior design organization',
          website: 'https://www.asid.org/chapters/nevada'
        },
        {
          name: 'Reno/Tahoe Furniture Market',
          description: 'Local furniture and design showcase',
          website: 'https://renotahoefurniture.com'
        },
        {
          name: 'Build & Design Week Reno',
          description: 'Annual design and construction event',
          website: 'https://buildanddesignweek.com'
        }
      ]
    }
  }
};