import { City } from '../../../../types/location';

export const hillsboro: City = {
  name: 'Hillsboro',
  slug: 'hillsboro',
  metaDescription: 'Connect with Hillsboro\'s top interior designers specializing in modern suburban and family-friendly design. Find experts who understand the unique needs of Hillsboro homes.',
  designerCount: 25,
  popularStyles: ['Contemporary', 'Traditional', 'Modern Farmhouse'],
  averagePrice: '$125-250/hour',
  neighborhoods: [
    'Orenco Station',
    'AmberGlen',
    'Jackson School',
    'Tanasbourne',
    'Downtown',
    'Rood Bridge',
    'Jones Farm',
    'Brookwood'
  ],
  content: {
    cityGuide: {
      title: 'Hillsboro Design: Suburban Comfort and Modern Touches',
      sections: [
        {
          title: 'Modern Suburban Style',
          content: 'Hillsboro\'s interior design scene balances contemporary aesthetics with family-friendly functionality. Designers create spaces that are both stylish and practical, perfect for modern suburban living.'
        },
        {
          title: 'Community Character',
          content: 'From the urban-inspired designs of Orenco Station to the traditional homes of Jackson School, Hillsboro\'s diverse neighborhoods each have their own design personality. Designers adapt their approach to complement existing architectural styles.'
        },
        {
          title: 'Tech-Friendly Design',
          content: 'As a tech hub, Hillsboro homes often feature smart home integration and modern amenities. Designers excel at incorporating technology while maintaining warmth and comfort.'
        }
      ]
    },
    designTips: {
      title: 'Finding Your Perfect Interior Designer in Hillsboro',
      tips: [
        'Look for designers experienced with family-friendly spaces',
        'Check their portfolio for similar suburban projects',
        'Ask about their approach to smart home integration',
        'Verify experience with your neighborhood\'s style',
        'Ensure they understand local building codes',
        'Look for designers who can maximize space efficiency'
      ]
    },
    localResources: {
      title: 'Hillsboro Design Resources',
      resources: [
        {
          name: 'Washington County Home Builders Association',
          description: 'Local building industry organization',
          website: 'https://hbapdx.org'
        },
        {
          name: 'Hillsboro Home & Garden Show',
          description: 'Annual home improvement and design event',
          website: 'https://hillsborohomeshow.com'
        },
        {
          name: 'Oregon Home Magazine',
          description: 'Local design and home improvement publication',
          website: 'https://oregonhomemagazine.com'
        }
      ]
    }
  }
};