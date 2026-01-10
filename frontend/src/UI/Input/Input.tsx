import I from './Input.module.css';
import type { ChangeEvent } from 'react';

type InputProps = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: 'text' | 'password' | 'email';
  name?: string;
};

export const Input = ({ value, onChange, placeholder, type, name }: InputProps) => {
  return (
    <>
      <input
        className={I.input}
        type={type}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
    </>
  );
};
