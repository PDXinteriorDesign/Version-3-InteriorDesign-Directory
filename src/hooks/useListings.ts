import { useState, useEffect} from 'react';
import { getListings } from '../lib/firebase/listings';
import { initializePersistence } from '../lib/firebase/persistence';
import { ListingData } from '../types/listing';

interface UseListingsProps {
  status?: string;
  location?: string;
}

export const useListings = ({ status = undefined, location }: UseListingsProps = {}) => {
  const [listings, setListings] = useState<(ListingData & { id: string })[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        setLoading(true);

        // Initialize persistence
        await initializePersistence();

        // Fetch listings
        const data = await getListings({ status, location });

        if (!Array.isArray(data)) {
          throw new Error('Unexpected data format received from getListings.');
        }

        setListings(data);
        setError(null);
      } catch (err: any) {
        console.error('Error in useListings hook:', err);
        setError(err.message || 'Failed to fetch listings. Please try again.');
      } finally {
        setLoading(false);
      }
    };



    
    fetchListings();
  }, [status, location]);
  return { listings, loading, error };
 
};
