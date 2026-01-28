import { onAuthStateChanged } from 'firebase/auth';
import { createContext, useState } from 'react';
import { auth, getAuthErrorMessage } from '../firebase/firebase';
import { loginRequest, registerRequest } from './authentication.service';

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  onAuthStateChanged(auth, (user) => {
    console.log('Auth State Changed: ', user);
    if (user) {
      setUser(user);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  });
  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((u) => {
        setUser(u.user);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(getAuthErrorMessage(e));
      });
  };
  const onLogout = () => {
    setIsLoading(true);
    auth
      .signOut()
      .then(() => {
        setUser(null);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(getAuthErrorMessage(e));
      });
  };
  const onRegister = (email, password, confirmPassword) => {
    if (password !== confirmPassword) {
      setError('Error: Passwords do not match');
      return;
    }
    setIsLoading(true);
    registerRequest(email, password)
      .then((u) => {
        setUser(u.user);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(getAuthErrorMessage(e));
      });
  };
  return (
    <AuthenticationContext.Provider
      value={{
        isLoading,
        isAuthenticated: !!user,
        user,
        error,
        onLogin,
        onLogout,
        onRegister,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
