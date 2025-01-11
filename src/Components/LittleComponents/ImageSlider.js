import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "tailwindcss/tailwind.css";
import slider1 from "../../assets/images/4.jpg";
import slider2 from "../../assets/images/5.jpg";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="absolute z-10 top-1/2 right-4 transform -translate-y-1/2 bg-thirdColor p-2 rounded-full cursor-pointer shadow-lg" onClick={onClick}>
      {/* Icon Panah */}
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-primaryColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="absolute z-10 top-1/2 left-4 transform -translate-y-1/2 bg-thirdColor p-2 rounded-full cursor-pointer shadow-lg" onClick={onClick}>
      {/* Icon Panah */}
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-primaryColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </div>
  );
}

const ImageSlider = () => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    afterChange: (index) => setCurrentIndex(index),
  };

  return (
    <div className="w-[300px] flex flex-col justify-center">
      <Slider ref={sliderRef} {...settings}>
        {/* Slide 1 */}
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="relative w-[300px] max-w-xs overflow-hidden rounded-lg shadow-lg">
            <img src={slider1} alt="Img 1" className="w-[300px] h-[280px] object-cover" />
          </div>
          <div className="bg-[#f5d89f] p-4">
            <h2 className="text-center text-xl font-bold text-secondaryColor">Our Journey</h2>
            <p className="text-center text-base text-gray-800 px-4">
              We've been through so much together and each moment has made us stronger. Our love is a testament to the power of patience, understanding, and mutual respect. We're excited to share our story and celebrate our bond with you
              all.
            </p>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="relative w-[300px] max-w-xs overflow-hidden rounded-lg shadow-lg">
            <img src={slider2} alt="Img 1" className="w-[300px] h-[280px] object-cover" />
          </div>
          <div className="bg-[#f5d89f] p-4">
            <h2 className="text-center text-xl font-bold text-secondaryColor">Our Journey</h2>
            <p className="text-center text-base text-gray-800 px-4">
              We've been through so much together and each moment has made us stronger. Our love is a testament to the power of patience, understanding, and mutual respect. We're excited to share our story and celebrate our bond with you
              all.
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
