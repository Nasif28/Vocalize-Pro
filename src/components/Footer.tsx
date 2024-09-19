"use client";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useState } from "react";
import { FiPhone } from "react-icons/fi";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscription = () => {
    setEmail("");
    alert("Complete Subscription");
  };

  return (
    <div
      className="bg-[#120339] pt-32 relative"
      style={{ clipPath: "polygon(0 16%, 100% 0, 100% 100%, 0% 100%)" }}
    >
      {/* Background Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/footer/f1.png"
          alt="Icon 1"
          className="absolute bottom-20 left-0 "
        />
        <img
          src="/footer/f8.png"
          alt="Icon 2"
          className="absolute top-60 left-12"
        />
        <img
          src="/footer/f4.png"
          alt="Icon 3"
          className="absolute bottom-4 left-24 "
        />
        <img
          src="/footer/f2.png"
          alt="Icon 1"
          className="absolute top-16 right-28"
        />
        <img
          src="/footer/f3.png"
          alt="Icon 2"
          className="absolute top-24 right-28 "
        />
        <img
          src="/footer/f5.png"
          alt="Icon 3"
          className="absolute bottom-1/2 right-0"
        />
        <img
          src="/footer/f6.png"
          alt="Icon 1"
           className="absolute bottom-1/3 right-0"
        />
        <img
          src="/footer/f7.png"
          alt="Icon 1"
           className="absolute bottom-1/3 right-12"
        />
      </div>

      <div className="myContainer relative">
        {/* Newsletter Section */}
        <div className="relative  container mx-auto  py-16 text-center">
          <h2 className="text-5xl font-bold text-white py-4">
            Get More Update! Subscribe <br /> newsletter
          </h2>
          <p className="text-md text-[#FFFFFF99] mb-8">
            Join us today and experience the power of AI-powered <br />
            text creation for yourself!
          </p>

          <div className="flex justify-center items-center">
            <div className="relative w-[500px]">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="p-4 rounded-lg w-full outline-none pr-24"
              />
              <button
                onClick={handleSubscription}
                className="absolute right-0 top-0 bottom-0 m-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6"
              >
                <FaArrowRightLong />
              </button>
            </div>
          </div>
        </div>

        <hr className="border-t-1 border-[#FFFFFF29]" />

        {/* Footer Section */}
        <div className="  py-6 ">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12 text-left">
            <div>
              <h4 className="text-[#FFFFFFCC] font-bold mb-4 pb-8">
                Social Media
              </h4>

              <ul className="space-y-2 text-[#FFFFFF80] leading-[32px]">
                <li>Facebook</li>
                <li>LinkedIn</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>TikTok</li>
                <li>YouTube</li>
              </ul>
            </div>

            <div>
              <h4 className="text-[#FFFFFFCC] font-bold mb-4 pb-8">Links</h4>

              <ul className="space-y-2 text-[#FFFFFF80] leading-[32px]">
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Careers</li>
              </ul>
            </div>

            <div>
              <h4 className="text-[#FFFFFFCC] font-bold mb-4 pb-8">
                Resources
              </h4>

              <ul className="space-y-2 text-[#FFFFFF80] leading-[32px]">
                <li>AI Transcript</li>
                <li>AI Summaries</li>
                <li>AI Podcast</li>
                <li>AI Social Media Post</li>
                <li>AI Articles</li>
              </ul>
            </div>

            <div>
              <h4 className="text-[#FFFFFFCC] font-bold mb-4 pb-8">
                Need Help?
              </h4>

              <ul className="space-y-2 text-[#FFFFFF80] leading-[32px]">
                <li className="text-sm ">Call us directly</li>
                <li className="text-[#FFFFFFB2] pb-8 flex items-center">
                  <FiPhone className="mr-2" />
                  +123 456 76543
                </li>

                <li className="text-sm ">Call us directly</li>
                <li className="text-[#FFFFFFB2] flex items-center">
                  <FiPhone className="mr-2" />
                  +123 456 76543
                </li>
              </ul>
            </div>
          </div>

          <hr className="border-t-1 border-[#FFFFFF29]" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
