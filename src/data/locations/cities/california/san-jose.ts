import { City } from '../../../../types/location';

export const sanJose: City = {
  name: 'San Jose',
  slug: 'san-jose',
  metaDescription: 'Connect with San Jose\'s top interior designers specializing in tech-forward and contemporary design. Find experts who understand Silicon Valley\'s modern lifestyle needs.',
  designerCount: 65,
  popularStyles: ['Tech Modern', 'Contemporary', 'Smart Luxury'],
  averagePrice: '$160-300/hour',
  neighborhoods: [
    'Willow Glen',
    'Santana Row',
    'Rose Garden',
    'Almaden Valley',
    'Silver Creek',
    'Downtown',
    'West San Jose',
    'Evergreen'
  ],
  content: {
    cityGuide: {
      title: 'San Jose Design: Modern Living in Silicon Valley',
      sections: [
        {
          title: 'Tech-Forward Design',
          content: 'San Jose\'s design aesthetic reflects its position as the heart of Silicon Valley. Designers create smart, connected spaces that combine cutting-edge technology with comfortable living, perfect for tech professionals and modern families.'
        },
        {
          title: 'Neighborhood Character',
          content: 'From the historic charm of Willow Glen to the luxury condos of Santana Row, each San Jose neighborhood offers unique design opportunities. Designers adapt their approach to complement both established and emerging communities.'
        },
        {
          title: 'Sustainable Innovation',
          content: 'San Jose designers lead the way in sustainable and energy-efficient design solutions, incorporating smart home technology with eco-friendly practices to create homes that are both innovative and environmentally conscious.'
        }
      ]
    },
    designTips: {
      title: 'Your Guide to Hiring an Interior Designer in San Jose',
      tips: [
        'Look for experience with smart home integration',
        'Check their understanding of energy-efficient design',
        'Verify expertise in modern space planning',
        'Ask about their approach to tech integration',
        'Review their experience with similar home styles',
        'Ensure they understand local building requirements'
      ]
    },
    localResources: {
      title: 'San Jose Design Resources',
      resources: [
        {
          name: 'Silicon Valley Home Show',
          description: 'Annual home design and technology showcase',
          website: 'https://siliconvalleyhomeshow.com'
        },
        {
          name: 'South Bay Design Center',
          description: 'Local design showroom and resource center',
          website: 'https://southbaydesigncenter.com'
        },
        {
          name: 'ASID Silicon Valley',
          description: 'Professional interior design organization',
          website: 'https://sv.asid.org'
        }
      ]
    }
  }
};