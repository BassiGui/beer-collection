import { StateCreator } from 'zustand';

import { Beer } from '../../../api/types/beer';

import { BeerSlice } from './types';

export const createBeerSlice: StateCreator<BeerSlice> = (set) => ({
  beers: [],
  isLoading: false,
  error: null,
  search: '',
  sortOrder: null,
  setBeers: (beers: Beer[]) => {
    set({ beers });
  },
  setLoading: (isLoading: boolean) => {
    set({ isLoading });
  },
  setError: (error: string | null) => {
    set({ error });
  },
  setSearch: (search: string) => {
    set({ search });
  },
  setSortOrder: (sortOrder: 'asc' | 'desc' | null) => {
    set({ sortOrder });
  },
});
