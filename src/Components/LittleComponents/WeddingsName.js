import React from "react";

// Komponen Heading yang bisa digunakan ulang
const WeddingsName = ({ text1, text2, text3 = null, className = "", isVisible, children }) => {
  return (
    <h1 className={`text-4xl flex flex-col space-y-2 items-center font-playfair  text-primaryColor  ${isVisible ? "opacity-100 animate-fadeInScale delay-[300ms]" : " opacity-0"} font-thin ${className}`}>
      <span>{text1} </span>
      <span>{text3} </span>
      <span>{text2} </span>
      {children}
    </h1>
  );
};

export default WeddingsName;
