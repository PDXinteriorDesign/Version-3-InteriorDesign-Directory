import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  orderBy,
  QueryConstraint,
} from "firebase/firestore";
import { db } from "./config";

// Define the structure of a listing document
export interface ListingData {
  id?: string; // Firestore document ID (optional on creation)
  status: string;
  businessInfo?: {
    location: string;
  };
  createdAt: string;
  updatedAt: string;
}

const LISTINGS_COLLECTION = "listings";

/**
 * Creates a new listing in Firestore.
 * @param {ListingData} data - The data for the new listing.
 * @returns {string} The ID of the created listing.
 */
export const createListing = async (data: ListingData): Promise<string> => {
  try {
    const docRef = await addDoc(collection(db, LISTINGS_COLLECTION), {
      ...data,
      status: "pending", // Default status
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
    return docRef.id;
  } catch (error) {
    console.error("Error creating listing:", error);
    throw error;
  }
};

/**
 * Fetches listings from Firestore with optional filters.
 * @param {Object} filters - Filters for the query.
 * @param {string} [filters.status] - Filter by status.
 * @param {string} [filters.location] - Filter by location.
 * @returns {Promise<ListingData[]>} An array of listings.
 */
export const getListings = async (
  filters?: { status?: string; location?: string }
): Promise<ListingData[]> => {
  try {
    const constraints: QueryConstraint[] = [];
    const listingsRef = collection(db, LISTINGS_COLLECTION);

    // Apply filters
    if (filters?.status) {
      if (Array.isArray(filters.status)) {
        constraints.push(where("status", "in", filters.status));
      } else {
        constraints.push(where("status", "==", filters.status));
      }
    }
    console.log("Filters oh filter please:", filters); 
    if (filters?.location) {
      constraints.push(where("businessInfo.location", "==", filters.location));
    }

    // Add default ordering
    constraints.push(orderBy("createdAt", "desc"));

    // Create the query
    const q = query(listingsRef, ...constraints);

    // Execute the query
    const snapshot = await getDocs(q);
    console.log("Fetched Documents:", snapshot.docs.map((doc) => doc.data()));


    // Map Firestore documents to ListingData objects
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    } as ListingData));
  } catch (error: any) {
    if (error.code === "failed-precondition") {
      console.error(
        "Composite index required. Visit this link to create it:",
        error.message
      );
    } else if (error.code === "permission-denied") {
      console.error("Permission denied. Check your Firestore rules:", error.message);
    } else {
      console.error("Error fetching listings:", error.message);
    }

    // Fallback logic: Fetch all and filter locally
    console.warn("Fallback: Fetching all listings and filtering locally.");
    try {
      const snapshot = await getDocs(collection(db, LISTINGS_COLLECTION));
      return snapshot.docs
        .map((doc) => ({ id: doc.id, ...doc.data() } as ListingData))
        .filter(
          (doc) =>
            (!filters?.status || doc.status === filters.status) &&
            (!filters?.location || doc.businessInfo?.location === filters.location)
        )
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    } catch (fallbackError) {
      console.error("Fallback also failed:", fallbackError);
      throw fallbackError;
    }
  }
};

