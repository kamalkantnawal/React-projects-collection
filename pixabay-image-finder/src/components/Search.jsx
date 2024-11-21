import { Input } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { IMG_URL } from "./Constants";
import ImageCart from "./ImageCart";
import { ContextProvider } from "./AppProvider";

const Search = ({ imgPerPage }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { setImgData } = useContext(ContextProvider);
  let url = IMG_URL + `${searchQuery}&image_type=photo&per_page=${imgPerPage}`;
  useEffect(() => {
    getData();
  }, [searchQuery]);
  const getData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    if (data) {
      setImgData(data.hits);
      //console.log("--", data.hits);
    }
  };
  return (
    <div>
      <Input
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search Image"
        style={{ height: "40px" }}
      />
    </div>
  );
};

export default Search;
