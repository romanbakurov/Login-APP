import React, { createContext, useContext, useEffect, useState } from 'react';
import { setupInterceptor } from '../api/interceptors.ts';

type AuthContextType = {
  login: (token: string) => void;
  logout: () => void;
  isAuth: boolean;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuth, setIsAuth] = useState(!!localStorage.getItem('token'));

  const login = (token: string) => {
    localStorage.setItem('token', token);
    setIsAuth(true);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuth(false);
    window.location.href = '/login';
  };

  useEffect(() => {
    setupInterceptor(logout);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within the AuthProvider');
  }
  return context;
};
