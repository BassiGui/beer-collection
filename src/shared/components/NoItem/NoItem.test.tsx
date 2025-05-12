import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { NoItem } from './NoItem';

describe('NoItem', () => {
  it('deve renderizar a mensagem padrão', () => {
    render(<NoItem text="Nenhum item encontrado" />);
    expect(screen.getByText('Nenhum item encontrado')).toBeInTheDocument();
  });

  it('deve renderizar o botão quando createBeer é true', () => {
    render(<NoItem text="Nenhum item encontrado" createBeer />);
    expect(screen.getByRole('button', { name: /create/i })).toBeInTheDocument();
  });

  it('não deve renderizar o botão quando createBeer é false', () => {
    render(<NoItem text="Nenhum item encontrado" />);
    expect(screen.queryByRole('button', { name: /create/i })).not.toBeInTheDocument();
  });

  it('deve aplicar a classe correta', () => {
    render(<NoItem text="Nenhum item encontrado" />);
    expect(screen.getByText('Nenhum item encontrado')).toHaveClass('_text_403db9');
  });
});
