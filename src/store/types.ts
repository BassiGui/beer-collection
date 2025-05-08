import { Beer } from '../api/types/beer';

export interface BeerStore {
  beers: Beer[];
  loading: boolean;
  error: string | null;
  fetchBeers: () => Promise<void>;
  addBeer: (beer: Beer) => void;
  removeBeer: (id: number) => void;
}
