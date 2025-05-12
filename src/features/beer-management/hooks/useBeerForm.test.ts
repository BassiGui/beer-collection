import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';

import { useBeerForm } from './useBeerForm';

const mockNavigate = vi.fn();
vi.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}));

const mockHandleAddBeer = vi.fn();
const mockHandleUpdateBeer = vi.fn();
vi.mock('../../../api/useCases/beerUseCase', () => ({
  useBeerUseCase: () => ({
    handleAddBeer: mockHandleAddBeer,
    handleUpdateBeer: mockHandleUpdateBeer,
  }),
}));

describe('useBeerForm', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('deve inicializar com isLoading false', () => {
    const { result } = renderHook(() => useBeerForm());
    expect(result.current.isLoading).toBe(false);
  });

  it('deve chamar handleAddBeer ao criar uma nova cerveja', async () => {
    const { result } = renderHook(() => useBeerForm());

    const newBeer = {
      id: 'new-1',
      name: 'Nova Cerveja',
      description: 'Nova Descrição',
      type: 'Pilsen',
      liters: 0.6,
      image: 'nova-imagem.jpg',
      price: 6.99,
      rating: 5,
    };

    await act(async () => {
      await result.current.handleSubmit(newBeer);
    });

    expect(mockHandleAddBeer).toHaveBeenCalledWith(newBeer);
    expect(mockNavigate).toHaveBeenCalledWith('/');
  });

  it('deve chamar handleUpdateBeer ao editar uma cerveja existente', async () => {
    const existingBeer = {
      id: '1',
      name: 'Cerveja Existente',
      description: 'Descrição Existente',
      type: 'Lager',
      liters: 0.5,
      image: 'imagem-existente.jpg',
      price: 5.99,
      rating: 4,
    };

    const { result } = renderHook(() =>
      useBeerForm({ initialData: existingBeer, isEditing: true })
    );

    const updatedBeer = {
      id: '1',
      name: 'Cerveja Atualizada',
      description: 'Descrição Atualizada',
      type: 'Pilsen',
      liters: 0.6,
      image: 'imagem-atualizada.jpg',
      price: 6.99,
      rating: 5,
    };

    await act(async () => {
      await result.current.handleSubmit(updatedBeer);
    });

    expect(mockHandleUpdateBeer).toHaveBeenCalledWith(existingBeer.id, updatedBeer);
    expect(mockNavigate).toHaveBeenCalledWith('/');
  });

  it('deve lidar com erros durante o envio', async () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    mockHandleAddBeer.mockRejectedValueOnce(new Error('Erro ao adicionar cerveja'));

    const { result } = renderHook(() => useBeerForm());

    const newBeer = {
      id: 'new-2',
      name: 'Nova Cerveja',
      description: 'Nova Descrição',
      type: 'Pilsen',
      liters: 0.6,
      image: 'nova-imagem.jpg',
      price: 6.99,
      rating: 5,
    };

    await act(async () => {
      await result.current.handleSubmit(newBeer);
    });

    expect(consoleSpy).toHaveBeenCalled();
    expect(result.current.isLoading).toBe(false);
  });
});
