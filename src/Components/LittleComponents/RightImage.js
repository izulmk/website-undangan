// src/components/LeftImage.js
import React from "react";
import flower7 from "../../assets/images/1.png";
import flower8 from "../../assets/images/2.png";
import flower9 from "../../assets/images/5.png";
import flower10 from "../../assets/images/6.png";
import flower11 from "../../assets/images/7.png";
import flower12 from "../../assets/images/8.png";
import flower13 from "../../assets/images/9.png";
import flower14 from "../../assets/images/10.png";
import flower15 from "../../assets/images/11.png";
import flower16 from "../../assets/images/12.png";
import flower17 from "../../assets/images/13.png";
import flower18 from "../../assets/images/15.png";
import flower19 from "../../assets/images/16.png";
import useVisibility from "../../hook/useVisibility";

const RightImage = () => {
  const { sectionRef, isVisible } = useVisibility(0.5); // Menggunakan hook untuk visibilitas

  return (
    <div ref={sectionRef}>
      <div className={`absolute bottom-28 -right-10 flex flex-col items-center justify-center gap-0 overflow-hidden ${isVisible ? "opacity-100 animate-floatUp" : "opacity-0"}`}>
        <img src={flower7} className="w-44 h-44" alt="" style={{ transform: "scaleX(-1)" }} />
      </div>
      <div className={`absolute bottom-24 -right-10 flex flex-col items-center justify-center gap-0 overflow-hidden ${isVisible ? "opacity-100 animate-floatUp" : "opacity-0"}`}>
        <img src={flower9} className="w-44 h-44 " alt="" style={{ transform: "scaleX(-1)" }} />
      </div>
      <div className={`absolute bottom-20 -right-8 flex flex-col items-center justify-center gap-0 overflow-hidden ${isVisible ? "opacity-100 animate-floatUp" : "opacity-0"}`}>
        <img src={flower8} className="w-36 h-48 " alt="" style={{ transform: "scaleY(-1)" }} />
        <img src={flower8} className="w-36 h-44 " alt="" style={{ transform: "scaleY(-1)" }} />
      </div>
      <div className={`z-10 absolute bottom-32 -right-10 flex flex-col items-center justify-center gap-0 overflow-hidden ${isVisible ? "opacity-100 animate-floatUp" : "opacity-0"}`}>
        <img src={flower10} className="w-24 h-24" alt="" style={{ transform: "scaleX(-1)" }} />
      </div>
      <div className={`absolute bottom-56 -right-20 flex flex-col items-center justify-center gap-0 overflow-hidden ${isVisible ? "opacity-100 animate-floatUp" : "opacity-0"}`}>
        <img src={flower11} className="w-56 h-w-56 -rotate-[150deg] " alt="" />
      </div>
      <div className={`absolute bottom-52 -right-10 flex flex-col items-center justify-center gap-0 overflow-hidden ${isVisible ? "opacity-100 animate-floatUp" : "opacity-0"}`}>
        <img src={flower12} className="w-36 h-44" alt="" style={{ transform: "scaleX(-1)" }} />
      </div>
      <div className={`absolute bottom-56 -right-10 flex flex-col items-center justify-center gap-0 overflow-hidden ${isVisible ? "opacity-100 animate-floatUp" : "opacity-0"}`}>
        <img src={flower13} className="w-36 h-36 animate-sequence" alt="" />
      </div>
      <div className={`absolute bottom-40 -right-10 flex flex-col items-center justify-center gap-0 overflow-hidden ${isVisible ? "opacity-100 animate-floatUp" : "opacity-0"}`}>
        <img src={flower14} className="w-36 h-36 rotate-[0deg] animate-sequence" alt="" />
      </div>
      <div className={`absolute bottom-64 -right-10 flex flex-col items-center justify-center gap-0 overflow-hidden ${isVisible ? "opacity-100 animate-floatUp" : "opacity-0"}`}>
        <img src={flower15} className="w-36 h-36 " alt="" style={{ transform: "scaleX(-1)" }} />
      </div>
      <div className={`absolute bottom-96 -right-7 flex flex-col items-center justify-center gap-0 overflow-hidden ${isVisible ? "opacity-100 animate-floatUp" : "opacity-0"}`}>
        <img src={flower16} className="w-20 h-20 rotate-[0deg] animate-blow" alt="" />
      </div>
      <div className={`absolute bottom-[26rem] -right-7 flex flex-col items-center justify-center gap-0 overflow-hidden ${isVisible ? "opacity-100 animate-floatUp" : "opacity-0"}`}>
        <img src={flower17} className="w-20 h-20 rotate-[0deg] animate-blow" alt="" />
      </div>
      <div className={`absolute bottom-[27rem] -right-7 flex flex-col items-center justify-center gap-0 overflow-hidden ${isVisible ? "opacity-100 animate-floatUp" : "opacity-0"}`}>
        <img src={flower18} className="w-20 h-20 rotate-[0deg] animate-blow" alt="" />
      </div>
      <div className={`absolute bottom-[13rem] -right-7 flex flex-col items-center justify-center gap-0 overflow-hidden ${isVisible ? "opacity-100 animate-floatUp" : "opacity-0"}`}>
        <img src={flower19} className="w-20 h-20 rotate-[0deg] animate-blow" alt="" />
      </div>
    </div>
  );
};

export default RightImage;
