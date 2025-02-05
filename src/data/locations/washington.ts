import { Location } from '../../types/location';

export const washington: Location = {
  state: 'Washington',
  stateSlug: 'washington',
  metaDescription: 'Find top interior designers in Washington state. From Seattle\'s modern tech aesthetic to Spokane\'s traditional charm, discover the perfect designer for your space.',
  popularDesignStyles: ['Pacific Northwest', 'Modern', 'Contemporary', 'Sustainable'],
  averageCost: '$135-285/hour',
  cities: [
    {
      name: 'Seattle',
      slug: 'seattle',
      metaDescription: 'Connect with Seattle\'s leading interior designers specializing in modern, tech-forward, and sustainable design solutions.',
      designerCount: 110,
      popularStyles: ['Modern', 'Tech-Inspired', 'Sustainable'],
      averagePrice: '$175-350/hour',
      neighborhoods: ['Capitol Hill', 'Ballard', 'Queen Anne', 'Fremont']
    },
    {
      name: 'Bellevue',
      slug: 'bellevue',
      metaDescription: 'Find Bellevue\'s best interior designers offering luxury and contemporary design services for Eastside homes.',
      designerCount: 45,
      popularStyles: ['Luxury', 'Contemporary', 'Modern'],
      averagePrice: '$200-400/hour',
      neighborhoods: ['Downtown', 'West Bellevue', 'Crossroads', 'Somerset']
    },
    {
      name: 'Kirkland',
      slug: 'kirkland',
      metaDescription: 'Discover Kirkland\'s top interior designers specializing in waterfront and contemporary design for Lake Washington homes.',
      designerCount: 30,
      popularStyles: ['Waterfront', 'Contemporary', 'Traditional'],
      averagePrice: '$150-300/hour',
      neighborhoods: ['Downtown', 'Juanita', 'Houghton', 'Rose Hill']
    }
  ]
};