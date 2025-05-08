import { create } from 'zustand';

import { beerService } from '../api/services/beerService';

import { BeerStore } from './types';

export const useBeerStore = create<BeerStore>((set) => ({
  beers: [],
  loading: false,
  error: null,

  fetchBeers: async () => {
    set({ loading: true, error: null });
    try {
      const data = await beerService.getAllBeers();
      set({ beers: data, loading: false });
    } catch (error) {
      console.error('Erro ao carregar cervejas:', error);
      set({ error: 'Erro ao carregar cervejas', loading: false });
    }
  },

  addBeer: (beer) => {
    set((state) => ({
      beers: [...state.beers, beer],
    }));
  },

  removeBeer: (id) => {
    set((state) => ({
      beers: state.beers.filter((beer) => beer.id !== id),
    }));
  },
}));
