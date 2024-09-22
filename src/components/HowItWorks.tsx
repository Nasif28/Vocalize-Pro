import React from "react";

const HowItWorks = () => {
  return (
    <section
      className="maxContainer py-28 overflow-hidden relative"
      id="works"
      style={{
        background:
          "linear-gradient(134.17deg, rgba(25, 194, 221, 0.1) 1.77%, rgba(74, 43, 241, 0.1) 98.9%)",
      }}
    >
      <div className="myContainer ">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold">How It Works</h2>
          <p className="text-md md:text-lg text-gray-700 mt-5">
            Simple, easy to use interface. Import your media, generate a{" "}
            <br className="hidden md:block" />
            content, and post all connected social media.
          </p>
        </div>

        <img
          src="/work/s3.png"
          alt="Icon 1"
          className="absolute top-10 right-20 w-10 h-10 md:w-auto md:h-auto"
        />
        <img
          src="/work/s1.png"
          alt="Icon 1"
          className="absolute top-1/3 right-0 w-10 h-10 md:w-auto md:h-auto"
        />
        <img
          src="/work/s2.png"
          alt="Icon 1"
          className="absolute bottom-1/2 left-12 w-10 h-10 md:w-auto md:h-auto"
        />

        {/* First Row */}
        <div className="flex flex-col md:flex-row items-center my-8 py-12 relative text-center md:text-left">
          <div className="md:w-1/3 flex justify-center md:block mb-6 md:mb-0">
            <div className="relative p-4">
              <img
                src="/work/wr1.png"
                alt="Sign Up/Registration"
                className="rounded-lg  -z-10 absolute -bottom-32 -left-32"
              />
              <img
                src="/work/w1.png"
                alt="Sign Up/Registration"
                className="rounded-lg "
              />
            </div>
          </div>

          {/* Number */}
          <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
            <div
              className="flex items-center justify-center text-orange-400 text-[100px] font-bold leading-[126.5px]"
              style={{
                WebkitTextStroke: "1.5px rgba(252, 93, 25, 0.4)",
                WebkitTextFillColor: "transparent",
              }}
            >
              01
            </div>
          </div>

          {/* Text */}
          <div className="md:w-1/3  md:pl-8 ">
            <h3 className="text-3xl font-bold">Sign Up/Registration</h3>
            <p className="text-gray-500 mt-4 md:pr-20">
              Etaque molestias enim quo harum ex, inventore eos corporis
              temporibus sint reiciendis nemo similique consequuntur eum. Etaque
              molestias enim quo harum ex, inventore eos corporis temporibus
              sint reiciendis nemo similique consequuntur eum.
            </p>
          </div>

          {/* Arrow to Next Row */}
          <img
            src="/work/a1.png"
            alt="Sign Up/Registration"
            className="rounded-lg  absolute hidden md:block"
            style={{
              left: "45%",
              transform: "translateX(-50%)",
              top: "25%",
            }}
          />
        </div>

        <div className="py-10  md:py-0"></div>

        {/* Second Row */}
        <div className="flex flex-col md:flex-row items-center my-8 relative text-center md:text-left">
          {/* Text */}
          <div className="md:w-1/3 md:pl-8 mb-6 md:mb-0">
            <h3 className="text-3xl font-bold">Account Verification</h3>
            <p className="text-gray-500 mt-4 pr-0 md:pr-20">
              Etaque molestias enim quo harum ex, inventore eos corporis
              temporibus sint reiciendis nemo similique consequuntur eum. Etaque
              molestias enim quo harum ex, inventore eos corporis temporibus
              sint reiciendis nemo similique consequuntur eum.
            </p>
          </div>

          {/* Number */}
          <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
            <div
              className="flex items-center justify-center text-orange-400 text-[100px] font-bold leading-[126.5px]"
              style={{
                WebkitTextStroke: "1.5px rgba(252, 93, 25, 0.4)",
                WebkitTextFillColor: "transparent",
              }}
            >
              02
            </div>
          </div>

          {/* Image  */}
          <div className="md:w-1/3 flex justify-center">
            <div className="relative p-4">
              <img
                src="/work/wr2.png"
                alt="Sign Up/Registration"
                className="rounded-lg  -z-10 absolute -bottom-20 -right-12"
              />
              <img
                src="/work/w2.png"
                alt="Sign Up/Registration"
                className="rounded-lg "
              />
            </div>
          </div>

          {/* Arrow to Next Row */}
          <img
            src="/work/a2.png"
            alt="Sign Up/Registration"
            className="rounded-lg  absolute hidden md:block"
            style={{
              left: "45%",
              transform: "translateX(-50%)",
              top: "25%",
            }}
          />
        </div>

        <div className="py-10  md:py-0"></div>

        {/* Third Row */}
        <div className="flex flex-col md:flex-row items-center my-8 py-12 relative text-center md:text-left">
          <div className="md:w-1/3 flex justify-center md:block mb-6 md:mb-0">
            <div className="relative p-4">
              <img
                src="/work/wr3.png"
                alt="Sign Up/Registration"
                className="rounded-lg  -z-10 absolute -bottom-24 -left-24"
              />
              <img
                src="/work/w3.png"
                alt="Sign Up/Registration"
                className="rounded-lg "
              />
            </div>
          </div>

          <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
            <div
              className="flex items-center justify-center text-orange-400 text-[100px] font-bold leading-[126.5px]"
              style={{
                WebkitTextStroke: "1.5px rgba(252, 93, 25, 0.4)",
                WebkitTextFillColor: "transparent",
              }}
            >
              03
            </div>
          </div>

          {/* Text */}
          <div className="md:w-1/3 md:pl-8">
            <h3 className="text-3xl font-bold">Upload Audio/Video or Record</h3>
            <p className="text-gray-500 mt-4 pr-0 md:pr-20">
              Etaque molestias enim quo harum ex, inventore eos corporis
              temporibus sint reiciendis nemo similique consequuntur eum. Etaque
              molestias enim quo harum ex, inventore eos corporis temporibus
              sint reiciendis nemo similique consequuntur eum.
            </p>
          </div>

          {/* Arrow to Next Row */}
          <img
            src="/work/a1.png"
            alt="Sign Up/Registration"
            className="rounded-lg  absolute hidden md:block"
            style={{
              left: "45%", // Move the image slightly to the left
              transform: "translateX(-50%)", // Keep it centered horizontally
              top: "25%", // Adjust top positioning if needed
            }}
          />
        </div>

        <div className="py-10  md:py-0"></div>

        {/* Fourth Row */}
        <div className="flex flex-col md:flex-row items-center my-8 relative text-center md:text-left">
          {/* Text */}
          <div className="md:w-1/3 md:pl-8 mb-6 md:mb-0">
            <h3 className="text-3xl font-bold">Generate Content</h3>
            <p className="text-gray-500 mt-4 pr-0 md:pr-20">
              Etaque molestias enim quo harum ex, inventore eos corporis
              temporibus sint reiciendis nemo similique consequuntur eum. Etaque
              molestias enim quo harum ex, inventore eos corporis temporibus
              sint reiciendis nemo similique consequuntur eum.
            </p>
          </div>

          <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
            <div
              className="flex items-center justify-center text-orange-400 text-[100px] font-bold leading-[126.5px]"
              style={{
                WebkitTextStroke: "1.5px rgba(252, 93, 25, 0.4)",
                WebkitTextFillColor: "transparent",
              }}
            >
              04
            </div>
          </div>
          {/* Image  */}
          <div className="md:w-1/3 flex justify-center">
            <div className="relative p-4">
              <img
                src="/work/wr4.png"
                alt="Sign Up/Registration"
                className="rounded-lg  -z-10 absolute -bottom-20 -right-12"
              />
              <img
                src="/work/w4.png"
                alt="Sign Up/Registration"
                className="rounded-lg "
              />
            </div>
          </div>

          {/* Arrow to Next Row */}
          <img
            src="/work/a2.png"
            alt="Sign Up/Registration"
            className="rounded-lg  absolute hidden md:block"
            style={{
              left: "45%", // Move the image slightly to the left
              transform: "translateX(-50%)", // Keep it centered horizontally
              top: "25%", // Adjust top positioning if needed
            }}
          />
        </div>

        <div className="py-10  md:py-0"></div>

        {/* Fifth Row */}
        <div className="flex flex-col md:flex-row items-center my-8 py-12 relative text-center md:text-left">
          <div className="md:w-1/3 flex justify-center md:block mb-6 md:mb-0">
            <div className="relative p-4">
              <img
                src="/work/wr5.png"
                alt="Sign Up/Registration"
                className="rounded-lg  -z-10 absolute -bottom-24 -left-24"
              />
              <img
                src="/work/w5.png"
                alt="Sign Up/Registration"
                className="rounded-lg "
              />
            </div>
          </div>

          <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
            <div
              className="flex items-center justify-center text-orange-400 text-[100px] font-bold leading-[126.5px]"
              style={{
                WebkitTextStroke: "1.5px rgba(252, 93, 25, 0.4)",
                WebkitTextFillColor: "transparent",
              }}
            >
              05
            </div>
          </div>

          {/* Text */}
          <div className="md:w-1/3 md:pl-8">
            <h3 className="text-3xl font-bold">Connect Social Media</h3>
            <p className="text-gray-500 mt-4 pr-0 md:pr-20">
              Etaque molestias enim quo harum ex, inventore eos corporis
              temporibus sint reiciendis nemo similique consequuntur eum. Etaque
              molestias enim quo harum ex, inventore eos corporis temporibus
              sint reiciendis nemo similique consequuntur eum.
            </p>
          </div>

          {/* Arrow to Next Row */}
          <img
            src="/work/a1.png"
            alt="Sign Up/Registration"
            className="rounded-lg  absolute hidden md:block"
            style={{
              left: "45%", // Move the image slightly to the left
              transform: "translateX(-50%)", // Keep it centered horizontally
              top: "25%", // Adjust top positioning if needed
            }}
          />
        </div>

        <div className="py-10  md:py-0"></div>

        {/* Sixth Row */}
        <div className="flex flex-col md:flex-row items-center my-8 relative text-center md:text-left">
          {/* Text */}
          <div className="md:w-1/3 md:pl-8 mb-6 md:mb-0">
            <h3 className="text-3xl font-bold">Post</h3>
            <p className="text-gray-500 mt-4 pr-0 md:pr-20">
              Etaque molestias enim quo harum ex, inventore eos corporis
              temporibus sint reiciendis nemo similique consequuntur eum. Etaque
              molestias enim quo harum ex, inventore eos corporis temporibus
              sint reiciendis nemo similique consequuntur eum.
            </p>
          </div>

          <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
            <div
              className="flex items-center justify-center text-orange-400 text-[100px] font-bold leading-[126.5px]"
              style={{
                WebkitTextStroke: "1.5px rgba(252, 93, 25, 0.4)",
                WebkitTextFillColor: "transparent",
              }}
            >
              06
            </div>
          </div>
          {/* Image  */}
          <div className="md:w-1/3 flex justify-center">
            <div className="relative p-4">
              <img
                src="/work/wr6.png"
                alt="Sign Up/Registration"
                className="rounded-lg  -z-10 absolute -bottom-12 -right-12"
              />
              <img
                src="/work/w6.png"
                alt="Sign Up/Registration"
                className="rounded-lg "
              />
            </div>
          </div>

          {/* Arrow to Next Row */}
          <img
            src="/work/a2.png"
            alt="Sign Up/Registration"
            className="rounded-lg  absolute hidden md:block"
            style={{
              left: "45%",
              transform: "translateX(-50%)",
              top: "25%",
            }}
          />
        </div>

        <div className="py-10  md:py-0"></div>

        {/* Seventh Row */}
        <div className="flex flex-col md:flex-row items-center my-8 py-12 relative text-center md:text-left">
          <div className="md:w-1/3 flex justify-center md:block mb-6 md:mb-0">
            <div className="relative p-4">
              <img
                src="/work/wr7.png"
                alt="Sign Up/Registration"
                className="rounded-lg  -z-10 absolute -bottom-12 -left-12"
              />
              <img
                src="/work/w7.png"
                alt="Sign Up/Registration"
                className="rounded-lg "
              />
            </div>
          </div>

          <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
            <div
              className="flex items-center justify-center text-orange-400 text-[100px] font-bold leading-[126.5px]"
              style={{
                WebkitTextStroke: "1.5px rgba(252, 93, 25, 0.4)",
                WebkitTextFillColor: "transparent",
              }}
            >
              07
            </div>
          </div>

          {/* Text */}
          <div className="md:w-1/3 md:pl-8">
            <h3 className="text-3xl font-bold">Manage Posts</h3>
            <p className="text-gray-500 mt-4 pr-0 md:pr-20">
              Etaque molestias enim quo harum ex, inventore eos corporis
              temporibus sint reiciendis nemo similique consequuntur eum. Etaque
              molestias enim quo harum ex, inventore eos corporis temporibus
              sint reiciendis nemo similique consequuntur eum.
            </p>
          </div>

          {/* Arrow to Next Row */}
          <img
            src="/work/a1.png"
            alt="Sign Up/Registration"
            className="rounded-lg  absolute hidden md:block"
            style={{
              left: "45%",
              transform: "translateX(-50%)",
              top: "25%",
            }}
          />
        </div>

        <div className="py-10  md:py-0"></div>

        {/* Eight Row */}
        <div className="flex flex-col md:flex-row items-center my-8 relative text-center md:text-left">
          {/* Text */}
          <div className="md:w-1/3 md:pl-8 mb-6 md:mb-0">
            <h3 className="text-3xl font-bold">One Hub for All Your Posts</h3>
            <p className="text-gray-500 mt-4 pr-0 md:pr-20">
              Etaque molestias enim quo harum ex, inventore eos corporis
              temporibus sint reiciendis nemo similique consequuntur eum. Etaque
              molestias enim quo harum ex, inventore eos corporis temporibus
              sint reiciendis nemo similique consequuntur eum.
            </p>
          </div>

          <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
            <div
              className="flex items-center justify-center text-orange-400 text-[100px] font-bold leading-[126.5px]"
              style={{
                WebkitTextStroke: "1.5px rgba(252, 93, 25, 0.4)",
                WebkitTextFillColor: "transparent",
              }}
            >
              08
            </div>
          </div>
          {/* Image  */}
          <div className="md:w-1/3 flex justify-center">
            <div className="relative p-4">
              <img
                src="/work/wr8.png"
                alt="Sign Up/Registration"
                className="rounded-lg  -z-10 absolute -bottom-20 -right-12"
              />
              <img
                src="/work/w8.png"
                alt="Sign Up/Registration"
                className="rounded-lg "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
