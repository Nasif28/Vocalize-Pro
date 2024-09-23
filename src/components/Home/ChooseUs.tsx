import React from "react";
import { Separator } from "@/components/ui/separator";
import { LuArrowRightCircle } from "react-icons/lu";

const ChooseUs = () => {
  return (
    <div className="relative mx-auto py-16 md:py-24 flex flex-col lg:flex-row gap-10">
      <img
        src="/co1.png"
        alt="Icon 1"
        className="absolute -bottom-36 left-1s  md:w-auto md:h-auto"
      />

      {/* Left Side */}
      <div className="pl-5 xl:pl-40 flex flex-col gap-5 md:flex-row flex-1 md:mx-auto text-center lg:text-left">
        {/* Left first col  */}
        <div className="lg:w-1/2 space-y-8 lg:pr-8 pt-8 lg:pt-16 md:text-left text-center">
          {/* First Coll */}
          <div className="space-y-2 pt-10">
            <img
              src="/C1.png"
              alt="Eye Icon"
              className="h-12 w-12 mx-auto lg:mx-0"
            />
            <h3 className="text-lg font-bold">
              Automation And <br /> Manual Generate
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Etaque molestias enim quo harum ex, inventore eos corporis
              temporibus sint reiciendis nemo similique consequuntur eum.
            </p>
          </div>

          <hr className="border-gray-300" />

          {/* Second Coll */}
          <div className="space-y-2">
            <img
              src="/C2.png"
              alt="Easy To Use Icon"
              className="h-12 w-12 mx-auto lg:mx-0"
            />
            <h3 className="text-lg font-bold">Easy To Use</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Etaque molestias enim quo harum ex, inventore eos corporis
              temporibus sint reiciendis nemo similique consequuntur eum.
            </p>
          </div>
        </div>

        {/* Vertical Separator */}
        <Separator orientation="vertical" className="hidden lg:block py-8" />

        {/* Left second col  */}
        <div className="lg:w-1/2 space-y-8 pt-8 lg:pt-16 lg:pl-8 text-center md:text-left">
          {/* First Coll */}
          <div className="space-y-2">
            <img
              src="/C4.png"
              alt="Referral System Icon"
              className="h-12 w-12 mx-auto lg:mx-0"
            />
            <h3 className="text-lg font-bold">Referral System</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Etaque molestias enim quo harum ex, inventore eos corporis
              temporibus sint reiciendis nemo similique consequuntur eum.
            </p>
          </div>
          <hr className="border-gray-300" />

          {/* Second Coll */}
          <div className="space-y-2">
            <img
              src="/C3.png"
              alt="Security Icon"
              className="h-12 w-12 mx-auto lg:mx-0"
            />
            <h3 className="text-lg font-bold">Secure Application</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Etaque molestias enim quo harum ex, inventore eos corporis
              temporibus sint reiciendis nemo similique consequuntur eum.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="px-6 md:px-24 flex flex-col justify-center flex-1 text-center lg:text-left py-5 bg-[#EBECFE] dark:bg-[#2D2D2D]">
        <div className="mx-auto 2xl:mr-52 ">
          <h2 className="text-4xl md:text-5xl font-bold leading-snug md:leading-[63.25px]">
            Explore Why You Will Choose Us
          </h2>

          <p className="text-md md:text-xl text-gray-600 dark:text-gray-400 my-6 ">
            Etaque molestias enim quo harum ex, inventore eos corporis
            temporibus sint reiciendis nemo similique consequuntur eum. Etaque
            molestias enim quo harum ex, inventore eos corporis temporibus sint
            reiciendis nemo similique consequuntur eum.
          </p>

          <button className="bg-gradient-to-r from-[#19C2DD] to-[#355BFB] text-white px-4 py-[10px] md:px-[16px] md:py-[12px] flex items-center gap-[10px] rounded-[12px] shadow-lg mx-auto lg:mx-0">
            Start for Free
            <LuArrowRightCircle className="ml-2 w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
