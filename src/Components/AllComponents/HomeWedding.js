import React from "react";
import WeddingInvitation from "../Wedding/WeddingInvitation";

function HomeWedding({ onButtonClick, isVisible }) {
  return (
    <div className="">
      <WeddingInvitation onButtonClick={onButtonClick} isVisible={isVisible} />
    </div>
  );
}

export default HomeWedding;
