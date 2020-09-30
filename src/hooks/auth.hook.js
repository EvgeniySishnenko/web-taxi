import React, { useState, useCallback, useEffect } from "react";
const storageName = "userData";
export const useAuth = () => {
  const [token, setToken] = useState(null);

  const login = useCallback((userToken) => {
    setToken(userToken);

    localStorage(storageName, JSON.stringify(token));
  }, []);
  const logout = useCallback(() => {
    setToken(null);
    localStorage.removeItem(storageName);
  }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName));
    if (data && data.token) {
      login(data.token);
    }
  }, [login]);

  return { login, logout, token };
};
