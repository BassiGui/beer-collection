import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../../../../shared/components/Button';

import styles from './BeerDetails.module.css';
import { BeerDetailsProps } from './types';

export const BeerDetails: FC<BeerDetailsProps> = ({ beerName, liters, onDelete, onUpdate }) => {
  return (
    <div className={styles.body}>
      <h2>{beerName}</h2>
      <p>{liters} Liters</p>
      <div className={styles.buttons}>
        <Button
          onClick={() => {
            onDelete();
          }}
          variant="secondary"
          aria-label={`Remove ${beerName}`}
        >
          Remove
        </Button>
        <Link to="/update-beer" aria-label={`Update ${beerName}`}>
          <Button
            onClick={() => {
              onUpdate();
            }}
            variant="primary"
          >
            Update
          </Button>
        </Link>
      </div>
    </div>
  );
};
