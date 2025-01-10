import React from "react";

const Footer = () => {
  return (
    <div className="bg-primaryColor w-full flex items-center justify-center h-screen">
      <div className="text-center text-white">
        <div className="flex items-center justify-center mb-2">
          <div className="bg-white rounded-full w-4 h-4 mr-1"></div>
          <div className="bg-white rounded-full w-4 h-4 mr-1"></div>
          <div className="bg-white rounded-full w-6 h-6"></div>
        </div>
        <p className="text-lg font-bold">Powered by</p>
        <p className="text-2xl font-bold">KATSU DOTO</p>
      </div>
    </div>
  );
};

export default Footer;
