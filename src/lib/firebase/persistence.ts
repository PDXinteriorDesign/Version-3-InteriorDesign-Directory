import { enableIndexedDbPersistence } from 'firebase/firestore';
import { db } from './config';

let persistenceInitialized = false;

export const initializePersistence = async () => {
  if (persistenceInitialized) return;
  
  try {
    await enableIndexedDbPersistence(db);
    persistenceInitialized = true;
  } catch (err: any) {
    if (err.code === 'failed-precondition') {
      // Multiple tabs open, persistence can only be enabled in one tab at a time
      console.warn('Firebase persistence failed: Multiple tabs open');
    } else if (err.code === 'unimplemented') {
      // The current browser doesn't support persistence
      console.warn('Firebase persistence not available');
    }
  }
};