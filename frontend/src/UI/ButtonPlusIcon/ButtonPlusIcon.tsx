import T from './ButtonPlusIcon.module.css';
import * as React from 'react';

type ButtonProps = {
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  icon?: React.ElementType;
};

export const ButtonPlusIcon = ({
  onClick,
  disabled,
  children,
  type = 'button',
  className = '',
  icon: Icon,
}: ButtonProps) => {
  return (
    <>
      <button
        onClick={onClick}
        disabled={disabled}
        className={`${T.button} ${className ?? ''}`}
        type={type}
      >
        {Icon && <Icon className={T.icon} />}
        <span className={T.text}>{children}</span>
      </button>
    </>
  );
};
