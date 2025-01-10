import React from "react";
import flower4 from "../../assets/images/top 1.png";
import useVisibility from "../../hook/useVisibility";
const TopImage = () => {
  // Gunakan hook useVisibility untuk mendapatkan status visibilitas
  const { sectionRef, isVisible } = useVisibility(0.5);

  return (
    <div ref={sectionRef} className="">
      {/* Gambar pertama dengan rotasi 180 derajat */}
      <div className={`z-20 absolute -top-5 -left-6 overflow-hidden ${isVisible ? "opacity-100 animate-slideDown" : "opacity-0"}`}>
        <img
          src={flower4}
          alt="Flower"
          className="w-44 h-44 m-2 rotate-180" // Kelas untuk rotasi 180 derajat
        />
      </div>

      {/* Gambar kedua dengan pembalikan vertikal */}
      <div className={`z-20 absolute -top-5 -right-6 overflow-hidden ${isVisible ? "opacity-100 animate-slideDown" : "opacity-0"}`}>
        <img
          src={flower4}
          alt="Flower"
          className="w-44 h-44 m-2"
          style={{ transform: "scaleY(-1)" }} // Pembalikan vertikal
        />
      </div>
    </div>
  );
};

export default TopImage;
