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

// toko online

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const App = () => {
//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Header */}
//       <header className="bg-white shadow">
//         <div className="container mx-auto flex justify-between items-center py-4 px-6">
//           <h1 className="text-2xl font-bold text-blue-600">Online Store</h1>
//           <nav>
//             <ul className="flex space-x-4">
//               <li>
//                 <a href="#" className="text-gray-700 hover:text-blue-600">
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-700 hover:text-blue-600">
//                   Categories
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-700 hover:text-blue-600">
//                   About
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-700 hover:text-blue-600">
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </nav>
//           <div className="flex items-center space-x-4">
//             <input type="text" placeholder="Search" className="border rounded px-3 py-1 focus:outline-none" />
//             <button className="text-gray-700 hover:text-blue-600">🛒</button>
//           </div>
//         </div>
//       </header>

//       {/* Hero Section with Swiper Carousel */}
//       <section className="bg-gray-800 text-white">
//         <Swiper modules={[Navigation, Pagination]} spaceBetween={50} slidesPerView={1} navigation pagination={{ clickable: true }} className="h-96">
//           <SwiperSlide>
//             <div
//               className="h-full flex justify-center items-center bg-cover bg-center"
//               style={{
//                 backgroundImage: "url('https://via.placeholder.com/1200x400?text=Slide+1')",
//               }}
//             >
//               <div className="text-center">
//                 <h2 className="text-4xl font-bold">Welcome to Our Store</h2>
//                 <p className="mt-4 text-lg">Discover amazing products just for you!</p>
//               </div>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div
//               className="h-full flex justify-center items-center bg-cover bg-center"
//               style={{
//                 backgroundImage: "url('https://via.placeholder.com/1200x400?text=Slide+2')",
//               }}
//             >
//               <div className="text-center">
//                 <h2 className="text-4xl font-bold">Big Sale This Week!</h2>
//                 <p className="mt-4 text-lg">Up to 50% off on selected products.</p>
//               </div>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div
//               className="h-full flex justify-center items-center bg-cover bg-center"
//               style={{
//                 backgroundImage: "url('https://via.placeholder.com/1200x400?text=Slide+3')",
//               }}
//             >
//               <div className="text-center">
//                 <h2 className="text-4xl font-bold">Shop the Latest Trends</h2>
//                 <p className="mt-4 text-lg">Get the best deals today!</p>
//               </div>
//             </div>
//           </SwiperSlide>
//         </Swiper>
//       </section>

//       {/* Product Grid */}
//       <section className="container mx-auto py-12 px-6">
//         <h3 className="text-2xl font-bold mb-6">Popular Products</h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {/* Product Card */}
//           {Array.from({ length: 8 }).map((_, i) => (
//             <div key={i} className="bg-white shadow rounded-lg p-4 hover:shadow-lg transition">
//               <img src="https://via.placeholder.com/150" alt="Product" className="rounded w-full h-40 object-cover" />
//               <h4 className="mt-4 text-lg font-semibold text-gray-700">Product Name</h4>
//               <p className="mt-2 text-gray-500">$99.99</p>
//               <button className="mt-4 bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-400">Add to Cart</button>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white py-6">
//         <div className="container mx-auto text-center">
//           <p>&copy; 2025 Online Store. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default App;
