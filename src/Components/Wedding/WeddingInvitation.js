import React from "react";
import "tailwindcss/tailwind.css";
import backgroundImage1 from "../../assets/images/1.jpeg";
import backgroundImage2 from "../../assets/images/1.webp"; // Gambar kedua
import flower1 from "../../assets/images/hummingbird-6554.gif";
import flower2 from "../../assets/images/hummingbird-8668.gif";
import orn92 from "../../assets/images/Orn-09 (2).png";
import orn12 from "../../assets/images/Orn-12.png";
import orn13 from "../../assets/images/Orn-13.png";
import orn16 from "../../assets/images/Orn-16.png";
import orn22 from "../../assets/images/Orn-22.png";
import orn42 from "../../assets/images/Orn-42.png";
import orn27 from "../../assets/images/Orn-27.png";
import orn28 from "../../assets/images/Orn-28.png";
import orn29 from "../../assets/images/bingkai-bottom.png";
// import orn29 from "../../assets/images/Orn-29.png";
import orn35 from "../../assets/images/Orn-35.png";
import orn40 from "../../assets/images/Orn-40.png";
import orn43 from "../../assets/images/Orn-43.png";
import WeddingsName from "../LittleComponents/WeddingsName";
import ImageWithMirror from "../LittleComponents/ImageWithMirror";
import Button from "../LittleComponents/Button";
import BottomOrnaments from "../ornaments/BottomOrnaments";
import LeftOrnaments from "../ornaments/LeftOrnaments";
import RightOrnaments from "../ornaments/RightOrnaments";

const WeddingInvitation = ({ onButtonClick, isVisible }) => {
  // const bottomOrnaments = [
  //   { src: orn22, size: "6rem", zIndex: 50, position: "-bottom-6 -left-10", animation: isVisible ? "opacity-100 animate-sequenceInit" : "opacity-0", style: {} },
  //   { src: orn40, size: "8rem", zIndex: 30, position: "bottom-0 left-6", animation: isVisible ? "opacity-100 bounce1" : "opacity-0", style: {} },
  //   { src: orn27, size: "6rem", zIndex: 40, position: "-bottom-6 left-6", animation: isVisible ? "opacity-100 ping" : "opacity-0", style: {} },
  //   { src: orn28, size: "6rem", zIndex: 30, position: "-bottom-10 left-24", animation: isVisible ? "opacity-100 ping" : "opacity-0", style: {} },
  //   { src: orn12, size: "7rem", zIndex: 10, position: "-bottom-2 right-48", animation: isVisible ? "opacity-100 ping" : "opacity-0", style: { rotate: "0deg" } },
  //   { src: orn29, size: "8rem", zIndex: 50, position: "-bottom-8 right-[130px]", animation: isVisible ? "opacity-100 ping" : "opacity-0", style: { rotate: "-30deg" } },
  //   { src: orn12, size: "7rem", zIndex: 10, position: "-bottom-2 left-48", animation: isVisible ? "opacity-100 ping" : "opacity-0", style: { transform: "scaleX(-1)" } },
  //   { src: orn28, size: "6rem", zIndex: 30, position: "-bottom-10 left-56", animation: isVisible ? "opacity-100 ping" : "opacity-0", style: {} },
  //   { src: orn27, size: "6rem", zIndex: 40, position: "-bottom-6 right-6", animation: isVisible ? "opacity-100 ping" : "opacity-0", style: { transform: "scaleX(-1)" } },
  //   { src: orn40, size: "8rem", zIndex: 30, position: "bottom-0 right-6", animation: isVisible ? "opacity-100 bounce2" : "opacity-0", style: { transform: "scaleX(-1)" } },
  //   { src: orn22, size: "6rem", zIndex: 50, position: "-bottom-6 -right-10", animation: isVisible ? "opacity-100 animate-sequence8" : "opacity-0", style: { transform: "scaleX(-1)" } },
  // ];

  const bottomOrnaments = [
    { src: orn22, size: "8rem", zIndex: 50, position: "-bottom-6 -left-10", animation: isVisible ? "opacity-100 animate-sequenceInit" : "opacity-0", style: {} },
    { src: orn40, size: "8rem", zIndex: 30, position: "bottom-0 left-6", animation: isVisible ? "opacity-100 bounce1" : "opacity-0", style: {} },
    // { src: orn27, size: "6rem", zIndex: 40, position: "-bottom-6 left-6", animation: isVisible ? "opacity-100 ping" : "opacity-0", style: {} },
    // { src: orn28, size: "6rem", zIndex: 30, position: "-bottom-10 left-24", animation: isVisible ? "opacity-100 ping" : "opacity-0", style: {} },
    // { src: orn12, size: "7rem", zIndex: 10, position: "-bottom-2 left-48", animation: isVisible ? "opacity-100 ping" : "opacity-0", style: { rotate: "0deg" } },
    { src: orn29, size: "full", zIndex: 0, position: "-bottom-4 right-0 left-0", animation: isVisible ? "opacity-100 ping" : "opacity-0", style: { rotate: "0deg" } },
    // { src: orn12, size: "7rem", zIndex: 10, position: "-bottom-2 right-48", animation: isVisible ? "opacity-100 ping" : "opacity-0", style: { transform: "scaleX(-1)" } },
    // { src: orn28, size: "6rem", zIndex: 30, position: "-bottom-10 left-56", animation: isVisible ? "opacity-100 ping" : "opacity-0", style: {} },
    // { src: orn27, size: "6rem", zIndex: 40, position: "-bottom-6 right-6", animation: isVisible ? "opacity-100 ping" : "opacity-0", style: { transform: "scaleX(-1)" } },
    { src: orn40, size: "8rem", zIndex: 30, position: "bottom-0 right-6", animation: isVisible ? "opacity-100 bounce2" : "opacity-0", style: { transform: "scaleX(-1)" } },
    { src: orn22, size: "8rem", zIndex: 50, position: "-bottom-6 -right-10", animation: isVisible ? "opacity-100 animate-sequence8" : "opacity-0", style: { transform: "scaleX(-1)" } },
  ];

  // Data ornament sisi kiri
  const leftOrnaments = [
    { src: orn13, size: "6rem", zIndex: 40, position: "bottom-10 -left-8", animation: isVisible ? "opacity-100 animate-sequenceInit" : "opacity-0", style: {} },
    { src: orn92, size: "6rem", zIndex: 50, position: "bottom-24 -left-8", animation: isVisible ? "opacity-100 animate-sequenceInit" : "opacity-0", style: { rotate: "30deg" } },
    { src: orn42, size: "8rem", zIndex: 40, position: "bottom-64 -left-8", animation: isVisible ? "opacity-100 animate-floatLeft" : "opacity-0", style: {} },
    { src: orn16, size: "4rem", zIndex: 30, position: "bottom-96 -left-4", animation: isVisible ? "opacity-100 animate-floatLeft" : "opacity-0", style: { rotate: "30deg" } },
    { src: orn43, size: "6rem", zIndex: 20, position: "bottom-96 -left-6", animation: isVisible ? "opacity-100 animate-sequenceInit" : "opacity-0", style: { rotate: "0deg" } },
    { src: orn35, size: "6rem", zIndex: 10, position: "bottom-[28rem] -left-6", animation: isVisible ? "opacity-100 animate-sequenceInit" : "opacity-0", style: { rotate: "0deg" } },
  ];

  // Data ornament sisi kanan
  const rightOrnaments = [
    { src: orn13, size: "6rem", zIndex: 40, position: "bottom-10 -right-8", animation: isVisible ? "opacity-100 animate-sequence8" : "opacity-0", style: { transform: "scaleX(-1)" } },
    { src: orn92, size: "6rem", zIndex: 50, position: "bottom-24 -right-8", animation: isVisible ? "opacity-100 animate-sequence8" : "opacity-0", style: { transform: "scaleX(-1)", rotate: "-30deg" } },
    { src: orn42, size: "8rem", zIndex: 40, position: "bottom-64 -right-8", animation: isVisible ? "opacity-100 animate-floatRight3" : "opacity-0", style: { transform: "scaleX(-1)" } },
    { src: orn16, size: "4rem", zIndex: 30, position: "bottom-96 -right-4", animation: isVisible ? "opacity-100 animate-floatRight3" : "opacity-0", style: { transform: "scaleX(-1)", rotate: "-30deg" } },
    { src: orn43, size: "6rem", zIndex: 20, position: "bottom-96 -right-6", animation: isVisible ? "opacity-100 animate-sequence8" : "opacity-0", style: { transform: "scaleX(-1)", rotate: "0deg" } },
    { src: orn35, size: "6rem", zIndex: 10, position: "bottom-[28rem] -right-6", animation: isVisible ? "opacity-100 animate-sequence8" : "opacity-0", style: { transform: "scaleX(-1)", rotate: "0deg" } },
  ];
  return (
    <div className="flex flex-col items-center justify-center min-w-full min-h-screen bg-gray-100 overflow-x-hidden overflow-y-hidden relative">
      <div
        className="absolute inset-0 bg-cover bg-center min-h-screen"
        style={{
          backgroundImage: `url(${backgroundImage1}), url(${backgroundImage2})`,
          backgroundSize: "cover contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundBlendMode: "multiply", // Blend the gradient and images
        }}
      >
        {/* Gradasi overlay dari putih ke transparan */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(to top, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0))",
          }}
        ></div>
      </div>
      {/* Content */}
      <div className="relative z-10 w-full mt-2 ">
        <div className="font-playfair text-center space-y-8 ">
          <div className="flex items-center justify-between z-20  ">
            <ImageWithMirror className="w-24 h-24 z-20" src={flower1} alt="Flower" mirror={true} />
            <WeddingsName text1={"Rachel"} text2={"Dave"} text3={"&"} isVisible={isVisible} />
            <ImageWithMirror className="w-24 h-24 z-20" src={flower2} alt="Flower" mirror={false} />
          </div>
          <div className="animate-slideUpText z-50 flex flex-col items-center justify-center">
            <p className="  text-base">Hai Katsudoto</p>
            <Button text="Open Invitation" onClick={onButtonClick} />
          </div>
        </div>
      </div>

      <BottomOrnaments isVisible={isVisible} ornImages={bottomOrnaments} />
      <LeftOrnaments isVisible={isVisible} ornImages={leftOrnaments} />
      <RightOrnaments isVisible={isVisible} ornImages={rightOrnaments} />
    </div>
  );
};

export default WeddingInvitation;
