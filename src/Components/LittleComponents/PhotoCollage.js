import React, { useState, useEffect } from "react";
import foto1 from "../../assets/images/4.jpg";
import foto2 from "../../assets/images/6.jpg";
import foto3 from "../../assets/images/7.jpg";
import foto4 from "../../assets/images/8.jpg";
import foto5 from "../../assets/images/9.jpg";
import foto6 from "../../assets/images/10.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Title from "./Title";
import useVisibility from "../../hook/useVisibility";

const PhotoCollage = () => {
  const { sectionRef, isVisible, sectionRef1, isVisible1 } = useVisibility(0.3);
  const backgroundImages = [
    foto1,
    foto2,
    foto3,
    // Tambahkan URL gambar latar belakang lainnya sesuai kebutuhan
  ];

  const foregroundImages = [
    foto1,
    foto2,
    foto3,
    foto4,
    foto5,
    foto6,
    // Tambahkan URL gambar depan lainnya sesuai kebutuhan
  ];

  const [currentBackground, setCurrentBackground] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // Gambar latar belakang akan berpindah setiap 5 detik

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const foregroundSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "0",
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000, // Gambar depan akan berpindah setiap 5 detik
  };

  return (
    <div ref={sectionRef} className="relative w-full max-w-md mx-auto mb-24">
      <div className={`relative w-full h-96 ${isVisible ? "opacity-100 ping" : " opacity-0"}`}>
        {backgroundImages.map((image, index) => (
          <img key={index} src={image} alt={`Background Slide ${index}`} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentBackground ? "opacity-100" : "opacity-0"}`} />
        ))}
        <div className="absolute inset-0 bg-white bg-opacity-60 flex items-center justify-center"></div>
      </div>
      <div className="flex items-center justify-center">
        <Title title={"foto-foto"} className="absolute top-0" />
      </div>
      <div className={`absolute inset-0 flex items-center justify-center ${isVisible ? "opacity-100 animate-fadeInScale" : " opacity-0"} `}>
        <div className="w-full">
          <Slider {...foregroundSettings}>
            {foregroundImages.map((image, index) => (
              <div key={index} className="relative p-2">
                <img src={image} alt={`Foreground Slide ${index}`} className="w-full h-auto object-cover rounded-br-[50px] transition-all hover:scale-110 rounded-tl-[50px] outline-none focus:outline-none" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default PhotoCollage;
