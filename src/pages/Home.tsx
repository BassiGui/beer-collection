import React from 'react';

import { Feed } from '../features/beer-list/components/Feed';

const Home: React.FC = () => {
  return (
    <div className="container mainContainer">
      <Feed />
    </div>
  );
};

export default Home;
