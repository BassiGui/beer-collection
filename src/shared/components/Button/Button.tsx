import React from 'react';

import styles from './Button.module.css';
import type { ButtonProps } from './types';

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', ...props }) => {
  const buttonClasses = [styles.button, styles[variant]].join(' ');

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
