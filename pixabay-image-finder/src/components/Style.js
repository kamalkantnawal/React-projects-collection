import styled from "styled-components";

export const NavbarContainer = styled.div`
  height: 5vh;
  background-color: #7fadec5e;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
`;
export const BodyContainer = styled.div`
  height: 95vh;
  background-color: #e2cee314;
  width: 100vw;
`;

export const ImgContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  max-height: 100vh;
  overflow-y: auto;
  padding: 10px;
  box-sizing: border-box;

  .img {
    flex: 1 1 calc(25% - 10px); /* 4 images per row with gaps */
    max-width: calc(25% - 10px);
  }

  .img img {
    width: 100%;
    height: auto;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }
`;
