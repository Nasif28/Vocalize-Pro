import React from "react";
import { Separator } from "@/components/ui/separator";
import { LuArrowRightCircle } from "react-icons/lu";

const ChooseUs = () => {
  return (
    // <div className="myContainer">
    <div className="maxContainer mx-auto py-24 flex flex-col md:flex-row ">
      {/* Left Side */}
      <div
        className=" mx-auto flex flex-col md:flex-row flex-1"
        style={{ marginLeft: "155px", padding: "10px" }}
      >
        {/* Left first col  */}
        <div className="md:w-1/2 space-y-8 md:pr-8 pt-16">
          {/* First Coll */}
          <div className="space-y-4 ">
            <img src="/C1.png" alt="Eye Icon" className="h-12 w-12" />
            <h3 className="text-lg font-bold">
              Automation And <br /> Manual Generate
            </h3>
            <p className="text-gray-600">
              Etaque molestias enim quo harum ex, inventore eos corporis
              temporibus sint reiciendis nemo similique consequuntur eum.
            </p>
          </div>

          <hr className="border-gray-300" />

          {/* Second COll */}
          <div className="space-y-4">
            <img src="/C2.png" alt="Eye Icon" className="h-12 w-12" />
            <h3 className="text-lg font-bold">Easy To Use</h3>
            <p className="text-gray-600">
              Etaque molestias enim quo harum ex, inventore eos corporis
              temporibus sint reiciendis nemo similique consequuntur eum.
            </p>
          </div>
        </div>

        <Separator orientation="vertical" className="mr-12 py-8" />

        {/* Left second col  */}
        <div className="md:w-1/2 space-y-8 md:pr-8">
          {/* First Coll */}
          <div className="space-y-4 ">
            <img src="/C4.png" alt="Eye Icon" className="h-12 w-12" />
            <h3 className="text-lg font-bold">Referral System</h3>
            <p className="text-gray-600">
              Etaque molestias enim quo harum ex, inventore eos corporis
              temporibus sint reiciendis nemo similique consequuntur eum.
            </p>
          </div>

          <hr className="border-gray-300" />

          {/* Second COll */}
          <div className="space-y-4">
            <img src="/C3.png" alt="Eye Icon" className="h-12 w-12" />
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
        className="md:w-1/2 px-4 md:p-12 py-5 flex flex-col justify-center flex-1"
        style={{ backgroundColor: "rgba(235, 236, 254, 1)" }}
      >
        <div style={{ marginRight: "155px", padding: "0 10px" }}>
          <h2 className=" text-[50px] font-bold leading-[63.25px] mb-4">
            Explore Why You Will Choose Us
          </h2>
          <p className="text-gray-600 mb-6 pr-24">
            Etaque molestias enim quo harum ex, inventore eos corporis
            temporibus sint reiciendis nemo similique consequuntur eum. Etaque
            molestias enim quo harum ex, inventore eos corporis temporibus sint
            reiciendis nemo similique consequuntur eum.
          </p>
          <button className="bg-gradient-to-r from-[#19C2DD] to-[#355BFB] text-white w-[183px] h-[50px] px-[16px] py-[15px] flex items-center gap-[10px] rounded-[12px] shadow-lg">
            Start for Free
            <LuArrowRightCircle className="ml-2 w-6 h-6" />{" "}
          </button>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default ChooseUs;
