import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import bingkai3 from "../../assets/images/bingkai3.png";
import Button from "./Button";
import orn14 from "../../assets/images/Orn-14.png";
import orn15 from "../../assets/images/Orn-15.png";
import orn16 from "../../assets/images/Orn-16.png";
import orn17 from "../../assets/images/Orn-17.png";
import orn18 from "../../assets/images/Orn-bintang.png";
import useVisibility from "../../hook/useVisibility";
import Title from "./Title";

const SaveTheDate = () => {
  const { sectionRef, isVisible, isVisible1, sectionRef1 } = useVisibility(0.5);
  const calculateTimeLeft = () => {
    const eventDate = new Date("2025-02-01T00:00:00"); // Ubah dengan tanggal acara Anda
    const currentTime = new Date();
    const difference = eventDate - currentTime;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 mb-24">
      <div ref={sectionRef} className="relative w-full max-w-md p-6 flex flex-col items-center justify-center">
        <Title title={"save the date"} />
        <div className="animate-pulse">
          <img src={orn18} alt="bintang" className={`absolute top-14 right-1 h-[4rem] w-[4rem] ${isVisible ? "opacity-100 animate-floatRight " : "opacity-0"}`} />
          <img src={orn18} alt="bintang" className={`absolute bottom-14 left-1 h-[4rem] w-[4rem] ${isVisible ? "opacity-100 animate-floatLeft" : "opacity-0"}`} />
        </div>
        {/* Left */}
        <img src={orn14} alt="orn14" className={`absolute top-72 z-40 left-0 h-[6rem] w-[6rem] ${isVisible ? "opacity-100 ping" : "opacity-0"}`} />
        <img src={orn15} alt="orn14" className={`absolute top-64 z-30 left-4 h-[6rem] w-[4rem] ${isVisible ? "opacity-100 animate-sequence8" : "opacity-0"}`} style={{ transform: "scaleX(-1)" }} />
        <img src={orn16} alt="orn14" className={`absolute top-44 z-20 -left-4 h-[8rem] w-[6rem] ${isVisible ? "opacity-100 ping" : "opacity-0"}`} />
        <img src={orn17} alt="orn14" className={`absolute top-36 z-10 -left-4 h-[10rem] w-[6rem] ${isVisible ? "opacity-100 animate-sequenceInit" : "opacity-0"} `} style={{ transform: "scaleX(-1)" }} />
        {/* Right */}
        <img src={orn14} alt="orn14" className={`absolute top-72 z-40 right-0 h-[6rem] w-[6rem] ${isVisible ? "opacity-100 ping5" : "opacity-0"}`} style={{ transform: "scaleX(-1)" }} />
        <img src={orn15} alt="orn14" className={`absolute top-64 z-30 right-8 h-[6rem] w-[4rem] ${isVisible ? "opacity-100 animate-sequenceInit" : "opacity-0"}`} />
        <img src={orn16} alt="orn14" className={`absolute top-44 z-20 -right-4 h-[8rem] w-[6rem] ${isVisible ? "opacity-100 ping5" : "opacity-0"}`} style={{ transform: "scaleX(-1)" }} />
        <img src={orn17} alt="orn14" className={`absolute top-36 z-10 -right-4 h-[10rem] w-[6rem] ${isVisible ? "opacity-100 animate-sequence8" : "opacity-0"}`} />
        <img src={bingkai3} alt="" className={`${isVisible ? "opacity-100 animate-fadeInScale delay-[300ms]" : " opacity-0"}`} />
        <div className={`flex justify-around text-center mb-4 flex-col space-y-10 absolute text-primaryColor font-playfair ${isVisible ? "opacity-100 animate-fadeInScale delay-[300ms]" : " opacity-0"}`}>
          {/* Baris 1 */}
          <div className="flex flex-row items-center justify-between space-x-10 ">
            <div className="flex flex-col w-24">
              <span className="text-4xl font-bold ">{timeLeft.days || "0"}</span>
              <span className="">Days</span>
            </div>
            <div className="flex flex-col w-24">
              <span className="text-4xl font-bold ">{timeLeft.hours || "0"}</span>
              <span className="">Hours</span>
            </div>
          </div>
          {/* Baris 2 */}
          <div className="flex flex-row items-center justify-between space-x-10">
            <div className="flex flex-col w-24">
              <span className="text-4xl font-bold ">{timeLeft.minutes || "0"}</span>
              <span className="">Minutes</span>
            </div>
            <div className="flex flex-col w-24">
              <span className="text-4xl font-bold ">{timeLeft.seconds || "0"}</span>
              <span className="">Seconds</span>
            </div>
          </div>
        </div>
        <div className={`flex justify-center mt-4 ${isVisible ? "opacity-100 animate-fadeInScale delay-[300ms]" : " opacity-0"}`}>
          <Button text={"Add to Calendar"} />
        </div>
        <div className="absolute inset-0 border border-gray-300 rounded-lg pointer-events-none"></div>
      </div>
    </div>
  );
};

export default SaveTheDate;
