import api from '../config/axios';
import { Beer } from '../types/beer';

class BeerService {
  async getAllBeers(): Promise<Beer[]> {
    const response = await api.get<Beer[]>('/beers');
    return response.data;
  }

  async addBeer(beer: Beer): Promise<Beer> {
    const response = await api.post<Beer>('/beers', beer);
    return response.data;
  }

  async removeBeer(id: string): Promise<void> {
    await api.delete(`/beers/${id}`);
  }

  async updateBeer(id: string, beer: Beer): Promise<Beer> {
    const response = await api.put<Beer>(`/beers/${id}`, beer);
    return response.data;
  }
}

export const beerService = new BeerService();
export default beerService;
