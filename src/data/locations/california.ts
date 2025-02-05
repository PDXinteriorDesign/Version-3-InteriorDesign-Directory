import { Location } from '../../types/location';

export const california: Location = {
  state: 'California',
  stateSlug: 'california',
  metaDescription: 'Connect with California\'s premier interior designers. From Los Angeles luxury to San Francisco\'s tech-forward style, find the perfect designer for your space.',
  popularDesignStyles: ['Modern', 'Contemporary', 'Mediterranean', 'Coastal'],
  averageCost: '$150-300/hour',
  cities: [
    {
      name: 'Los Angeles',
      slug: 'los-angeles',
      metaDescription: 'Find Los Angeles\'s top interior designers specializing in luxury, contemporary, and desert modern design for your home.',
      designerCount: 95,
      popularStyles: ['Luxury', 'Contemporary', 'Modern'],
      averagePrice: '$175-400/hour',
      neighborhoods: ['Summerlin', 'Henderson', 'Spring Valley', 'Downtown']
    },
    {
      name: 'San Francisco',
      slug: 'san-francisco',
      metaDescription: 'Discover San Francisco\'s best interior designers offering modern, Victorian, and tech-forward design solutions for Bay Area homes.',
      designerCount: 120,
      popularStyles: ['Modern', 'Contemporary', 'Victorian'],
      averagePrice: '$175-350/hour',
      neighborhoods: ['Pacific Heights', 'Marina', 'SOMA', 'Noe Valley']
    }
  ]
};