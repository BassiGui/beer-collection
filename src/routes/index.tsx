import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/beers/new" element={} /> */}
    </Routes>
  );
};

export default AppRoutes;
