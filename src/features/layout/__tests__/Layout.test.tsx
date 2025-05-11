import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';

import { Layout } from '../components/Layout';

const renderWithRouter = (component: React.ReactNode) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('Layout', () => {
  it('deve renderizar o Header', () => {
    renderWithRouter(
      <Layout>
        <div>Conteúdo de teste</div>
      </Layout>
    );

    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it('deve renderizar o conteúdo principal', () => {
    renderWithRouter(
      <Layout>
        <div>Conteúdo de teste</div>
      </Layout>
    );

    expect(screen.getByText('Conteúdo de teste')).toBeInTheDocument();
  });

  it('deve ter a estrutura correta de layout', () => {
    const { container } = renderWithRouter(
      <Layout>
        <div>Conteúdo de teste</div>
      </Layout>
    );

    const layoutElement = container.firstChild;
    expect(layoutElement).toHaveClass('layout');

    const mainElement = screen.getByRole('main');
    expect(mainElement).toHaveClass('AppBody');
  });
});
