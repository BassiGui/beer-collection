import { render, screen, fireEvent } from '@testing-library/react';
import { useState } from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';

import { BeerFilter } from './BeerFilter';

// Mocks inline de useBeer
vi.mock('../../hooks/useBeer', async () => {
  const actual = await vi.importActual<typeof import('../../hooks/useBeer')>('../../hooks/useBeer');

  return {
    ...actual,
    useBeer: () => {
      const [search, setSearch] = useState('');
      const [sortOrder, setSortOrder] = useState<null | 'asc' | 'desc'>(null);

      return {
        search,
        sortOrder,
        onSearchChange: (value: string) => {
          setSearch(value);
        },
        onSortChange: (order: 'asc' | 'desc' | null) => {
          setSortOrder(order);
        },
      };
    },
  };
});

describe('BeerFilter', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('deve renderizar o campo de busca', () => {
    render(<BeerFilter />);
    expect(screen.getByLabelText('Buscar por nome')).toBeInTheDocument();
  });

  it('deve renderizar os botões de ordenação', () => {
    render(<BeerFilter />);
    expect(screen.getByText('Ordenar por:')).toBeInTheDocument();
    expect(screen.getByText('Nome A-Z')).toBeInTheDocument();
    expect(screen.getByText('Nome Z-A')).toBeInTheDocument();
  });

  it('deve chamar onSearchChange quando o campo de busca é alterado', () => {
    render(<BeerFilter />);
    const searchInput = screen.getByLabelText('Buscar por nome');

    fireEvent.change(searchInput, { target: { value: 'teste' } });

    expect(searchInput).toHaveValue('teste');
  });

  it('deve chamar onSortChange quando um botão de ordenação é clicado', () => {
    render(<BeerFilter />);
    const sortButton = screen.getByText('Nome A-Z');

    fireEvent.click(sortButton);

    expect(sortButton).toHaveAttribute('aria-pressed', 'true');
  });
});
