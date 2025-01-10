import React from "react";
import { FaHandSparkles, FaTemperatureHigh, FaUserFriends, FaMask } from "react-icons/fa";
import Title from "./Title";
import orn6 from "../../assets/images/Orn-06.png";
import orn92 from "../../assets/images/Orn-09 (2).png";
import orn12 from "../../assets/images/Orn-12.png";
import orn13 from "../../assets/images/Orn-13.png";
import orn22 from "../../assets/images/Orn-22.png";
import orn27 from "../../assets/images/Orn-27.png";
import orn28 from "../../assets/images/Orn-28.png";
import orn29 from "../../assets/images/Orn-29.png";
import useVisibility from "../../hook/useVisibility";

const HealthProtocol = () => {
  const { sectionRef, isVisible, sectionRef1, isVisible1 } = useVisibility(0.3);
  return (
    <div ref={sectionRef} className="p-6 w-full mx-auto mb-24">
      <Title title="Health Protocol" />
      <div className="md:space-x-10 space-y-4  md:space-y-0 flex items-center justify-center flex-col md:flex-row gap-10 relative text-secondaryColor">
        <div className="flex flex-col items-center gap-10 md:gap-20">
          <div className={`flex flex-col items-center ${isVisible ? "opacity-100 healthprotocol1" : " opacity-0"}`}>
            <FaHandSparkles className="text-4xl text-primaryColor mb-2" />
            <p className="text-center text-sm">Wash Your Hand</p>
          </div>
          <div className={`flex flex-col items-center ${isVisible ? "opacity-100 healthprotocol2" : " opacity-0"}`}>
            <FaMask className="text-4xl text-primaryColor mb-2" />
            <p className="text-center text-sm">Wearing A Mask</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-10 md:gap-20">
          <div className={`flex flex-col items-center ${isVisible ? "opacity-100 healthprotocol3" : " opacity-0"}`}>
            <FaTemperatureHigh className="text-4xl text-primaryColor mb-2" />
            <p className="text-center text-sm">Temperature Check</p>
          </div>
          <div className={`flex flex-col items-center ${isVisible ? "opacity-100 healthprotocol4" : " opacity-0"}`}>
            <FaUserFriends className="text-4xl text-primaryColor mb-2" />
            <p className="text-center text-sm">Social Distancing</p>
          </div>
        </div>
        {/* left */}
        <img src={orn22} alt="" className={`absolute w-[6rem] z-50 -bottom-6 -left-10 md:hidden block ${isVisible ? "opacity-100 animate-sequenceInit" : " opacity-0"}`} />
        <img src={orn13} alt="" className={`absolute w-[6rem] z-40 bottom-10 -left-8 md:hidden block ${isVisible ? "opacity-100 animate-sequenceInit" : " opacity-0"}`} />
        <img src={orn92} alt="" className={`absolute w-[6rem] z-30 bottom-24 -left-8 md:hidden block ${isVisible ? "opacity-100 animate-sequenceInit" : " opacity-0"}`} style={{ rotate: "30deg" }} />
        {/* right */}
        <img src={orn13} alt="" className={`absolute w-[6rem] z-40 bottom-10 -right-8 md:hidden block ${isVisible ? "opacity-100 animate-sequence8" : " opacity-0"}`} style={{ transform: "scaleX(-1)" }} />
        <img src={orn92} alt="" className={`absolute w-[6rem] z-30 bottom-24 -right-8 md:hidden block ${isVisible ? "opacity-100 animate-sequence8" : " opacity-0"}`} style={{ transform: "scaleX(-1)", rotate: "-30deg" }} />
        <img src={orn22} alt="" className={`absolute w-[6rem] z-50 -bottom-6 -right-10 md:hidden block ${isVisible ? "opacity-100 animate-sequence8" : " opacity-0"}`} style={{ transform: "scaleX(-1)" }} />
      </div>
    </div>
  );
};

export default HealthProtocol;
