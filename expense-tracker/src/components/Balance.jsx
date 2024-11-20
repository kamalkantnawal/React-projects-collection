import React, { useContext } from "react";
import { Balancediv } from "./Style";
import { AppContext } from "../AppProvider";

const Balance = () => {
  const { trackerList } = useContext(AppContext);

  const getTotalSum = (trackerList) => {
    return trackerList.reduce((total, item) => total + item.amount, 0);
  };

  const totalExpense = getTotalSum(trackerList) || 0;
  const initialBalance = 100000;

  return (
    <Balancediv>
      <div>Your Balance: ${initialBalance + totalExpense}</div>
      <div className="income-expense">
        <div>
          INCOME <p>{initialBalance}</p>
        </div>
        <div>
          Expense <p>{-totalExpense}</p>
        </div>
      </div>
    </Balancediv>
  );
};

export default Balance;
