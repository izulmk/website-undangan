import React from "react";
import ReactPlayer from "react-player";
import orn1 from "../../assets/images/Orn-12.png";
import orn2 from "../../assets/images/Orn-26.png";
import useVisibility from "../../hook/useVisibility";
import Title from "./Title";

function VideoThumbnail({ title, url }) {
  const { sectionRef, isVisible } = useVisibility(0.3);

  return (
    <div ref={sectionRef} className="flex flex-col items-center w-full mb-24">
      <Title title={title} />
      <div className="px-4 rounded-lg w-full max-w-6xl relative">
        <img src={orn1} alt="gambar" className={`w-[6rem] absolute bottom-6 md:bottom-0 z-40 -left-2 md:left-0 ${isVisible ? "opacity-100 ping" : "opacity-0"}`} />
        <img src={orn2} alt="gambar" className={`w-[8rem] absolute -top-24 -left-4  md:-left-4 -z-10 ${isVisible ? "opacity-100 animate-sequenceInit" : "opacity-0"}`} style={{ transform: "scaleX(-1)" }} />
        <img src={orn1} alt="gambar" className={`w-[6rem] absolute bottom-6 md:bottom-0 z-40 -right-2 md:right-0 ${isVisible ? "opacity-100 ping5" : "opacity-0"}`} style={{ transform: "scaleX(-1)" }} />
        <img src={orn2} alt="gambar" className={`w-[8rem] absolute -top-24 -right-4 md:-right-4 -z-10 ${isVisible ? "opacity-100 animate-sequence8" : "opacity-0"}`} />
        <div className={`flex justify-center items-center ${isVisible ? "opacity-100 ping" : "opacity-0"}`}>
          <ReactPlayer
            url={url}
            width="100%" // Lebar penuh
            height="450px" // Tinggi lebih besar
            className="rounded-lg"
            controls={true} // Menambahkan kontrol video
          />
        </div>
      </div>
    </div>
  );
}

export default VideoThumbnail;
