import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { BeerForm } from '../features/beer-management/components/BeerForm/BeerForm';
import EditBeer from '../pages/EditBeer';
import Home from '../pages/Home';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/beers/new" element={<BeerForm />} />
      <Route path="/beers/edit/:id" element={<EditBeer />} />
    </Routes>
  );
};

export default AppRoutes;
