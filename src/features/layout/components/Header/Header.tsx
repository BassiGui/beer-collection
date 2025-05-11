import { FC } from 'react';

import { NavigationProps } from '../../types/navigation.types';

import styles from './Header.module.css';
import { AddBeerButton } from './components/AddBeerButton';
import { Logo } from './components/Logo';

export const Header: FC<NavigationProps> = ({ className }) => {
  return (
    <header className={`${styles.header} ${className || ''}`}>
      <nav className={`${styles.nav} container`}>
        <Logo />
        <AddBeerButton />
      </nav>
    </header>
  );
};
