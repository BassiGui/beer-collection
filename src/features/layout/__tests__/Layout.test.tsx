import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';

import { Layout } from '../components/Layout/Layout';
import styles from '../components/Layout/Layout.module.css';

describe('Layout', () => {
  it('deve renderizar a estrutura completa do layout corretamente', () => {
    render(
      <MemoryRouter>
        <Layout>Conteúdo</Layout>
      </MemoryRouter>
    );

    // Verifica o container principal
    const layoutContainer = screen.getByTestId('layout-container');
    expect(layoutContainer).toHaveClass(styles.layout);

    // Verifica o header
    expect(screen.getByRole('banner')).toBeInTheDocument();

    // Verifica o conteúdo principal
    const mainContent = screen.getByRole('main');
    expect(mainContent).toHaveClass('AppBody');
    expect(mainContent).toHaveTextContent('Conteúdo');

    // Verifica o footer
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});
