import type { InputHTMLAttributes } from 'react';
import s from './Input.module.scss';
import clsx from 'clsx';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  classname?: string;
  hasError?: boolean;
  errorMessage?: string;
  placeholder?: string;
  type?: string;
  children?: React.ReactNode;
}

export const Input: React.FC<Props> = ({
  label,
  className = '',
  errorMessage,
  type = 'text',
  placeholder,
  hasError,
  children,
  ...rest
}) => {
  return (
    <label className={s.Input__label}>
      <span className={s.Input__labelText}> {label}</span>
      <div className={s.Input__blockInput}>
        <input
          autoComplete="off"
          className={clsx(s.Input, {
            [s.Input__error]: hasError,
            [className]: className,
          })}
          type={type}
          placeholder={placeholder}
          {...rest}
        />
        {children}
      </div>
      {errorMessage && <span className={s.Input__textError}>{errorMessage}</span>}
    </label>
  );
};
