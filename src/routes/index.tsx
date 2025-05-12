import React from 'react';
import { Routes, Route } from 'react-router-dom';

import CreateBeer from '../pages/CreateBeer';
import EditBeer from '../pages/EditBeer';
import Home from '../pages/Home';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/beers/new" element={<CreateBeer />} />
      <Route path="/beers/edit/:id" element={<EditBeer />} />
    </Routes>
  );
};

export default AppRoutes;
