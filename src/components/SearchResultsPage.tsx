import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/Navbar';
import { SearchBar } from './SearchBar';
import { SearchResults } from './SearchResults';
import { Designer, SearchFilters } from '../types';
import { getDesignersByLocation } from '../lib/firebase/listings';

const SearchResultsPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [designers, setDesigners] = useState<Designer[]>([]);
    const [nearbyDesigners, setNearbyDesigners] = useState<Designer[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [userCoords, setUserCoords] = useState<{ lat: number; lng: number } | undefined>();
    const [locationPermission, setLocationPermission] = useState<boolean | undefined>();
    const [currentLocation, setCurrentLocation] = useState<string>('');
    const [currentState, setCurrentState] = useState<string>('');

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
        const location = searchParams.get('location');
        const zipCode = searchParams.get('zipCode');
        const lat = searchParams.get('lat');
        const lng = searchParams.get('lng');

        if (location && lat && lng) {
            const geocoder = new google.maps.Geocoder();
            const latlng = { lat: parseFloat(lat), lng: parseFloat(lng) };

            geocoder.geocode({ location: latlng }, async (results, status) => {
                if (status === 'OK' && results?.[0]) {
                    const place = results[0];
                    const cityComponent = place.address_components?.find(comp =>
                        comp.types.includes('locality')
                    );
                    const stateComponent = place.address_components?.find(comp =>
                        comp.types.includes('administrative_area_level_1')
                    );

                    const city = cityComponent?.long_name;
                    const state = stateComponent?.long_name;

                    if (city && state) {
                        setCurrentLocation(city);
                        setCurrentState(state);
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
        const miles = km * 0.621371;
        return `${miles.toFixed(1)} mi`;
    };


    const handleSearch = async (filters: SearchFilters) => {
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
                        const cityComponent = place.address_components?.find(comp =>
                            comp.types.includes('locality')
                        );
                        const stateComponent = place.address_components?.find(comp =>
                            comp.types.includes('administrative_area_level_1')
                        );

                        const city = cityComponent?.long_name;
                        const state = stateComponent?.long_name;

                        if (city && state) {
                            setCurrentLocation(city);
                            setCurrentState(state);

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

                            // Create new URLSearchParams object
                            const newSearchParams = new URLSearchParams(searchParams);

                            const processedDesigners = results.map(designer => {
                                if (userCoords && designer.coordinates) {
                                    const distance = calculateDistance(
                                        userCoords.lat,
                                        userCoords.lng,
                                        designer.coordinates.lat,
                                        designer.coordinates.lng
                                    );

                                    // Store the distance in URL params
                                    newSearchParams.set(`distance-${designer.id}`, distance);

                                    return { ...designer, distance };
                                }
                                return designer;
                            });

                            // Update URL params with all distances
                            setSearchParams(newSearchParams);

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

    return (
        <div className="min-h-screen bg-gray-50">
            <Helmet>
                <title>
                    {currentLocation
                        ? `Interior Designers in ${currentLocation} | The Design Refuge`
                        : 'Find Interior Designers | The Design Refuge'}
                </title>
            </Helmet>

            <Navbar />

            <div className="max-w-7xl mx-auto px-4 py-12">
                {currentLocation && (
                    <div className="mb-8">
                        <nav className="flex" aria-label="Breadcrumb">
                            <ol className="flex items-center space-x-2">
                                <li><Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link></li>
                                <li className="text-gray-500">/</li>
                                <li><Link to="/designers" className="text-gray-500 hover:text-gray-700">Designers</Link></li>
                                {currentState && (
                                    <>
                                        <li className="text-gray-500">/</li>
                                        <li>
                                            <Link
                                                to={`/designers/${currentState.toLowerCase().replace(/\s+/g, '-')}`}
                                                className="text-gray-500 hover:text-gray-700"
                                            >
                                                {currentState}
                                            </Link>
                                        </li>
                                    </>
                                )}
                                {currentLocation && (
                                    <>
                                        <li className="text-gray-500">/</li>
                                        <li className="text-gray-900 font-medium">{currentLocation}</li>
                                    </>
                                )}
                            </ol>
                        </nav>
                    </div>
                )}

                <div className="bg-white rounded-xl shadow-sm mb-12">
                    <div className="p-8">
                        <h1 className="text-4xl font-serif mb-4">
                            {currentLocation && currentState
                                ? `Interior Designers in ${currentLocation}, ${currentState}`
                                : 'Find Interior Designers Near You'}
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mb-8">
                            {currentLocation
                                ? `Discover talented interior designers in ${currentLocation} who can help transform your space.`
                                : 'Search for interior designers in your area to help bring your vision to life.'}
                        </p>

                        <SearchBar
                            onSearch={handleSearch}
                            userCoords={userCoords}
                            initialLocation={searchParams.get('location') || ''}
                            initialZipCode={searchParams.get('zipCode') || ''}
                        />
                    </div>
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