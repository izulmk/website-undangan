import React from "react";
import "tailwindcss/tailwind.css";
import bingkai1 from "../../assets/images/pillar-center-bingkai.png";
import bingkai2 from "../../assets/images/pillar-top-bingkai.png";
import orn1 from "../../assets/images/Orn-22.png";
import orn2 from "../../assets/images/Orn-18.png";
import orn3 from "../../assets/images/Orn-12.png";
import orn4 from "../../assets/images/Orn-21.png";
import orn5 from "../../assets/images/Orn-20.png";
import orn6 from "../../assets/images/Orn-08 (1).png";
import orn7 from "../../assets/images/Orn-09 (1) - Copy.png";
import orn8 from "../../assets/images/Orn-23.png";
import CincinSVG from "./CincinSVG";
import GelasSVG from "./GelasSVG";
import Button from "./Button";
import useVisibility from "../../hook/useVisibility";
import Title from "./Title";
const WeddingDay = () => {
  const { sectionRef, isVisible, sectionRef1, isVisible1 } = useVisibility(0.5);
  return (
    <div ref={sectionRef} className="p-8 font-playfair max-w-md mx-auto flex flex-col items-center relative mb-24 ">
      <div className={`absolute z-10 w-full h-full left-8 top-6 ${isVisible ? "opacity-100 ping1" : " opacity-0"} `}>
        <img src={bingkai1} alt="" className="absolute w-[20rem] h-[26rem] top-[19.5rem] " />
        <img src={bingkai2} alt="" className="absolute top-[9rem] w-[20rem] " />
        <img src={bingkai2} alt="" className="absolute w-[20rem] bottom-[3rem] " style={{ rotate: "180deg" }} />
      </div>

      {/* ornament1 */}
      <img src={orn1} alt="" className={`absolute z-30 w-[4rem] top-[19rem] left-[1rem] ${isVisible ? "opacity-100 animate-sequence" : " opacity-0"}`} style={{ transform: "scaleX(-1)" }} />
      <img src={orn2} alt="" className={`absolute z-20 w-[2.5rem] top-[14rem] left-[2rem] ${isVisible ? "opacity-100 ping" : " opacity-0"}`} />
      <img src={orn3} alt="" className={`absolute z-10 w-[3rem] top-[12.4rem] left-[3rem] ${isVisible ? "opacity-100 ping" : " opacity-0"}`} />

      {/* ornament2 */}
      <img src={orn4} alt="" className={`absolute z-10 w-[4rem] bottom-40 left-[0.6rem] ${isVisible ? "opacity-100 ping" : " opacity-0"}`} />
      <img src={orn5} alt="" className={`absolute z-30 w-[6rem] bottom-28 left-[0.6rem] ${isVisible ? "opacity-100 ping" : " opacity-0"}`} />
      <img src={orn6} alt="" className={`absolute z-20 w-[8rem] bottom-[2.5rem] left-[2rem] ${isVisible ? "opacity-100 ping" : " opacity-0"}`} style={{ rotate: "40deg" }} />
      <img src={orn7} alt="" className={`absolute z-10 w-[10rem] bottom-[2rem] left-[2rem] ${isVisible ? "opacity-100 animate-sequence2" : " opacity-0"}`} style={{ rotate: "60deg" }} />

      {/* ornament3 */}
      <img src={orn8} alt="" className={`absolute z-10 w-[8rem] bottom-[2rem] right-[2rem] ${isVisible ? "opacity-100 ping" : " opacity-0"}`} />
      <img src={orn1} alt="" className={`absolute z-30 w-[4rem] bottom-[6.4rem] right-[1.4rem] ${isVisible ? "opacity-100 animate-sequenceInit" : " opacity-0"}`} />
      <img src={orn2} alt="" className={`absolute z-20 w-[2.5rem] bottom-[6.4rem] right-[2rem] ${isVisible ? "opacity-100 ping5" : " opacity-0"}`} style={{ transform: "scaleX(-1)" }} />
      <img src={orn3} alt="" className={`absolute z-10 w-[2.5rem] bottom-[15rem] right-[3rem] ${isVisible ? "opacity-100 ping5" : " opacity-0"}`} style={{ transform: "scaleX(-1)" }} />

      <div className="text-center mb-2">
        <Title title={"It's wedding day"}>
          <p className="text-gray-600 mt-2">Saturday,</p>
          <p className="text-gray-600">01 February 2025</p>
        </Title>
      </div>
      <div className={`mt-4 p-6 border border-green-300 w-[20rem] h-[45rem] bg-[#f5d89f] rounded-full flex flex-col justify-center ${isVisible ? "opacity-100 ping1" : " opacity-0"}`}>
        <div className="text-center">
          <div className="w-12 h-12 mx-auto text-primaryColor">
            <CincinSVG />
          </div>
          <h2 className="text-2xl font-semibold text-primaryColor">Akad Nikah</h2>
          <p className="text-gray-700">09:00 - 10:00</p>
        </div>
        <div className="text-center mt-4">
          <div className="w-12 h-12 mx-auto">
            <GelasSVG />
          </div>
          <h2 className="text-2xl font-semibold text-primaryColor">Resepsi</h2>
          <p className="text-gray-700">11:00 - 17:00</p>
        </div>
        <div className="mt-8 text-center">
          <p className="text-secondaryColor font-bold">Jakarta International Stadium (JIS)</p>
          <p className="">Papanggo, Tanjung Priok, North Jakarta City, Jakarta, Indonesia</p>
          <p className="">North Jakarta City</p>
        </div>
        <div className="mt-8 text-center">
          <Button text="View Maps" />
        </div>
      </div>
    </div>
  );
};

export default WeddingDay;
