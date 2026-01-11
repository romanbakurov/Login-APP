import * as React from 'react';
import S from './Form.module.css';

type FormProps = {
  onSubmit: () => void;
  children: React.ReactNode;
  className?: string;
};

export const Form = ({ onSubmit, children }: FormProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <>
      <form className={S.form} onSubmit={handleSubmit}>
        {children}
      </form>
    </>
  );
};
