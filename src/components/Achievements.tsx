import React from "react";

const Achievements = () => {
  return (
    <section className="relative py-12 lg:py-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/achiev.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="muContainer relative z-10 container mx-auto p-8">
        <div className="items-center mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-10 text-left py-5">
          {/* Box 1 */}
          <div className="bg-white mx-auto bg-opacity-20 backdrop-filter backdrop-blur-lg w-[300px] h-[300px] p-12 rounded-[20px] border border-white shadow-inner flex flex-col justify-between items-start">
            <div className="flex justify-start w-full">
              <img
                src="/achievements/a1.png"
                alt="Icon 1"
                className="w-[72px] h-[72px]"
              />
            </div>

            <div className="flex-grow flex justify-start w-full my-6">
              <h3 className="text-5xl font-bold text-white">50K+</h3>
            </div>

            <div className="flex justify-start w-full">
              <p className="text-2xl text-white">Users</p>
            </div>

            {/* Light shadow effect inside from the right bottom */}
            <div className="absolute bottom-0 right-0 w-full h-full rounded-[30px] bg-gradient-to-br from-transparent to-[rgba(255,255,255,0.15)] pointer-events-none"></div>
          </div>

          {/* Box 2 */}
          <div className="bg-white mx-auto bg-opacity-20 backdrop-filter backdrop-blur-lg w-[300px] h-[300px] p-12 rounded-[20px] border border-white shadow-inner flex flex-col justify-between items-start">
            <div className="flex justify-start w-full">
              <img
                src="/achievements/a2.png"
                alt="Icon 2"
                className="w-[72px] h-[72px]"
              />
            </div>

            <div className="flex-grow flex justify-start w-full my-6">
              <h3 className="text-5xl font-bold text-white">50+</h3>
            </div>

            <div className="flex justify-start w-full">
              <p className="text-2xl text-white">Written Articles</p>
            </div>

            {/* Light shadow effect inside from the right bottom */}
            <div className="absolute bottom-0 right-0 w-full h-full rounded-[30px] bg-gradient-to-br from-transparent to-[rgba(255,255,255,0.15)] pointer-events-none"></div>
          </div>

          {/* Box 3 */}
          <div className="bg-white mx-auto bg-opacity-20 backdrop-filter backdrop-blur-lg w-[300px] h-[300px] p-12 rounded-[20px] border border-white shadow-inner flex flex-col justify-between items-start">
            <div className="flex justify-start w-full">
              <img
                src="/achievements/a3.png"
                alt="Icon 3"
                className="w-[72px] h-[72px]"
              />
            </div>

            <div className="flex-grow flex justify-start w-full my-6">
              <h3 className="text-5xl font-bold text-white">30K+</h3>
            </div>

            <div className="flex justify-start w-full">
              <p className="text-2xl text-white">Posts Publish</p>
            </div>

            {/* Light shadow effect inside from the right bottom */}
            <div className="absolute bottom-0 right-0 w-full h-full rounded-[30px] bg-gradient-to-br from-transparent to-[rgba(255,255,255,0.15)] pointer-events-none"></div>
          </div>

          {/* Box 4 */}
          <div className="bg-white mx-auto bg-opacity-20 backdrop-filter backdrop-blur-lg w-[300px] h-[300px] p-12 rounded-[20px] border border-white shadow-inner flex flex-col justify-between items-start">
            <div className="flex justify-start w-full">
              <img
                src="/achievements/a4.png"
                alt="Icon 4"
                className="w-[72px] h-[72px]"
              />
            </div>

            <div className="flex-grow flex justify-start w-full my-6">
              <h3 className="text-5xl font-bold text-white">10M</h3>
            </div>

            <div className="flex justify-start w-full">
              <p className="text-2xl text-white">Audio & Video Upload</p>
            </div>

            {/* Light shadow effect inside from the right bottom */}
            <div className="absolute bottom-0 right-0 w-full h-full rounded-[30px] bg-gradient-to-br from-transparent to-[rgba(255,255,255,0.15)] pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
