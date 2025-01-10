import React from "react";
import bg4 from "../../assets/images/4.jpeg";
import Title from "./Title";
import Button from "./Button";
import orn3 from "../../assets/images/Orn-03 (1).png";
import orn17 from "../../assets/images/Orn-17.png";
import orn21 from "../../assets/images/Orn-21.png";
import orn31 from "../../assets/images/Orn-31.png";
import orn32 from "../../assets/images/Orn-32.png";
import orn34 from "../../assets/images/Orn-34.png";
import orn35 from "../../assets/images/Orn-35.png";
import useVisibility from "../../hook/useVisibility";

const WeddingFilter = () => {
  const { sectionRef, isVisible } = useVisibility(0.3);

  return (
    <div className="min-h-screen flex items-center justify-center mb-24" ref={sectionRef}>
      <div className="p-8 rounded-lg text-center">
        <Title title="Instagram Wedding Filter" />
        <p className={`mb-6 text-secondaryColor ${isVisible ? "animate-fadeInScale opacity-100" : "opacity-0"}`}>Abadikan momen Anda saat menghadiri pernikahan kami dengan menggunakan filter Instagram di bawah ini.</p>
        <div className="relative md:flex md:flex-col md:items-center">
          <div className={`p-2 border-[1px] border-primaryColor md:w-80 rounded-lg ${isVisible ? "animate-fadeInScale opacity-100" : "opacity-0"}`}>
            <img src={bg4} alt="Wedding Filter" className="rounded-lg border-[1px] md:w-80 border-primaryColor" />
          </div>
          {/* left ornaments */}
          <img src={orn31} alt="orn31" className={`absolute z-40 -bottom-2 -left-6 md:left-[13rem] w-[4rem] ${isVisible ? "opacity-100 ping" : "opacity-0"}`} style={{ transform: "scaleX(-1)" }} />
          <img src={orn32} alt="orn32" className={`absolute z-30 bottom-10 -left-6 md:left-[13rem] w-[4rem] ${isVisible ? "opacity-100 animate-sequence8" : " opacity-0"}`} style={{ transform: "scaleX(-1)" }} />
          <img src={orn17} alt="orn17" className={`absolute z-10 bottom-36 -left-10 md:left-[12rem] w-[4rem] ${isVisible ? "animate-sequenceInit opacity-100" : "opacity-0"}`} />
          <img src={orn3} alt="orn3" className={`absolute z-0 bottom-48 -left-7 md:left-[12.5rem] w-[4rem] ${isVisible ? "opacity-100 ping" : "opacity-0"}`} style={{ transform: "scaleX(-1)" }} />
          <img src={orn21} alt="orn21" className={`absolute z-10 bottom-80 -left-4 md:left-[13.5rem] w-[4rem] ${isVisible ? "opacity-100 ping" : "opacity-0"}`} style={{ transform: "scaleX(-1)" }} />
          <img src={orn35} alt="orn35" className={`absolute z-0 bottom-96 opacity-75 -left-8 md:left-[11.5rem] w-[4rem] ${isVisible ? "opacity-100 ping" : "opacity-0"}`} style={{ transform: "scaleX(-1)" }} />
          <img src={orn34} alt="orn34" className={`absolute z-0 bottom-96 -left-4 md:left-[13rem] opacity-75 w-[4rem] ${isVisible ? "opacity-100 ping" : "opacity-0"}`} />
          {/* right ornaments */}
          <img src={orn31} alt="orn31" className={`absolute z-40 -bottom-2 -right-6 md:right-[13rem] w-[4rem] ${isVisible ? "opacity-100 ping" : "opacity-0"}`} />
          <img src={orn32} alt="orn32" className={`absolute z-30 bottom-10 -right-6 md:right-[13rem] w-[4rem] ${isVisible ? "animate-sequenceInit opacity-100" : "opacity-0"}`} />
          <img src={orn17} alt="orn17" className={`absolute z-10 bottom-36 -right-10 md:right-[12rem] w-[4rem] ${isVisible ? "animate-sequence8 opacity-100" : "opacity-0"}`} style={{ transform: "scaleX(-1)" }} />
          <img src={orn3} alt="orn3" className={`absolute z-0 bottom-48 -right-7 md:right-[12.5rem] w-[4rem] ${isVisible ? "opacity-100 ping" : "opacity-0"}`} />
          <img src={orn21} alt="orn21" className={`absolute z-10 bottom-80 -right-4 md:right-[13.5rem] w-[4rem] ${isVisible ? "opacity-100 ping" : "opacity-0"}`} />
          <img src={orn35} alt="orn35" className={`absolute z-0 bottom-96 opacity-75 -right-8 md:right-[11.5rem] w-[4rem] ${isVisible ? "opacity-100 ping" : "opacity-0"}`} />
          <img src={orn34} alt="orn34" className={`absolute z-0 bottom-96 -right-4 md:right-[13rem] opacity-75 w-[4rem] ${isVisible ? "opacity-100 ping" : "opacity-0"}`} style={{ transform: "scaleX(-1)" }} />
        </div>
        <Button text={"Use Filter"} className={`mt-4 ${isVisible ? "ping opacity-100" : "opacity-0"}`} />
      </div>
    </div>
  );
};

export default WeddingFilter;
