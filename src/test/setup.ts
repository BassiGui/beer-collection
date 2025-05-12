import '@testing-library/jest-dom';
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { afterEach, vi } from 'vitest';

// Limpa após cada teste
afterEach(() => {
  cleanup();
});

// Mock do useNavigate
const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

// Função de renderização personalizada com BrowserRouter
const customRender = (ui: React.ReactElement, options = {}) =>
  render(ui, { wrapper: BrowserRouter, ...options });

// Exporta tudo do @testing-library/react
export * from '@testing-library/react';

// Sobrescreve a função render padrão
export { customRender as render };
