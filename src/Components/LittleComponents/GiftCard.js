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
import Button from "./Button";
import Title from "./Title";

const GiftCard = () => {
  const { sectionRef, isVisible, sectionRef1, isVisible1 } = useVisibility(0.3);
  return (
    <>
      <Title title={"Send us a gift"}>
        <p className="text-center text-base text-gray-600 mb-2 ping">Silahkan kirimkan hadiah kepada kedua mempelai</p>
      </Title>
      <div ref={sectionRef} className={`mb-24 flex bg-[#eae2dc] justify-center rounded-t-[50%] items-center w-[23rem] h-[30rem] relative overflow-hidden font-playfair ${isVisible ? "opacity-100 ping" : "opacity-0"}`}>
        <div className={`flex flex-col space-y-4 items-center justify-center text-center w-[21rem] h-[28rem] rounded-t-[50%] border-primaryColor border-[1px] ${isVisible ? "opacity-100 animate-fadeInScale" : "opacity-0"}`}>
          <div className="flex justify-center mb-2">
            <div className="w-16 h-16 rounded-full bg-[#f5d89f] border-primaryColor border-[1px] flex items-center justify-center">
              <img src={orn6} alt="orn" />
            </div>
          </div>
          <h1 className="text-xl font-bold text-primaryColor mb-2">Shipping Info</h1>

          <div className="w-full p-2 rounded-lg">
            <h2 className="text-base font-bold text-gray-700 mb-2">Shipping Address</h2>
            <p className="text-sm text-gray-700 mb-1">Recipient's Name</p>
            <p className="text-sm text-gray-700 font-bold mb-2">Rachel Queen</p>
            <p className="text-sm text-gray-700 mb-1">Phone Number</p>
            <p className="text-sm text-gray-700 font-bold mb-2">08215469587</p>
            <p className="text-sm text-gray-700 mb-1">Alamat Pengiriman</p>
            <p className="text-sm text-gray-700 font-bold">JIS</p>
          </div>
        </div>
        {/* bottom */}
        <img src={orn22} alt="" className={`absolute w-[6rem] z-50 -bottom-6 -left-10 ${isVisible ? "opacity-100 animate-sequenceInit" : " opacity-0"}`} />
        <img src={orn27} alt="" className={`absolute w-[6rem] z-40 -bottom-6 left-6 ${isVisible ? "opacity-100 ping" : " opacity-0"} `} />
        <img src={orn28} alt="" className={`absolute w-[6rem] z-30 -bottom-10 left-20 ${isVisible ? "opacity-100 ping" : " opacity-0"} `} />
        <img src={orn12} alt="" className={`absolute w-[6rem]  -bottom-2 left-20 ${isVisible ? "opacity-100 ping" : " opacity-0"} `} />
        <img src={orn29} alt="" className={`absolute w-[6rem] z-50 -bottom-8 inset-y-auto ${isVisible ? "opacity-100 ping" : " opacity-0"} `} style={{ rotate: "-30deg" }} />
        <img src={orn12} alt="" className={`absolute w-[6rem] -bottom-2 left-48 ${isVisible ? "opacity-100 ping" : " opacity-0"} `} style={{ transform: "scaleX(-1)" }} />
        <img src={orn28} alt="" className={`absolute w-[6rem] z-30 -bottom-10 left-48 ${isVisible ? "opacity-100 ping" : " opacity-0"} `} />
        <img src={orn27} alt="" className={`absolute w-[6rem] z-40 -bottom-6 right-6 ${isVisible ? "opacity-100 ping" : " opacity-0"} `} style={{ transform: "scaleX(-1)" }} />
        <img src={orn22} alt="" className={`absolute w-[6rem] z-50 -bottom-6 -right-10 ${isVisible ? "opacity-100 animate-sequence8" : " opacity-0"}`} style={{ transform: "scaleX(-1)" }} />

        {/* left */}
        <img src={orn13} alt="" className={`absolute w-[6rem] z-40 bottom-10 -left-8 ${isVisible ? "opacity-100 animate-sequenceInit" : " opacity-0"}`} />
        <img src={orn92} alt="" className={`absolute w-[6rem] z-30 bottom-24 -left-8 ${isVisible ? "opacity-100 animate-sequenceInit" : " opacity-0"}`} style={{ rotate: "30deg" }} />
        {/* right */}
        <img src={orn13} alt="" className={`absolute w-[6rem] z-40 bottom-10 -right-8 ${isVisible ? "opacity-100 animate-sequence8" : " opacity-0"}`} style={{ transform: "scaleX(-1)" }} />
        <img src={orn92} alt="" className={`absolute w-[6rem] z-30 bottom-24 -right-8 ${isVisible ? "opacity-100 animate-sequence8" : " opacity-0"}`} style={{ transform: "scaleX(-1)", rotate: "-30deg" }} />
      </div>
    </>
  );
};

export default GiftCard;
