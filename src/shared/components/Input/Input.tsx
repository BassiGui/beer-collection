import { FC } from 'react';

import styles from './Input.module.css';
import { InputProps } from './types';

export const Input: FC<InputProps> = ({
  label,
  type = 'text',
  name,
  value,
  onChange,
  placeholder,
  error,
  className,
  ...props
}) => {
  return (
    <div className={`${styles.wrapper} ${className || ''}`}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        className={styles.input}
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        {...props}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};
