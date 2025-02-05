import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoutes } from './routes';
import { approvePendingListings } from './lib/firebase/listings';

const App: React.FC = () => {
  useEffect(() => {
    const autoApproveListings = async () => {
      try {
        console.log("Checking and approving pending listings...");
        await approvePendingListings();
        console.log("Pending listings approved successfully.");
      } catch (error) {
        console.error("Error auto-approving pending listings:", error);
      }
    };

    autoApproveListings();
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-sage-50">
          <Routes>
            {AppRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;