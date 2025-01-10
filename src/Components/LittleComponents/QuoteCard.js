import React from "react";
import orn6 from "../../assets/images/Orn-06.png";
import orn92 from "../../assets/images/Orn-09 (2).png";
import orn12 from "../../assets/images/Orn-12.png";
import orn13 from "../../assets/images/Orn-13.png";
import orn22 from "../../assets/images/Orn-22.png";
import orn27 from "../../assets/images/Orn-27.png";
import orn28 from "../../assets/images/Orn-28.png";
import orn29 from "../../assets/images/Orn-29.png";
import useVisibility from "../../hook/useVisibility";

const QuoteCard = () => {
  const { sectionRef, isVisible } = useVisibility(0.3);

  // Daftar gambar dan zIndex
  const ornaments = [
    { src: orn22, zIndex: 10 },
    { src: orn27, zIndex: 10 },
    { src: orn28, zIndex: 10 },
    { src: orn12, zIndex: 10 },
    { src: orn29, zIndex: 10 },
    { src: orn12, zIndex: 10 },
    { src: orn28, zIndex: 10 },
    { src: orn27, zIndex: 10 },
    { src: orn22, zIndex: 10 },
    { src: orn13, zIndex: 10 },
    { src: orn92, zIndex: 10 },
    { src: orn13, zIndex: 10 },
    { src: orn92, zIndex: 10 },
  ];

  // Fungsi untuk menghasilkan posisi yang tersebar lebih merata
  const generateSpreadPosition = (index) => {
    const positions = [
      { top: "5%", left: "5%" },
      { top: "10%", left: "25%" },
      { top: "20%", left: "45%" },
      { top: "30%", left: "65%" },
      { top: "40%", left: "85%" },
      { top: "50%", left: "20%" },
      { top: "60%", left: "40%" },
      { top: "70%", left: "60%" },
      { top: "80%", left: "80%" },
      { top: "10%", left: "75%" },
      { top: "50%", left: "55%" },
      { top: "60%", left: "90%" },
      { top: "80%", left: "15%" },
    ];

    return positions[index] || { top: "50%", left: "50%" }; // Default center
  };

  return (
    <div ref={sectionRef} className="p-8 min-h-screen relative overflow-hidden flex flex-col items-center justify-center mb-24">
      {ornaments.map((ornament, index) => {
        const position = generateSpreadPosition(index); // Dapatkan posisi tersebar
        return (
          <img
            key={index}
            src={ornament.src}
            alt=""
            className={`absolute w-[4rem] z-${ornament.zIndex} ${isVisible ? "opacity-75" : "opacity-0"} ${isVisible ? "bounce2" : ""}`}
            style={position} // Terapkan posisi yang sudah ditentukan
          />
        );
      })}

      <div className={`z-30 text-center flex flex-col items-center justify-center text-primaryColor ${isVisible ? "ping" : ""}`}>
        <p className="text-lg italic">"A great marriage is not when the 'perfect couple' comes together. It is when an imperfect couple learns to enjoy their differences."</p>
        <p className="mt-4 text-sm">~ Dave Meurer ~</p>
      </div>
    </div>
  );
};

export default QuoteCard;
