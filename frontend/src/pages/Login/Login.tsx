import S from './Login.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as React from 'react';
import { login } from '../../api/auth.ts';
import { Input } from '../../UI/Input/Input.tsx';
import { Button } from '../../UI/Button/Button.tsx';
import { useAuth } from '../../context/AuthContext.tsx';
import { Form } from '../../UI/Form/Form.tsx';
import Logotype from '../../assets/images/Logotype.svg';
import { Logo } from '../../UI/Logo/Logo.tsx';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { login: authLogin } = useAuth();
  const navigate = useNavigate();

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onClickHandler = async () => {
    setLoading(true);
    setError('');

    try {
      const result = await login({ email, password });
      console.log('SUCCESS', result);
      authLogin(result.token);
      navigate('/dashboard');
    } catch {
      setError('Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Form onSubmit={onClickHandler}>
        <Logo
          className={S.logo}
          src={Logotype}
          text="APP"
          alt="Logo"
          onClick={() => navigate('/')}
        />
        <Input
          type="text"
          name="email"
          placeholder="Enter email"
          value={email}
          onChange={onEmailChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Enter пароль"
          value={password}
          onChange={onPasswordChange}
        />
        <Button disabled={loading} onClick={onClickHandler}>
          {loading ? 'Loading...' : 'Send'}
        </Button>

        {error && <p className={S.error}>{error}</p>}
      </Form>
    </>
  );
};
