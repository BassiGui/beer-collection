import { FC } from 'react';
import { Link } from 'react-router-dom';

import BeerIcon from '../../../../../assets/beer-svgrepo-com.svg';
import { LogoProps } from '../../../types/navigation.types';

import styles from './Logo.module.css';

export const Logo: FC<LogoProps> = ({ className, ariaLabel = 'Beer celler - Home' }) => {
  return (
    <Link to="/" role="link" aria-label={ariaLabel} className={`${styles.logo} ${className || ''}`}>
      <img width={35} height={35} src={BeerIcon} alt="Beer Icon" />
    </Link>
  );
};
