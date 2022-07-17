import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { LoginPage } from './pages';
import { MainPage } from './pages';
import { PrivateRoute } from './routes/PrivateRoute';


function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route
        path="/main"
        element={
          <PrivateRoute>
            <MainPage />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<Navigate to={'/'} replace />} />
    </Routes>
  )
}

export default App;
