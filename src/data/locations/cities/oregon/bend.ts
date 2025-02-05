import { City } from '../../../../types/location';

export const bend: City = {
  name: 'Bend',
  slug: 'bend',
  metaDescription: 'Find Bend\'s premier interior designers specializing in mountain modern and outdoor-inspired design. Connect with experts who understand Central Oregon\'s unique lifestyle.',
  designerCount: 45,
  popularStyles: ['Mountain Modern', 'Rustic Contemporary', 'Northwest Lodge'],
  averagePrice: '$140-275/hour',
  neighborhoods: [
    'Old Town',
    'West Side',
    'Old Mill District',
    'NorthWest Crossing',
    'Summit West',
    'River West',
    'Downtown',
    'Century West'
  ],
  content: {
    cityGuide: {
      title: 'Bend Design: Mountain Modern and Outdoor-Inspired',
      sections: [
        {
          title: 'Mountain Modern Aesthetic',
          content: 'Bend\'s interior design style uniquely blends modern sophistication with mountain charm. Designers create spaces that complement the outdoor lifestyle while providing contemporary comfort and functionality.'
        },
        {
          title: 'Natural Elements',
          content: 'The high desert landscape influences Bend\'s design choices, from color palettes inspired by sage and juniper to materials like local stone and timber. Large windows and indoor-outdoor living spaces are signature elements.'
        },
        {
          title: 'Lifestyle Integration',
          content: 'Bend designers excel at creating spaces that accommodate an active lifestyle. From mudrooms for ski gear to bike storage solutions, functionality meets style in thoughtful ways.'
        }
      ]
    },
    designTips: {
      title: 'Your Guide to Hiring an Interior Designer in Bend',
      tips: [
        'Look for designers experienced with mountain home design',
        'Check their understanding of high desert climate considerations',
        'Verify experience with indoor-outdoor living spaces',
        'Ask about their approach to natural light and views',
        'Ensure they understand local building codes and HOA requirements',
        'Look for experience with similar properties in your area'
      ]
    },
    localResources: {
      title: 'Bend Design Resources',
      resources: [
        {
          name: 'Central Oregon Design Professionals',
          description: 'Local network of design professionals',
          website: 'https://codpbend.com'
        },
        {
          name: 'Bend Design Conference',
          description: 'Annual design event featuring local talent',
          website: 'https://benddesign.org'
        },
        {
          name: 'High Desert Design Council',
          description: 'Professional organization for local designers',
          website: 'https://highdesertdesign.org'
        }
      ]
    }
  }
};