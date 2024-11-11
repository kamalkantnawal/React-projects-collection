import React from "react";
import ImageSlider from "./ImageSlider";
import Slider from "./OptimizeImgSlider";
import "./App.css";

const App = () => {
  return (
    <div>
      <ImageSlider type="Basic Carousel" />
      <Slider type="Optimize Carousel" />
    </div>
  );
};

export default App;
