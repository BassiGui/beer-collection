import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import Button from './Button';

describe('Button', () => {
  it('deve renderizar o botão com o texto correto', () => {
    render(<Button>Clique aqui</Button>);
    expect(screen.getByText('Clique aqui')).toBeInTheDocument();
  });

  it('deve chamar onClick quando clicado', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Clique aqui</Button>);

    fireEvent.click(screen.getByText('Clique aqui'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('não deve chamar onClick quando desabilitado', () => {
    const handleClick = vi.fn();
    render(
      <Button onClick={handleClick} disabled>
        Clique aqui
      </Button>
    );

    fireEvent.click(screen.getByText('Clique aqui'));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('deve aplicar a variante correta', () => {
    const { rerender } = render(<Button variant="primary">Botão</Button>);
    expect(screen.getByText('Botão')).toHaveClass('primary');

    rerender(<Button variant="secondary">Botão</Button>);
    expect(screen.getByText('Botão')).toHaveClass('secondary');
  });
});
