"use client";
import React, { useState } from "react";
import Content from "./Content";

const carouselItems = [<Content />, <Content />, <Content />];

const ContentSources = () => {
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
    <section
      id="about"
      className="relative w-full h-full bg-cover bg-center py-14"
      style={{
        background:
          "linear-gradient(134.17deg, rgba(25, 194, 221, 0.1) 1.77%, rgba(74, 43, 241, 0.1) 98.9%)",
      }}
    >
      <img
        src="/content/r1.png"
        alt="Icon 1"
        className="absolute top-0 right-0 w-10 h-10 md:w-auto md:h-auto"
      />
      <img
        src="/content/r2.png"
        alt="Icon 1"
        className="absolute top-32 right-0 w-10 h-10 md:w-auto md:h-auto"
      />
      <img
        src="/content/r3.png"
        alt="Icon 1"
        className="absolute top-16 right-0 w-10 h-10 md:w-auto md:h-auto"
      />

      {/* Content */}
      <div className="relative z-10 py-12 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">Content Sources</h1>
        <p className="text-lg mb-6">
          Your one-stop solution for transforming audio and{" "}
          <br className="hidden md:block" /> video into a wide range of content
          formats.
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

          <div className="absolute inset-x-0 bottom-0 flex justify-center ">
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
                        ? "rgba(74, 43, 241, 1)"
                        : "rgba(74, 43, 241, 0.2)",
                  }}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContentSources;
