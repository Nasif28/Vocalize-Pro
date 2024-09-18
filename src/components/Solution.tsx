"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const carouselItems = [
  "Slide 1: Lorem ipsum dolor sit amet.",
  "Slide 2: Consectetur adipiscing elit.",
  "Slide 3: Integer nec odio. Praesent libero.",
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
        <h1 className="text-4xl font-bold mb-4">One Stop Solution</h1>
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
                  className="flex-shrink-0 w-full h-64 flex items-center justify-center text-center"
                >
                  <p className="text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 flex justify-center py-2">
            <div className="flex space-x-2">
              {carouselItems.map((_, index) => (
                <Button
                  key={index}
                  className={cn(
                    "w-3 h-3 rounded-full transition-colors",
                    currentIndex === index ? "bg-blue-500" : "bg-gray-300"
                  )}
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
