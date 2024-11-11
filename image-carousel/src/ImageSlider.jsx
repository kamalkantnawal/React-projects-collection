import React, { useEffect, useState } from "react";
import { IMAGE_DATA } from "./Constant/ImageData";
import "./Slider.css"; // Import CSS file for styling

const ImageSlider = ({ type }) => {
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
      {data.length > 0 ? (
        <div className="slider">
          <button className="nav-button left" onClick={handleLeftClickedHandle}>
            ←
          </button>
          <div className="images-container">
            <div
              key={data[selectedImgIndex].idMeal}
              className="image-wrapper active"
            >
              <img
                className="slider-image"
                src={data[selectedImgIndex].strMealThumb}
                alt="Meal"
              />
            </div>
          </div>
          <button
            className="nav-button right"
            onClick={handleRightClickedHandle}
          >
            →
          </button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ImageSlider;
