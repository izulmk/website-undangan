import React from "react";
import useVisibility from "../../hook/useVisibility";

const BingkaiFoto = ({ imageUrl, altText, className }) => {
  const { sectionRef, isVisible, isVisible1, sectionRef1 } = useVisibility(0.5);
  return (
    <div ref={sectionRef} className={`${className} flex justify-center items-center p-4 w-full h-[408px] ${isVisible ? "opacity-100 animate-fadeInScale delay-[300ms]" : " opacity-0"}`}>
      <div
        className="border-4 border-[#b19a7b] rounded-full overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300"
        style={{
          width: "250px", // Lebar bingkai ovale
          height: "350px", // Tinggi bingkai ovale
          borderRadius: "50%", // Membuat bingkai berbentuk ovale
          overflow: "hidden", // Menjaga gambar tetap dalam bentuk ovale
        }}
      >
        <img src={imageUrl} alt={altText} className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default BingkaiFoto;
