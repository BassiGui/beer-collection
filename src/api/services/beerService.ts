import api from '../config/axios';
import { Beer } from '../types/beer';

class BeerService {
  async getAllBeers(): Promise<Beer[]> {
    const response = await api.get<Beer[]>('/beers');
    return response.data;
  }
}

export const beerService = new BeerService();
export default beerService;
