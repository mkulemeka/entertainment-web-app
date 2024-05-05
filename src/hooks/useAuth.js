import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";

import { auth } from "../firebase/firebaseConfig";
import useSession from "../hooks/useSession";

const useAuth = () => {
  const { sessionToken, setSession } = useSession();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      if (currentUser) {
        setUser(currentUser);
        setSession(currentUser?.accessToken);
      }
    });

    return unsubscribe;
  }, [setSession]);

  const signUp = async (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = async (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    setLoading(true);
    return signOut(auth);
  };

  return {
    user,
    loading,
    error,
    signUp,
    login,
    logout,
    setError,
    setLoading,
    sessionToken,
  };
};

export default useAuth;
