import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import { Beer } from '../../../../api/types/beer';

import { BeerList } from './BeerList';

const mockBeers: Beer[] = [
  {
    id: '1',
    name: 'Test Beer 1',
    description: 'Test Description 1',
    type: 'Lager',
    liters: 0.5,
    image: 'test-image-1.jpg',
    price: 5.99,
    rating: 4,
  },
  {
    id: '2',
    name: 'Test Beer 2',
    description: 'Test Description 2',
    type: 'Pilsen',
    liters: 0.6,
    image: 'test-image-2.jpg',
    price: 6.99,
    rating: 5,
  },
];

describe('BeerList', () => {
  it('deve renderizar a mensagem de carregamento quando isLoading é true', () => {
    vi.mock('../../hooks/useBeer', () => ({
      useBeer: () => ({
        beers: [],
        isLoading: true,
        error: null,
        handleRemoveBeer: vi.fn(),
        handleUpdateBeer: vi.fn(),
      }),
    }));

    render(<BeerList />);
    expect(screen.getByText('Carregando...')).toBeInTheDocument();
  });

  it('deve renderizar a mensagem de erro quando há um erro', () => {
    const errorMessage = 'Erro ao carregar cervejas';
    vi.mock('../../hooks/useBeer', () => ({
      useBeer: () => ({
        beers: [],
        isLoading: false,
        error: errorMessage,
        handleRemoveBeer: vi.fn(),
        handleUpdateBeer: vi.fn(),
      }),
    }));

    render(<BeerList />);
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });

  it('deve renderizar a mensagem quando não há cervejas', () => {
    vi.mock('../../hooks/useBeer', () => ({
      useBeer: () => ({
        beers: [],
        isLoading: false,
        error: null,
        handleRemoveBeer: vi.fn(),
        handleUpdateBeer: vi.fn(),
      }),
    }));

    render(<BeerList />);
    expect(screen.getByText('Nenhuma cerveja encontrada')).toBeInTheDocument();
  });

  it('deve renderizar a lista de cervejas', () => {
    vi.mock('../../hooks/useBeer', () => ({
      useBeer: () => ({
        beers: mockBeers,
        isLoading: false,
        error: null,
        handleRemoveBeer: vi.fn(),
        handleUpdateBeer: vi.fn(),
      }),
    }));

    render(<BeerList />);

    expect(screen.getByText('Test Beer 1')).toBeInTheDocument();
    expect(screen.getByText('Test Beer 2')).toBeInTheDocument();
    expect(screen.getAllByRole('img')).toHaveLength(2);
  });
});
