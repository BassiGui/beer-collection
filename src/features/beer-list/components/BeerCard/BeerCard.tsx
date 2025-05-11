import { Button } from '../../../../shared/components/Button';
import { BeerCardProps } from '../../types';

import styles from './BeerCard.module.css';

export const BeerCard = ({ beer, onRemove, onUpdate }: BeerCardProps) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={beer.image} alt={beer.name} />
      <div className={styles.info}>
        <h3 className={styles.name}>{beer.name}</h3>
        <p>{beer.liters}L</p>
      </div>
      <div className={styles.actions}>
        <Button
          variant="primary"
          onClick={() => {
            onUpdate(beer.id, beer);
          }}
        >
          Editar
        </Button>
        <Button
          variant="secondary"
          onClick={() => {
            onRemove(beer.id);
          }}
        >
          Remover
        </Button>
      </div>
    </div>
  );
};
