import { FC } from 'react';

import { LayoutProps } from '../../types/layout.types';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header';

import styles from './Layout.module.css';

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout} data-testid="layout-container">
      <Header />
      <main className="AppBody" role="main" aria-label="Main content">
        {children}
      </main>
      <Footer />
    </div>
  );
};
