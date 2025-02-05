import { City } from '../../../../types/location';

export const lasVegas: City = {
  name: 'Las Vegas',
  slug: 'las-vegas',
  metaDescription: 'Find Las Vegas\'s top interior designers specializing in luxury, contemporary, and desert modern design. From Summerlin to Downtown, discover experts who understand Vegas style.',
  designerCount: 95,
  popularStyles: ['Luxury Modern', 'Desert Contemporary', 'Mediterranean'],
  averagePrice: '$175-400/hour',
  neighborhoods: [
    'Summerlin',
    'The Ridges',
    'Downtown Las Vegas',
    'Spring Valley',
    'Henderson',
    'Southern Highlands',
    'Lake Las Vegas',
    'Mountains Edge'
  ],
  content: {
    cityGuide: {
      title: 'Las Vegas Design: A Blend of Glitz and Modernity',
      sections: [
        {
          title: 'Unique Design Aesthetic',
          content: 'Las Vegas interior design seamlessly blends luxury with practicality, drawing inspiration from the city\'s entertainment heritage and desert surroundings. From the opulent homes of Summerlin to the urban condos of Downtown, Vegas designers create spaces that balance sophistication with comfort.'
        },
        {
          title: 'Neighborhood Styles',
          content: 'Each Las Vegas neighborhood has its distinct design personality. Summerlin embraces desert contemporary with earth tones and natural materials. The Ridges showcases ultra-luxury modern designs. Downtown Las Vegas features urban contemporary styles with industrial touches.'
        },
        {
          title: 'Climate Considerations',
          content: 'Las Vegas designers excel at creating spaces that respond to the desert climate. This includes selecting heat-resistant materials, incorporating energy-efficient solutions, and designing indoor-outdoor living spaces that offer protection from the intense sun.'
        }
      ]
    },
    designTips: {
      title: 'Finding the Right Designer for Your Vegas Project',
      tips: [
        'Look for designers experienced with desert climate considerations',
        'Check their experience with local HOA requirements',
        'Verify their understanding of Vegas-specific building codes',
        'Ask about their relationships with local vendors and contractors',
        'Review their experience with similar properties in your neighborhood'
      ]
    },
    localResources: {
      title: 'Las Vegas Design Resources',
      resources: [
        {
          name: 'Las Vegas Design Center',
          description: 'A comprehensive resource for designers and homeowners',
          website: 'https://lvdc.com'
        },
        {
          name: 'Nevada State Board of Architecture, Interior Design and Residential Design',
          description: 'Official state licensing board',
          website: 'https://nsbaidrd.org'
        },
        {
          name: 'Las Vegas Market',
          description: 'Bi-annual furniture and design trade show',
          website: 'https://www.lasvegasmarket.com'
        }
      ]
    }
  }
};