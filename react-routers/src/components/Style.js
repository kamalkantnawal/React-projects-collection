import styled from "styled-components";

export const NavbarContainer = styled.div`
  height: 5vh;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  .nav-items {
    display: flex;
    justify-content: flex-end;
    padding: 10px;
  }
  .item {
    margin-right: 10px;
    cursor: pointer;
    font-size: 24px;
  }
  .link {
    text-decoration: none;
  }
`;
