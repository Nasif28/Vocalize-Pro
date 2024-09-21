import React from "react";
import { Separator } from "@/components/ui/separator";
import { LuArrowRightCircle } from "react-icons/lu";

const ChooseUs = () => {
  return (
    <div className="mx-auto py-16 md:py-24 flex flex-col lg:flex-row gap-5">
      {/* Left Side */}
      <div className="myContainer flex flex-col gap-5 md:flex-row flex-1 mx-auto">
        {/* Left first col  */}
        <div className="lg:w-1/2 space-y-8 lg:pr-8 pt-8 lg:pt-16 text-center md:text-left">
          {/* First Coll */}
          <div className="space-y-4">
            <img src="/C1.png" alt="Eye Icon" className="h-12 w-12 mx-auto" />
            <h3 className="text-lg font-bold">
              Automation And <br /> Manual Generate
            </h3>
            <p className="text-gray-600">
              Etaque molestias enim quo harum ex, inventore eos corporis
              temporibus sint reiciendis nemo similique consequuntur eum.
            </p>
          </div>
          <hr className="border-gray-300" />
          {/* Second Coll */}
          <div className="space-y-4">
            <img
              src="/C2.png"
              alt="Easy To Use Icon"
              className="h-12 w-12 mx-auto"
            />
            <h3 className="text-lg font-bold">Easy To Use</h3>
            <p className="text-gray-600">
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
          <div className="space-y-4">
            <img
              src="/C4.png"
              alt="Referral System Icon"
              className="h-12 w-12 mx-auto"
            />
            <h3 className="text-lg font-bold">Referral System</h3>
            <p className="text-gray-600">
              Etaque molestias enim quo harum ex, inventore eos corporis
              temporibus sint reiciendis nemo similique consequuntur eum.
            </p>
          </div>
          <hr className="border-gray-300" />
          {/* Second Coll */}
          <div className="space-y-4">
            <img
              src="/C3.png"
              alt="Security Icon"
              className="h-12 w-12 mx-auto"
            />
            <h3 className="text-lg font-bold">Secure Application</h3>
            <p className="text-gray-600">
              Etaque molestias enim quo harum ex, inventore eos corporis
              temporibus sint reiciendis nemo similique consequuntur eum.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div
        className="lg:w-1/2 px-4 md:px-12 py-8 md:py-5 flex flex-col justify-center flex-1"
        style={{ backgroundColor: "rgba(235, 236, 254, 1)" }}
      >
        <div className="mx-auto md:mx-0 md:mr-16">
          <h2 className="text-3xl md:text-[50px] font-bold leading-snug md:leading-[63.25px] mb-4">
            Explore Why You Will Choose Us
          </h2>
          <p className="text-gray-600 mb-6 lg:pr-24">
            Etaque molestias enim quo harum ex, inventore eos corporis
            temporibus sint reiciendis nemo similique consequuntur eum. Etaque
            molestias enim quo harum ex, inventore eos corporis temporibus sint
            reiciendis nemo similique consequuntur eum.
          </p>
          <button className="bg-gradient-to-r from-[#19C2DD] to-[#355BFB] text-white  px-4 md:px-[16px] py-[12px] flex items-center gap-[10px] rounded-[12px] shadow-lg">
            Start for Free
            <LuArrowRightCircle className="ml-2 w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
