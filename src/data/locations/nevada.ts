import { Location } from '../../types/location';

export const nevada: Location = {
  state: 'Nevada',
  stateSlug: 'nevada',
  metaDescription: 'Connect with Nevada\'s premier interior designers. From Las Vegas luxury to Reno\'s modern mountain style, find the perfect designer for your desert home.',
  popularDesignStyles: ['Desert Modern', 'Contemporary', 'Luxury', 'Mediterranean'],
  averageCost: '$150-350/hour',
  cities: [
    {
      name: 'Las Vegas',
      slug: 'las-vegas',
      metaDescription: 'Find Las Vegas\'s top interior designers specializing in luxury, contemporary, and desert modern design for your home.',
      designerCount: 95,
      popularStyles: ['Luxury', 'Contemporary', 'Modern'],
      averagePrice: '$175-400/hour',
      neighborhoods: ['Summerlin', 'Henderson', 'Spring Valley', 'Downtown']
    },
    {
      name: 'Reno',
      slug: 'reno',
      metaDescription: 'Discover Reno\'s best interior designers offering mountain modern and contemporary design solutions for the Biggest Little City.',
      designerCount: 40,
      popularStyles: ['Mountain Modern', 'Contemporary', 'Traditional'],
      averagePrice: '$125-275/hour',
      neighborhoods: ['Midtown', 'South Reno', 'Northwest Reno', 'Old Southwest']
    }
  ]
};