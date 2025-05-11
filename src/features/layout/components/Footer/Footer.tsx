import { FC } from 'react';

import { Logo } from '../shared/Logo/Logo';

import styles from './Footer.module.css';

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <Logo />
      <p>Guilherme Bassi Beer Collection &copy; {new Date().getFullYear()}</p>
    </footer>
  );
};
