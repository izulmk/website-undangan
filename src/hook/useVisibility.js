// import { useState, useEffect, useRef } from "react";

// const useVisibility = (threshold = 0.5) => {
//   const sectionRef = useRef(null); // Desktop
//   const sectionRef1 = useRef(null); // Mobile
//   const [isVisible, setIsVisible] = useState(false); // Desktop visibility state
//   const [isVisible1, setIsVisible1] = useState(false); // Mobile visibility state

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         // Cek visibilitas untuk Desktop
//         if (sectionRef.current && entry.target === sectionRef.current) {
//           setIsVisible(entry.isIntersecting);
//         }

//         // Cek visibilitas untuk Mobile
//         if (sectionRef1.current && entry.target === sectionRef1.current) {
//           setIsVisible1(entry.isIntersecting);
//         }
//       },
//       { threshold }
//     );

//     // Observe kedua referensi
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     if (sectionRef1.current) observer.observe(sectionRef1.current);

//     // Cleanup observer ketika komponen dibuang
//     return () => {
//       if (sectionRef.current) observer.unobserve(sectionRef.current);
//       if (sectionRef1.current) observer.unobserve(sectionRef1.current);
//     };
//   }, [threshold]);

//   return { sectionRef, isVisible, sectionRef1, isVisible1 };
// };

// export default useVisibility;

// aniamasi 1 x
import { useState, useEffect, useRef } from "react";

const useVisibility = (threshold = 0.5) => {
  const sectionRef = useRef(null); // Desktop
  const sectionRef1 = useRef(null); // Mobile
  const [isVisible, setIsVisible] = useState(false); // Desktop visibility state
  const [isVisible1, setIsVisible1] = useState(false); // Mobile visibility state
  const [hasAnimated, setHasAnimated] = useState(false); // To track if animation has already occurred
  const [hasAnimated1, setHasAnimated1] = useState(false); // For mobile

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Check visibility for Desktop
        if (sectionRef.current && entry.target === sectionRef.current) {
          if (entry.isIntersecting && !hasAnimated) {
            setIsVisible(true); // Trigger visibility change
            setHasAnimated(true); // Set the animation flag to true
          }
        }

        // Check visibility for Mobile
        if (sectionRef1.current && entry.target === sectionRef1.current) {
          if (entry.isIntersecting && !hasAnimated1) {
            setIsVisible1(true); // Trigger visibility change
            setHasAnimated1(true); // Set the animation flag to true
          }
        }
      },
      { threshold }
    );

    // Observe both references
    if (sectionRef.current) observer.observe(sectionRef.current);
    if (sectionRef1.current) observer.observe(sectionRef1.current);

    // Cleanup observer when component unmounts
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (sectionRef1.current) observer.unobserve(sectionRef1.current);
    };
  }, [threshold, hasAnimated, hasAnimated1]); // Dependencies to check if animation has already happened

  return { sectionRef, isVisible, sectionRef1, isVisible1 };
};

export default useVisibility;

// import { useState, useEffect, useRef } from "react";

// const useVisibility = (threshold = 0.5) => {
//   // Membuat referensi untuk masing-masing section
//   const sectionRef = useRef(null); // Desktop
//   const sectionRef1 = useRef(null); // Mobile
//   const sectionRef2 = useRef(null); // Section 2
//   const sectionRef3 = useRef(null); // Section 3
//   const sectionRef4 = useRef(null); // Section 4
//   const sectionRef5 = useRef(null); // Section 5
//   const sectionRef6 = useRef(null); // Section 6
//   const sectionRef7 = useRef(null); // Section 7

//   // Membuat state untuk visibilitas dari setiap section
//   const [isVisible, setIsVisible] = useState(false); // Desktop visibility state
//   const [isVisible1, setIsVisible1] = useState(false); // Mobile visibility state
//   const [isVisible2, setIsVisible2] = useState(false); // Section 2 visibility state
//   const [isVisible3, setIsVisible3] = useState(false); // Section 3 visibility state
//   const [isVisible4, setIsVisible4] = useState(false); // Section 4 visibility state
//   const [isVisible5, setIsVisible5] = useState(false); // Section 5 visibility state
//   const [isVisible6, setIsVisible6] = useState(false); // Section 6 visibility state
//   const [isVisible7, setIsVisible7] = useState(false); // Section 7 visibility state

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         // Cek visibilitas untuk setiap section
//         if (sectionRef.current && entry.target === sectionRef.current) {
//           setIsVisible(entry.isIntersecting);
//         }
//         if (sectionRef1.current && entry.target === sectionRef1.current) {
//           setIsVisible1(entry.isIntersecting);
//         }
//         if (sectionRef2.current && entry.target === sectionRef2.current) {
//           setIsVisible2(entry.isIntersecting);
//         }
//         if (sectionRef3.current && entry.target === sectionRef3.current) {
//           setIsVisible3(entry.isIntersecting);
//         }
//         if (sectionRef4.current && entry.target === sectionRef4.current) {
//           setIsVisible4(entry.isIntersecting);
//         }
//         if (sectionRef5.current && entry.target === sectionRef5.current) {
//           setIsVisible5(entry.isIntersecting);
//         }
//         if (sectionRef6.current && entry.target === sectionRef6.current) {
//           setIsVisible6(entry.isIntersecting);
//         }
//         if (sectionRef7.current && entry.target === sectionRef7.current) {
//           setIsVisible7(entry.isIntersecting);
//         }
//       },
//       { threshold }
//     );

//     // Observe semua referensi
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     if (sectionRef1.current) observer.observe(sectionRef1.current);
//     if (sectionRef2.current) observer.observe(sectionRef2.current);
//     if (sectionRef3.current) observer.observe(sectionRef3.current);
//     if (sectionRef4.current) observer.observe(sectionRef4.current);
//     if (sectionRef5.current) observer.observe(sectionRef5.current);
//     if (sectionRef6.current) observer.observe(sectionRef6.current);
//     if (sectionRef7.current) observer.observe(sectionRef7.current);

//     // Cleanup observer ketika komponen dibuang
//     return () => {
//       if (sectionRef.current) observer.unobserve(sectionRef.current);
//       if (sectionRef1.current) observer.unobserve(sectionRef1.current);
//       if (sectionRef2.current) observer.unobserve(sectionRef2.current);
//       if (sectionRef3.current) observer.unobserve(sectionRef3.current);
//       if (sectionRef4.current) observer.unobserve(sectionRef4.current);
//       if (sectionRef5.current) observer.unobserve(sectionRef5.current);
//       if (sectionRef6.current) observer.unobserve(sectionRef6.current);
//       if (sectionRef7.current) observer.unobserve(sectionRef7.current);
//     };
//   }, [threshold]);

//   return {
//     sectionRef,
//     isVisible,
//     sectionRef1,
//     isVisible1,
//     sectionRef2,
//     isVisible2,
//     sectionRef3,
//     isVisible3,
//     sectionRef4,
//     isVisible4,
//     sectionRef5,
//     isVisible5,
//     sectionRef6,
//     isVisible6,
//     sectionRef7,
//     isVisible7,
//   };
// };

// export default useVisibility;
