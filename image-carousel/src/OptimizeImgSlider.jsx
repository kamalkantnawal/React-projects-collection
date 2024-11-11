import React, { useEffect, useState } from "react";
import { IMAGE_DATA } from "./Constant/ImageData";
import "./Slider.css"; // Import CSS file for styling

const OptimizeImgSlider = ({ type }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [selectedImgIndex, setSelectedImgIndex] = useState(0);

  useEffect(() => {
    getData(IMAGE_DATA);
  }, []);

  const getData = async (url) => {
    try {
      const res = await fetch(url);
      const jsonData = await res.json();
      if (jsonData) {
        setData(jsonData.meals);
      }
    } catch (e) {
      setError(e);
    }
  };

  const handleLeftClickedHandle = () => {
    if (selectedImgIndex === 0) setSelectedImgIndex(data.length - 1);
    else {
      setSelectedImgIndex(selectedImgIndex - 1);
    }
  };

  const handleRightClickedHandle = () => {
    if (selectedImgIndex === data.length - 1) setSelectedImgIndex(0);
    else {
      setSelectedImgIndex(selectedImgIndex + 1);
    }
  };

  if (error !== null) return <div>{error}</div>;

  return (
    <div className="slider-container">
      <h3>{type}</h3>
      <div className="slider">
        <button className="nav-button left" onClick={handleLeftClickedHandle}>
          ←
        </button>
        <div className="images-container">
          {data.length > 0 ? (
            data.map((item, index) => (
              <div
                key={item.idMeal}
                className={`image-wrapper ${
                  index === selectedImgIndex ? "active" : "inactive"
                }`}
              >
                <img
                  className="slider-image"
                  src={item.strMealThumb}
                  alt={item.strMeal}
                />
              </div>
            ))
          ) : (
            <p>Nothing to show</p>
          )}
        </div>
        <button className="nav-button right" onClick={handleRightClickedHandle}>
          →
        </button>
      </div>
    </div>
  );
};

export default OptimizeImgSlider;
