import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";

const Starcard = ({ noOfStar }) => {
  const [hoveredStar, setHoveredStar] = useState(0);
  const [selectedRating, setSelectedRating] = useState(0);

  const handleMouseEnter = (index) => {
    setHoveredStar(index);
  };

  const handleMouseLeave = () => {
    setHoveredStar(0);
  };

  const handleClicked = (index) => {
    setSelectedRating(index);
  };

  return (
    <div style={{ display: "flex", gap: "5px" }}>
      {[...Array(noOfStar)].map((_, index) => {
        const starIndex = index + 1;
        return (
          <span
            key={starIndex}
            onMouseEnter={() => handleMouseEnter(starIndex)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClicked(starIndex)}
          >
            <FaStar
              className={
                starIndex <= (hoveredStar || selectedRating)
                  ? "star-hover"
                  : "star"
              }
              size={54}
            />
          </span>
        );
      })}
    </div>
  );
};

export default Starcard;
