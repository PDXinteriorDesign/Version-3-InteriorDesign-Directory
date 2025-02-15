import {
  collection,
  addDoc,
  doc,
  getDocs,
  getDoc,
  query,
  where,
  orderBy,
  QueryConstraint,
} from "firebase/firestore";
import { db } from "./config";

export interface ListingData {
  id?: string; // Firestore document ID (optional on creation)
  status: string;
  businessInfo?: {
    location?: string;
  };
  businessLocation?: {
    city?: string;
    state?: string;
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
 * Fetches a single listing from Firestore by ID.
 * @param {string} id - The ID of the listing.
 * @returns {Promise<ListingData | null>} The listing data or null if not found.
 */
export const getListingById = async (id: string): Promise<ListingData | null> => {
  try {
    const docRef = doc(db, "listings", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("✅ Document found:", docSnap.data());
      return { id: docSnap.id, ...docSnap.data() } as ListingData;
    } else {
      console.log("❌ Document does NOT exist for ID:", id);
      return null;
    }
  } catch (error) {
    console.error("Error fetching listing by ID:", error);
    return null;
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
  filters?: { status?: string; city?: string; state?: string }
): Promise<ListingData[]> => {
  console.log("🚀 getListings CALLED with filters:", filters);
  try {
    const constraints: QueryConstraint[] = [];
    const listingsRef = collection(db, LISTINGS_COLLECTION);

    // Apply filters
    if (filters?.status) {
      constraints.push(where("status", "==", filters.status));
    }

    if (filters?.city) {
      constraints.push(where("businessLocation.city", "==", filters.city));
    }

    if (filters?.state) {
      constraints.push(where("businessLocation.state", "==", filters.state));
    }

    // Add default ordering
    constraints.push(orderBy("createdAt", "desc"));

    // Create the query
    const q = query(listingsRef, ...constraints);

    // Execute the query
    const snapshot = await getDocs(q);
    console.log(`🔥 Query executed, ${snapshot.docs.length} documents fetched`);

    snapshot.docs.forEach((doc) => {
      console.log(`📄 Document ID: ${doc.id}`, JSON.stringify(doc.data(), null, 2));
    });

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    } as ListingData));
  } catch (error: any) {
    console.error("🔥 ERROR fetching listings:", error);

    if (error.code === "failed-precondition") {
      console.error("⚠️ Composite index required:", error.message);
    } else if (error.code === "permission-denied") {
      console.error("🚫 Permission denied:", error.message);
    } else {
      console.error("❌ Unexpected error:", error.message);
    }

    console.warn("⚠️ Fallback: Fetching all listings and filtering locally.");
    try {
      const snapshot = await getDocs(collection(db, LISTINGS_COLLECTION));
      return snapshot.docs
        .map((doc) => ({ id: doc.id, ...doc.data() } as ListingData))
        .filter(
          (doc) =>
            (!filters?.status || doc.status === filters.status) &&
            (!filters?.city || doc.businessLocation?.city === filters.city) &&
            (!filters?.state || doc.businessLocation?.state === filters.state)
        )
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    } catch (fallbackError) {
      console.error("🔥 Fallback also failed:", fallbackError);
      throw fallbackError;
    }
  }
};
