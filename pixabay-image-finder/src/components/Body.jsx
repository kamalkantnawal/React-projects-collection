import React, { useContext, useState } from "react";
import { BodyContainer } from "./Style";
import { Select } from "antd";
import Search from "./Search";
import ImageCart from "./ImageCart";
import { ContextProvider } from "./AppProvider";

const selectOptions = [
  {
    label: "5",
    value: 5,
  },
  {
    label: "15",
    value: 15,
  },
  {
    label: "30",
    value: 30,
  },
  {
    label: "50",
    value: 50,
  },
  {
    label: "100",
    value: 100,
  },
];
const Body = () => {
  const [selectedValue, setSelectedValue] = useState(5);
  const { imgData } = useContext(ContextProvider);
  return (
    <BodyContainer>
      <div>
        <Search imgPerPage={selectedValue} />
      </div>
      <div>
        <Select
          defaultOpen={selectedValue}
          style={{ width: "10%" }}
          placeholder="Result per page"
          options={selectOptions}
          onChange={(value) => setSelectedValue(value)}
        ></Select>
      </div>
      <ImageCart />
    </BodyContainer>
  );
};

export default Body;
