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
      <div id="section-rsvp" ref={sectionRef} className={`mb-24 flex bg-[#eae2dc] justify-center rounded-t-[50%] items-center w-full md:w-1/3 h-[100vh] md:h-[80vh] relative overflow-hidden ${isVisible ? "opacity-100 ping" : "opacity-0"}`}>
        {isRSVPFormVisible ? (
          isConfirmed && unableToAttend ? (
            // unable to atend
            <div className={`flex flex-col space-y-4 items-center justify-center text-center w-[90%] h-[40rem] sm:h-[54rem] rounded-t-[50%] border-primaryColor border-[1px]  ${isVisible ? "opacity-100 animate-fadeInScale" : "opacity-0"}`}>
              <h2 className="uppercase text-primaryColor font-playfair text-xl">UNABLE TO ATTEND</h2>
              <p className="text-gray-600">
                It's okay, but don't forget for praying on us...
                <br />
                see you in another chance :)
              </p>
              <Button text={"Change"} onClick={handleChangeClick} className="z-50" />
            </div>
          ) : (
            <div
              className={`z-50 border-b-0 sm:border-b-2 sm:z-0 flex flex-col space-y-4 md:space-y-2 md:-mt-4 items-center justify-center text-center w-[90%] h-[40rem] sm:h-[54rem] md:h-[29rem] rounded-t-[50%] border-primaryColor border-[1px] ${
                isVisible ? "opacity-100 animate-fadeInScale" : "opacity-0"
              } `}
            >
              <div className="flex justify-center mb-4 md:mb-0">
                <div className="w-16 h-16 rounded-full bg-[#f5d89f] border-primaryColor border-[1px] flex items-center justify-center">
                  <img src={orn6} alt="orn" />
                </div>
              </div>
              <div className="text-base flex flex-col">
                <p className="text-gray-600 text-sm">Will you attend our wedding?</p>
                <div className="text-base flex flex-col gap-2">
                  <Button text={"Will Attend"} onClick={handleWillAttendClick} className={willAttendSelected === true ? "bg-primaryColor text-white z-50 text-sm" : "text-sm bg-red-200 text-black z-50"} />
                  <Button text={"Unable To Attend"} onClick={handleUnableToAttendClick} className={willAttendSelected === false ? "bg-primaryColor text-white z-50 text-sm" : "bg-red-200 text-black z-50 text-sm"} />
                </div>
              </div>
              {willAttendSelected && showEventOptions && (
                <div className="md:flex md:flex-col">
                  <p className="text-gray-600 text-sm">Which event will you attend?</p>
                  <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                    <Button text={"Akad Nikah"} onClick={() => handleEventClick("Akad Nikah")} className={selectedEvent === "Akad Nikah" ? "text-sm bg-green-500 text-white z-50" : "text-sm bg-red-200 text-black z-50"} />
                    <Button text={"Resepsi"} onClick={() => handleEventClick("Resepsi")} className={selectedEvent === "Resepsi" ? "text-sm bg-green-500 text-white z-50" : "text-sm bg-red-200 text-black z-50"} />
                    <Button text={"Attend All"} onClick={() => handleEventClick("Attend All")} className={selectedEvent === "Attend All" ? "text-sm bg-green-500 text-white z-50" : "text-sm bg-red-200 text-black z-50"} />
                  </div>
                </div>
              )}
              {showPeopleOptions && selectedEvent && (
                <>
                  <p className="text-gray-600 text-sm">People you bring including you?</p>
                  <div className="flex items-center">
                    <Button text={"-"} onClick={handleDecrement} className="z-50 text-sm" />
                    <span className="mx-2 text-sm">{peopleCount}</span>
                    <Button text={"+"} onClick={handleIncrement} className="z-50 text-sm" />
                  </div>
                </>
              )}
              <Button text={"Confirm"} onClick={handleConfirmClick} className="z-50 text-sm " />
              {!unableToAttend && notification && <p className="text-red-500">{notification}</p>}
            </div>
          )
        ) : (
          <div
            className={`flex flex-col space-y-4 items-center justify-center text-center w-[90%] h-[40rem] sm:h-[54rem] md:h-[29rem] rounded-t-[50%] border-primaryColor border-[1px] ${
              isVisible ? "opacity-100 animate-fadeInScale" : "opacity-0"
            } `}
          >
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-[#f5d89f] border-primaryColor border-[1px] flex items-center justify-center">
                <img src={orn6} alt="orn" />
              </div>
            </div>
            <h2 className="uppercase text-primaryColor font-playfair text-4xl">will attend</h2>
            <p className="text-gray-600">
              Yeay, Thank you for the attendance... <br /> See you there ;)
            </p>
            <Button text={"Change"} onClick={handleChangeClick} className="z-50" />
          </div>
        )}
        {/* Ornamen */} <img src={orn22} alt="" className={`absolute w-[6rem] z-50 -bottom-6 -left-10 ${isVisible ? "opacity-100 animate-sequenceInit" : "opacity-0"}`} />{" "}
        <img src={orn27} alt="" className={`absolute w-[6rem] z-40 -bottom-6 left-6 ${isVisible ? "opacity-100 ping" : " opacity-0"} `} />{" "}
        {/* <img src={orn28} alt="" className={`absolute w-[6rem] z-30 -bottom-10 left-20 ${isVisible ? "opacity-100 ping" : " opacity-0"} `} />{" "} */}
        {/* <img src={orn12} alt="" className={`absolute w-[6rem] -bottom-2 left-20 ${isVisible ? "opacity-100 ping" : " opacity-0"} `} />{" "} */}
        <img src={orn29} alt="" className={`absolute w-[100%] z-0 -bottom-8 inset-y-auto pointer-events-none ${isVisible ? "opacity-100 ping" : " opacity-0"} `} style={{ rotate: "0deg" }} />{" "}
        {/* <img src={orn12} alt="" className={`absolute w-[6rem] -bottom-2 right-48 ${isVisible ? "opacity-100 ping" : " opacity-0"} `} style={{ transform: "scaleX(-1)" }} />{" "} */}
        {/* <img src={orn28} alt="" className={`absolute w-[6rem] z-30 -bottom-10 left-48 ${isVisible ? "opacity-100 ping" : " opacity-0"} `} />{" "} */}
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
