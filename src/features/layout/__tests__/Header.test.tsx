import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';

import { Header } from '../components/Header';

const renderWithRouter = (component: React.ReactNode) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('Header', () => {
  it('deve renderizar o logo', () => {
    renderWithRouter(<Header />);

    const logoLink = screen.getByRole('link', { name: /beer celler - home/i });
    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute('href', '/');
  });

  it('deve renderizar o botão de adicionar cerveja', () => {
    renderWithRouter(<Header />);

    const addButton = screen.getByRole('link', { name: /add a new kind of beer/i });
    expect(addButton).toBeInTheDocument();
    expect(addButton).toHaveAttribute('href', '/add-new-beer');
  });

  it('deve aplicar classes CSS corretamente', () => {
    const { container } = renderWithRouter(<Header />);

    const header = container.firstChild;
    expect(header).toHaveClass('header');

    const nav = screen.getByRole('navigation');
    expect(nav).toHaveClass('nav');
  });
});
