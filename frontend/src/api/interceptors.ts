import { api } from './axios.ts';

export const setupInterceptor = (logout: () => void) => {
  api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  });

  api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401) {
        logout();
      }

      return Promise.reject(error);
    },
  );
};
