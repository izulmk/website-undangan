import React from "react";
import bingkai1 from "../../assets/images/bingkai1.png";
import bingkai5 from "../../assets/images/bingkai5.png";
import bingkai15copy from "../../assets/images/15 - Copy.png";
import bingkai15 from "../../assets/images/15.png";
import bingkai71 from "../../assets/images/7 (1).png";
import bingkai7 from "../../assets/images/7.png";

import orn2 from "../../assets/images/Orn-13.png";
import man from "../../assets/images/2.jpeg";
import woman from "../../assets/images/3.jpeg";
import useVisibility from "../../hook/useVisibility";
import Rsvp from "../Wedding/Rsvp";
import TheWedding from "../Wedding/TheWedding";
import ImageSlider from "../LittleComponents/ImageSlider";
import SaveTheDate from "../LittleComponents/SaveTheDate";
import WeddingDay from "../LittleComponents/WeddingDay";
import PhotoCollage from "../LittleComponents/PhotoCollage";
import VideoThumbnail from "../LittleComponents/VideoThumbnail";
import RSVPCard from "../LittleComponents/RSVPCard";
import WeddingFilter from "../LittleComponents/WeddingFilter";
import WeddingGift from "../LittleComponents/WeddingGift";
import GiftCard from "../LittleComponents/GiftCard";
import GiftRecommendationCard from "../LittleComponents/GiftRecommendationCard";
import HealthProtocol from "../LittleComponents/HealthProtocol";
import WeddingWish from "../LittleComponents/WeddingWish";
import QuoteCard from "../LittleComponents/QuoteCard";
import WeddingInvitation2 from "../LittleComponents/WeddingInvitation2";
import Title from "../LittleComponents/Title";
import Footer from "../Wedding/Footer";

const MainComponent = () => {
  const { sectionRef, isVisible, isVisible1, sectionRef1 } = useVisibility(0.5);

  return (
    <div className=" flex flex-col items-center justify-center overflow-y-hidden min-w-full overflow-x-hidden ">
      <div ref={sectionRef} className="m-24">
        <Rsvp bingkai1={bingkai1} bingkai2={bingkai5} bingkai3={bingkai15copy} bingkai4={bingkai15} bingkai5={bingkai71} bingkai6={bingkai7} isVisible={isVisible} />
      </div>
      <div className="w-full mb-24">
        <TheWedding man={man} woman={woman} />
      </div>
      <div className="w-full flex items-center justify-center flex-col mb-24">
        <div className={` flex flex-col items-center justify-center`}>
          <Title title={"our story"} />
        </div>
        <div ref={sectionRef1} className=" h-[40rem] relative">
          <img src={orn2} alt="orn" className={`absolute top-0 -left-10 h-[10rem] w-[10rem] ${isVisible1 ? "opacity-100 animate-floatRightOurHistory" : "opacity-0"}`} />
          <img src={orn2} alt="orn" className={`absolute top-0 -right-10 h-[10rem] w-[10rem] ${isVisible1 ? "opacity-100 animate-floatLeftOurHistory" : "opacity-0"}`} style={{ transform: "scaleX(-1)" }} />
          <div className={`${isVisible1 ? "opacity-100 ping" : "opacity-0"}`}>
            <ImageSlider />
          </div>
        </div>
      </div>
      <SaveTheDate />
      <WeddingDay />
      <PhotoCollage />
      <VideoThumbnail title={"Our Footage"} url={"https://www.youtube.com/watch?v=kH7wlLOQMNM"} />
      <RSVPCard />
      <VideoThumbnail title={"Live Streaming"} url={"https://www.youtube.com/watch?v=u4F6aUX1NgU"} />
      <WeddingFilter />
      <WeddingGift />
      <GiftCard />
      <GiftRecommendationCard />
      <HealthProtocol />
      <WeddingWish />
      <QuoteCard />
      <WeddingInvitation2 />
      <Footer />
    </div>
  );
};

export default MainComponent;
