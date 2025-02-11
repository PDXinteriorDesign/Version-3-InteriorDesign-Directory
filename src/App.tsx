import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoutes } from './routes';

const App: React.FC = () => {

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