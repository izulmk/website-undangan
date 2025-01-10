import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pillow from "../../assets/images/pillow.avif";
import bedSheet from "../../assets/images/bedsheet.avif";
import badCover from "../../assets/images/badCover.jpg";
import Button from "./Button";
import Title from "./Title";
import useVisibility from "../../hook/useVisibility";

const GiftRecommendationCard = () => {
  const { sectionRef, isVisible, sectionRef1, isVisible1 } = useVisibility(0.3);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // ukuran layar untuk desktop
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600, // ukuran layar untuk tablet
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const products = [
    {
      id: 1,
      name: "Badcover",
      price: "Rp 1.000.000",
      total: 2,
      imageUrl: badCover,
      habis: false,
    },
    {
      id: 2,
      name: "Pillow",
      price: "Rp 200.000",
      total: 5,
      imageUrl: pillow,
      habis: true,
    },
    {
      id: 3,
      name: "Bedsheet",
      price: "Rp 500.000",
      total: 3,
      imageUrl: bedSheet,
      habis: false,
    },
    // Tambahkan lebih banyak produk sesuai kebutuhan
  ];

  return (
    <div ref={sectionRef} className={`max-w-xs md:max-w-4xl mx-auto mb-24 ${isVisible ? "opacity-100 animate-fadeInScale" : "opacity-0"}`}>
      {/* Pusatkan Title pada semua ukuran */}
      <div className="flex items-center justify-center py-4">
        <Title title={"Gift Recommendations"} />
      </div>

      {/* Slider */}
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="px-2">
            <div className="bg-white shadow-md relative rounded-lg overflow-hidden">
              <img className="w-full h-48 object-cover object-center" src={product.imageUrl} alt={product.name} />
              {product.habis && (
                <div className="flex items-center justify-center">
                  <div className="absolute inset-0 bg-white opacity-75 shadow-md rounded-lg"></div>
                  <div className="absolute inset-y-[84px] left-1/2 transform -translate-x-1/2 text-4xl text-gray-300 font-playfair font-bold">Habis</div>
                </div>
              )}

              <div className="p-4 font-playfair">
                <h3 className="text-lg font-medium text-red-600">{product.name}</h3>
                <p className="text-gray-700">{product.price}</p>
                <p className="text-gray-700">Total: {product.habis ? 0 : product.total}</p>
                <div className="text-center">
                  <Button text={"Gift Details"} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default GiftRecommendationCard;
