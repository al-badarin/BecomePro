import { createContext, useState } from 'react';
import { useNavigate } from 'react-router';

import * as authService from '../services/authService';
import usePersistedState from '../hooks/usePersistedState';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [auth, setAuth] = usePersistedState('auth', {});
  const [error, setError] = useState(null);

  const loginSubmitHandler = async (values) => {
    setError(null);

    try {
      const result = await authService.login(values.email, values.password);

      setAuth(result);
      localStorage.setItem('accessToken', result.accessToken);

      setError(null);
      navigate('/');
    } catch (err) {
      setError('Incorrect email or password. Please try again.');
    }
  };

  const registerSubmitHandler = async (values) => {
    setError(null);

    if (values.password !== values.repassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const result = await authService.register(
        values.email,
        values.username,
        values.password
      );

      setAuth(result);
      localStorage.setItem('accessToken', result.accessToken);
      navigate('/');
    } catch (err) {
      setError(
        err.message || 'An unexpected error occurred. Please try again.'
      );
    }
  };

  const logoutHandler = () => {
    setAuth({});

    localStorage.removeItem('accessToken');
  };

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    username: auth.username,
    email: auth.email,
    userId: auth._id,
    isAuthenticated: !!auth.accessToken,
    errorMessage: error,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

AuthContext.displayName = 'AuthContext';

export default AuthContext;
