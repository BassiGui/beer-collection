import { FC } from 'react';
import { Link } from 'react-router-dom';

import { AddBeerButtonProps } from '../../../types/navigation.types';
import styles from '../Header.module.css';

export const AddBeerButton: FC<AddBeerButtonProps> = ({
  className,
  title = 'adicionar cerveja',
}) => {
  const buttonClassName = `${styles.plusIcon} ${className || ''}`;

  return (
    <Link to="/beers/new" className={buttonClassName} title={title} role="link" aria-label={title}>
      +
    </Link>
  );
};
