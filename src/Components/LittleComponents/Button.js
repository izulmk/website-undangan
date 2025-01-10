import React from "react";

const Button = ({ text, onClick, className = "" }) => {
  return (
    <button className={`px-6 py-2 text-xl text-white bg-primaryColor rounded-full hover:opacity-70 hover:cursor-pointer ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
