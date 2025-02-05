import { Location } from '../../types/location';

export const arizona: Location = {
  state: 'Arizona',
  stateSlug: 'arizona',
  metaDescription: 'Find Arizona\'s best interior designers. From Phoenix\'s desert contemporary to Scottsdale\'s luxury design, discover the perfect designer for your Southwest home.',
  popularDesignStyles: ['Desert Contemporary', 'Southwest', 'Modern', 'Mediterranean'],
  averageCost: '$125-300/hour',
  cities: [
    {
      name: 'Phoenix',
      slug: 'phoenix',
      metaDescription: 'Connect with Phoenix\'s top interior designers specializing in desert contemporary and modern design for your Valley home.',
      designerCount: 120,
      popularStyles: ['Desert Contemporary', 'Modern', 'Southwest'],
      averagePrice: '$150-325/hour',
      neighborhoods: ['Arcadia', 'Biltmore', 'Desert Ridge', 'Downtown']
    },
    {
      name: 'Scottsdale',
      slug: 'scottsdale',
      metaDescription: 'Discover Scottsdale\'s premier interior designers offering luxury and contemporary design solutions for your desert oasis.',
      designerCount: 85,
      popularStyles: ['Luxury', 'Contemporary', 'Mediterranean'],
      averagePrice: '$200-450/hour',
      neighborhoods: ['Old Town', 'North Scottsdale', 'McCormick Ranch', 'Gainey Ranch']
    },
    {
      name: 'Tucson',
      slug: 'tucson',
      metaDescription: 'Find Tucson\'s best interior designers specializing in Southwest and desert modern design for your home.',
      designerCount: 45,
      popularStyles: ['Southwest', 'Desert Modern', 'Traditional'],
      averagePrice: '$125-275/hour',
      neighborhoods: ['Foothills', 'Downtown', 'Sam Hughes', 'Oro Valley']
    }
  ]
};