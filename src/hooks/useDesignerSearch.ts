import { useState, useEffect } from 'react';
import { getDesignersByLocation, ListingData } from '../lib/firebase/listings';

interface SearchFilters {
  state?: string;
  city?: string;
}

interface SearchResults {
  designers: ListingData[];
  loading: boolean;
  error: string | null;
}

/**
 * Custom hook to search for designers based on location filters.
 * @param filters - Object containing 'state' and 'city' as optional search parameters.
 * @returns Object with designers array, loading state, and error message.
 */
export const useDesignerSearch = (filters: SearchFilters): SearchResults => {
  const [results, setResults] = useState<SearchResults>({
    designers: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchDesigners = async () => {
      setResults((prev) => ({ ...prev, loading: true, error: null }));

      try {
        if (filters.state || filters.city) {
          const designers = await getDesignersByLocation({
            state: filters.state,
            city: filters.city,
          });

          setResults({
            designers,
            loading: false,
            error: null,
          });
        } else {
          setResults({
            designers: [],
            loading: false,
            error: 'Please specify a location to search for designers.',
          });
        }
      } catch (error) {
        console.error('Error in useDesignerSearch:', error);
        setResults({
          designers: [],
          loading: false,
          error: 'Error fetching designers. Please try again.',
        });
      }
    };

    fetchDesigners();
  }, [filters.state, filters.city]); 

  return results;
};
