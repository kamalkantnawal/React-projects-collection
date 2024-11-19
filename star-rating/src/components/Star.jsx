import React from "react";

import { StarContainer } from "./Style";
import Starcard from "./Starcard";

const Star = ({ n }) => {
  return (
    <StarContainer>
      <Starcard noOfStar={n} />
    </StarContainer>
  );
};

export default Star;
