// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "tailwindcss/tailwind.css";
// import slider1 from "../../assets/images/4.jpg";
// import slider2 from "../../assets/images/5.jpg";

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <>
//       <div className={className} style={{ ...style, display: "block", background: "black", borderRadius: "50%", display: "none" }} onClick={onClick} />
//       <div className="relative z-10 -inset-y-[354px] inset-x-[334px] bg-thirdColor p-4 rounded-full h-10 w-10 flex items-center border-[1px] border-primaryColor text-primaryColor" onClick={onClick}>
//         <span className="flex items-center absolute inset-0 justify-center">Right</span>
//       </div>
//     </>
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <>
//       <div className={className} style={{ ...style, display: "block", background: "black", borderRadius: "50%", display: "none" }} onClick={onClick} />
//       <div className="relative z-10 inset-y-80 inset-x-0 bg-thirdColor rounded-full h-10 w-10 flex items-center border-[1px] border-primaryColor text-primaryColor" onClick={onClick}>
//         <span className="flex items-center absolute inset-0 justify-center">Left</span>
//       </div>
//     </>
//   );
// }

// const ImageSlider = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     nextArrow: <SampleNextArrow />,
//     prevArrow: <SamplePrevArrow />,
//   };

//   return (
//     <div className="max-w-lg mx-auto flex flex-col overflow-x-hidden overflow-y-hidden">
//       <Slider {...settings}>
//         <div className="flex flex-col items-center justify-center space-y-4">
//           <img src={slider1} alt="Couple" className="w-full h-[400px] bg-black rounded-lg object-cover" />
//           <div className="bg-[#f5d89f] p-4 rounded-lg w-full h-[220px] flex flex-col items-center justify-center">
//             <h2 className="text-center text-xl font-bold">We're Forever</h2>
//             <p className="text-center">
//               What we are looking forward to the most, besides getting to spend the rest of our lives together, is having everyone that we truly care about together, all in a place that is so beautiful itself. We can not wait to meet,
//               greet, and host your special day! It is an honor to be a part of your journey.
//             </p>
//           </div>
//         </div>
//         <div className="flex flex-col items-center justify-center space-y-4">
//           <img src={slider2} alt="Couple" className="w-full h-[400px] bg-black rounded-lg object-cover" />
//           <div className="bg-[#f5d89f] p-4 rounded-lg w-full h-[220px] flex flex-col items-center justify-center">
//             <h2 className="text-center text-xl font-bold">Our Journey</h2>
//             <p className="text-center">
//               We've been through so much together and each moment has made us stronger. Our love is a testament to the power of patience, understanding, and mutual respect. We're excited to share our story and celebrate our bond with you
//               all.
//             </p>
//           </div>
//         </div>
//       </Slider>
//     </div>
//   );
// };

// export default ImageSlider;

import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "tailwindcss/tailwind.css";
import slider1 from "../../assets/images/4.jpg";
import slider2 from "../../assets/images/5.jpg";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <>
      <div className={className} style={{ ...style, display: "block", background: "black", borderRadius: "50%", display: "none" }} onClick={onClick} />
      <div className="relative z-10 inset-y-[-14rem] inset-x-[19rem] bg-thirdColor p-4 rounded-full h-8 w-8 flex items-center border-[1px] border-primaryColor text-primaryColor" onClick={onClick}>
        <span className="flex items-center absolute inset-0 justify-center">Right</span>
      </div>
    </>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <>
      <div className={className} style={{ ...style, display: "block", background: "black", borderRadius: "50%", display: "none" }} onClick={onClick} />
      <div className="relative z-10 inset-y-[19rem] -inset-x-[2.5rem] bg-thirdColor rounded-full p-4 h-8 w-8 flex items-center border-[1px] border-primaryColor text-primaryColor" onClick={onClick}>
        <span className="flex items-center absolute inset-0 justify-center">Left</span>
      </div>
    </>
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
    <div className="w-[300px] flex flex-col justify-center ">
      <Slider ref={sliderRef} {...settings}>
        {/* Slide 1 */}
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="relative w-[300px] max-w-xs overflow-hidden rounded-lg shadow-lg">
            <img src={slider1} alt="Img 1" className="w-[300px] h-[280px] object-cover" />
          </div>
          <div className="bg-[#f5d89f] ">
            <h2 className="text-center text-xl font-bold text-secondaryColor">Our Journey</h2>
            <p className=" text-center text-base text-gray-800 px-4">
              We've been through so much together and each moment has made us stronger. Our love is a testament to the power of patience, understanding, and mutual respect. We're excited to share our story and celebrate our bond with you
              all.
            </p>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="relative w-full max-w-xs overflow-hidden rounded-lg shadow-lg">
            <img src={slider2} alt="Img 1" className="w-[300px] h-[280px] object-cover" />
          </div>
          <div className="bg-[#f5d89f] ">
            <h2 className="text-center text-xl font-bold text-secondaryColor">Our Journey</h2>
            <p className=" text-center text-base text-gray-800 px-4">
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
