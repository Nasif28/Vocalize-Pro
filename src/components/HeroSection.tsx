import React from "react";
import { LuArrowRightCircle } from "react-icons/lu";
import Navbar from "./Navbar";
import { Button } from "./ui/button";

export default function HeroSection() {
  return (
    <section
      id="home"
      style={{ background: "rgba(74, 43, 241, 1)" }}
      className="text-white relative w-full pt-5"
    >
      <Navbar />

      {/* Background Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/Ornament1.png"
          alt="Icon 1"
          className="absolute bottom-52 left-12 w-10 h-10 md:w-auto md:h-auto"
        />
        <img
          src="/Ornament2.png"
          alt="Icon 2"
          className="absolute top-44 right-24 w-10 h-10 md:w-auto md:h-auto"
        />
        <img
          src="/Ornament3.png"
          alt="Icon 3"
          className="absolute bottom-44 left-1/2 w-12 h-12 md:w-auto md:h-auto transform -translate-x-1/2"
        />
        <img
          src="/Ornament4.png"
          alt="Icon 1"
          className="absolute top-40 left-24 w-10 h-10 md:w-auto md:h-auto"
        />
        <img
          src="/Ornament5.png"
          alt="Icon 2"
          className="absolute bottom-24 right-28 w-10 h-10 md:w-auto md:h-auto"
        />
        <img
          src="/Ornament6.png"
          alt="Icon 3"
          className="absolute -bottom-12 left-0 w-10 h-10 md:w-auto md:h-auto"
        />
        <img
          src="/Ornament7.png"
          alt="Icon 1"
          className="hidden md:block absolute top-32 left-96 w-10 h-10 md:w-auto md:h-auto"
        />
      </div>

      {/* Main Content */}
      <div className="myContainer p-4 flex flex-col md:flex-row items-center  ">
        {/* Left Side (Text Section) */}
        <div className="md:w-1/2 text-center md:text-left">
          {/* Headline */}
          <h1 className="py-4 text-4xl md:text-5xl lg:text-6xl font-bold leading-snug md:leading-tight lg:leading-[75px]">
            Super easy to{" "}
            <span className="text-orange-400 relative">
              transcribe
              <img
                src="/Vector 1.png"
                alt="Icon"
                className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1"
              />
            </span>{" "}
            audio, video, or recordings into social media posts, blogs,
            summaries, and articles.
          </h1>

          {/* Description */}
          <p className="mt-4 md:mt-6 text-sm md:text-base lg:text-lg leading-relaxed md:leading-normal lg:leading-[30px] md:pr-12 lg:pr-20">
            AI that converts audio or video into transcripts, clips, show notes,
            articles, summaries, titles, newsletters, social media posts,
            midroll ads, intro scripts, and much more.
          </p>

          {/* Call to Action */}
          <div className="mt-6 md:mt-8 md:items-center">
            <Button
              className=" flex items-center justify-center px-6 py-4 md:px-6 md:py-5 md:mb-5 font-semibold text-white rounded-md"
              style={{
                background:
                  "linear-gradient(117.62deg, #FBCDBA -18.06%, #FC5D19 50.99%)",
              }}
            >
              Free for 7 Days{" "}
              <LuArrowRightCircle className="ml-2 w-5 h-5 md:w-6 md:h-6" />
            </Button>
          </div>
        </div>

        {/* Right Side (Image Section) */}
        <div className="mt-6 md:mt-0 md:w-1/2 flex justify-center relative">
          {/* Background Image */}
          <img
            src="/heroellipse.png"
            alt="Background Design"
            className="absolute inset-0 w-3/4 md:w-auto max-h-full" // Adjust size for responsiveness
          />
          {/* Foreground Image */}
          <img
            src="/hero.png"
            alt="Transcription Service"
            className="relative w-3/4 md:w-auto z-10 max-h-full" // Adjust size for responsiveness
          />
          <img
            src="/Ornament8.png"
            alt="Icon 2"
            className="absolute top-64 left-20 w-10 h-10 md:w-auto md:h-auto"
          />
          <img
            src="/Ornament9.png"
            alt="Icon 3"
            className="absolute top-24 left-36 w-10 h-10 md:w-auto md:h-auto"
          />
          <img
            src="/Ornament10.png"
            alt="Icon 3"
            className="absolute top-60 right-24 w-10 h-10 md:w-auto md:h-auto"
          />
          <img
            src="/Ornament11.png"
            alt="Icon 3"
            className="absolute top-20 right-40 w-10 h-10 md:w-auto md:h-auto"
          />
        </div>
      </div>
    </section>
  );
}
