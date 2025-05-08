import React from 'react';

import styles from './Button.module.css';
import type { ButtonProps } from './types';

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  onClick,
  disabled = false,
}) => {
  const buttonClasses = [styles.button, styles[variant], disabled ? styles.disabled : ''].join(' ');

  return (
    <button className={buttonClasses} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
