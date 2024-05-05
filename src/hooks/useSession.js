import { useEffect, useState } from "react";

const useSession = () => {
  const [sessionToken, setSessionToken] = useState(null);

  // set session token
  const setSession = (token) => {
    localStorage.setItem("sessionToken", token);
    setSessionToken(token);
  };

  // clear session token
  const clearSession = () => {
    localStorage.removeItem("sessionToken");
    setSessionToken(null);
  };

  // check if session token exists
  useEffect(() => {
    const storedToken = localStorage.getItem("sessionToken");
    if (storedToken) {
      setSessionToken(storedToken);
    }
  }, []);

  return { sessionToken, setSession, clearSession };
};

export default useSession;
