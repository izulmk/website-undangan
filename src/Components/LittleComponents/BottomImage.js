import React from "react";
import useVisibility from "../../hook/useVisibility";

const BottomImage = ({ flowerImages = [], flowersBot = [], additionalImages = [] }) => {
  const { sectionRef, isVisible } = useVisibility(0.5); // Menggunakan hook untuk visibilitas

  return (
    <div ref={sectionRef} className="">
      <div className={` z-10 absolute -bottom-5 -left-6 overflow-hidden ${isVisible ? "opacity-100 animate-slideUp" : "opacity-0"}`}>
        <img src={flowerImages[0]} alt="Flower" className="w-56 h-56 m-2" />
      </div>
      <div className={`z-10 absolute -bottom-5 -right-6 overflow-hidden ${isVisible ? "opacity-100 animate-slideUp" : "opacity-0"}`}>
        <img
          src={flowerImages[0]}
          alt="Flower"
          className="w-56 h-56 m-2"
          style={{ transform: "scaleX(-1)" }} // Efek mirror
        />
      </div>
      <div className={`absolute -bottom-2 left-0 text-6xl flex gap-0 items-center justify-center overflow-hidden ${isVisible ? "opacity-100 animate-slideUp" : "opacity-0"}`}>
        <img src={flowerImages[1]} alt="Flower" className="w-[26rem] h-[26rem]" />
        <img src={flowerImages[1]} alt="Flower" className="w-[26rem] h-[26rem]" />
        <div className={`absolute -bottom-2 h-[240px] w-full text-6xl flex gap-0 items-center justify-center overflow-hidden ${isVisible ? "opacity-100 animate-slideUp" : "opacity-0"}`}>
          <div className="flex items-center justify-center">
            {flowersBot.map((flower, index) => (
              <img key={index} src={flower} alt="Flower" className="w-32 h-32" />
            ))}
          </div>
          <div className="absolute w-full">
            <div className="flex items-center justify-center w-full">
              {additionalImages.map((image, index) => (
                <div key={index} className={`absolute right-${index * 4} flex flex-row`}>
                  <img src={image} alt="Flower" className="w-[164px] h-[164px]" />
                </div>
              ))}
            </div>
          </div>
          <div className={`absolute -bottom-2 text-6xl flex gap-0 items-center justify-center overflow-hidden ${isVisible ? "opacity-100 animate-slideUp" : "opacity-0"}`}>
            <img src={flowerImages[1]} alt="Flower" className="w-96 h-96 animate-blow" style={{ transform: "scaleX(-1)" }} />
            <img src={flowerImages[1]} alt="Flower" className="w-96 h-96 animate-blow" style={{ transform: "scaleX(-1)" }} />
            <img src={flowerImages[1]} alt="Flower" className="w-96 h-96 animate-blow" style={{ transform: "scaleX(-1)" }} />
          </div>
        </div>
        <img src={flowerImages[1]} alt="Flower" className="w-[26rem] h-[26rem]" />
        <img src={flowerImages[1]} alt="Flower" className="w-[26rem] h-[26rem]" />
      </div>
    </div>
  );
};

export default BottomImage;
