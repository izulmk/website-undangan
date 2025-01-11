import React from "react";
import bg from "../../assets/images/5.jpeg"; // Example image import
import WeddingsName from "./WeddingsName"; // Example image import
import orn6 from "../../assets/images/Orn-06.png";
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
import useVisibility from "../../hook/useVisibility";
import BottomOrnaments from "../ornaments/BottomOrnaments";
import LeftOrnaments from "../ornaments/LeftOrnaments";
import RightOrnaments from "../ornaments/RightOrnaments";

const WeddingInvitation2 = () => {
  const { sectionRef, isVisible, sectionRef1, isVisible1 } = useVisibility(0.3);
  const bottomOrnaments = [
    { src: orn22, size: "8rem", zIndex: 50, position: "-bottom-6 -left-10", animation: isVisible ? "opacity-100 animate-sequenceInit" : "opacity-0", style: {} },
    { src: orn40, size: "8rem", zIndex: 30, position: "bottom-0 left-6", animation: isVisible ? "opacity-100 bounce1" : "opacity-0", style: {} },
    // { src: orn27, size: "6rem", zIndex: 40, position: "-bottom-6 left-6", animation: isVisible ? "opacity-100 ping" : "opacity-0", style: {} },
    // { src: orn28, size: "6rem", zIndex: 30, position: "-bottom-10 left-24", animation: isVisible ? "opacity-100 ping" : "opacity-0", style: {} },
    // { src: orn12, size: "7rem", zIndex: 10, position: "-bottom-2 left-48", animation: isVisible ? "opacity-100 ping" : "opacity-0", style: { rotate: "0deg" } },
    { src: orn29, size: "23rem", zIndex: 0, position: "-bottom-4 left-0", animation: isVisible ? "opacity-100 ping" : "opacity-0", style: { rotate: "0deg" } },
    { src: orn29, size: "23rem", zIndex: 0, position: "-bottom-4 left-[12rem]", animation: isVisible ? "opacity-100 ping" : "opacity-0", style: { rotate: "0deg" } },
    { src: orn29, size: "23rem", zIndex: 0, position: "-bottom-4 left-[36%]", animation: isVisible ? "opacity-100 ping" : "opacity-0", style: { rotate: "0deg" } },
    { src: orn29, size: "23rem", zIndex: 0, position: "-bottom-4 right-[12rem]", animation: isVisible ? "opacity-100 ping" : "opacity-0", style: { rotate: "0deg" } },
    { src: orn29, size: "23rem", zIndex: 0, position: "-bottom-4 right-0", animation: isVisible ? "opacity-100 ping" : "opacity-0", style: { rotate: "0deg" } },
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
    <div ref={sectionRef} className="relative p-8 min-w-full md:max-w-md min-h-screen mx-auto overflow-hidden">
      {/* Gambar background dan gradasi */}
      <div
        className={`absolute inset-0 bg-cover bg-center ${isVisible ? "opacity-100 animate-fadeInScale" : "opacity-0"}`}
        style={{
          backgroundImage: `url(${bg}), linear-gradient(to bottom, rgba(245, 241, 237, 1), rgba(245, 241, 237, 0))`,
          backgroundBlendMode: "overlay",
        }}
      ></div>
      <div className={`relative z-10 flex flex-col items-center justify-center font-playfair ${isVisible ? "opacity-100 ping" : " opacity-0"}`}>
        <h1 className="text-lg font-semibold text-secondaryColor">Wedding Invitation</h1>
        <WeddingsName text1={"Rachel"} text2={"Dave"} text3={"&"} isVisible={true} />
        <p className="text-secondaryColor mt-2">#PromDateToLifeMate</p>
        <p className="text-primaryColor mt-4">Saturday, 01 February 2025</p>
      </div>
      <BottomOrnaments isVisible={isVisible} ornImages={bottomOrnaments} />
      <LeftOrnaments isVisible={isVisible} ornImages={leftOrnaments} />
      <RightOrnaments isVisible={isVisible} ornImages={rightOrnaments} />
    </div>
  );
};

export default WeddingInvitation2;
