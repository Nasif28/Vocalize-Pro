"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import CarouselItem from "./CarouselItem";

const carouselItems = [
  // "Slide 1: Lorem ipsum dolor sit amet.",
  // "Slide 2: Consectetur adipiscing elit.",
  // "Slide 3: Integer nec odio. Praesent libero.",
  <CarouselItem />,
  <CarouselItem />,
  <CarouselItem />,
];

const Solution = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      className="relative w-full h-full bg-cover bg-center py-10"
      style={{ backgroundImage: 'url("/solution/bg.png")' }}
    >
      {/* Blue transparent overlay */}
      <div className="absolute inset-0 bg-blue-700 bg-opacity-85"></div>

      {/* Content */}
      <div className="relative z-10 py-12 px-6 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">One Stop Solution</h1>
        <p className="text-lg mb-12">
          Your one-stop solution for transforming audio and <br /> video into a
          wide range of content formats.
        </p>

        <div className="relative w-full  mx-auto">
          <div className="overflow-hidden rounded-lg">
            <div
              className="flex transition-transform duration-300"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {carouselItems.map((item, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full flex items-center justify-center text-center py-12"
                >
                  <div className="text-lg">{item}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 flex justify-center py-2">
            <div className="flex space-x-8">
              {carouselItems.map((_, index) => (
                <div
                  key={index}
                  className="rounded-full transition-colors duration-300"
                  style={{
                    width: "20px",
                    height: "20px",
                    backgroundColor:
                      currentIndex === index
                        ? "rgba(255, 255, 255, 1)"
                        : "rgba(255, 255, 255, 0.5)", // White when active, 50% transparent white when inactive
                  }}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
