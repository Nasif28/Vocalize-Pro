"use client";

import { useState } from "react";
import { Switch } from "@headlessui/react";
import { Button } from "@/components/ui/button";
import { LuCheckCircle } from "react-icons/lu";
import { RiCoinsLine, RiVipCrownFill, RiRocketFill } from "react-icons/ri"; // Add different icons
import { BsCashCoin } from "react-icons/bs";
import { LiaCoinsSolid } from "react-icons/lia";
import { IoCashOutline } from "react-icons/io5";

const pricingPlans = {
  monthly: [
    {
      icon: <RiCoinsLine />,
      name: "Free Plan",
      price: "$0",
      features: [
        "3 post a month",
        "Unlimited Audio Transcribe",
        "Unlimited Video Transcribe",
        "Unlimited ChatGPT 3.5 Use",
        "100 Templates",
        "Generate summaries",
        "No Customer Support",
        "Up to 2 GB Storage",
        "Free up to 400 words",
      ],
      buttonText: "Sign up for free",
    },
    {
      icon: <BsCashCoin />,
      name: "Standard Plan",
      price: "$20",
      features: [
        "20 post a month",
        "Unlimited Audio Transcribe",
        "Unlimited Video Transcribe",
        "Unlimited ChatGPT 3.5 Use",
        "300 Templates",
        "Generate summaries",
        "Customer Support",
        "10 GB Storage",
        "Summaries 1000 words",
      ],
      buttonText: "Sign up for free",
      badge: "Best Schema",
    },
    {
      icon: <IoCashOutline />,
      name: "Advanced Plan",
      price: "$50",
      features: [
        "50 post a month",
        "Unlimited Audio Transcribe",
        "Unlimited Video Transcribe",
        "Unlimited ChatGPT 3.5 Use",
        "500 Templates",
        "Generate summaries",
        "Premium Customer Support",
        "15 GB Storage",
        "Summaries 3000 words",
      ],
      buttonText: "Sign up for free",
    },
    {
      icon: <LiaCoinsSolid />,
      name: "Pro Plan",
      price: "$100",
      features: [
        "Unlimited post a month",
        "Unlimited Audio Transcribe",
        "Unlimited Video Transcribe",
        "Unlimited ChatGPT 3.5 Use",
        "1000 Templates",
        "Generate summaries",
        "Premium Customer Support",
        "20 GB Storage",
        "Summaries unlimited words",
      ],
      buttonText: "Sign up for free",
    },
  ],
  yearly: [
    {
      icon: <RiCoinsLine />,
      name: "Free Plan",
      price: "$0",
      features: [
        "3 post a month",
        "Unlimited Audio Transcribe",
        "Unlimited Video Transcribe",
        "Unlimited ChatGPT 3.5 Use",
        "100 Templates",
        "Generate summaries",
        "No Customer Support",
        "Up to 2 GB Storage",
        "Free up to 400 words",
      ],
      buttonText: "Sign up for free",
    },
    {
      icon: <BsCashCoin />,
      name: "Standard Plan",
      price: "$200",
      features: [
        "20 post a month",
        "Unlimited Audio Transcribe",
        "Unlimited Video Transcribe",
        "Unlimited ChatGPT 3.5 Use",
        "300 Templates",
        "Generate summaries",
        "Customer Support",
        "10 GB Storage",
        "Summaries 1000 words",
      ],
      buttonText: "Sign up for free",
      badge: "Best Schema",
    },
    {
      icon: <IoCashOutline />,
      name: "Advanced Plan",
      price: "$500",
      features: [
        "50 post a month",
        "Unlimited Audio Transcribe",
        "Unlimited Video Transcribe",
        "Unlimited ChatGPT 3.5 Use",
        "500 Templates",
        "Generate summaries",
        "Premium Customer Support",
        "15 GB Storage",
        "Summaries 3000 words",
      ],
      buttonText: "Sign up for free",
    },
    {
      icon: <LiaCoinsSolid />,
      name: "Pro Plan",
      price: "$1000",
      features: [
        "Unlimited post a month",
        "Unlimited Audio Transcribe",
        "Unlimited Video Transcribe",
        "Unlimited ChatGPT 3.5 Use",
        "1000 Templates",
        "Generate summaries",
        "Premium Customer Support",
        "20 GB Storage",
        "Summaries unlimited words",
      ],
      buttonText: "Sign up for free",
    },
  ],
};

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section
      id="pricing"
      style={{
        background:
          "linear-gradient(103.67deg, rgba(11, 79, 211, 0.05) 2.48%, rgba(255, 104, 0, 0.05) 100%)",
      }}
    >
      <section className="myContainer relative">
        <img
          src="/s2.png"
          alt="Icon 1"
          className="absolute top-20 left-0 w-10 h-10 md:w-auto md:h-auto"
        />

        {/* Title and Switch */}
        <div className="text-center mb-8 pt-28">
          <h2 className="text-5xl text-center font-bold  ">Our Pricing Plan</h2>

          <p className="my-6 text-xl   text-gray-600">
            Affordable AI service for transforming audio and video{" "}
            <br className="hidden md:block" /> into various content formats.
          </p>

          {/* Switch Section */}
          <div className="flex justify-center items-center mb-16 rounded-full shadow-md border  py-3  px-10 max-w-min mx-auto">
            <span
              className={` font-bold  ${
                !isYearly
                  ? "text-[#4A2BF1]"
                  : "text-[#08212980] dark:text-[#b7e8f780]"
              }`}
            >
              Monthly
            </span>

            <Switch
              checked={isYearly}
              onChange={() => setIsYearly(!isYearly)}
              className={`relative inline-flex items-center h-8 w-16 rounded-full px-2 mx-5 ${
                isYearly ? "bg-gray-200" : "bg-[#4A2BF1]"
              }`}
            >
              <span
                className={` inline-block w-6 h-6 transform bg-white rounded-full transition-transform ${
                  isYearly ? "translate-x-6 bg-[#4A2BF1]" : "-translate-x-1"
                }`}
              />
            </Switch>

            <span
              className={`  font-bold ${
                isYearly
                  ? "text-[#4A2BF1]"
                  : "text-[#08212980] dark:text-[#b7e8f780]"
              }`}
            >
              Yearly
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 pb-28">
          {pricingPlans[isYearly ? "yearly" : "monthly"].map((plan, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-400 mx-1 rounded-xl shadow-lg  relative group"
            >
              <div className="relative bg-white dark:bg-slate-400 text-gray-900 rounded-t-xl transition-colors duration-300 group-hover:bg-[#4A2BF1]">
                <div className="pt-10 px-10 pb-5 relative ">
                  {plan.badge && (
                    <div className="relative">
                      <div className="absolute  top-5 -right-12 bg-orange-500 text-sm px-5 py-2 rounded-tl-lg rounded-tr-lg rounded-bl-lg shadow-lg">
                        <div className="text-white text-sm">
                          {plan.badge}

                          {/* Rotated Triangle on bottom-right side */}
                          <div className="Triangle z-[-1] absolute  w-0 h-0 transform rotate-[135deg] border-l-8 border-l-transparent border-t-8 border-t-[#D15A00] border-r-8 border-r-transparent -bottom-1.5 right-0"></div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Icon and Name */}
                  <div className="flex flex-col items-start space-y-2 ">
                    <div className="text-[#4A2BF1] text-5xl duration-300 group-hover:text-white">
                      {plan.icon}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 duration-300 group-hover:text-white pt-2">
                      {plan.name}
                    </h3>
                  </div>

                  <p className="mt-4 text-3xl font-bold  text-gray-900 duration-300 group-hover:text-white">
                    {plan.price}{" "}
                    <span className="text-sm  text-gray-500 duration-300 group-hover:text-white">
                      {isYearly ? "/year" : "/month"}
                    </span>
                  </p>
                </div>
              </div>
              <div className="h-2 bg-[#4A2BF1] transition-colors duration-300 group-hover:bg-blue-600"></div>

              <div className="pb-6 px-10">
                <ul className="mt-6 space-y-6 text-gray-600">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <LuCheckCircle className="w-6 h-6 text-[#4A2BF1] mr-2 " />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button className="rounded-xl mt-8 py-5 w-full group-hover:bg-[#4A2BF1] group-hover:text-white bg-white dark:bg-slate-400 text-[#4A2BF1] border group-hover:border-collapse border-[#4A2BF1]">
                  {plan.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Pricing;
