import { Location } from '../types/location';
import { portland } from './cities/oregon/portland';
import { beaverton } from './cities/oregon/beaverton';
import { gresham } from './cities/oregon/gresham';
import { eugene } from './cities/oregon/eugene';
import { salem } from './cities/oregon/salem';
import { bend } from './cities/oregon/bend';
import { redmond } from './cities/oregon/redmond';
import { medford } from './cities/oregon/medford';
import { ashland } from './cities/oregon/ashland';
import { astoria } from './cities/oregon/astoria';
import { newport } from './cities/oregon/newport';
import { pendleton } from './cities/oregon/pendleton';
import { laGrande } from './cities/oregon/la-grande';

export const oregon: Location = {
  state: 'Oregon',
  stateSlug: 'oregon',
  metaDescription: 'Connect with Oregon\'s finest interior designers. From Portland\'s urban chic to Bend\'s mountain modern, find the perfect designer for your Pacific Northwest home.',
  popularDesignStyles: [
    'Pacific Northwest Modern',
    'Eco-Friendly',
    'Contemporary',
    'Mountain Modern',
    'Coastal'
  ],
  averageCost: '$125-275/hour',
  cities: [
    portland,
    beaverton,
    gresham,
    eugene,
    salem,
    bend,
    redmond,
    medford,
    ashland,
    astoria,
    newport,
    pendleton,
    laGrande
  ]
};