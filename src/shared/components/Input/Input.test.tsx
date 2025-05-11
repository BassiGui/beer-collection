import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import { Input } from './Input';

describe('Input', () => {
  const defaultProps = {
    label: 'Test Label',
    name: 'test',
    value: '',
    onChange: vi.fn(),
  };

  it('deve renderizar o label corretamente', () => {
    render(<Input {...defaultProps} />);

    expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
  });

  it('deve renderizar o input com os atributos corretos', () => {
    render(<Input {...defaultProps} placeholder="Test placeholder" />);

    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('name', 'test');
    expect(input).toHaveAttribute('placeholder', 'Test placeholder');
  });

  it('deve chamar onChange quando o valor é alterado', () => {
    render(<Input {...defaultProps} />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'new value' } });

    expect(defaultProps.onChange).toHaveBeenCalled();
  });

  it('deve renderizar mensagem de erro quando fornecida', () => {
    const errorMessage = 'Campo obrigatório';
    render(<Input {...defaultProps} error={errorMessage} />);

    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });

  it('deve aplicar className personalizada', () => {
    const customClass = 'custom-class';
    render(<Input {...defaultProps} className={customClass} />);

    const wrapper = screen.getByLabelText('Test Label').parentElement;
    expect(wrapper).toHaveClass(customClass);
  });

  it('deve renderizar com tipo personalizado', () => {
    render(<Input {...defaultProps} type="email" />);

    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('type', 'email');
  });
});
