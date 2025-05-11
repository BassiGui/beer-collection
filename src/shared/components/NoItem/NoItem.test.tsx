import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';

import { NoItem } from './NoItem';

const renderWithRouter = (component: React.ReactNode) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('NoItem', () => {
  it('deve renderizar o texto corretamente', () => {
    const text = 'Nenhum item encontrado';
    renderWithRouter(<NoItem text={text} />);

    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it('não deve renderizar o botão quando createBeer é false', () => {
    renderWithRouter(<NoItem text="Teste" createBeer={false} />);

    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('deve renderizar o botão quando createBeer é true', () => {
    renderWithRouter(<NoItem text="Teste" createBeer={true} />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Create');
  });

  it('deve navegar para /add-new-beer quando o botão é clicado', () => {
    const mockNavigate = vi.fn();
    vi.mock('react-router-dom', () => ({
      useNavigate: () => mockNavigate,
    }));

    renderWithRouter(<NoItem text="Teste" createBeer={true} />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(mockNavigate).toHaveBeenCalledWith('/add-new-beer');
  });

  it('deve aplicar className personalizada', () => {
    const customClass = 'custom-class';
    renderWithRouter(<NoItem text="Teste" className={customClass} />);

    const container = screen.getByText('Teste').parentElement;
    expect(container).toHaveClass(customClass);
  });
});
