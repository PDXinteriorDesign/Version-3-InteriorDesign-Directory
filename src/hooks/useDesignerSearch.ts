import { useState, useEffect } from 'react';
import { Designer, SearchFilters } from '../types';
import { calculateDistance } from '../utils/location';

interface SearchResults {
  designers: Designer[];
  nearbyDesigners: Designer[];
  loading: boolean;
  error: string | null;
}

export const useDesignerSearch = (
  allDesigners: Designer[],
  filters: SearchFilters
): SearchResults => {
  const [results, setResults] = useState<SearchResults>({
    designers: allDesigners,
    nearbyDesigners: [],
    loading: false,
    error: null
  });

  useEffect(() => {
    const searchDesigners = async () => {
      setResults(prev => ({ ...prev, loading: true, error: null }));

      try {
        let filteredDesigners = [...allDesigners];

        // Filter by location if provided
        if (filters.location) {
          const locationLower = filters.location.toLowerCase();
          filteredDesigners = filteredDesigners.filter(designer =>
            designer.location.toLowerCase().includes(locationLower)
          );
        }

        // Filter by zip code if provided
        if (filters.zipCode) {
          // Remove any non-numeric characters and spaces
          const cleanZip = filters.zipCode.replace(/[^0-9]/g, '');
          
          if (cleanZip.length > 0) {
            filteredDesigners = filteredDesigners.filter(designer => {
              // Extract zip code from designer location (assuming format "City, State ZIP")
              const designerZip = designer.location.match(/\d{5}/)?.[0] || '';
              return designerZip.startsWith(cleanZip);
            });
          }
        }

        // Get nearby designers if geolocation is enabled
        let nearbyResults: Designer[] = [];
        if (filters.coordinates && filters.radius) {
          nearbyResults = allDesigners.filter(designer => {
            if (designer.coordinates) {
              const distance = calculateDistance(
                filters.coordinates!.lat,
                filters.coordinates!.lng,
                designer.coordinates.lat,
                designer.coordinates.lng
              );
              return distance <= filters.radius!;
            }
            return false;
          });
        }

        if (filteredDesigners.length === 0 && nearbyResults.length === 0) {
          setResults({
            designers: [],
            nearbyDesigners: [],
            loading: false,
            error: 'No designers found matching your criteria. Try adjusting your search.'
          });
        } else {
          setResults({
            designers: filteredDesigners,
            nearbyDesigners: nearbyResults,
            loading: false,
            error: null
          });
        }
      } catch (error) {
        setResults({
          designers: [],
          nearbyDesigners: [],
          loading: false,
          error: 'Error searching designers. Please try again.'
        });
      }
    };

    searchDesigners();
  }, [allDesigners, filters]);

  return results;
};