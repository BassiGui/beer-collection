export interface BeerDetailsProps {
  beerName: string;
  liters: number;
  onDelete: () => void;
  onUpdate: () => void;
}
