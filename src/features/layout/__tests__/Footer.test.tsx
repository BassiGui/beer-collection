import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';

import { Footer } from '../components/Footer';

const renderWithRouter = (component: React.ReactNode) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('Footer', () => {
  it('deve renderizar o logo', () => {
    renderWithRouter(<Footer />);

    const logoLink = screen.getByRole('link', { name: /beer celler - home/i });
    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute('href', '/');
  });

  it('deve renderizar o texto de copyright com o ano atual', () => {
    renderWithRouter(<Footer />);

    const currentYear = new Date().getFullYear().toString();
    const copyrightText = screen.getByText(`Guilherme Bassi Beer Collection © ${currentYear}`);
    expect(copyrightText).toBeInTheDocument();
  });

  it('deve ter a estrutura correta de footer', () => {
    const { container } = renderWithRouter(<Footer />);

    const footer = container.firstChild;
    expect(footer).toHaveClass('footer');
  });
});
