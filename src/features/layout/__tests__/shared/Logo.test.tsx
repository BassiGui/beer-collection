import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';

import { Logo } from '../../components/shared/Logo/Logo';
import styles from '../../components/shared/Logo/Logo.module.css';

describe('Logo', () => {
  it('deve renderizar o logo com o texto correto', () => {
    render(
      <MemoryRouter>
        <Logo />
      </MemoryRouter>
    );

    const logo = screen.getByRole('link', { name: /Beer celler - Home/i });
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('href', '/');
    expect(logo).toHaveClass(styles.logo);
  });

  it('deve aplicar a classe correta', () => {
    render(
      <MemoryRouter>
        <Logo />
      </MemoryRouter>
    );
  });
});
