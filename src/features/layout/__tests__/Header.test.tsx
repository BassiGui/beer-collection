import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';

import { Header } from '../components/Header/Header';
import styles from '../components/Header/Header.module.css';

describe('Header', () => {
  it('deve renderizar o logo', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const logoLink = screen.getByRole('link', { name: /Beer celler - Home/i });
    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute('href', '/');
  });

  it('deve renderizar o botão de adicionar cerveja', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const addButton = screen.getByRole('link', { name: /adicionar cerveja/i });
    expect(addButton).toBeInTheDocument();
    expect(addButton).toHaveAttribute('href', '/beers/new');
  });

  it('deve aplicar classes CSS corretamente', () => {
    const { container } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const header = container.firstChild;
    expect(header).toHaveClass(styles.header);

    const nav = screen.getByRole('navigation');
    expect(nav).toHaveClass(styles.nav);
  });
});
