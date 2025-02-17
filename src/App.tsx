import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoutes } from './routes';
import { LoadScript } from '@react-google-maps/api';


const GOOGLE_MAPS_API_KEY = 'AIzaSyBfb9JewVfyW_H-a4yAJe8zQPPOD-i2Ysc';
const libraries: ("places")[] = ["places"];

const App: React.FC = () => {

  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY} libraries={libraries}
      loadingElement={<></>}
    >
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
    </LoadScript>
  );
};

export default App;