import React, { useState } from "react";
import { createContext } from "react";

export const ContextProvider = createContext();
const AppProvider = ({ children }) => {
  const [imgData, setImgData] = useState([]);
  return (
    <ContextProvider.Provider value={{ imgData, setImgData }}>
      {children}
    </ContextProvider.Provider>
  );
};

export default AppProvider;
