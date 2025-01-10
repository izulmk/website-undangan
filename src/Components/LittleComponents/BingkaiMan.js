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
import man from "../../assets/images/2.jpeg";
import useVisibility from "../../hook/useVisibility";
import BingkaiFoto from "./BingkaiPhoto";

const BingkaiMan = () => {
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
    <>
      <div ref={sectionRef}>
        <img src={orn1} alt="orn1" className={`absolute top-32 left-10  h-[15rem] w-[7rem] ${isVisible ? "opacity-100 animate-sequence delay-[300ms]" : "opacity-0"}`} />
        <img src={orn2} alt="orn2" className={`absolute top-48 left-6 h-[15rem] w-[7rem] ${isVisible ? "opacity-100 rotate-[-18deg] delay-[300ms]" : "opacity-0"}`} />
        <img src={orn3} alt="orn2" className={`absolute top-80 z-10 left-0 h-[7rem] w-[7rem] ${isVisible ? "opacity-100 rotate-[280deg] delay-[300ms]" : "opacity-0"}`} style={{ transform: "scaleX(-1)" }} />
        <img src={orn4} alt="orn2" className={`absolute top-[24rem] z-10 left-0 h-[5rem] w-[10rem] ${isVisible ? "opacity-100 animate-sequence4 delay-[300ms]" : "opacity-0"}`} />
        <img src={orn5} alt="orn2" className={`absolute top-[27rem] z-10 left-10 h-[6rem] w-[13rem] ${isVisible ? "opacity-100 animate-sequence5 delay-[300ms]" : "opacity-0"}`} />
        <img src={orn6} alt="orn2" className={`absolute top-[28rem] z-10 left-24 h-[5rem] w-[10rem] ${isVisible ? "opacity-100 delay-[300ms] rotate-[-15deg]" : "opacity-0"}`} />
        <img src={orn7} alt="orn2" className={`absolute top-[23rem] z-10 left-44 h-[7rem] w-[13rem] ${isVisible ? "opacity-100 delay-[300ms] " : "opacity-0"}`} style={{ transform: "scaleY(-1)", rotate: "-26deg" }} />
        <img src={orn8} alt="orn2" className={`absolute top-[14rem] left-44 h-[10rem] w-[15rem] ${isVisible ? "opacity-100 delay-[300ms] " : "opacity-0"}`} />
        <img src={orn9} alt="orn2" className={`absolute top-[9rem] left-44 h-[6rem] w-[11rem] ${isVisible ? "opacity-100 delay-[300ms] " : "opacity-0"}`} />
      </div>
      {/* <BingkaiFoto imageUrl={man} altText="Contoh Gambar" /> */}
    </>
  );
};

export default BingkaiMan;
