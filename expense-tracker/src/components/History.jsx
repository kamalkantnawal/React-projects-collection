import React, { useContext } from "react";
import { Historydiv } from "./Style";
import { AppContext } from "../AppProvider";

const History = () => {
  const { trackerList } = useContext(AppContext);

  return (
    <Historydiv>
      <div>History</div>
      <div>
        {trackerList.length > 0 ? (
          trackerList.map((item) => {
            return (
              <li
                key={item.Id}
                className={
                  parseFloat(item.amount) > 0
                    ? "add-balance-list list-items "
                    : "add-expense-list list-items"
                }
              >
                <span>{item.text}</span>
                <span>{item.amount}</span>
              </li>
            );
          })
        ) : (
          <>
            <li className="list-items">
              <span style={{ height: 20 }}></span>
            </li>
            <li className="list-items">
              <span style={{ height: 20 }}></span>
            </li>
            <li className="list-items">
              <span style={{ height: 20 }}></span>
            </li>
            <li className="list-items">
              <span style={{ height: 20 }}></span>
            </li>
            <li className="list-items">
              <span style={{ height: 20 }}></span>
            </li>
          </>
        )}
      </div>
    </Historydiv>
  );
};

export default History;
