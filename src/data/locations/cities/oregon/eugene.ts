import { City } from '../../../../types/location';

export const eugene: City = {
  name: 'Eugene',
  slug: 'eugene',
  metaDescription: 'Connect with Eugene\'s top interior designers specializing in sustainable, artsy, and nature-inspired design. Find experts who understand the unique character of Eugene homes.',
  designerCount: 40,
  popularStyles: ['Eco-Friendly', 'Arts & Crafts', 'Pacific Northwest'],
  averagePrice: '$125-250/hour',
  neighborhoods: [
    'South Eugene',
    'Friendly Area',
    'Cal Young',
    'Whiteaker',
    'University Area',
    'River Road',
    'Santa Clara',
    'Southeast Eugene'
  ],
  content: {
    cityGuide: {
      title: 'Eugene Design: Artsy, Eco-Conscious, and Community-Focused',
      sections: [
        {
          title: 'Creative Spirit',
          content: 'Eugene\'s interior design scene reflects the city\'s artistic soul and environmental consciousness. Designers here excel at creating spaces that feel both personal and sustainable, often incorporating local art and natural materials.'
        },
        {
          title: 'Natural Influence',
          content: 'The surrounding natural beauty of the Willamette Valley influences Eugene\'s design aesthetic. From large windows that frame forest views to color palettes inspired by local landscapes, nature plays a key role in interior spaces.'
        },
        {
          title: 'Community Connection',
          content: 'Eugene\'s strong sense of community shapes its design approach. Designers often work with local artisans and source materials from nearby suppliers, creating spaces that tell a story of local craftsmanship and sustainability.'
        }
      ]
    },
    designTips: {
      title: 'Finding the Right Fit: Your Guide to Hiring an Interior Designer in Eugene',
      tips: [
        'Look for designers who understand sustainable design practices',
        'Check their experience with local building codes and regulations',
        'Ask about their connections with local artists and craftspeople',
        'Verify their approach to energy-efficient design',
        'Ensure they understand Eugene\'s climate considerations',
        'Look for experience with similar home styles in your neighborhood'
      ]
    },
    localResources: {
      title: 'Eugene Design Resources',
      resources: [
        {
          name: 'Eugene Saturday Market',
          description: 'Local artisan market featuring handcrafted items',
          website: 'https://eugenesaturdaymarket.org'
        },
        {
          name: 'Lane County Home Improvement Show',
          description: 'Annual event featuring local designers and vendors',
          website: 'https://eugenehomeshow.com'
        },
        {
          name: 'BRING Recycling',
          description: 'Resource for recycled building materials',
          website: 'https://bringrecycling.org'
        }
      ]
    }
  }
};