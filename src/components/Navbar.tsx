import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#f8f9fa' }}>
      <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', margin: 0, padding: 0 }}>
        <li>
          <Link to="/" style={{ textDecoration: 'none', color: '#333' }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/beers" style={{ textDecoration: 'none', color: '#333' }}>
            Cervejas
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
