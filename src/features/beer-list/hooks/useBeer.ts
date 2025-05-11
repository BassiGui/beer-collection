import { useEffect, useMemo } from 'react';

import { useBeerUseCase } from '../../../api/useCases/beerUseCase';
import { useStore } from '../../../store';

export const useBeer = () => {
  const { beers, isLoading, error, search, sortOrder, setSearch, setSortOrder } = useStore();

  const { fetchBeers, handleAddBeer, handleRemoveBeer, handleUpdateBeer } = useBeerUseCase();

  useEffect(() => {
    fetchBeers();
  }, []);

  const filteredBeers = useMemo(() => {
    let result = [...beers];

    if (search) {
      const searchLower = search.toLowerCase();
      result = result.filter((beer) => beer.name.toLowerCase().includes(searchLower));
    }

    if (sortOrder) {
      result.sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        if (sortOrder === 'asc') {
          return nameA.localeCompare(nameB);
        }
        return nameB.localeCompare(nameA);
      });
    }

    return result;
  }, [beers, search, sortOrder]);

  return {
    beers: filteredBeers,
    isLoading,
    error,
    search,
    sortOrder,
    onSearchChange: setSearch,
    onSortChange: setSortOrder,
    handleAddBeer,
    handleRemoveBeer,
    handleUpdateBeer,
  };
};
