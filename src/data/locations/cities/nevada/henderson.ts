import { City } from '../../../../types/location';

export const henderson: City = {
  name: 'Henderson',
  slug: 'henderson',
  metaDescription: 'Connect with Henderson\'s top interior designers specializing in family-friendly and desert-inspired design. Find experts who understand master-planned communities and modern suburban living.',
  designerCount: 35,
  popularStyles: ['Desert Contemporary', 'Traditional', 'Modern Farmhouse'],
  averagePrice: '$150-300/hour',
  neighborhoods: [
    'Green Valley',
    'MacDonald Ranch',
    'Anthem',
    'Seven Hills',
    'Lake Las Vegas',
    'Inspirada',
    'Cadence',
    'Tuscany'
  ],
  content: {
    cityGuide: {
      title: 'Henderson Design: Family-Friendly and Desert-Inspired',
      sections: [
        {
          title: 'Suburban Sophistication',
          content: 'Henderson\'s interior design scene combines suburban comfort with desert sophistication. Designers create spaces that cater to family living while incorporating the natural beauty of the desert landscape.'
        },
        {
          title: 'Community-Specific Design',
          content: 'Each master-planned community in Henderson has its own architectural guidelines and design aesthetic. From the Mediterranean influence in Lake Las Vegas to the desert contemporary styles of Inspirada, designers adapt their approach to complement existing community character.'
        },
        {
          title: 'Outdoor Integration',
          content: 'Henderson designers excel at creating seamless indoor-outdoor living spaces that take advantage of the desert climate while providing protection from the elements.'
        }
      ]
    },
    designTips: {
      title: 'Finding Your Perfect Interior Designer in Henderson',
      tips: [
        'Look for designers experienced with master-planned community guidelines',
        'Check their portfolio for family-friendly design solutions',
        'Verify experience with desert-appropriate materials and colors',
        'Ask about their approach to indoor-outdoor living spaces',
        'Review their understanding of energy-efficient design practices'
      ]
    },
    localResources: {
      title: 'Henderson Design Resources',
      resources: [
        {
          name: 'Henderson Design District',
          description: 'Local design shops and showrooms',
          website: 'https://hendersondesigndistrict.com'
        },
        {
          name: 'Southern Nevada Home Builders Association',
          description: 'Local building industry organization',
          website: 'https://snhba.com'
        },
        {
          name: 'Henderson Home & Garden Show',
          description: 'Annual design and home improvement event',
          website: 'https://hendersonhomeshow.com'
        }
      ]
    }
  }
};