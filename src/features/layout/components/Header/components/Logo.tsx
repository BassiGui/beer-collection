import { FC } from 'react';
import { Link } from 'react-router-dom';

import BeerIcon from '../../../../../assets/beer-svgrepo-com.svg';
import { LogoProps } from '../../../types/navigation.types';
import styles from '../Header.module.css';

export const Logo: FC<LogoProps> = ({ className, ariaLabel = 'Beer celler - Home' }) => {
  return (
    <Link to="/" aria-label={ariaLabel} className={`${styles.logo} ${className || ''}`}>
      <img src={BeerIcon} alt="Beer Icon" />
    </Link>
  );
};
