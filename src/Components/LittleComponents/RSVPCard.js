// // Komponen RSVPCard
// import React, { useState } from "react";
// import Button from "./Button";
// import orn6 from "../../assets/images/Orn-06.png";
// import orn92 from "../../assets/images/Orn-09 (2).png";
// import orn12 from "../../assets/images/Orn-12.png";
// import orn13 from "../../assets/images/Orn-13.png";
// import orn22 from "../../assets/images/Orn-22.png";
// import orn27 from "../../assets/images/Orn-27.png";
// import orn28 from "../../assets/images/Orn-28.png";
// import orn29 from "../../assets/images/Orn-29.png";
// import useVisibility from "../../hook/useVisibility";
// import Title from "./Title";

// const RSVPCard = () => {
//   const { sectionRef, isVisible } = useVisibility(0.3);
//   const [isRSVPFormVisible, setIsRSVPFormVisible] = useState(false);
//   const [showEventOptions, setShowEventOptions] = useState(true);
//   const [showPeopleOptions, setShowPeopleOptions] = useState(false);
//   const [isConfirmed, setIsConfirmed] = useState(false);
//   const [unableToAttend, setUnableToAttend] = useState(false);
//   const [peopleCount, setPeopleCount] = useState(1);
//   const [selectedEvent, setSelectedEvent] = useState("");
//   const [willAttendSelected, setWillAttendSelected] = useState(false);
//   const [notification, setNotification] = useState("");
//   const handleChangeClick = () => {
//     setIsRSVPFormVisible(true);
//     setIsConfirmed(false);
//     setShowEventOptions(true);
//     setShowPeopleOptions(false);
//     setUnableToAttend(false);
//     setPeopleCount(1);
//     setSelectedEvent("");
//     setWillAttendSelected(false);
//     setNotification("");
//   };
//   const handleWillAttendClick = () => {
//     setShowEventOptions(true);
//     setShowPeopleOptions(true);
//     setUnableToAttend(false);
//     setWillAttendSelected(true);
//     setNotification("");
//   };
//   const handleUnableToAttendClick = () => {
//     setShowEventOptions(false);
//     setShowPeopleOptions(false);
//     setUnableToAttend(true);
//     setWillAttendSelected(false);
//     setNotification("");
//   };
//   const handleConfirmClick = () => {
//     if (unableToAttend) {
//       setIsConfirmed(true);
//     } else if (selectedEvent && peopleCount > 0) {
//       setIsConfirmed(true);
//       setIsRSVPFormVisible(false);
//     } else {
//       setNotification("Please select an event and specify the number of people attending.");
//     }
//   };
//   const handleEventClick = (event) => {
//     setSelectedEvent(event);
//     setNotification("");
//   };
//   const handleIncrement = () => {
//     setPeopleCount((prevCount) => prevCount + 1);
//   };
//   const handleDecrement = () => {
//     setPeopleCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1));
//   };
//   return (
//     <>
//       <Title title={"RSVP"} />
//       {/* ID section-rsvp yang digunakan sebagai tujuan anchor */}
//       <div id="section-rsvp" ref={sectionRef} className={`flex bg-[#eae2dc] justify-center rounded-t-[50%] items-center w-[28rem] h-[50rem] relative overflow-hidden ${isVisible ? "opacity-100 ping" : "opacity-0"} `}>
//         {isRSVPFormVisible ? (
//           isConfirmed && unableToAttend ? (
//             <div className={`flex flex-col space-y-4 items-center justify-center text-center w-[21rem] h-[28rem] rounded-t-[50%] border-primaryColor border-[1px] ${isVisible ? "opacity-100 animate-fadeInScale" : "opacity-0"} `}>
//               {" "}
//               <h2 className="uppercase text-primaryColor font-playfair text-4xl">UNABLE TO ATTEND</h2>{" "}
//               <p className="text-gray-600">
//                 {" "}
//                 It's okay, but don't forget for praying on us... <br /> see you in another chance :){" "}
//               </p>{" "}
//               <Button text={"Change"} onClick={handleChangeClick} />{" "}
//             </div>
//           ) : (
//             <div className={`flex flex-col space-y-4 items-center justify-center text-center w-[21rem] h-[28rem] rounded-t-[50%] border-primaryColor border-[1px] ${isVisible ? "opacity-100 animate-fadeInScale" : "opacity-0"} `}>
//               {" "}
//               <div className="flex justify-center mb-4">
//                 {" "}
//                 <div className="w-16 h-16 rounded-full bg-[#f5d89f] border-primaryColor border-[1px] flex items-center justify-center">
//                   {" "}
//                   <img src={orn6} alt="orn" />{" "}
//                 </div>{" "}
//               </div>{" "}
//               <h2 className="uppercase text-primaryColor font-playfair text-4xl">RSVP</h2> <p className="text-gray-600">Will you attend our wedding?</p>{" "}
//               <Button text={"Will Attend"} onClick={handleWillAttendClick} className={`bg-primaryColor text-white ${willAttendSelected && "bg-green-500 text-white"}`} />{" "}
//               <Button text={"Unable To Attend"} onClick={handleUnableToAttendClick} className={`bg-primaryColor text-white ${!willAttendSelected && "bg-red-500 text-white"}`} />{" "}
//               {showEventOptions && (
//                 <>
//                   {" "}
//                   <p className="text-gray-600">Which event will you attend?</p>{" "}
//                   <Button text={"Akad Nikah"} onClick={() => handleEventClick("Akad Nikah")} className={selectedEvent === "Akad Nikah" ? "bg-green-500 text-white" : "bg-primaryColor text-white"} />{" "}
//                   <Button text={"Resepsi"} onClick={() => handleEventClick("Resepsi")} className={selectedEvent === "Resepsi" ? "bg-green-500 text-white" : "bg-primaryColor text-white"} />{" "}
//                   <Button text={"Attend All"} onClick={() => handleEventClick("Attend All")} className={selectedEvent === "Attend All" ? "bg-green-500 text-white" : "bg-primaryColor text-white"} />{" "}
//                 </>
//               )}{" "}
//               {showPeopleOptions && selectedEvent && (
//                 <>
//                   {" "}
//                   <p className="text-gray-600">People you bring including you?</p>{" "}
//                   <div className="flex items-center">
//                     {" "}
//                     <Button text={"-"} onClick={handleDecrement} /> <span className="mx-2">{peopleCount}</span> <Button text={"+"} onClick={handleIncrement} />{" "}
//                   </div>{" "}
//                 </>
//               )}{" "}
//               <Button text={"Confirm"} onClick={handleConfirmClick} /> {!unableToAttend && notification && <p className="text-red-500">{notification}</p>}{" "}
//             </div>
//           )
//         ) : (
//           <div className={`flex flex-col space-y-4 items-center justify-center text-center w-[21rem] h-[28rem] rounded-t-[50%] border-primaryColor border-[1px] ${isVisible ? "opacity-100 animate-fadeInScale" : "opacity-0"} `}>
//             {" "}
//             <div className="flex justify-center mb-4">
//               {" "}
//               <div className="w-16 h-16 rounded-full bg-[#f5d89f] border-primaryColor border-[1px] flex items-center justify-center">
//                 {" "}
//                 <img src={orn6} alt="orn" />{" "}
//               </div>{" "}
//             </div>{" "}
//             <h2 className="uppercase text-primaryColor font-playfair text-4xl">will attend</h2>{" "}
//             <p className="text-gray-600">
//               {" "}
//               Yeay, Thank you for the attendance... <br /> See you there ;){" "}
//             </p>{" "}
//             <Button text={"Change"} onClick={handleChangeClick} />{" "}
//           </div>
//         )}
//         {/* Ornamen */}
//         {/* <img src={orn22} alt="" className={`absolute w-[6rem] z-50 -bottom-6 -left-10 ${isVisible ? "opacity-100 animate-sequenceInit" : "opacity-0"}`} />
//         <img src={orn27} alt="" className={`absolute w-[6rem] z-40 -bottom-6 left-6 ${isVisible ? "opacity-100 ping" : " opacity-0"} `} />
//         <img src={orn28} alt="" className={`absolute w-[6rem] z-30 -bottom-10 left-20 ${isVisible ? "opacity-100 ping" : " opacity-0"} `} />
//         <img src={orn12} alt="" className={`absolute w-[6rem]  -bottom-2 left-20 ${isVisible ? "opacity-100 ping" : " opacity-0"} `} />
//         <img src={orn29} alt="" className={`absolute w-[6rem] z-50 -bottom-8 inset-y-auto ${isVisible ? "opacity-100 ping" : " opacity-0"} `} style={{ rotate: "-30deg" }} />
//         <img src={orn12} alt="" className={`absolute w-[6rem] -bottom-2 left-48 ${isVisible ? "opacity-100 ping" : " opacity-0"} `} style={{ transform: "scaleX(-1)" }} />
//         <img src={orn28} alt="" className={`absolute w-[6rem] z-30 -bottom-10 left-48 ${isVisible ? "opacity-100 ping" : " opacity-0"} `} />
//         <img src={orn27} alt="" className={`absolute w-[6rem] z-40 -bottom-6 right-6 ${isVisible ? "opacity-100 ping" : " opacity-0"} `} style={{ transform: "scaleX(-1)" }} />
//         <img src={orn22} alt="" className={`absolute w-[6rem] z-50 -bottom-6 -right-10 ${isVisible ? "opacity-100 animate-sequence8" : " opacity-0"}`} style={{ transform: "scaleX(-1)" }} /> */}

//         {/* Ornamen lainnya */}
//         <img src={orn13} alt="" className={`absolute w-[6rem] z-40 bottom-10 -left-8 ${isVisible ? "opacity-100 animate-sequenceInit" : " opacity-0"}`} />
//         <img src={orn92} alt="" className={`absolute w-[6rem] z-30 bottom-24 -left-8 ${isVisible ? "opacity-100 animate-sequenceInit" : " opacity-0"}`} style={{ rotate: "30deg" }} />
//         <img src={orn13} alt="" className={`absolute w-[6rem] z-40 bottom-10 -right-8 ${isVisible ? "opacity-100 animate-sequence8" : " opacity-0"}`} style={{ transform: "scaleX(-1)" }} />
//         <img src={orn92} alt="" className={`absolute w-[6rem] z-30 bottom-24 -right-8 ${isVisible ? "opacity-100 animate-sequence8" : " opacity-0"}`} style={{ transform: "scaleX(-1)", rotate: "-30deg" }} />
//       </div>
//     </>
//   );
// };

// export default RSVPCard;

// import React, { useState } from "react";
// import Button from "./Button";
// import orn6 from "../../assets/images/Orn-06.png";
// import orn92 from "../../assets/images/Orn-09 (2).png";
// import orn12 from "../../assets/images/Orn-12.png";
// import orn13 from "../../assets/images/Orn-13.png";
// import orn22 from "../../assets/images/Orn-22.png";
// import orn27 from "../../assets/images/Orn-27.png";
// import orn28 from "../../assets/images/Orn-28.png";
// import orn29 from "../../assets/images/Orn-29.png";
// import useVisibility from "../../hook/useVisibility";
// import Title from "./Title";

// const RSVPCard = () => {
//   const { sectionRef, isVisible } = useVisibility(0.3);
//   const [isRSVPFormVisible, setIsRSVPFormVisible] = useState(false);
//   const [showEventOptions, setShowEventOptions] = useState(true);
//   const [showPeopleOptions, setShowPeopleOptions] = useState(false);
//   const [isConfirmed, setIsConfirmed] = useState(false);
//   const [unableToAttend, setUnableToAttend] = useState(false);
//   const [peopleCount, setPeopleCount] = useState(1);
//   const [selectedEvent, setSelectedEvent] = useState("");
//   const [willAttendSelected, setWillAttendSelected] = useState(false);
//   const [notification, setNotification] = useState("");
//   const handleChangeClick = () => {
//     setIsRSVPFormVisible(true);
//     setIsConfirmed(false);
//     setShowEventOptions(true);
//     setShowPeopleOptions(false);
//     setUnableToAttend(false);
//     setPeopleCount(1);
//     setSelectedEvent("");
//     setWillAttendSelected(false);
//     setNotification("");
//   };
//   const handleWillAttendClick = () => {
//     setShowEventOptions(true);
//     setShowPeopleOptions(true);
//     setUnableToAttend(false);
//     setWillAttendSelected(true);
//     setNotification("");
//   };
//   const handleUnableToAttendClick = () => {
//     setShowEventOptions(false);
//     setShowPeopleOptions(false);
//     setUnableToAttend(true);
//     setWillAttendSelected(false);
//     setNotification("");
//   };
//   const handleConfirmClick = () => {
//     if (unableToAttend) {
//       setIsConfirmed(true);
//     } else if (selectedEvent && peopleCount > 0) {
//       setIsConfirmed(true);
//       setIsRSVPFormVisible(false);
//     } else {
//       setNotification("Please select an event and specify the number of people attending.");
//     }
//   };
//   const handleEventClick = (event) => {
//     setSelectedEvent(event);
//     setNotification("");
//   };
//   const handleIncrement = () => {
//     setPeopleCount((prevCount) => prevCount + 1);
//   };
//   const handleDecrement = () => {
//     setPeopleCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1));
//   };

//   return (
//     <>
//       <Title title={"RSVP"} />
//       <div id="section-rsvp" ref={sectionRef} className={`flex bg-[#eae2dc] justify-center rounded-t-[50%] items-center w-[28rem] h-[50rem] relative overflow-hidden ${isVisible ? "opacity-100 ping" : "opacity-0"}`}>
//         {isRSVPFormVisible ? (
//           isConfirmed && unableToAttend ? (
//             <div className={`flex flex-col space-y-4 items-center justify-center text-center w-[21rem] h-[28rem] rounded-t-[50%] border-primaryColor border-[1px] ${isVisible ? "opacity-100 animate-fadeInScale" : "opacity-0"} `}>
//               {" "}
//               <h2 className="uppercase text-primaryColor font-playfair text-4xl">UNABLE TO ATTEND</h2>{" "}
//               <p className="text-gray-600">
//                 {" "}
//                 It's okay, but don't forget for praying on us... <br /> see you in another chance :){" "}
//               </p>{" "}
//               <Button text={"Change"} onClick={handleChangeClick} />{" "}
//             </div>
//           ) : (
//             <div className={`flex flex-col space-y-4 items-center justify-center text-center w-[21rem] h-[28rem] rounded-t-[50%] border-primaryColor border-[1px] ${isVisible ? "opacity-100 animate-fadeInScale" : "opacity-0"} `}>
//               {" "}
//               <div className="flex justify-center mb-4">
//                 {" "}
//                 <div className="w-16 h-16 rounded-full bg-[#f5d89f] border-primaryColor border-[1px] flex items-center justify-center">
//                   {" "}
//                   <img src={orn6} alt="orn" />{" "}
//                 </div>{" "}
//               </div>{" "}
//               <h2 className="uppercase text-primaryColor font-playfair text-4xl">RSVP</h2> <p className="text-gray-600">Will you attend our wedding?</p>{" "}
//               <Button text={"Will Attend"} onClick={handleWillAttendClick} className={`bg-primaryColor text-white ${willAttendSelected && "bg-green-500"}`} />{" "}
//               <Button text={"Unable To Attend"} onClick={handleUnableToAttendClick} className={`bg-primaryColor text-white ${!willAttendSelected && "bg-red-500"}`} />{" "}
//               {showEventOptions && (
//                 <>
//                   {" "}
//                   <p className="text-gray-600">Which event will you attend?</p>{" "}
//                   <Button text={"Akad Nikah"} onClick={() => handleEventClick("Akad Nikah")} className={selectedEvent === "Akad Nikah" ? "bg-green-500 text-white" : "bg-gray-300 text-black"} />{" "}
//                   <Button text={"Resepsi"} onClick={() => handleEventClick("Resepsi")} className={selectedEvent === "Resepsi" ? "bg-green-500 text-white" : "bg-gray-300 text-black"} />{" "}
//                   <Button text={"Attend All"} onClick={() => handleEventClick("Attend All")} className={selectedEvent === "Attend All" ? "bg-green-500 text-white" : "bg-gray-300 text-black"} />{" "}
//                 </>
//               )}{" "}
//               {showPeopleOptions && selectedEvent && (
//                 <>
//                   {" "}
//                   <p className="text-gray-600">People you bring including you?</p>{" "}
//                   <div className="flex items-center">
//                     {" "}
//                     <Button text={"-"} onClick={handleDecrement} /> <span className="mx-2">{peopleCount}</span> <Button text={"+"} onClick={handleIncrement} />{" "}
//                   </div>{" "}
//                 </>
//               )}{" "}
//               <Button text={"Confirm"} onClick={handleConfirmClick} /> {!unableToAttend && notification && <p className="text-red-500">{notification}</p>}{" "}
//             </div>
//           )
//         ) : (
//           <div className={`flex flex-col space-y-4 items-center justify-center text-center w-[21rem] h-[28rem] rounded-t-[50%] border-primaryColor border-[1px] ${isVisible ? "opacity-100 animate-fadeInScale" : "opacity-0"} `}>
//             {" "}
//             <div className="flex justify-center mb-4">
//               {" "}
//               <div className="w-16 h-16 rounded-full bg-[#f5d89f] border-primaryColor border-[1px] flex items-center justify-center">
//                 {" "}
//                 <img src={orn6} alt="orn" />{" "}
//               </div>{" "}
//             </div>{" "}
//             <h2 className="uppercase text-primaryColor font-playfair text-4xl">will attend</h2>{" "}
//             <p className="text-gray-600">
//               {" "}
//               Yeay, Thank you for the attendance... <br /> See you there ;){" "}
//             </p>{" "}
//             <Button text={"Change"} onClick={handleChangeClick} />{" "}
//           </div>
//         )}

//         <img src={orn13} alt="" className={`absolute w-[6rem] z-40 bottom-10 -left-8 ${isVisible ? "opacity-100 animate-sequenceInit" : " opacity-0"}`} />
//         <img src={orn92} alt="" className={`absolute w-[6rem] z-30 bottom-24 -left-8 ${isVisible ? "opacity-100 animate-sequenceInit" : " opacity-0"}`} style={{ rotate: "30deg" }} />
//         <img src={orn13} alt="" className={`absolute w-[6rem] z-40 bottom-10 -right-8 ${isVisible ? "opacity-100 animate-sequence8" : " opacity-0"}`} style={{ transform: "scaleX(-1)" }} />
//         <img src={orn92} alt="" className={`absolute w-[6rem] z-30 bottom-24 -right-8 ${isVisible ? "opacity-100 animate-sequence8" : " opacity-0"}`} style={{ transform: "scaleX(-1)", rotate: "-30deg" }} />
//       </div>
//     </>
//   );
// };

// export default RSVPCard;

import React, { useState } from "react";
import Button from "./Button";
import orn6 from "../../assets/images/Orn-06.png";
import orn92 from "../../assets/images/Orn-09 (2).png";
import orn12 from "../../assets/images/Orn-12.png";
import orn13 from "../../assets/images/Orn-13.png";
import orn22 from "../../assets/images/Orn-22.png";
import orn27 from "../../assets/images/Orn-27.png";
import orn28 from "../../assets/images/Orn-28.png";
import orn29 from "../../assets/images/bingkai-bottom.png";
// import orn29 from "../../assets/images/Orn-29.png";
import useVisibility from "../../hook/useVisibility";
import Title from "./Title";

const RSVPCard = () => {
  const { sectionRef, isVisible } = useVisibility(0.3);
  const [isRSVPFormVisible, setIsRSVPFormVisible] = useState(false);
  const [showEventOptions, setShowEventOptions] = useState(true);
  const [showPeopleOptions, setShowPeopleOptions] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [unableToAttend, setUnableToAttend] = useState(false);
  const [peopleCount, setPeopleCount] = useState(1);
  const [selectedEvent, setSelectedEvent] = useState("");
  const [willAttendSelected, setWillAttendSelected] = useState(null);
  const [notification, setNotification] = useState("");

  const handleChangeClick = () => {
    setIsRSVPFormVisible(true);
    setIsConfirmed(false);
    setShowEventOptions(true);
    setShowPeopleOptions(false);
    setUnableToAttend(false);
    setPeopleCount(1);
    setSelectedEvent("");
    setWillAttendSelected(null);
    setNotification("");
  };

  const handleWillAttendClick = () => {
    setShowEventOptions(true);
    setShowPeopleOptions(true);
    setUnableToAttend(false);
    setWillAttendSelected(true);
    setNotification("");
  };

  const handleUnableToAttendClick = () => {
    setShowEventOptions(false);
    setShowPeopleOptions(false);
    setUnableToAttend(true);
    setWillAttendSelected(false);
    setNotification("");
  };

  const handleConfirmClick = () => {
    if (unableToAttend) {
      setIsConfirmed(true);
    } else if (selectedEvent && peopleCount > 0) {
      setIsConfirmed(true);
      setIsRSVPFormVisible(false);
    } else {
      setNotification("Please select an event and specify the number of people attending.");
    }
  };

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setNotification("");
  };

  const handleIncrement = () => {
    setPeopleCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setPeopleCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1));
  };

  return (
    <>
      <Title title={"RSVP"} />
      <div id="section-rsvp" ref={sectionRef} className={`mb-24 flex bg-[#eae2dc] justify-center rounded-t-[50%] items-center w-[30rem] h-screen relative overflow-hidden ${isVisible ? "opacity-100 ping" : "opacity-0"} `}>
        {isRSVPFormVisible ? (
          isConfirmed && unableToAttend ? (
            <div className={`flex flex-col space-y-4 items-center justify-center text-center w-[28rem] h-[96vh] rounded-t-[50%] border-primaryColor border-[1px] ${isVisible ? "opacity-100 animate-fadeInScale" : "opacity-0"} `}>
              <h2 className="uppercase text-primaryColor font-playfair text-xl">UNABLE TO ATTEND</h2>
              <p className="text-gray-600">
                It's okay, but don't forget for praying on us...
                <br />
                see you in another chance :)
              </p>
              <Button text={"Change"} onClick={handleChangeClick} />
            </div>
          ) : (
            <div className={`flex flex-col space-y-4 items-center justify-center text-center w-[28rem] h-[96vh] rounded-t-[50%] border-primaryColor border-[1px] ${isVisible ? "opacity-100 animate-fadeInScale" : "opacity-0"} `}>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-[#f5d89f] border-primaryColor border-[1px] flex items-center justify-center">
                  <img src={orn6} alt="orn" />
                </div>
              </div>
              <div className="text-base">
                <p className="text-gray-600">Will you attend our wedding?</p>
                <Button text={"Will Attend"} onClick={handleWillAttendClick} className={willAttendSelected === true ? "bg-green-500 text-white" : "bg-gray-300 text-black"} />
                <Button text={"Unable To Attend"} onClick={handleUnableToAttendClick} className={willAttendSelected === false ? "bg-red-500 text-white" : "bg-gray-300 text-black"} />
              </div>
              {showEventOptions && (
                <>
                  <p className="text-gray-600">Which event will you attend?</p>
                  <Button text={"Akad Nikah"} onClick={() => handleEventClick("Akad Nikah")} className={selectedEvent === "Akad Nikah" ? "bg-green-500 text-white" : "bg-gray-300 text-black"} />
                  <Button text={"Resepsi"} onClick={() => handleEventClick("Resepsi")} className={selectedEvent === "Resepsi" ? "bg-green-500 text-white" : "bg-gray-300 text-black"} />
                  <Button text={"Attend All"} onClick={() => handleEventClick("Attend All")} className={selectedEvent === "Attend All" ? "bg-green-500 text-white" : "bg-gray-300 text-black"} />
                </>
              )}
              {showPeopleOptions && selectedEvent && (
                <>
                  <p className="text-gray-600">People you bring including you?</p>
                  <div className="flex items-center">
                    <Button text={"-"} onClick={handleDecrement} />
                    <span className="mx-2">{peopleCount}</span>
                    <Button text={"+"} onClick={handleIncrement} />
                  </div>
                </>
              )}
              <Button text={"Confirm"} onClick={handleConfirmClick} />
              {!unableToAttend && notification && <p className="text-red-500">{notification}</p>}
            </div>
          )
        ) : (
          <div className={`flex flex-col space-y-4 items-center justify-center text-center w-[28rem] h-[96vh] rounded-t-[50%] border-primaryColor border-[1px] ${isVisible ? "opacity-100 animate-fadeInScale" : "opacity-0"} `}>
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-[#f5d89f] border-primaryColor border-[1px] flex items-center justify-center">
                <img src={orn6} alt="orn" />
              </div>
            </div>
            <h2 className="uppercase text-primaryColor font-playfair text-4xl">will attend</h2>
            <p className="text-gray-600">
              Yeay, Thank you for the attendance... <br /> See you there ;)
            </p>
            <Button text={"Change"} onClick={handleChangeClick} />
          </div>
        )}
        {/* Ornamen */} <img src={orn22} alt="" className={`absolute w-[6rem] z-50 -bottom-6 -left-10 ${isVisible ? "opacity-100 animate-sequenceInit" : "opacity-0"}`} />{" "}
        <img src={orn27} alt="" className={`absolute w-[6rem] z-40 -bottom-6 left-6 ${isVisible ? "opacity-100 ping" : " opacity-0"} `} />{" "}
        <img src={orn28} alt="" className={`absolute w-[6rem] z-30 -bottom-10 left-20 ${isVisible ? "opacity-100 ping" : " opacity-0"} `} />{" "}
        {/* <img src={orn12} alt="" className={`absolute w-[6rem] -bottom-2 left-20 ${isVisible ? "opacity-100 ping" : " opacity-0"} `} />{" "} */}
        <img src={orn29} alt="" className={`absolute w-[full] z-0 -bottom-8 inset-y-auto ${isVisible ? "opacity-100 ping" : " opacity-0"} `} style={{ rotate: "0deg" }} />{" "}
        {/* <img src={orn12} alt="" className={`absolute w-[6rem] -bottom-2 right-48 ${isVisible ? "opacity-100 ping" : " opacity-0"} `} style={{ transform: "scaleX(-1)" }} />{" "} */}
        <img src={orn28} alt="" className={`absolute w-[6rem] z-30 -bottom-10 left-48 ${isVisible ? "opacity-100 ping" : " opacity-0"} `} />{" "}
        <img src={orn27} alt="" className={`absolute w-[6rem] z-40 -bottom-6 right-6 ${isVisible ? "opacity-100 ping" : " opacity-0"} `} style={{ transform: "scaleX(-1)" }} />{" "}
        <img src={orn22} alt="" className={`absolute w-[6rem] z-50 -bottom-6 -right-10 ${isVisible ? "opacity-100 animate-sequence8" : " opacity-0"}`} style={{ transform: "scaleX(-1)" }} /> {/* Ornamen lainnya */}{" "}
        <img src={orn13} alt="" className={`absolute w-[6rem] z-40 bottom-10 -left-8 ${isVisible ? "opacity-100 animate-sequenceInit" : " opacity-0"}`} />{" "}
        <img src={orn92} alt="" className={`absolute w-[6rem] z-30 bottom-24 -left-8 ${isVisible ? "opacity-100 animate-sequenceInit" : " opacity-0"}`} style={{ rotate: "30deg" }} />{" "}
        <img src={orn13} alt="" className={`absolute w-[6rem] z-40 bottom-10 -right-8 ${isVisible ? "opacity-100 animate-sequence8" : " opacity-0"}`} style={{ transform: "scaleX(-1)" }} />{" "}
        <img src={orn92} alt="" className={`absolute w-[6rem] z-30 bottom-24 -right-8 ${isVisible ? "opacity-100 animate-sequence8" : " opacity-0"}`} style={{ transform: "scaleX(-1)", rotate: "-30deg" }} />
      </div>
    </>
  );
};

export default RSVPCard;
