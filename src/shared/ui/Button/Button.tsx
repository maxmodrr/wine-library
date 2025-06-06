import type { ButtonHTMLAttributes } from 'react';
import s from './Button.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<Props> = ({ className = '', onClick = () => {}, children }) => {
  return (
    <button onClick={onClick} className={`${s.Button} ${className}`}>
      {children}
    </button>
  );
};
