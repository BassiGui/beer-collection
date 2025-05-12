import { useStore } from '../../store/index';
import { beerService } from '../services/beerService';
import { Beer } from '../types/beer';

export const useBeerUseCase = () => {
  const store = useStore();

  const fetchBeers = async () => {
    store.setLoading(true);
    store.setError(null);
    try {
      const beers = await beerService.getAllBeers();
      store.setBeers(beers);
      store.setLoading(false);
    } catch (error) {
      store.setError('Erro ao carregar cervejas');
      store.setLoading(false);
      console.error('Erro ao carregar cervejas:', error);
    }
  };

  const handleAddBeer = async (beer: Beer) => {
    store.setLoading(true);
    store.setError(null);
    try {
      const newBeer = await beerService.addBeer(beer);
      store.setBeers([...store.beers, newBeer]);
      store.setLoading(false);
    } catch (error) {
      store.setError('Erro ao adicionar cerveja');
      store.setLoading(false);
      console.error('Erro ao adicionar cerveja:', error);
    }
  };

  const handleRemoveBeer = async (id: string) => {
    store.setLoading(true);
    store.setError(null);
    try {
      await beerService.removeBeer(id);
      store.setBeers(store.beers.filter((beer) => beer.id !== id));
      store.setLoading(false);
    } catch (error) {
      store.setError('Erro ao remover cerveja');
      store.setLoading(false);
      console.error('Erro ao remover cerveja:', error);
    }
  };

  const handleUpdateBeer = async (id: string, beer: Beer) => {
    store.setLoading(true);
    store.setError(null);
    try {
      const updatedBeer = await beerService.updateBeer(id, beer);
      store.setBeers(store.beers.map((b) => (b.id === id ? updatedBeer : b)));
      store.setLoading(false);
    } catch (error) {
      store.setError('Erro ao atualizar cerveja');
      store.setLoading(false);
      console.error('Erro ao atualizar cerveja:', error);
    }
  };

  const handleGetBeer = async (id: string) => {
    store.setLoading(true);
    store.setError(null);
    try {
      const beer = await beerService.getBeerById(id);
      return beer;
    } catch (error) {
      store.setError('Erro ao buscar cerveja');
      store.setLoading(false);
      console.error('Erro ao buscar cerveja:', error);
    }
  };

  return {
    fetchBeers,
    handleAddBeer,
    handleRemoveBeer,
    handleUpdateBeer,
    handleGetBeer,
  };
};
