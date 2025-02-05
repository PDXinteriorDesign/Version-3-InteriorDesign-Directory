import { Designer } from '../types';

export const designers: Designer[] = [
  {
    id: 'XhJwUE1PgusB1Xc9LR05',
    name: 'Sarah Anderson',
    company: 'Modern Living Interiors',
    rating: 4.9,
    reviewCount: 127,
    specialty: ['Contemporary', 'Minimalist', 'Scandinavian'],
    description: 'Award-winning designer with over 15 years of experience transforming residential spaces into modern sanctuaries.',
    personalBio: 'With a passion for clean lines and functional spaces, I believe in creating homes that reflect both beauty and practicality.',
    profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80',
    portfolioImages: [
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80'
    ],
    location: 'Portland, Oregon 97201',
    coordinates: {
      lat: 45.5155,
      lng: -122.6789
    },
    experience: 15,
    contact: {
      phone: '(555) 123-4567',
      email: 'sarah@modernlivinginteriors.com',
      website: 'www.modernlivinginteriors.com'
    },
    services: ['Full Room Design', 'Color Consultation', 'Space Planning', 'Furniture Selection'],
    priceRange: '$$$'
  },
  // Add more designers with proper location formatting and coordinates
];