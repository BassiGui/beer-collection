import { Beer } from '../../../api/types/beer';

export interface BeerSlice {
  beers: Beer[];
  isLoading: boolean;
  error: string | null;
  search: string;
  sortOrder: 'asc' | 'desc' | null;
  setBeers: (beers: Beer[]) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
  setSearch: (search: string) => void;
  setSortOrder: (sortOrder: 'asc' | 'desc' | null) => void;
}
