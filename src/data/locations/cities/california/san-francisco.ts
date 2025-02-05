import { City } from '../../../../types/location';

export const sanFrancisco: City = {
  name: 'San Francisco',
  slug: 'san-francisco',
  metaDescription: 'Connect with San Francisco\'s top interior designers specializing in Victorian renovations, modern innovation, and tech-forward design solutions. Find experts who understand SF\'s unique architectural heritage.',
  designerCount: 120,
  popularStyles: ['Modern Victorian', 'Tech-Forward', 'California Modern'],
  averagePrice: '$175-350/hour',
  neighborhoods: [
    'Pacific Heights',
    'Noe Valley',
    'Russian Hill',
    'Marina District',
    'Hayes Valley',
    'SOMA',
    'Mission District',
    'Presidio Heights'
  ],
  content: {
    cityGuide: {
      title: 'San Francisco Design: Victorian Charm Meets Modern Innovation',
      sections: [
        {
          title: 'Historic Meets Modern',
          content: 'San Francisco\'s design scene masterfully blends historic preservation with contemporary innovation. Designers expertly balance Victorian architectural details with modern functionality, creating spaces that honor the past while embracing the future.'
        },
        {
          title: 'Tech-Forward Living',
          content: 'As a global tech hub, SF homes often incorporate smart technology and innovative solutions. Designers create tech-integrated spaces that maintain warmth and character while maximizing functionality in the city\'s typically compact spaces.'
        },
        {
          title: 'Neighborhood Identity',
          content: 'Each SF neighborhood presents unique design opportunities. Pacific Heights showcases grand Victorian renovations, SOMA embraces industrial-modern lofts, while Noe Valley balances family functionality with contemporary style.'
        }
      ]
    },
    designTips: {
      title: 'Hiring an Interior Designer in San Francisco: A Local\'s Guide',
      tips: [
        'Look for experience with historic home renovations',
        'Check their understanding of SF building codes and permits',
        'Verify expertise in maximizing space in urban homes',
        'Ask about their approach to seismic considerations',
        'Review their experience with smart home integration',
        'Ensure they understand local preservation guidelines'
      ]
    },
    localResources: {
      title: 'San Francisco Design Resources',
      resources: [
        {
          name: 'SF Design Center',
          description: 'Premier destination for design professionals',
          website: 'https://sfdesigncenter.com'
        },
        {
          name: 'SF Design Week',
          description: 'Annual celebration of Bay Area design',
          website: 'https://sfdesignweek.org'
        },
        {
          name: 'AIA San Francisco',
          description: 'Professional architecture organization',
          website: 'https://aiasf.org'
        }
      ]
    }
  }
};