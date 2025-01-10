import React from "react";

const LeftOrnaments = ({ isVisible, ornImages }) => {
  return (
    <>
      {ornImages.map((ornament, index) => (
        <img key={index} src={ornament.src} alt={`left-ornament-${index}`} className={`absolute w-[${ornament.size}] z-${ornament.zIndex} ${ornament.position} ${isVisible ? ornament.animation : "opacity-0"}`} style={ornament.style} />
      ))}
    </>
  );
};

export default LeftOrnaments;
