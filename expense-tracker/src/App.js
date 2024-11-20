import React from "react";
import Balance from "./components/Balance";
import History from "./components/History";
import Addtransaction from "./components/Addtransaction";
import "./App.css";

const App = () => {
  return (
    <div className="center-app">
      <div className="app-content">
        <Balance />
        <History />
        <Addtransaction />
      </div>
    </div>
  );
};

export default App;
