import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../Button';

import styles from './NoItem.module.css';
import { NoItemProps } from './types';

export const NoItem: FC<NoItemProps> = ({ text, createBeer, className }) => {
  const navigate = useNavigate();

  return (
    <div className={`${styles.noItem} animeLeft ${className || ''}`}>
      <h2 className={styles.text}>{text}</h2>
      {createBeer && (
        <Button variant="secondary" onClick={() => navigate('/beers/new')}>
          Create
        </Button>
      )}
    </div>
  );
};
