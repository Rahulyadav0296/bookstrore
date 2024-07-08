import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [cart, setCart] = useState(0);
  const [updatedCart, setUpdatedCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <AuthContext.Provider
      value={{
        cart,
        setCart,
        totalPrice,
        setTotalPrice,
        updatedCart,
        setUpdatedCart,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
