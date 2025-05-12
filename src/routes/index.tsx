import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { BeerForm } from '../features/beer-management/components/BeerForm/BeerForm';
import Home from '../pages/Home';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/beers/new" element={<BeerForm />} />
    </Routes>
  );
};

export default AppRoutes;
