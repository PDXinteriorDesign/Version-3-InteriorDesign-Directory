import { City } from '../../../../types/location';

export const sanDiego: City = {
  name: 'San Diego',
  slug: 'san-diego',
  metaDescription: 'Find San Diego\'s best interior designers specializing in coastal living and contemporary design. Connect with experts who understand Southern California\'s relaxed yet sophisticated style.',
  designerCount: 85,
  popularStyles: ['Coastal Contemporary', 'Mediterranean', 'Modern Beach'],
  averagePrice: '$150-300/hour',
  neighborhoods: [
    'La Jolla',
    'Coronado',
    'Del Mar',
    'Point Loma',
    'Mission Hills',
    'North Park',
    'Rancho Santa Fe',
    'Little Italy'
  ],
  content: {
    cityGuide: {
      title: 'San Diego Design: Coastal Chic and Casual Elegance',
      sections: [
        {
          title: 'Coastal Living',
          content: 'San Diego\'s interior design embraces the coastal lifestyle with light-filled spaces, natural materials, and seamless indoor-outdoor flow. Designers create sophisticated yet relaxed environments that complement the city\'s perfect weather and beach culture.'
        },
        {
          title: 'Diverse Influences',
          content: 'From the Spanish Colonial architecture of Coronado to the contemporary homes of La Jolla, San Diego\'s design scene draws inspiration from multiple sources. Mediterranean influences blend with modern California style.'
        },
        {
          title: 'Outdoor Integration',
          content: 'San Diego designers excel at creating year-round outdoor living spaces. From rooftop decks to poolside cabanas, outdoor areas become natural extensions of the home\'s interior design.'
        }
      ]
    },
    designTips: {
      title: 'Finding Your Dream Designer in San Diego: A Local\'s Guide',
      tips: [
        'Look for experience with coastal design and materials',
        'Check their expertise in indoor-outdoor living spaces',
        'Verify understanding of coastal climate considerations',
        'Ask about their approach to natural light optimization',
        'Review their experience with similar architectural styles',
        'Ensure they understand local building requirements'
      ]
    },
    localResources: {
      title: 'San Diego Design Resources',
      resources: [
        {
          name: 'San Diego Design District',
          description: 'Local design shops and showrooms',
          website: 'https://sandiegodesigndistrict.com'
        },
        {
          name: 'ASID San Diego',
          description: 'Professional interior design organization',
          website: 'https://casd.asid.org'
        },
        {
          name: 'San Diego Home/Garden Show',
          description: 'Largest home design event in Southern California',
          website: 'https://springhomegardenshow.com'
        }
      ]
    }
  }
};