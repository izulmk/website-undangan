import React from "react";

const PhotoFrame = ({ imageUrl }) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="w-full" src={imageUrl} alt="Foto" />
      <div className="p-4">
        <h1 className="text-lg font-bold">Bingkai Foto</h1>
        <p className="mt-2 text-gray-600">Ini adalah deskripsi singkat tentang foto ini.</p>
      </div>
    </div>
  );
};

export default PhotoFrame;
