// import WeddingsName from "../LittleComponents/WeddingsName";
// import orn1 from "../../assets/images/Orn-09.png";
// import orn11 from "../../assets/images/Orn-09.png";
// import orn2 from "../../assets/images/Orn-13.png";
// import orn3 from "../../assets/images/Orn-10.png";
// import orn4 from "../../assets/images/Orn-03.png";
// import orn41 from "../../assets/images/Orn-03 - Copy.png";
// import orn5 from "../../assets/images/Orn-09 (1).png";
// import orn51 from "../../assets/images/Orn-09 (1) - Copy.png";
// import orn6 from "../../assets/images/Orn-08.png";
// import orn7 from "../../assets/images/Orn-07.png";
// import orn8 from "../../assets/images/Orn-11.png";
// import orn9 from "../../assets/images/Orn-12.png";
// import BingkaiFoto from "../LittleComponents/BingkaiPhoto";
// import useVisibility from "../../hook/useVisibility";
// import BingkaiMan from "../LittleComponents/BingkaiMan";
// import BingkaiWoman from "../LittleComponents/BingkaiWoman";
// import Title from "../LittleComponents/Title";
// import Dan from "../LittleComponents/Dan";

// function TheWedding({ man, woman }) {
//   const { sectionRef, isVisible, isVisible1, sectionRef1 } = useVisibility(0.3);
//   return (
//     <>
//       <div ref={sectionRef} className="flex flex-col items-center justify-center relative overflow-x-hidden overflow-y-hidden">
//         <div className="z-10 text-center">
//           <Title title={"the wedding of"} />
//           <p className={`text-lg text-secondaryColor mt-2 ${isVisible ? "opacity-100 animate-fadeInScale" : " opacity-0"}`}>Saturday, 01 February 2025</p>
//         </div>
//         <div className="">
//           <img src={orn1} alt="orn1" className={`absolute top-32 left-10 sm:left-[28rem]  h-[15rem] w-[7rem] ${isVisible ? "opacity-100 animate-sequenceInit delay-[300ms]" : "opacity-0"}`} />
//           <img src={orn2} alt="orn2" className={`absolute top-48 left-6 sm:left-[27rem] h-[15rem] w-[7rem] ${isVisible ? "opacity-100 animate-floatRight1 rotate-[-18deg] delay-[300ms]" : "opacity-0"}`} />
//           <img src={orn3} alt="orn2" className={`absolute top-80 z-10 left-0 sm:left-[27rem] h-[7rem] w-[7rem] ${isVisible ? "opacity-100 ping  " : "opacity-0"}`} />
//           <img src={orn4} alt="orn2" className={`absolute top-[24rem] z-10 left-0 sm:left-[26.5rem] h-[5rem] w-[10rem] ${isVisible ? "opacity-100 animate-sequence4 delay-[300ms]" : "opacity-0"}`} />
//           <img src={orn5} alt="orn2" className={`absolute top-[27rem] z-10 left-10 sm:left-[29rem] h-[6rem] w-[13rem] ${isVisible ? "opacity-100 animate-sequence5 delay-[300ms]" : "opacity-0"}`} />
//           <img src={orn6} alt="orn2" className={`absolute top-[28rem] z-10 left-24 sm:left-[32.5rem] h-[5rem] w-[10rem] ${isVisible ? "opacity-100 ping3 " : "opacity-0"}`} style={{ rotate: "-15deg" }} />
//           <img src={orn7} alt="orn2" className={`absolute top-[23rem] z-10 left-44 sm:left-[37.5rem] h-[7rem] w-[13rem] ${isVisible ? "opacity-100 ping2 " : "opacity-0"}`} style={{ transform: "scaleY(-1)", rotate: "-26deg" }} />
//           <img src={orn8} alt="orn2" className={`absolute top-[14rem] left-44 sm:left-[37.5rem] h-[10rem] w-[15rem] ${isVisible ? "opacity-100 animate-floatLeft1" : "opacity-0"}`} />
//           <img src={orn9} alt="orn2" className={`absolute top-[9rem] left-44 sm:left-[40rem] h-[6rem] w-[11rem] ${isVisible ? "opacity-100 animate-floatLeft1 " : "opacity-0"}`} />
//         </div>
//         <BingkaiFoto imageUrl={man} altText="Contoh Gambar" />
//         <div className={`flex flex-col items-center justify-center gap-2 ${isVisible ? "opacity-100 animate-fadeInScale delay-[300ms]" : " opacity-0"}`}>
//           <h1 className="uppercase text-primaryColor font-playfair text-4xl">dave leonard</h1>
//           <p className="capitalize font-playfair text-secondaryColor">The son of mr.Lerry & mrs.Jeny</p>
//           <p className="capitalize font-playfair text-primaryColor">
//             <i className="fab fa-instagram ml-2"></i>
//             <span className="ml-2">@</span> katsutodo
//           </p>
//         </div>
//       </div>
//       {/* <div className={`mt-14 mb-0 text-center ${isVisible ? "opacity-100 animate-fadeInScale delay-[300ms]" : " opacity-0"}`}>
//         <h1 className="uppercase text-primaryColor font-playfair text-6xl">&</h1>
//       </div> */}
//       <Dan />
//       <div ref={sectionRef1} className="flex flex-col items-center justify-center relative overflow-x-hidden overflow-y-hidden">
//         <div>
//           <img src={orn11} alt="orn1" className={`absolute top-[4rem] right-10 sm:right-[28rem] h-[15rem] w-[7rem] ${isVisible1 ? "opacity-100 animate-sequence8" : "opacity-0"}`} />
//           <img src={orn2} alt="orn2" className={`absolute top-[8rem] right-6 sm:right-[27rem] h-[15rem] w-[7rem] ${isVisible1 ? "opacity-100 animate-floatLeft2" : "opacity-0"}`} style={{ transform: "scaleX(-1)", rotate: "18deg" }} />
//           <img src={orn3} alt="orn2" className={`absolute top-[16rem] z-10 right-0 sm:right-[29rem] h-[7rem] w-[7rem] ${isVisible1 ? "opacity-100 ping delay-[300ms]" : "opacity-0"}`} />
//           <img src={orn41} alt="orn2" className={`absolute top-[20rem] z-10 right-0 sm:right-[26.5rem] h-[5rem] w-[10rem] ${isVisible1 ? "opacity-100 animate-sequence7 delay-[300ms]" : "opacity-0"}`} />
//           <img src={orn51} alt="orn2" className={`absolute top-[23rem] z-10 right-10 sm:right-[29rem] h-[6rem]  w-[13rem] ${isVisible1 ? "opacity-100 animate-sequence6 delay-[300ms]" : "opacity-0"}`} />
//           <img src={orn6} alt="orn2" className={`absolute top-[24rem] z-10 right-24 sm:right-[32.5rem] h-[5rem] w-[10rem] ${isVisible1 ? "opacity-100 ping4" : "opacity-0"}`} style={{ transform: "scaleX(-1)" }} />
//           <img src={orn7} alt="orn2" className={`absolute top-[19rem] z-10 right-44 sm:right-[37.5rem] h-[7rem] w-[13rem] ${isVisible1 ? "opacity-100 animate-ping3 " : "opacity-0"}`} style={{ transform: "scaleY(1)", rotate: "-150deg" }} />
//           <img src={orn8} alt="orn2" className={`absolute top-[10rem] right-44 sm:right-[37.5rem] h-[10rem] w-[15rem] ${isVisible1 ? "opacity-100 animate-floatRight3 " : "opacity-0"}`} style={{ transform: "scaleX(-1)" }} />
//           <img src={orn9} alt="orn2" className={`absolute top-[5rem] right-48 sm:right-[40rem] h-[6rem] w-[11rem] ${isVisible1 ? "opacity-100 delay-[300ms] animate-floatRight3 " : "opacity-0"}`} style={{ transform: "scaleX(-1)" }} />
//         </div>
//         {/* <div className={`absolute inset-0 ${isVisible1 ? "opacity-100 animate-fadeInScale delay-[300ms]" : " opacity-0"}`}>
//           <BingkaiWoman />
//         </div> */}

//         <BingkaiFoto imageUrl={woman} altText="Contoh Gambar" className={"mt-[3rem]"} />
//         <div className={`flex flex-col items-center justify-center gap-2 ${isVisible1 ? "opacity-100 animate-fadeInScale delay-[300ms]" : " opacity-0"}`}>
//           <h1 className="uppercase text-primaryColor font-playfair text-4xl">rachel nadhira</h1>
//           <p className="capitalize font-playfair text-secondaryColor">The son of mr.Lerry & mrs.Jeny</p>
//           <p className="capitalize font-playfair text-primaryColor">
//             <i className="fab fa-instagram ml-2"></i>
//             <span className="ml-2">@</span> katsutodo
//           </p>
//         </div>
//       </div>
//     </>
//   );
// }

// export default TheWedding;

import React, { useEffect, useRef, useState } from "react";
import WeddingsName from "../LittleComponents/WeddingsName";
import orn1 from "../../assets/images/Orn-09.png";
import orn11 from "../../assets/images/Orn-09.png";
import orn2 from "../../assets/images/Orn-13.png";
import orn3 from "../../assets/images/Orn-10.png";
import orn4 from "../../assets/images/Orn-03.png";
import orn41 from "../../assets/images/Orn-03 - Copy.png";
import orn5 from "../../assets/images/Orn-09 (1).png";
import orn51 from "../../assets/images/Orn-09 (1) - Copy.png";
import orn6 from "../../assets/images/Orn-08.png";
import orn7 from "../../assets/images/Orn-07.png";
import orn8 from "../../assets/images/Orn-11.png";
import orn9 from "../../assets/images/Orn-12.png";
import BingkaiFoto from "../LittleComponents/BingkaiPhoto";
import useVisibility from "../../hook/useVisibility";
import BingkaiMan from "../LittleComponents/BingkaiMan";
import BingkaiWoman from "../LittleComponents/BingkaiWoman";
import Title from "../LittleComponents/Title";
import Dan from "../LittleComponents/Dan";

function TheWedding({ man, woman }) {
  const { sectionRef, isVisible, isVisible1, sectionRef1 } = useVisibility(0.3);

  // Membuat state untuk menyimpan lebar konten
  const [contentWidth, setContentWidth] = useState(0);

  // Membuat ref untuk elemen yang ingin diukur lebar-nya
  const contentRef = useRef(null);

  // Fungsi untuk mengupdate lebar konten
  const updateContentWidth = () => {
    if (contentRef.current) {
      setContentWidth(contentRef.current.offsetWidth);
    }
  };

  // Menggunakan useEffect untuk mendapatkan lebar konten saat pertama kali render dan saat resize
  useEffect(() => {
    updateContentWidth(); // Mengupdate lebar saat pertama kali render

    // Menambahkan event listener untuk resize
    window.addEventListener("resize", updateContentWidth);

    // Cleanup event listener saat komponen unmount
    return () => {
      window.removeEventListener("resize", updateContentWidth);
    };
  }, []); // Empty array to only run once when component mounts

  // Menampilkan lebar konten di konsol
  useEffect(() => {
    console.log("Lebar konten:", contentWidth);
  }, [contentWidth]);

  return (
    <>
      <div ref={sectionRef} className="flex flex-col items-center justify-center relative overflow-x-hidden overflow-y-hidden">
        <div ref={contentRef} className="z-10 text-center">
          <Title title={"the wedding of"} />
          <p className={`text-lg text-secondaryColor mt-2 ${isVisible ? "opacity-100 animate-fadeInScale" : " opacity-0"}`}>Saturday, 01 February 2025</p>
        </div>
        <div className="flex flex-col items-center justify-center relative">
          <img src={orn1} alt="orn1" className={`absolute top-2 -left-2 h-[15rem] w-[7rem] ${isVisible ? "opacity-100 animate-sequenceInit delay-[300ms]" : "opacity-0"}`} />
          <img src={orn2} alt="orn2" className={`absolute top-14 -left-10 h-[15rem] w-[7rem] ${isVisible ? "opacity-100 animate-floatRight1 rotate-[-18deg] delay-[300ms]" : "opacity-0"}`} />
          <img src={orn3} alt="orn3" className={`absolute top-48 z-10 -left-10  h-[7rem] w-[7rem] ${isVisible ? "opacity-100 ping " : "opacity-0"}`} />
          <img src={orn4} alt="orn4" className={`absolute top-[19rem] z-10 left-0  h-[5rem] w-[10rem] ${isVisible ? "opacity-100 animate-sequence4 delay-[300ms]" : "opacity-0"}`} />
          <img src={orn5} alt="orn5" className={`absolute top-[19.5rem] z-10 left-6 h-[6rem] w-[13rem] ${isVisible ? "opacity-100 animate-sequence5 delay-[300ms]" : "opacity-0"}`} />
          <img src={orn6} alt="orn6" className={`absolute top-[21rem] z-10 left-16 h-[5rem] w-[10rem] ${isVisible ? "opacity-100 ping3 " : "opacity-0"}`} style={{ rotate: "-15deg" }} />
          <img src={orn7} alt="orn7" className={`absolute top-[15.5rem] z-10 left-36 h-[7rem] w-[13rem] ${isVisible ? "opacity-100 ping2 " : "opacity-0"}`} style={{ transform: "scaleY(-1)", rotate: "-26deg" }} />
          <img src={orn8} alt="orn8" className={`absolute top-[6.5rem] left-40 h-[10rem] w-[15rem] ${isVisible ? "opacity-100 animate-floatLeft1" : "opacity-0"}`} />
          <img src={orn9} alt="orn9" className={`absolute top-[2rem] left-36 h-[6rem] w-[11rem] ${isVisible ? "opacity-100 animate-floatLeft1 " : "opacity-0"}`} />
          <BingkaiFoto imageUrl={man} altText="Contoh Gambar" />
        </div>
        <div className={`flex flex-col items-center justify-center gap-2 ${isVisible ? "opacity-100 animate-fadeInScale delay-[300ms]" : " opacity-0"}`}>
          <h1 className="uppercase text-primaryColor font-playfair text-4xl">dave leonard</h1>
          <p className="capitalize font-playfair text-secondaryColor">The son of mr.Lerry & mrs.Jeny</p>
          <p className="capitalize font-playfair text-primaryColor">
            <i className="fab fa-instagram ml-2"></i>
            <span className="ml-2">@</span> katsutodo
          </p>
        </div>
      </div>
      <Dan />
      <div ref={sectionRef1} className="flex flex-col items-center justify-center overflow-x-hidden overflow-y-hidden">
        <div className="flex flex-col items-center justify-center relative">
          <img src={orn11} alt="orn1" className={`absolute top-12 -right-4 h-[15rem] w-[7rem] ${isVisible1 ? "opacity-100 animate-sequence8" : "opacity-0"}`} />
          <img src={orn2} alt="orn2" className={`absolute top-24 -right-6 h-[15rem] w-[7rem] ${isVisible1 ? "opacity-100 animate-floatLeft2" : "opacity-0"}`} style={{ transform: "scaleX(-1)", rotate: "18deg" }} />
          <img src={orn3} alt="orn3" className={`absolute top-56 z-10 -right-8 h-[7rem] w-[7rem] ${isVisible1 ? "opacity-100 ping delay-[300ms]" : "opacity-0"}`} />
          <img src={orn41} alt="orn41" className={`absolute top-[22rem] z-10 -right-2 h-[5rem] w-[10rem] ${isVisible1 ? "opacity-100 animate-sequence7 delay-[300ms]" : "opacity-0"}`} />
          <img src={orn51} alt="orn51" className={`absolute top-[23rem] z-10 right-2 h-[6rem]  w-[13rem] ${isVisible1 ? "opacity-100 animate-sequence6 delay-[300ms]" : "opacity-0"}`} />
          <img src={orn6} alt="orn6" className={`absolute top-[23.5rem] z-10 right-20 h-[5rem] w-[10rem] ${isVisible1 ? "opacity-100 ping4" : "opacity-0"}`} style={{ transform: "scaleX(-1)" }} />
          <img src={orn7} alt="orn7" className={`absolute top-[19rem] z-10 right-36 h-[7rem] w-[13rem] ${isVisible1 ? "opacity-100 animate-ping3 " : "opacity-0"}`} style={{ transform: "scaleY(1)", rotate: "-150deg" }} />
          <img src={orn8} alt="orn8" className={`absolute top-[9.5rem] right-40 h-[10rem] w-[15rem] ${isVisible1 ? "opacity-100 animate-floatRight3 " : "opacity-0"}`} style={{ transform: "scaleX(-1)" }} />
          <img src={orn9} alt="orn9" className={`absolute top-[5rem] right-36  h-[6rem] w-[11rem] ${isVisible1 ? "opacity-100 delay-[300ms] animate-floatRight3 " : "opacity-0"}`} style={{ transform: "scaleX(-1)" }} />
          <BingkaiFoto imageUrl={woman} altText="Contoh Gambar" className={"mt-[3rem]"} />
        </div>
        <div className={`flex flex-col items-center justify-center gap-2 ${isVisible1 ? "opacity-100 animate-fadeInScale delay-[300ms]" : " opacity-0"}`}>
          <h1 className="uppercase text-primaryColor font-playfair text-4xl">rachel nadhira</h1>
          <p className="capitalize font-playfair text-secondaryColor">The son of mr.Lerry & mrs.Jeny</p>
          <p className="capitalize font-playfair text-primaryColor">
            <i className="fab fa-instagram ml-2"></i>
            <span className="ml-2">@</span> katsutodo
          </p>
        </div>
      </div>
    </>
  );
}

export default TheWedding;
