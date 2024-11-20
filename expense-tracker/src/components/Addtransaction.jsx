import React, { useState, useContext } from "react";
import { AddtransactionDiv } from "./Style";
import { AppContext } from "../AppProvider";

const Addtransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(undefined);

  const { trackerList, setTrackerList, flag, setFlag } = useContext(AppContext);

  const handleRadioClicked = (e) => {
    setFlag(e.target.value === "balance");
  };
  const handleClicked = () => {
    // setTrackerList([
    //   {
    //     Id: Math.random(),
    //     text: text.trim(),
    //     amount: flag ? parseFloat(amount) : -parseFloat(amount),
    //   },
    //   ...trackerList,
    // ]);
    setTrackerList(
      trackerList.concat({
        Id: Math.random(),
        text: text.trim(),
        amount: flag ? parseFloat(amount) : -parseFloat(amount),
      })
    );

    setAmount("");
    setText("");
  };

  return (
    <AddtransactionDiv>
      <div>Add Transaction</div>
      <div className="radio-items">
        <div>
          <input
            className="radio-input"
            type="radio"
            value="expense"
            name="transactionType"
            onChange={handleRadioClicked}
            checked={!flag}
          />
          <label className="label">Expense</label>
        </div>
        <div>
          <input
            className="radio-input"
            type="radio"
            value="balance"
            name="transactionType"
            onChange={handleRadioClicked}
            checked={flag}
          />
          <label className="label">Balance</label>
        </div>
      </div>
      <div className="input-btn">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="input"
          type="text"
          placeholder={flag ? "Add Balance" : "Add Expense"}
        />

        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="input"
          type="number"
          placeholder="Amount"
        />

        <button
          className="button"
          onClick={handleClicked}
          disabled={text === "" || amount === null}
        >
          {flag ? "Add Balance" : "Add Expense"}
        </button>
      </div>
    </AddtransactionDiv>
  );
};

export default Addtransaction;
