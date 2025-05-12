import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import { useBeerForm } from '../../hooks/useBeerForm';

import { BeerForm } from './BeerForm';

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

// Mocking do useBeerForm
vi.mock('../../hooks/useBeerForm', () => ({
  useBeerForm: vi.fn(),
}));

describe('BeerForm', () => {
  it('deve renderizar o formulário com os campos corretos', () => {
    render(<BeerForm />);

    expect(screen.getByLabelText(/nome/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/descrição/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/tipo/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/litros/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/imagem/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/preço/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/avaliação/i)).toBeInTheDocument();
  });

  it('deve preencher o formulário com os dados da cerveja quando fornecido', () => {
    render(<BeerForm initialData={mockBeer} />);

    expect(screen.getByLabelText(/nome/i)).toHaveValue(mockBeer.name);
    expect(screen.getByLabelText(/descrição/i)).toHaveValue(mockBeer.description);
    expect(screen.getByLabelText(/tipo/i)).toHaveValue(mockBeer.type);
    expect(screen.getByLabelText(/litros/i)).toHaveValue(mockBeer.liters.toString());
    expect(screen.getByLabelText(/imagem/i)).toHaveValue(mockBeer.image);
    expect(screen.getByLabelText(/preço/i)).toHaveValue(mockBeer.price.toString());
    expect(screen.getByLabelText(/avaliação/i)).toHaveValue(mockBeer.rating.toString());
  });

  it('deve chamar handleSubmit com os dados do formulário quando enviado', () => {
    const mockHandleSubmit = vi.fn();

    // Corrigindo o mock do useBeerForm
    vi.mocked(useBeerForm).mockReturnValueOnce({
      handleSubmit: mockHandleSubmit,
      isLoading: false,
    });

    render(<BeerForm />);

    fireEvent.change(screen.getByLabelText(/nome/i), { target: { value: 'New Beer' } });
    fireEvent.change(screen.getByLabelText(/descrição/i), { target: { value: 'New Description' } });
    fireEvent.change(screen.getByLabelText(/tipo/i), { target: { value: 'Ale' } });
    fireEvent.change(screen.getByLabelText(/litros/i), { target: { value: '0.33' } });
    fireEvent.change(screen.getByLabelText(/imagem/i), { target: { value: 'new-image.jpg' } });
    fireEvent.change(screen.getByLabelText(/preço/i), { target: { value: '4.99' } });
    fireEvent.change(screen.getByLabelText(/avaliação/i), { target: { value: '5' } });

    fireEvent.click(screen.getByRole('button', { name: /salvar/i }));

    expect(mockHandleSubmit).toHaveBeenCalledWith({
      name: 'New Beer',
      description: 'New Description',
      type: 'Ale',
      liters: 0.33,
      image: 'new-image.jpg',
      price: 4.99,
      rating: 5,
    });
  });

  it('deve validar os campos obrigatórios', () => {
    const mockHandleSubmit = vi.fn();

    // Corrigindo o mock do useBeerForm para a validação de erros
    vi.mocked(useBeerForm).mockReturnValueOnce({
      handleSubmit: mockHandleSubmit,
      isLoading: false,
    });

    render(<BeerForm />);

    fireEvent.click(screen.getByRole('button', { name: /salvar/i }));

    // A validação de erros será mais precisa quando o componente realmente exibir essas mensagens
    expect(screen.getByText(/nome é obrigatório/i)).toBeInTheDocument();
    expect(screen.getByText(/descrição é obrigatória/i)).toBeInTheDocument();
    expect(screen.getByText(/tipo é obrigatório/i)).toBeInTheDocument();
    expect(screen.getByText(/litros é obrigatório/i)).toBeInTheDocument();
    expect(screen.getByText(/imagem é obrigatória/i)).toBeInTheDocument();
    expect(screen.getByText(/preço é obrigatório/i)).toBeInTheDocument();
    expect(screen.getByText(/avaliação é obrigatória/i)).toBeInTheDocument();
  });
});
