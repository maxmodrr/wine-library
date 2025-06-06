import type { InputHTMLAttributes } from 'react';
import s from './Input.module.scss';
import clsx from 'clsx';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  hasError?: boolean;
  errorMessage?: string;
  placeholder?: string;
  type?: string;
}

export const Input: React.FC<Props> = ({
  label,
  errorMessage,
  type = 'text',
  placeholder,
  hasError,
  ...rest
}) => {
  return (
    <label className={s.Input__label}>
      {label}
      <input
        className={clsx(s.Input, {
          [s.InputError]: hasError,
        })}
        type={type}
        placeholder={placeholder}
        {...rest}
      />
      {errorMessage && <span className={s.Input__error}>{errorMessage}</span>}
    </label>
  );
};
