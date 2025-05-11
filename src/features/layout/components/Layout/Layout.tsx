import { FC } from 'react';

import { LayoutProps } from '../../types/layout.types';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header';

import styles from './Layout.module.css';

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className="AppBody">{children}</main>
      <Footer />
    </div>
  );
};
