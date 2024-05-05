import { createContext, useMemo } from "react";

import PropTypes from "prop-types";
import useAuth from "../hooks/useAuth";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const { user, loading, error, signUp, login, logout, setError, setLoading } = useAuth();

  const contextValue = useMemo(
    () => ({ user, loading, error, signUp, login, logout, setError, setLoading }),
    [user, loading, error, signUp, login, logout, setError, setLoading]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export { AuthProvider, AuthContext };
