import { useBeer } from '../../hooks/useBeer';
import { BeerCard } from '../BeerCard';

import styles from './BeerList.module.css';

export const BeerList = () => {
  const { beers: filteredBeers, isLoading, error, handleRemoveBeer, handleUpdateBeer } = useBeer();

  if (isLoading) {
    return <div className={styles.message}>Carregando...</div>;
  }

  if (error) {
    return <div className={styles.message}>{error}</div>;
  }

  if (filteredBeers.length === 0) {
    return <div className={styles.message}>Nenhuma cerveja encontrada</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {filteredBeers.map((beer) => (
          <BeerCard
            key={beer.id}
            beer={beer}
            onRemove={handleRemoveBeer}
            onUpdate={handleUpdateBeer}
          />
        ))}
      </div>
    </div>
  );
};
