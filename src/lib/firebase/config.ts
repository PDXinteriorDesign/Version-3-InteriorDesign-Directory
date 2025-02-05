import { initializeApp } from 'firebase/app';
import { getFirestore, enableMultiTabIndexedDbPersistence } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyBDfrnAEgZMnNhJ_YC2E_bixTnaWf3RdgU",
  authDomain: "interiordesigndirectory-515f6.firebaseapp.com",
  projectId: "interiordesigndirectory-515f6",
  storageBucket: "interiordesigndirectory-515f6.firebasestorage.app",
  messagingSenderId: "756396519184",
  appId: "1:756396519184:web:ad18e3dd76038cc5f9ff95",
  measurementId: "G-TW2P6R68FY"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const db = getFirestore(app);

// Enable persistence
enableMultiTabIndexedDbPersistence(db).catch((err) => {
  if (err.code === 'failed-precondition') {
    // Multiple tabs open, persistence can only be enabled in one tab at a time.
    console.warn('Firebase persistence failed: Multiple tabs open');
  } else if (err.code === 'unimplemented') {
    // The current browser doesn't support persistence
    console.warn('Firebase persistence not available');
  }
});

export const storage = getStorage(app);
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

export default app;