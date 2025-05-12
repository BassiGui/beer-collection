import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import { BeerCard } from './BeerCard';

const mockBeer = {
  id: '1',
  name: 'Test Beer',
  description: 'Test Description',
  type: 'Lager',
  liters: 0.5,
  image: 'test-image.jpg',
  price: 5.99,
  rating: 4,
};

describe('BeerCard', () => {
  it('deve renderizar as informações básicas da cerveja', () => {
    render(<BeerCard beer={mockBeer} onRemove={vi.fn()} onUpdate={vi.fn()} />);

    expect(screen.getByText(mockBeer.name)).toBeInTheDocument();
    expect(screen.getByText(`${String(mockBeer.liters)}L`)).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', mockBeer.image);
  });

  it('deve expandir e mostrar informações adicionais ao clicar', () => {
    render(<BeerCard beer={mockBeer} onRemove={vi.fn()} onUpdate={vi.fn()} />);

    const card = screen.getByRole('article');
    fireEvent.click(card);

    expect(screen.getByText(`Tipo: ${mockBeer.type}`)).toBeInTheDocument();
    expect(screen.getByText(`Preço: ${String(mockBeer.price.toFixed(2))}€`)).toBeInTheDocument();
    expect(screen.getByText(`Avaliação: ${String(mockBeer.rating)}/5`)).toBeInTheDocument();
    expect(screen.getByText(`Descrição: ${mockBeer.description}`)).toBeInTheDocument();
  });

  it('deve chamar onRemove quando o botão de remover é clicado', () => {
    const onRemove = vi.fn();
    render(<BeerCard beer={mockBeer} onRemove={onRemove} onUpdate={vi.fn()} />);

    const removeButton = screen.getByRole('button', { name: /remover/i });
    fireEvent.click(removeButton);

    expect(onRemove).toHaveBeenCalledWith(mockBeer.id);
  });

  it('deve navegar para a página de edição quando o botão de editar é clicado', () => {
    render(<BeerCard beer={mockBeer} onRemove={vi.fn()} onUpdate={vi.fn()} />);

    const editButton = screen.getByRole('button', { name: /editar/i });
    expect(editButton).toHaveAttribute('href', `/beers/edit/${mockBeer.id}`);
  });

  it('não deve expandir o card quando os botões são clicados', () => {
    render(<BeerCard beer={mockBeer} onRemove={vi.fn()} onUpdate={vi.fn()} />);

    const removeButton = screen.getByRole('button', { name: /remover/i });
    fireEvent.click(removeButton);

    expect(screen.queryByText(`Tipo: ${mockBeer.type}`)).not.toBeInTheDocument();
  });
});
