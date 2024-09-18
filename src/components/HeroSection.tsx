// components/HeroSection.tsx
import { LuArrowRightCircle } from "react-icons/lu";
import Navbar from "./Navbar";
import { Button } from "./ui/Button";

export default function HeroSection() {
  return (
    <section
      style={{ background: "rgba(74, 43, 241, 1)" }}
      className=" text-white relative w-full pt-5"
    >
      <Navbar />

      {/* Background Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/Ornament1.png"
          alt="Icon 1"
          className="absolute bottom-52 left-12 "
        />
        <img
          src="/Ornament2.png"
          alt="Icon 2"
          className="absolute top-44 right-24"
        />
        <img
          src="/Ornament3.png"
          alt="Icon 3"
          className="absolute bottom-44 left-1/2 "
        />
        <img
          src="/Ornament4.png"
          alt="Icon 1"
          className="absolute top-40 left-24"
        />
        <img
          src="/Ornament5.png"
          alt="Icon 2"
          className="absolute bottom-24 right-28 "
        />
        <img
          src="/Ornament6.png"
          alt="Icon 3"
          className="absolute -bottom-12 left-0"
        />
        <img
          src="/Ornament7.png"
          alt="Icon 1"
          className="hidden md:block absolute top-32 left-96"
        />

        {/* Add more icons as needed */}
      </div>

      {/* Main Content */}
      <div className="myContainer flex flex-col md:flex-row items-center">
        {/* Left Side (Text Section) */}
        <div className="md:w-1/2 text-center md:text-left">
          {/* Headline */}
          <h1 className="text-[55px] font-bold leading-[75.9px] text-left">
            Super easy to{" "}
            <span className="text-orange-400 relative">
              transcribe
              <img
                src="/Vector 1.png"
                alt="Icon"
                className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1" // Adjust the position
              />
            </span>{" "}
            audio, video, or recordings into social media posts, blogs,
            summaries, and articles.
          </h1>

          {/* Description */}
          <p
            className=" mt-6 text-lg text-[18px] leading-[30px]"
            style={{ paddingRight: "120px" }}
          >
            AI that converts audio or video into transcripts, clips, show notes,
            articles, summaries, titles, newsletters, social media posts,
            midroll ads, intro scripts, and much more.
          </p>

          {/* Call to Action */}
          <div className="mt-8">
            <Button
              className="flex items-center justify-center px-6 py-5 font-semibold text-white rounded-md"
              style={{
                background:
                  "linear-gradient(117.62deg, #FBCDBA -18.06%, #FC5D19 50.99%)",
              }}
            >
              Free for 7 Days <LuArrowRightCircle className="ml-2 w-6 h-6" />{" "}
              {/* Icon styling */}
            </Button>
          </div>
        </div>

        {/* Right Side (Image Section) */}
        <div className="md:mt-0 md:w-1/2 flex justify-center relative">
          {/* Background Image */}
          <img
            src="/heroellipse.png"
            alt="Background Design"
            className="absolute inset-0 max-h-full" // absolute positioning and inset to cover parent
          />
          {/* Foreground Image */}
          <img
            src="/hero.png"
            alt="Transcription Service"
            className="relative max-h-full z-10" // relative to maintain stacking order
          />
          <img
            src="/Ornament8.png"
            alt="Icon 2"
            className="absolute top-64 left-20"
          />
          <img
            src="/Ornament9.png"
            alt="Icon 3"
            className="absolute top-24 left-36"
          />
          <img
            src="/Ornament10.png"
            alt="Icon 3"
            className="absolute top-60 right-24"
          />
          <img
            src="/Ornament11.png"
            alt="Icon 3"
            className="absolute top-20 right-40 "
          />
        </div>
      </div>
    </section>
  );
}
