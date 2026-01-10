import * as React from 'react';
import S from './Form.module.css';
import { Logo } from '../Logo/Logo.tsx';
import Logotype from '../../assets/images/Logotype.svg';
import { useNavigate } from 'react-router-dom';

type FormProps = {
  onSubmit: () => void;
  children: React.ReactNode;
  className?: string;
};

export const Form = ({ onSubmit, children }: FormProps) => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <>
      <form className={S.form} onSubmit={handleSubmit}>
        <Logo src={Logotype} text="APP" alt="Logo" onClick={() => navigate('/')} />
        {children}
      </form>
    </>
  );
};
