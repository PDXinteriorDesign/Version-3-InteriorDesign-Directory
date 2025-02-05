import { City } from '../../../../types/location';

export const losAngeles: City = {
  name: 'Los Angeles',
  slug: 'los-angeles',
  metaDescription: 'Find Los Angeles\'s premier interior designers specializing in luxury, contemporary, and Hollywood Regency styles. From Beverly Hills to Silver Lake, discover experts who understand LA\'s diverse design scene.',
  designerCount: 150,
  popularStyles: ['Hollywood Regency', 'Contemporary', 'Spanish Modern'],
  averagePrice: '$200-400/hour',
  neighborhoods: [
    'Beverly Hills',
    'West Hollywood',
    'Silver Lake',
    'Santa Monica',
    'Pacific Palisades',
    'Downtown LA',
    'Venice',
    'Brentwood'
  ],
  content: {
    cityGuide: {
      title: 'Los Angeles Design: A Fusion of Styles and Innovation',
      sections: [
        {
          title: 'Diverse Design Culture',
          content: 'Los Angeles interior design is as diverse as the city itself, blending Hollywood glamour with California casual, Spanish Colonial Revival with ultra-modern minimalism. Each project tells a unique story of luxury, creativity, and innovation.'
        },
        {
          title: 'Neighborhood Aesthetics',
          content: 'From the old-world elegance of Beverly Hills to the artistic edge of Silver Lake, each LA neighborhood has its distinct design personality. West Hollywood embraces bold contemporary design, while Santa Monica channels relaxed coastal sophistication.'
        },
        {
          title: 'Indoor-Outdoor Living',
          content: 'LA designers excel at creating seamless transitions between indoor and outdoor spaces, taking advantage of the perfect climate. Outdoor living rooms, al fresco dining areas, and poolside lounges become natural extensions of the home.'
        }
      ]
    },
    designTips: {
      title: 'Finding Your Perfect LA Designer: A Comprehensive Guide',
      tips: [
        'Look for designers experienced with your neighborhood\'s architectural style',
        'Check their expertise in indoor-outdoor living design',
        'Verify their understanding of LA\'s complex permitting process',
        'Ask about their vendor relationships and access to the PDC',
        'Review their experience with similar property types',
        'Ensure they understand seismic considerations in design'
      ]
    },
    localResources: {
      title: 'Los Angeles Design Resources',
      resources: [
        {
          name: 'Pacific Design Center',
          description: 'Premier destination for luxury home furnishings',
          website: 'https://pacificdesigncenter.com'
        },
        {
          name: 'LA Design Festival',
          description: 'Annual celebration of LA\'s design culture',
          website: 'https://ladesignfestival.org'
        },
        {
          name: 'WestEdge Design Fair',
          description: 'Contemporary design showcase',
          website: 'https://westedgedesignfair.com'
        }
      ]
    }
  }
};