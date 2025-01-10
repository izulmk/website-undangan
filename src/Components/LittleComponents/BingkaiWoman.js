import React from "react";
import orn1 from "../../assets/images/Orn-09.png";
import orn2 from "../../assets/images/Orn-13.png";
import orn3 from "../../assets/images/Orn-10.png";
import orn4 from "../../assets/images/Orn-03.png";
import orn5 from "../../assets/images/Orn-09 (1).png";
import orn6 from "../../assets/images/Orn-08.png";
import orn7 from "../../assets/images/Orn-07.png";
import orn8 from "../../assets/images/Orn-11.png";
import orn9 from "../../assets/images/Orn-12.png";
import orn11 from "../../assets/images/Orn-09.png";
import orn41 from "../../assets/images/Orn-03 - Copy.png";
import orn51 from "../../assets/images/Orn-09 (1) - Copy.png";
import useVisibility from "../../hook/useVisibility";

const BingkaiWoman = () => {
  const { sectionRef, isVisible, isVisible1, sectionRef1 } = useVisibility(0.5);
  //   const images = [
  //     { src: orn1, alt: "orn1", top: "32rem", left: "10", h: "15rem", w: "7rem", rotate: "", scaleX: "" },
  //     { src: orn2, alt: "orn2", top: "48rem", left: "6", h: "15rem", w: "7rem", rotate: "[-18deg]", scaleX: "" },
  //     { src: orn3, alt: "orn3", top: "80rem", left: "0", h: "7rem", w: "7rem", rotate: "[280deg]", scaleX: "scaleX(-1)" },
  //     { src: orn4, alt: "orn4", top: "24rem", left: "0", h: "5rem", w: "10rem", rotate: "", scaleX: "" },
  //     { src: orn5, alt: "orn5", top: "27rem", left: "10", h: "6rem", w: "13rem", rotate: "", scaleX: "" },
  //     { src: orn6, alt: "orn6", top: "28rem", left: "24", h: "5rem", w: "10rem", rotate: "[-15deg]", scaleX: "scaleX(-1)" },
  //     { src: orn7, alt: "orn7", top: "23rem", left: "44", h: "7rem", w: "13rem", rotate: "[-26deg]", scaleX: "scaleY(-1)" },
  //     { src: orn8, alt: "orn8", top: "14rem", left: "44", h: "10rem", w: "15rem", rotate: "", scaleX: "" },
  //     { src: orn9, alt: "orn9", top: "9rem", left: "44", h: "6rem", w: "11rem", rotate: "", scaleX: "" },
  //   ];

  return (
    <div ref={sectionRef1}>
      <img src={orn11} alt="orn1" className={`absolute top-[4rem] right-10 h-[15rem] w-[7rem] ${isVisible1 ? "opacity-100 animate-sequence8 delay-[300ms]" : "opacity-0"}`} />
      <img src={orn2} alt="orn2" className={`absolute top-[8rem] right-6 h-[15rem] w-[7rem] ${isVisible1 ? "opacity-100 delay-[300ms]" : "opacity-0"}`} style={{ transform: "scaleX(-1)", rotate: "18deg" }} />
      <img src={orn3} alt="orn2" className={`absolute top-[16rem] z-10 right-0 h-[7rem] w-[7rem] ${isVisible1 ? "opacity-100 rotate-[0deg] delay-[300ms]" : "opacity-0"}`} />
      <img src={orn41} alt="orn2" className={`absolute top-[20rem] z-10 right-0 h-[5rem] w-[10rem] ${isVisible1 ? "opacity-100 animate-sequence7 delay-[300ms]" : "opacity-0"}`} />
      <img src={orn51} alt="orn2" className={`absolute top-[23rem] z-10 right-10 h-[6rem] w-[13rem] ${isVisible1 ? "opacity-100 animate-sequence6 delay-[300ms]" : "opacity-0"}`} />
      <img src={orn6} alt="orn2" className={`absolute top-[24rem] z-10 right-24 h-[5rem] w-[10rem] ${isVisible1 ? "opacity-100 delay-[300ms] rotate-[-15deg]" : "opacity-0"}`} style={{ transform: "scaleX(-1)" }} />
      <img src={orn7} alt="orn2" className={`absolute top-[19rem] z-10 right-44 h-[7rem] w-[13rem] ${isVisible1 ? "opacity-100 delay-[300ms] " : "opacity-0"}`} style={{ transform: "scaleY(1)", rotate: "-150deg" }} />
      <img src={orn8} alt="orn2" className={`absolute top-[10rem] right-44 h-[10rem] w-[15rem] ${isVisible1 ? "opacity-100 delay-[300ms] " : "opacity-0"}`} style={{ transform: "scaleX(-1)" }} />
      <img src={orn9} alt="orn2" className={`absolute top-[5rem] right-44 h-[6rem] w-[11rem] ${isVisible1 ? "opacity-100 delay-[300ms] " : "opacity-0"}`} style={{ transform: "scaleX(-1)" }} />
    </div>
  );
};

export default BingkaiWoman;
