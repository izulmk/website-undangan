import React from "react";

const BottomOrnaments = ({ isVisible, ornImages }) => {
  return (
    <>
      {ornImages.map((ornament, index) => (
        <img
          key={index}
          src={ornament.src}
          alt={`bottom-ornament-${index}`}
          className={`absolute w-[${ornament.size}] md:w-[${ornament.sizemd}] z-${ornament.zIndex} ${ornament.position} ${isVisible ? ornament.animation : "opacity-0"}`}
          style={ornament.style}
        />
      ))}
    </>
  );
};

export default BottomOrnaments;
