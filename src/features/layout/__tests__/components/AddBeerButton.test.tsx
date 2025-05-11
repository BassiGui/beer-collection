import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';

import { AddBeerButton } from '../../components/Header/components/AddBeerButton';

const renderWithRouter = (component: React.ReactNode) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('AddBeerButton', () => {
  it('deve renderizar o botão de adicionar cerveja', () => {
    renderWithRouter(<AddBeerButton />);

    const addButton = screen.getByRole('link', { name: /add a new kind of beer/i });
    expect(addButton).toBeInTheDocument();
    expect(addButton).toHaveAttribute('href', '/add-new-beer');
  });

  it('deve aceitar e aplicar className personalizada', () => {
    renderWithRouter(<AddBeerButton className="custom-class" />);

    const addButton = screen.getByRole('link', { name: /add a new kind of beer/i });
    expect(addButton).toHaveClass('custom-class');
  });

  it('deve aceitar e aplicar título personalizado', () => {
    const customTitle = 'Adicionar nova cerveja';
    renderWithRouter(<AddBeerButton title={customTitle} />);

    const addButton = screen.getByRole('link', { name: customTitle });
    expect(addButton).toBeInTheDocument();
  });
});
