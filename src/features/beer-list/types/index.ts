import { Beer } from '../../../api/types/beer';

export interface BeerCardProps {
  beer: Beer;
  onRemove: (id: string) => void;
  onUpdate: (id: string, beer: Beer) => void;
}

export interface BeerFilter {
  search: string;
  sortOrder: 'asc' | 'desc' | null;
}
