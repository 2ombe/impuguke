import React, { createContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    const { data } = await axios.post("/api/auth/login", { email, password });
    setUser(data.token);
    localStorage.setItem("userToken", data.token);
  };

  const register = async (username, email, password) => {
    const { data } = await axios.post("/api/auth/register", {
      username,
      email,
      password,
    });
    setUser(data.token);
    localStorage.setItem("userToken", data.token);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("userToken");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
