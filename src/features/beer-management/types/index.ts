import { Beer } from '../../../api/types/beer';

export interface BeerFormData {
  id: string;
  name: string;
  description: string;
  type: string;
  liters: number;
  image: string;
  price: number;
  rating: number;
}

export interface BeerFormProps {
  initialData?: Beer;
  isEditing?: boolean;
}
