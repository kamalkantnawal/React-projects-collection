import styled from "styled-components";

export const TodoList = styled.div`
  border: 1px solid;
  padding: 20px;
  margin: 10px;
  border: 1px solid #d3b397bf;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 6px;
  .heading {
    font-size: 24px;
    margin: 5px;
  }
  .search {
    display: flex;
    width: 20rem;
  }
  .search-common {
    padding: 10px 10px;
    background: transparent;
    border: 1px solid #aa36964f;
    outline: none;
  }
  .input {
    border-top-left-radius: 6px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 6px;
  }

  .btn {
    border-top-left-radius: px;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 0px;
    background: transparent;
    cursor: pointer;
  }
  .btn-common {
    padding: 10px;
    background: transparent;
    border: none;
    cursor: pointer;
  }
  .render-list {
    padding-left: 20px;
    display: flex;
    .span-value {
      padding-left: 10px;
    }
  }
  .ol {
    // margin-right: 20px;
  }
`;
