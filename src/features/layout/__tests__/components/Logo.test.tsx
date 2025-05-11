import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';

import { Logo } from '../../components/Header/components/Logo';

const renderWithRouter = (component: React.ReactNode) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('Logo', () => {
  it('deve renderizar o link do logo', () => {
    renderWithRouter(<Logo />);

    const logoLink = screen.getByRole('link', { name: /beer celler - home/i });
    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute('href', '/');
  });

  it('deve renderizar a imagem do logo', () => {
    renderWithRouter(<Logo />);

    const logoImage = screen.getByRole('img', { name: /beer icon/i });
    expect(logoImage).toBeInTheDocument();
  });

  it('deve aceitar e aplicar className personalizada', () => {
    renderWithRouter(<Logo className="custom-class" />);

    const logoLink = screen.getByRole('link', { name: /beer celler - home/i });
    expect(logoLink).toHaveClass('custom-class');
  });
});
