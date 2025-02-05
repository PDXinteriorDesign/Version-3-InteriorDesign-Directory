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
    cities: [losAngeles, sanFrancisco, sanDiego, irvine, sanJose]
  },
  oregon: {
    name: 'Oregon',
    slug: 'oregon',
    cities: [portland, eugene, bend, hillsboro]
  },
  washington: {
    name: 'Washington',
    slug: 'washington',
    cities: [seattle, bellevue, kirkland, vancouver, ridgefield]
  },
  nevada: {
    name: 'Nevada',
    slug: 'nevada',
    cities: [lasVegas, reno, henderson]
  },
  arizona: {
    name: 'Arizona',
    slug: 'arizona',
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