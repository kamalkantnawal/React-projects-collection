import styled from "styled-components";

export const Balancediv = styled.div`
  padding: 10px;
  margin: 10px;
  .income-expense {
    border-radius: 2px;
    display: flex;
    justify-content: space-around;
    padding: 5px;
    margin: 5px;
    background-color: #fff;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
`;
export const Historydiv = styled.div`
  padding: 10px;
  margin: 10px;
  height: 200px;
  overflow-y: scroll;
  .list-items {
    border-radius: 2px;
    display: flex;
    justify-content: space-between;
    padding: 5px;
    margin: 5px;
    background-color: #fff;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
  .add-balance-list {
    border-right: 3px solid green;
  }

  .add-expense-list {
    border-right: 3px solid red;
  }
`;
export const AddtransactionDiv = styled.div`
  padding: 10px;
  margin: 10px;
  .radio-items {
    display: flex;
    justify-content: space-around;
    padding: 5px;
  }
  .label {
    margin-left: 2px;
  }
  .input-btn {
    display: flex;
    flex-direction: column;
  }
  .input {
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 30px;
    border: 1px solid;
  }
  .radio-input {
    cursor: pointer;
  }
  .button {
    padding: 10px;
    background-color: transparent;
    cursor: pointer;
    border-radius: 30px;
    border: 1px solid;
  }
  .button:hover {
    background-color: #8dbde3;
  }
`;
