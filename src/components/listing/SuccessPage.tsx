import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const SuccessPage: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const state = location.state as { listingId?: string; businessName?: string };

    useEffect(() => {
        // Redirect to Designers page after 5 seconds
        const timer = setTimeout(() => {
            navigate('/designers');
        }, 5000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
            <div className="bg-white shadow-md rounded-lg p-8 max-w-md text-center">
                <h1 className="text-3xl font-bold mb-2">Success!</h1>
                <p className="text-lg mb-4">
                    Your listing for{' '}
                    <span className="font-semibold text-green-600">
                        {state?.businessName || 'your business'}
                    </span>{' '}
                    has been successfully submitted.
                </p>
                <p className="text-sm text-gray-600 mb-4">
                    Listing ID: <span className="font-mono text-gray-800">{state?.listingId || 'N/A'}</span>
                </p>
                <p className="text-sm text-gray-500">
                    Redirecting you to the Designers page in a moment...
                </p>
            </div>
        </div>
    );
};
