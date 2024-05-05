import { createContext, useEffect, useMemo } from "react";

import PropTypes from "prop-types";
import useAuth from "../hooks/useAuth";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const {
    user,
    loading,
    error,
    signUp,
    login,
    logout,
    setError,
    setLoading,
    sessionToken,
  } = useAuth();

  // Clear error message after 3 seconds
  useEffect(() => {
    const errorMessageTimeout = () =>
      setTimeout(() => {
        setError(null);
      }, 5_000);
    if (error) errorMessageTimeout();

    // Clear timeout if error is cleared
    return () => clearTimeout(errorMessageTimeout);
  }, [error, setError]);

  const contextValue = useMemo(
    () => ({
      user,
      loading,
      error,
      signUp,
      login,
      logout,
      setError,
      setLoading,
      sessionToken,
    }),
    [user, loading, error, signUp, login, logout, setError, setLoading, sessionToken]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export { AuthProvider, AuthContext };
