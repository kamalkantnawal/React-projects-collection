import React, { createContext, useState } from "react";

// Create the context
const AppContext = createContext();

// Create the provider component
const AppProvider = ({ children }) => {
  const [trackerList, setTrackerList] = useState([]);
  const [flag, setFlag] = useState(false);

  return (
    <AppContext.Provider value={{ trackerList, setTrackerList, flag, setFlag }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
