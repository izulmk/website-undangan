import React from "react";
import useVisibility from "../../hook/useVisibility";

const Dan = () => {
  const { sectionRef, isVisible } = useVisibility(0.3);

  return (
    <div ref={sectionRef} className={`mt-14 mb-0 text-center ${isVisible ? "opacity-100 animate-fadeInScale delay-[300ms]" : "opacity-0"}`}>
      <h1 className="uppercase text-primaryColor font-playfair text-6xl">&</h1>
    </div>
  );
};

export default Dan;
