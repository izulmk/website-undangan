import React from "react";

const ImageWithMirror = ({ src, alt, mirror = false, className = "" }) => {
  return <img src={src} alt={alt} className={` ${className}`} style={mirror ? { transform: "scaleX(-1)" } : {}} />;
};

export default ImageWithMirror;
