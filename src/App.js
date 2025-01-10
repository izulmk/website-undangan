import React, { useState, useRef } from "react";
import "./App.css";
import HomeWedding from "./Components/AllComponents/HomeWedding";
import MainComponent from "./Components/AllComponents/MainComponent";
import useVisibility from "./hook/useVisibility";

function App() {
  const { sectionRef, isVisible, isVisible1, sectionRef1 } = useVisibility(0.5);
  const [canScroll, setCanScroll] = useState(false); // State to control visibility and scrolling
  const rsvpRef = useRef(null); // Ref for RsvpComponent

  const handleButtonClick = () => {
    setCanScroll(true); // Make RSVP component visible
    if (rsvpRef.current) {
      rsvpRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className=" ">
      <div ref={sectionRef} className={`${canScroll ? "element2 opacity-100 " : " z-50  absolute inset-0"} `}>
        <HomeWedding onButtonClick={handleButtonClick} isVisible={isVisible} />
      </div>
      <div className={`h-[2000px] bg-[#f5f1ed] ${canScroll ? "block element opacity-100 z-50  absolute inset-0 " : "hidden"} `}>
        <div className={`min-w-full h-auto overflow-x-hidden ${canScroll ? "block" : "hidden"}`} ref={rsvpRef}>
          <MainComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
