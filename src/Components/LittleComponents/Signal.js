import React from "react";

const Signal = () => {
  return (
    <span className="">
      {/* Kotak besar dengan border dan rounded */}
      <div className="flex h-8 w-4 animate-bounce items-center justify-center rounded-full border-[1px] border-primaryColor">
        {/* Elemen kecil di tengah kotak */}
        <div className="h-1 w-1 rounded-full animate-pulse bg-primaryColor"></div>
      </div>
    </span>
  );
};

export default Signal;
