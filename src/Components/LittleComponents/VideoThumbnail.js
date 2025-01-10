import React from "react";
import ReactPlayer from "react-player";
import orn1 from "../../assets/images/Orn-12.png";
import orn2 from "../../assets/images/Orn-26.png";
import useVisibility from "../../hook/useVisibility";
import Title from "./Title";

function VideoThumbnail({ title, url }) {
  const { sectionRef, isVisible, isVisible1, sectionRef1 } = useVisibility(0.3);
  return (
    <div ref={sectionRef} className=" flex flex-col items-center w-full mb-24">
      <Title title={title} />
      <div className="px-4 rounded-lg w-full max-w-4xl relative">
        <img src={orn1} alt="gambar" className={`w-[6rem] absolute bottom-6 z-40 -left-2 md:left-56 ${isVisible ? "opacity-100 ping" : " opacity-0"}`} />
        <img src={orn2} alt="gambar" className={`w-[8rem] absolute bottom-20 -left-4 md:left-[15rem] -z-10 ${isVisible ? "opacity-100 animate-sequenceInit" : " opacity-0"} `} style={{ transform: "scaleX(-1)" }} />
        <img src={orn1} alt="gambar" className={`w-[6rem] absolute bottom-6 z-40 -right-2 md:right-56 ${isVisible ? "opacity-100 ping5" : " opacity-0"} `} style={{ transform: "scaleX(-1)" }} />
        <img src={orn2} alt="gambar" className={`w-[8rem] absolute bottom-20 -right-4 md:right-[15rem] -z-10 ${isVisible ? "opacity-100 animate-sequence8" : " opacity-0"}`} />
        <div className={`flex justify-center items-center ${isVisible ? "opacity-100 ping" : " opacity-0"}`}>
          <ReactPlayer url={url} width="300px" height="250px" className={`rounded-lg`} />
        </div>
      </div>
    </div>
  );
}

export default VideoThumbnail;
