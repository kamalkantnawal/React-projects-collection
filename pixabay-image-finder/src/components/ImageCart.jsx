import React, { useContext } from "react";
import { ContextProvider } from "./AppProvider";
import { ImgContainer } from "./Style";

const ImageCart = () => {
  const { imgData } = useContext(ContextProvider);

  return (
    <ImgContainer>
      {imgData
        ? imgData.map(({ id, webformatURL }) => (
            <div className="img" key={id}>
              <img alt={`img-${id}`} src={webformatURL} />
            </div>
          ))
        : "Loading..."}
    </ImgContainer>
  );
};

export default ImageCart;
