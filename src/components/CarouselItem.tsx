"use client";

import React from "react";
import { cn } from "@/lib/utils";

const CarouselItem = () => {
  function Card({
    logo,
    title,
    description,
  }: {
    logo: string;
    title: string;
    description: string;
  }) {
    return (
      <div className="p-8 py-12 bg-white rounded-lg shadow-lg text-gray-800 mb-6 text-left">
        <img src={logo} alt={title} className="w-[63px] h-[67px]" />
        <h3 className="text-3xl font-bold my-4">{title}</h3>
        <p className="text-sm  leading-6">{description}</p>
      </div>
    );
  }

  return (
    <div className="myContainer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 px-5">
      {/* First column */}
      <div>
        <Card
          logo="/solution/s1.png"
          title="Generate Summary"
          description="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual"
        />
        <Card
          logo="/solution/s2.png"
          title="Articles"
          description="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual"
        />
      </div>

      {/* Second column */}
      <div className="pt-16">
        <Card
          logo="/solution/s3.png"
          title="Transcription Text"
          description="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual"
        />
        <Card
          logo="/solution/s4.png"
          title="Twitter Post"
          description="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual"
        />
      </div>

      {/* Third column */}
      <div className="pt-32">
        <Card
          logo="/solution/s5.png"
          title="Facebook Post"
          description="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual"
        />
        <Card
          logo="/solution/s6.png"
          title="YouTube Post"
          description="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual"
        />
      </div>

      {/* Fourth column */}
      <div className="pt-48">
        <Card
          logo="/solution/s7.png"
          title="LinkedIn Post"
          description="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual"
        />
        <Card
          logo="/solution/s8.png"
          title="Instagram Post"
          description="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual"
        />
      </div>
    </div>
  );
};

export default CarouselItem;
