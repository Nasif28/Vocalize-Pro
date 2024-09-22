import React from "react";
import { LuArrowRightCircle } from "react-icons/lu";
import { Button } from "../ui/button";

const Manage = () => {
  return (
    <section
      id="schedule"
      className="relative py-12 lg:py-28 flex items-center justify-center"
    >
      {/* Decorative Images */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <img
          src="/manage/eli.png"
          alt="Icon 1"
          className="absolute bottom-1/2 left-0 transform translate-y-1/2 w-full pointer-events-none"
        />
        <img
          src="/manage/elips.png"
          alt="Icon 2"
          className="absolute top-1/2 right-0 transform -translate-y-1/2 w-[400px] pointer-events-none"
        />
      </div>

      <div className="myContainer relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center text-center lg:text-left">
        {/* Text Section */}
        <div>
          <h3 className="text-[40px] lg:text-[55px] leading-[48px] lg:leading-[63px] font-bold mb-4 pr-0 lg:pr-4">
            Effortlessly Manage All Your Podcasts From A Single Dashboard.
          </h3>
          <p className="text-[18px] lg:text-[20px] leading-[28px] lg:leading-[30px] text-gray-900 mb-4 max-w-xl mx-auto lg:mx-0">
            Etaque molestias enim quo harum ex, inventore eos corporis
            temporibus sint reiciendis nemo similique consequuntur eum. Etaque
            molestias enim quo harum ex, inventore eos corporis temporibus sint
            reiciendis nemo similique consequuntur eum.
          </p>
          <p className="text-[18px] lg:text-[20px] leading-[28px] lg:leading-[30px] text-gray-900 mb-6 max-w-xl mx-auto lg:mx-0">
            Etaque molestias enim quo harum ex, inventore eos corporis
            temporibus sint reiciendis nemo similique consequuntur eum. Etaque
            molestias enim quo harum ex, inventore eos corporis temporibus sint
            reiciendis nemo similique consequuntur eum.
          </p>

          {/* Button */}
          <Button className="bg-gradient-to-r from-[#19C2DD] to-[#355BFB] text-white w-[183px] h-[50px] px-[16px] py-[15px] flex items-center justify-center gap-[10px] rounded-[12px] shadow-lg mx-auto lg:mx-0">
            Start for Free
            <LuArrowRightCircle className="ml-2 w-6 h-6" />
          </Button>
        </div>

        {/* Image Section */}
        <div className="flex justify-center lg:justify-start">
          <img
            src="/manage/ipad.png"
            alt="Podcast Dashboard"
            className="w-fit object-cover hidden lg:block"
          />
        </div>
      </div>
    </section>
  );
};

export default Manage;
