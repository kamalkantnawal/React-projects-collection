import styled from "styled-components";

export const AccordionDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #0093e9;
  background-image: linear-gradient(
    180deg,
    #0093e9 0%,
    #52929a 50%,
    #ffffff 100%
  );
  display: flex;
  flex-direction: column;
  //   flex-wrap: wrap
  justify-content: center;
  align-items: center;
  .btn {
    padding: 10px;
    margin: 10px;
    background-color: transparent;
    border: 1px solid orange;
    border-radius: 6px;
    cursor: pointer;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
`;
export const AccordionItemDiv = styled.div`
  min-width: 800px;
  max-height: 400px;
  .title {
    padding: 10px;
    margin: 10px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
  .description {
    padding: 10px;
    margin: 10px;
    // box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
  .heading {
    display: flex;
    justify-content: space-between;
  }
  .plus-icon {
    font-size: 16px;
    font-weight: 600;
  }
`;
