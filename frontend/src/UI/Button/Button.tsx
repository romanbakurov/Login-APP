import * as React from 'react';
import B from './Button.module.css';

type ButtonProps = {
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
};

export const Button = ({ onClick, disabled, children, type = 'button' }: ButtonProps) => {
  return (
    <>
      <button onClick={onClick} disabled={disabled} className={B.button} type={type}>
        {children}
      </button>
    </>
  );
};
