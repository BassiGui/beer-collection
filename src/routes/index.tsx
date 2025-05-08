import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Beers from '../pages/Beers';
import Home from '../pages/Home';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/beers" element={<Beers />} />
    </Routes>
  );
};

export default AppRoutes;
