import { create } from 'zustand';

import { createBeerSlice } from './slices/beerSlice/beerSlice';
import { Store } from './types';

export const useStore = create<Store>()((...args) => ({
  ...createBeerSlice(...args),
}));
