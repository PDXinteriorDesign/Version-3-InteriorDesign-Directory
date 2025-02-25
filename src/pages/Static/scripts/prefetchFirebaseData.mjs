// src/pages/Static/scripts/improved-prefetchFirebaseData.mjs
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

// For __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Firebase configuration - use environment variables in a real setup
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY || "AIzaSyBDfrnAEgZMnNhJ_YC2E_bixTnaWf3RdgU",
  authDomain: process.env.FIREBASE_AUTH_DOMAIN || "interiordesigndirectory-515f6.firebaseapp.com",
  projectId: process.env.FIREBASE_PROJECT_ID || "interiordesigndirectory-515f6",
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET || "interiordesigndirectory-515f6.firebasestorage.app",
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || "756396519184",
  appId: process.env.FIREBASE_APP_ID || "1:756396519184:web:ad18e3dd76038cc5f9ff95",
  measurementId: process.env.FIREBASE_MEASUREMENT_ID || "G-TW2P6R68FY"
};

// Complete list of US states with their proper slugs
const allStates = [
  { name: 'Alabama', slug: 'alabama' },
  { name: 'Alaska', slug: 'alaska' },
  { name: 'Arizona', slug: 'arizona' },
  { name: 'Arkansas', slug: 'arkansas' },
  { name: 'California', slug: 'california' },
  { name: 'Colorado', slug: 'colorado' },
  { name: 'Connecticut', slug: 'connecticut' },
  { name: 'Delaware', slug: 'delaware' },
  { name: 'Florida', slug: 'florida' },
  { name: 'Georgia', slug: 'georgia' },
  { name: 'Hawaii', slug: 'hawaii' },
  { name: 'Idaho', slug: 'idaho' },
  { name: 'Illinois', slug: 'illinois' },
  { name: 'Indiana', slug: 'indiana' },
  { name: 'Iowa', slug: 'iowa' },
  { name: 'Kansas', slug: 'kansas' },
  { name: 'Kentucky', slug: 'kentucky' },
  { name: 'Louisiana', slug: 'louisiana' },
  { name: 'Maine', slug: 'maine' },
  { name: 'Maryland', slug: 'maryland' },
  { name: 'Massachusetts', slug: 'massachusetts' },
  { name: 'Michigan', slug: 'michigan' },
  { name: 'Minnesota', slug: 'minnesota' },
  { name: 'Mississippi', slug: 'mississippi' },
  { name: 'Missouri', slug: 'missouri' },
  { name: 'Montana', slug: 'montana' },
  { name: 'Nebraska', slug: 'nebraska' },
  { name: 'Nevada', slug: 'nevada' },
  { name: 'New Hampshire', slug: 'new-hampshire' },
  { name: 'New Jersey', slug: 'new-jersey' },
  { name: 'New Mexico', slug: 'new-mexico' },
  { name: 'New York', slug: 'new-york' },
  { name: 'North Carolina', slug: 'north-carolina' },
  { name: 'North Dakota', slug: 'north-dakota' },
  { name: 'Ohio', slug: 'ohio' },
  { name: 'Oklahoma', slug: 'oklahoma' },
  { name: 'Oregon', slug: 'oregon' },
  { name: 'Pennsylvania', slug: 'pennsylvania' },
  { name: 'Rhode Island', slug: 'rhode-island' },
  { name: 'South Carolina', slug: 'south-carolina' },
  { name: 'South Dakota', slug: 'south-dakota' },
  { name: 'Tennessee', slug: 'tennessee' },
  { name: 'Texas', slug: 'texas' },
  { name: 'Utah', slug: 'utah' },
  { name: 'Vermont', slug: 'vermont' },
  { name: 'Virginia', slug: 'virginia' },
  { name: 'Washington', slug: 'washington' },
  { name: 'West Virginia', slug: 'west-virginia' },
  { name: 'Wisconsin', slug: 'wisconsin' },
  { name: 'Wyoming', slug: 'wyoming' }
];

async function prefetchData() {
  try {
    console.log('Starting Firebase data prefetch...');

    // Create the data directory if it doesn't exist
    const dataDir = join(__dirname, '../../../src/data/prefetched');
    if (!existsSync(dataDir)) {
      mkdirSync(dataDir, { recursive: true });
      console.log(`Created directory: ${dataDir}`);
    }

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    const listingsCollection = collection(db, 'listings');
    // Only get approved listings
    const listingsQuery = query(listingsCollection, where('status', '==', 'approved'));

    console.log('Fetching approved listings from Firebase...');
    const listingsSnapshot = await getDocs(listingsQuery);
    console.log(`Retrieved ${listingsSnapshot.size} listings from Firebase`);

    if (listingsSnapshot.empty) {
      console.warn('No approved listings found in Firebase!');
    }

    const stateMap = {};
    
    // Initialize all states with empty arrays
    allStates.forEach(state => {
      stateMap[state.name] = [];
    });

    // Process each listing and assign to the appropriate state
    listingsSnapshot.forEach(doc => {
      try {
        const listing = { id: doc.id, ...doc.data() };
        const state = listing.businessLocation?.state;
        
        if (state) {
          // First try exact match
          let matchedState = allStates.find(s => s.name === state);
          
          // If no exact match, try case-insensitive match
          if (!matchedState) {
            matchedState = allStates.find(s => 
              s.name.toLowerCase() === state.toLowerCase() ||
              s.slug === state.toLowerCase().replace(/\s+/g, '-')
            );
          }
          
          if (matchedState) {
            // Clean up the listing data to remove any circular references
            const cleanListing = JSON.parse(JSON.stringify(listing));
            stateMap[matchedState.name].push(cleanListing);
          } else {
            console.warn(`Unrecognized state in listing ${listing.id}: ${state}`);
          }
        } else {
          console.warn(`Listing ${listing.id} has no state information`);
        }
      } catch (err) {
        console.error(`Error processing listing doc:`, err);
      }
    });

    const statesWithData = [];

    // Save data for each state
    for (const state of allStates) {
      const listings = stateMap[state.name] || [];
      const filePath = join(dataDir, `${state.slug}.json`);

      // Make sure we have valid JSON
      try {
        // Test parse
        JSON.stringify(listings);
        
        writeFileSync(filePath, JSON.stringify(listings, null, 2));
        console.log(`Saved ${listings.length} listings for ${state.name} to ${filePath}`);

        statesWithData.push({ 
          name: state.name, 
          slug: state.slug, 
          count: listings.length 
        });
      } catch (error) {
        console.error(`Error saving data for ${state.name}:`, error);
      }
    }

    const stateIndexPath = join(dataDir, 'states-index.json');
    writeFileSync(stateIndexPath, JSON.stringify(statesWithData, null, 2));
    console.log(`Saved state index with ${statesWithData.length} states to ${stateIndexPath}`);

    console.log('✅ Firebase data prefetch completed successfully!');
    
    // Summarize states with data
    const statesWithListings = statesWithData.filter(state => state.count > 0);
    console.log(`States with listings (${statesWithListings.length}):`);
    statesWithListings.forEach(state => {
      console.log(`  - ${state.name}: ${state.count} listings`);
    });
    
  } catch (error) {
    console.error('❌ Error during prefetch:', error);
    process.exit(1);
  }
}

prefetchData();




