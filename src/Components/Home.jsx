import React, { useState, useEffect } from "react";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { IoArrowForwardCircleOutline } from "react-icons/io5";




export default function Home() {
  const [index, setIndex] = useState(0);

  // Array of images
  const ImageData = [
    {
      image:
        "https://images.unsplash.com/photo-1637766652059-af65a50715eb?q=80&w=1521&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      image:
        "https://images.unsplash.com/photo-1630411298887-199b1c50629b?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1691411181618-0b4b17e80c70?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  // Automatically move to the next slide every 3 seconds
  useEffect(() => {
    const interval = setTimeout(() => {
      nextSlide();
    }, 3000);
    return () => clearTimeout(interval);
  }, [index]);

  // Move to the next slide
  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % ImageData.length); // Loop back to the start
  };

  // Move to the previous slide
  const prevSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? ImageData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-[full] overflow-clip">
      {/* Slider Container */}
      <div
        className="flex transition-transform duration-700"
        style={{
          transform: `translateX(-${index * 100}%)`, // Moves the slider
        }}
      >
        {ImageData.map((item, i) => (
          <img
            key={i}
            src={item.image}
            alt={`Slide ${i}`}
            className="w-full h-full object-cover flex-shrink-0"
          />
        ))}
      </div>

      {/* Previous and Next Buttons */}
      <button
        className="absolute left-4 top-1/2 transform font-bold text-6xl cursor-pointer text-white px-4 py-2 opacity-75 hover:text-[#cf6060]"
        onClick={prevSlide}
      ><IoArrowBackCircleOutline /></button>
      <button
        className="absolute right-4 top-1/2 transform font-bold text-6xl cursor-pointer text-white px-4 py-2 opacity-75 hover:text-[#cf6060]"
        onClick={nextSlide}
      ><IoArrowForwardCircleOutline /> </button>
    </div>
  );
}
