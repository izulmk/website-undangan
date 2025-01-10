// import React from "react";
// import WeddingsName from "../LittleComponents/WeddingsName";
// import Signal from "../LittleComponents/Signal";
// import Button from "../LittleComponents/Button";

// export default function Rsvp({ bingkai1, bingkai2, bingkai3, bingkai4, bingkai5, bingkai6, isVisible }) {
//   return (
//     <div className="relative">
//       <img src={bingkai1} alt="" className={` h-[27.5rem] w-[21.5rem] ${isVisible ? "opacity-100 animate-grow delay-[300ms]" : " opacity-0"}`} />
//       <div className="">
//         <img src={bingkai2} alt="" className={`absolute -top-4 -right-4 z-10 h-[15rem] w-[15rem]  ${isVisible ? "opacity-100 fade-in-image2" : " opacity-0"}`} />
//         <img src={bingkai4} alt="" className={`absolute top-36 -right-14  h-[10rem] w-[10rem]  ${isVisible ? "opacity-100 animate-sequence2" : " opacity-0"}`} />
//         <img src={bingkai5} alt="" className={`absolute -top-12 right-20 h-[8rem] w-[8rem]  ${isVisible ? "opacity-100 animate-floatRightBlow" : " opacity-0"}`} />
//       </div>
//       <div className="">
//         <img src={bingkai2} alt="" className={`absolute -bottom-4 z-10 -left-4 rotate-[180deg] h-[15rem] w-[15rem]  ${isVisible ? "opacity-100 fade-in-image1" : " opacity-0"}`} />
//         <img src={bingkai3} alt="" className={`absolute bottom-36 -left-14 h-[10rem] w-[10rem]  ${isVisible ? "opacity-100 animate-sequence3" : " opacity-0"}`} />
//         <img src={bingkai6} alt="" className={`absolute -bottom-12 left-20  h-[8rem] w-[8rem]  ${isVisible ? "opacity-100 animate-floatLeftBlow" : " opacity-0"}`} />
//       </div>
//       <div className={`absolute mt-4 z-50 inset-x-0 inset-y-12 ${isVisible ? "opacity-100 animate-fadeInScale delay-[300ms]" : " opacity-0"}`}>
//         <div className="px-4 text-center">
//           <p className="text-sm text-secondaryColor">Wedding Invitation</p>
//         </div>
//         <div className="text-center mt-2">
//           <WeddingsName text1="Rachael" text2={"Dave"} text3={"&"} isVisible={isVisible} />
//           <p className="text-sm text-[#517470] mt-2">#PromDateToLifeMate</p>
//           <p className="text-lg text-primaryColor mt-2">Saturday, 01 February 2025</p>
//         </div>
//         <div className="flex justify-center mt-4 ">
//           {/* <Button text={"RSVP"} /> */}
//           <a href="section-rsvp">RSVP</a>
//         </div>
//         <div className="absolute text-center top-60 left-1/2 transform -translate-x-1/2 translate-y-16">
//           <Signal />
//         </div>
//       </div>
//     </div>
//   );
// }

// Komponen Rsvp
// import React from "react";
// import WeddingsName from "../LittleComponents/WeddingsName";
// import Signal from "../LittleComponents/Signal";
// import Button from "../LittleComponents/Button";

// export default function Rsvp({ bingkai1, bingkai2, bingkai3, bingkai4, bingkai5, bingkai6, isVisible }) {
//   return (
//     <div className="relative">
//       <img src={bingkai1} alt="" className={`h-[27.5rem] w-[21.5rem] ${isVisible ? "opacity-100 animate-grow delay-[300ms]" : "opacity-0"}`} />
//       <div className="">
//         <img src={bingkai2} alt="" className={`absolute -top-4 -right-4 z-10 h-[15rem] w-[15rem] ${isVisible ? "opacity-100 fade-in-image2" : "opacity-0"}`} />
//         <img src={bingkai4} alt="" className={`absolute top-36 -right-14 h-[10rem] w-[10rem] ${isVisible ? "opacity-100 animate-sequence2" : "opacity-0"}`} />
//         <img src={bingkai5} alt="" className={`absolute -top-12 right-20 h-[8rem] w-[8rem] ${isVisible ? "opacity-100 animate-floatRightBlow" : "opacity-0"}`} />
//       </div>
//       <div className="">
//         <img src={bingkai2} alt="" className={`absolute -bottom-4 z-10 -left-4 rotate-[180deg] h-[15rem] w-[15rem] ${isVisible ? "opacity-100 fade-in-image1" : "opacity-0"}`} />
//         <img src={bingkai3} alt="" className={`absolute bottom-36 -left-14 h-[10rem] w-[10rem] ${isVisible ? "opacity-100 animate-sequence3" : "opacity-0"}`} />
//         <img src={bingkai6} alt="" className={`absolute -bottom-12 left-20 h-[8rem] w-[8rem] ${isVisible ? "opacity-100 animate-floatLeftBlow" : "opacity-0"}`} />
//       </div>
//       <div className={`absolute mt-4 z-50 inset-x-0 inset-y-12 ${isVisible ? "opacity-100 animate-fadeInScale delay-[300ms]" : "opacity-0"}`}>
//         <div className="px-4 text-center">
//           <p className="text-sm text-secondaryColor">Wedding Invitation</p>
//         </div>
//         <div className="text-center mt-2">
//           <WeddingsName text1="Rachael" text2={"Dave"} text3={"&"} isVisible={isVisible} />
//           <p className="text-sm text-[#517470] mt-2">#PromDateToLifeMate</p>
//           <p className="text-lg text-primaryColor mt-2">Saturday, 01 February 2025</p>
//         </div>
//         <div className="flex justify-center mt-4">
//           {/* Navigasi ke #section-rsvp */}
//           <a href="#section-rsvp">
//             <Button text={"RSVP"} />
//           </a>
//         </div>
//         <div className="absolute text-center top-60 left-1/2 transform -translate-x-1/2 translate-y-16">
//           <Signal />
//         </div>
//       </div>
// </div>
// );
// }

import React from "react";
import { Link } from "react-scroll"; // Import Link dari react-scroll
import WeddingsName from "../LittleComponents/WeddingsName";
import Signal from "../LittleComponents/Signal";
import Button from "../LittleComponents/Button";

export default function Rsvp({ bingkai1, bingkai2, bingkai3, bingkai4, bingkai5, bingkai6, isVisible }) {
  return (
    <div className="relative">
      <img src={bingkai1} alt="" className={`h-[27.5rem] w-[21.5rem] ${isVisible ? "opacity-100 animate-grow delay-[300ms]" : "opacity-0"}`} />
      <div className="">
        <img src={bingkai2} alt="" className={`absolute -top-4 -right-4 z-10 h-[15rem] w-[15rem] ${isVisible ? "opacity-100 fade-in-image2" : "opacity-0"}`} />
        <img src={bingkai4} alt="" className={`absolute top-36 -right-14 h-[10rem] w-[10rem] ${isVisible ? "opacity-100 animate-sequence2" : "opacity-0"}`} />
        <img src={bingkai5} alt="" className={`absolute -top-12 right-20 h-[8rem] w-[8rem] ${isVisible ? "opacity-100 animate-floatRightBlow" : "opacity-0"}`} />
      </div>
      <div className="">
        <img src={bingkai2} alt="" className={`absolute -bottom-4 z-10 -left-4 rotate-[180deg] h-[15rem] w-[15rem] ${isVisible ? "opacity-100 fade-in-image1" : "opacity-0"}`} />
        <img src={bingkai3} alt="" className={`absolute bottom-36 -left-14 h-[10rem] w-[10rem] ${isVisible ? "opacity-100 animate-sequence3" : "opacity-0"}`} />
        <img src={bingkai6} alt="" className={`absolute -bottom-12 left-20 h-[8rem] w-[8rem] ${isVisible ? "opacity-100 animate-floatLeftBlow" : "opacity-0"}`} />
      </div>
      <div className={`absolute mt-4 z-50 inset-x-0 inset-y-12 ${isVisible ? "opacity-100 animate-fadeInScale delay-[300ms]" : "opacity-0"}`}>
        <div className="px-4 text-center">
          <p className="text-sm text-secondaryColor">Wedding Invitation</p>
        </div>
        <div className="text-center mt-2">
          <WeddingsName text1="Rachael" text2={"Dave"} text3={"&"} isVisible={isVisible} />
          <p className="text-sm text-[#517470] mt-2">#PromDateToLifeMate</p>
          <p className="text-lg text-primaryColor mt-2">Saturday, 01 February 2025</p>
        </div>
        <div className="flex justify-center mt-4">
          {/* Link ke bagian RSVP dengan smooth scroll */}
          <Link to="section-rsvp" smooth={true} duration={1000}>
            <Button text={"RSVP"} />
          </Link>
        </div>
        <div className="absolute text-center top-60 left-1/2 transform -translate-x-1/2 translate-y-16">
          <Signal />
        </div>
      </div>
    </div>
  );
}
