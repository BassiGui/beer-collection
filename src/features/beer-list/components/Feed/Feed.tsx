import { FC } from 'react';

import { useBeer } from '../../hooks/useBeer';
import { BeerFilter } from '../BeerFilter';
import { BeerList } from '../BeerList';

export const Feed: FC = () => {
  const { beers: filteredBeers } = useBeer();

  return (
    <>
      <h1 className="title">List of beers</h1>
      {filteredBeers.length > 0 && <BeerFilter />}
      <BeerList />
    </>
  );
};
