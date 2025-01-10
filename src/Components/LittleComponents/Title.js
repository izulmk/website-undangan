import useVisibility from "../../hook/useVisibility";

function Title({ title, children, className = "" }) {
  const { sectionRef, isVisible, sectionRef1, isVisible1 } = useVisibility(0.3);
  return (
    <div ref={sectionRef} className={` mb-10 ${className} ${isVisible ? "opacity-100 animate-fadeInScale" : " opacity-0"}`}>
      <h1 className={`uppercase text-center text-primaryColor font-playfair text-4xl `}>{title}</h1>
      {children}
    </div>
  );
}

export default Title;
