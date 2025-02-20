import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { SearchBar } from './SearchBar';
import { SearchResults } from './SearchResults';
import { Designer, SearchFilters } from '../types';
import { getDesignersByLocation } from '../lib/firebase/listings';

const SearchResultsPage = () => {
    const [searchParams] = useSearchParams();
    const [designers, setDesigners] = useState<Designer[]>([]);
    const [nearbyDesigners, setNearbyDesigners] = useState<Designer[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [userCoords, setUserCoords] = useState<{ lat: number; lng: number } | undefined>();
    const [locationPermission, setLocationPermission] = useState<boolean | undefined>();

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.permissions.query({ name: 'geolocation' }).then((result) => {
                setLocationPermission(result.state === 'granted');

                if (result.state === 'granted') {
                    navigator.geolocation.getCurrentPosition(
                        (position) => {
                            setUserCoords({
                                lat: position.coords.latitude,
                                lng: position.coords.longitude
                            });
                        },
                        (error) => console.error('Geolocation error:', error)
                    );
                }
            });
        }
    }, []);


    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setUserCoords({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    });
                },
                (error) => console.error('Geolocation error:', error)
            );
        }
    }, []);

    useEffect(() => {
        const location = searchParams.get('location');
        const zipCode = searchParams.get('zipCode');
        const lat = searchParams.get('lat');
        const lng = searchParams.get('lng');

        if (location && lat && lng) {
            // Use Google Places Geocoder to get the full location details
            const geocoder = new google.maps.Geocoder();
            const latlng = { lat: parseFloat(lat), lng: parseFloat(lng) };

            geocoder.geocode({ location: latlng }, async (results, status) => {
                if (status === 'OK' && results?.[0]) {
                    const place = results[0];

                    // Get city and state using the same method as SearchBar
                    const cityComponent = place.address_components?.find(comp =>
                        comp.types.includes('locality')
                    );
                    const stateComponent = place.address_components?.find(comp =>
                        comp.types.includes('administrative_area_level_1')
                    );

                    const city = cityComponent?.long_name;
                    const state = stateComponent?.long_name;

                    if (city && state) {
                        handleSearch({
                            location: `${city}, ${state}`,
                            zipCode: zipCode || '',
                            coordinates: { lat: parseFloat(lat), lng: parseFloat(lng) }
                        });
                    }
                }
            });
        }
    }, [searchParams]);

    const handleSearch = async (filters: SearchFilters) => {
        console.log('Starting search with filters:', filters);
        setLoading(true);
        setError(null);

        try {
            if (filters.coordinates) {
                const geocoder = new google.maps.Geocoder();
                const latlng = {
                    lat: filters.coordinates.lat,
                    lng: filters.coordinates.lng
                };

                geocoder.geocode({ location: latlng }, async (results, status) => {
                    if (status === 'OK' && results?.[0]) {
                        const place = results[0];

                        // Get city and state using the same method as SearchBar
                        const cityComponent = place.address_components?.find(comp =>
                            comp.types.includes('locality')
                        );
                        const stateComponent = place.address_components?.find(comp =>
                            comp.types.includes('administrative_area_level_1')
                        );

                        const city = cityComponent?.long_name;
                        const state = stateComponent?.long_name;  // This will be full state name

                        if (city && state) {
                            console.log(`Searching for designers in ${city}, ${state}`);

                            const results = await getDesignersByLocation({
                                city,
                                state
                            });

                            if (!results || results.length === 0) {
                                setError('No designers found in this location.');
                                setDesigners([]);
                                setNearbyDesigners([]);
                                return;
                            }

                            const processedDesigners = results.map(designer => {
                                if (userCoords && designer.coordinates) {
                                    const distance = calculateDistance(
                                        userCoords.lat,
                                        userCoords.lng,
                                        designer.coordinates.lat,
                                        designer.coordinates.lng
                                    );
                                    return { ...designer, distance };
                                }
                                return designer;
                            });

                            const exactMatches = processedDesigners.filter(designer =>
                                designer.businessLocation?.city?.toLowerCase() === city.toLowerCase() &&
                                designer.businessLocation?.state?.toLowerCase() === state.toLowerCase()
                            );

                            const nearby = processedDesigners.filter(designer =>
                                designer.businessLocation?.city?.toLowerCase() !== city.toLowerCase() ||
                                designer.businessLocation?.state?.toLowerCase() !== state.toLowerCase()
                            );

                            setDesigners(exactMatches);
                            setNearbyDesigners(nearby);
                        }
                    }
                });
            }
        } catch (error) {
            console.error('Search error:', error);
            setError('Error searching for designers. Please try again.');
            setDesigners([]);
            setNearbyDesigners([]);
        } finally {
            setLoading(false);
        }
    };

    const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
        const R = 6371;
        const dLat = (lat2 - lat1) * (Math.PI / 180);
        const dLon = (lon2 - lon1) * (Math.PI / 180);
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * (Math.PI / 180)) *
            Math.cos(lat2 * (Math.PI / 180)) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const km = R * c;
        return km.toFixed(1); // Distance in kilometers

    };


    return (
        <div className="min-h-screen bg-gradient-to-br from-sage-50 to-azure-50">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="mb-8 bg-white rounded-xl shadow-sm p-6">
                    <SearchBar
                        onSearch={handleSearch}
                        userCoords={userCoords}
                        initialLocation={searchParams.get('location') || ''}
                        initialZipCode={searchParams.get('zipCode') || ''}
                    />
                </div>

                <SearchResults
                    designers={designers}
                    nearbyDesigners={nearbyDesigners}
                    loading={loading}
                    error={error}
                    userLocationPermission={locationPermission}
                />
            </div>
        </div>
    );
};

export default SearchResultsPage;