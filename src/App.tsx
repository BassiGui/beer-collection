import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Navbar from './components/Navbar';
import AppRoutes from './routes';
import './App.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <main style={{ padding: '2rem' }}>
          <AppRoutes />
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
