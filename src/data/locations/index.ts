import { Location } from '../../types/location';
import { losAngeles, sanFrancisco, sanDiego, irvine, sanJose } from './cities/california';
import { portland, eugene, bend, hillsboro } from './cities/oregon';
import { seattle, bellevue, kirkland, vancouver, ridgefield } from './cities/washington';
import { lasVegas, reno, henderson } from './cities/nevada';
import { phoenix, mesa, chandler, tucson, glendale, scottsdale } from './cities/arizona';

export const locations: Record<string, Location> = {
  california: {
    name: 'California',
    slug: 'california',
    state: 'California', // ✅ Added
    stateSlug: 'california', // ✅ Added
    metaDescription: 'Find the best interior designers in California.', // ✅ Added
    popularDesignStyles: ['Modern', 'Minimalist', 'Bohemian'], // ✅ Added
    averageCost: '$5,000 - $50,000', // ✅ Added
    cities: [losAngeles, sanFrancisco, sanDiego, irvine, sanJose]
  },
  oregon: {
    name: 'Oregon',
    slug: 'oregon',
    state: 'Oregon',
    stateSlug: 'oregon',
    metaDescription: 'Find the best interior designers in Oregon.',
    popularDesignStyles: ['Rustic', 'Scandinavian'],
    averageCost: '$4,000 - $30,000',
    cities: [portland, eugene, bend, hillsboro]
  },
  washington: {
    name: 'Washington',
    slug: 'washington',
    state: 'Washington',
    stateSlug: 'washington',
    metaDescription: 'Find the best interior designers in Washington.',
    popularDesignStyles: ['Industrial', 'Contemporary'],
    averageCost: '$6,000 - $40,000',
    cities: [seattle, bellevue, kirkland, vancouver, ridgefield]
  },
  nevada: {
    name: 'Nevada',
    slug: 'nevada',
    state: 'Nevada',
    stateSlug: 'nevada',
    metaDescription: 'Find the best interior designers in Nevada.',
    popularDesignStyles: ['Luxury', 'Art Deco'],
    averageCost: '$7,000 - $45,000',
    cities: [lasVegas, reno, henderson]
  },
  arizona: {
    name: 'Arizona',
    slug: 'arizona',
    state: 'Arizona',
    stateSlug: 'arizona',
    metaDescription: 'Find the best interior designers in Arizona.',
    popularDesignStyles: ['Southwestern', 'Mediterranean'],
    averageCost: '$3,000 - $25,000',
    cities: [phoenix, mesa, chandler, tucson, glendale, scottsdale]
  }
};

export const getLocationBySlug = (slug: string): Location | undefined => {
  return locations[slug];
};

export const getCityBySlug = (stateSlug: string, citySlug: string) => {
  const state = locations[stateSlug];
  return state?.cities.find(city => city.slug === citySlug);
};
