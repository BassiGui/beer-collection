import { FC } from 'react';

import styles from './BeerPreview.module.css';
import { BeerPreviewProps } from './types';

export const BeerPreview: FC<BeerPreviewProps> = ({ beerName }) => {
  return (
    <div className={styles.moreDetails}>
      <h2>{beerName}</h2>
      <p>Click here for more details</p>
    </div>
  );
};
