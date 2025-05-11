import { FC, ChangeEvent } from 'react';

import { Button } from '../../../../shared/components/Button';
import { Input } from '../../../../shared/components/Input';
import { useBeer } from '../../hooks/useBeer';

import styles from './BeerFilter.module.css';

export const BeerFilter: FC = () => {
  const { search, sortOrder, onSearchChange, onSortChange } = useBeer();

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value);
  };

  const handleSort = (order: 'asc' | 'desc' | null) => {
    onSortChange(order);
  };

  return (
    <div className={styles.filterContainer}>
      <div className={styles.searchContainer}>
        <Input
          name="search"
          type="text"
          value={search}
          placeholder="Busque por nome"
          label="Buscar por nome"
          onChange={handleSearch}
        />
      </div>
      <div className={styles.sortContainer}>
        <p className={styles.sortText}>Ordenar por:</p>
        <div className={styles.sortButtons}>
          <Button
            variant={sortOrder === 'asc' ? 'primary' : 'secondary'}
            onClick={() => {
              handleSort(sortOrder === 'asc' ? null : 'asc');
            }}
            aria-pressed={sortOrder === 'asc'}
          >
            Nome A-Z
          </Button>
          <Button
            variant={sortOrder === 'desc' ? 'primary' : 'secondary'}
            onClick={() => {
              handleSort(sortOrder === 'desc' ? null : 'desc');
            }}
            aria-pressed={sortOrder === 'desc'}
          >
            Nome Z-A
          </Button>
        </div>
      </div>
    </div>
  );
};
