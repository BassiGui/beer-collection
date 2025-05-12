import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';

import { Footer } from '../components/Footer/Footer';
import styles from '../components/Footer/Footer.module.css';

describe('Footer', () => {
  it('deve renderizar o logo', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    const logoLink = screen.getByRole('link', { name: /Beer celler - Home/i });
    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute('href', '/');
  });

  it('deve renderizar o texto de copyright com o ano atual', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    const currentYear = new Date().getFullYear().toString();
    const copyrightText = screen.getByText(`Guilherme Bassi Beer Collection © ${currentYear}`);
    expect(copyrightText).toBeInTheDocument();
  });

  it('deve ter a estrutura correta de footer', () => {
    const { container } = render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    const footer = container.firstChild;
    expect(footer).toHaveClass(styles.footer);
  });
});
