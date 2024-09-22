"use client";

import React from "react";
import { cn } from "@/lib/utils";

const CarouselItem = () => {
  function Card({
    deco,
    logo,
    title,
    description,
    borderColor,
  }: {
    deco: string;
    logo: string;
    title: string;
    description: string;
    borderColor: string; // Add borderColor prop
  }) {
    return (
      <div
        className="relative p-10 bg-white dark:bg-slate-900 rounded-xl shadow-lg text-gray-800 mb-6 text-left"
        style={{ borderBottom: `10px solid ${borderColor}` }} // Apply the border color
      >
        <img
          src={deco}
          alt={title}
          className="absolute bottom-20 right-6 w-10 h-10 md:w-auto md:h-auto"
        />
        <img src={logo} alt={title} className="w-[63px] h-[67px]" />
        <h3 className="text-3xl font-bold mt-8">{title}</h3>
        <p className="text-lg leading-6 mt-6">{description}</p>
      </div>
    );
  }

  return (
    <div className="myContainer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 px-5">
      {/* First column */}
      <div>
        <Card
          deco="/content/deco1.png"
          logo="/content/con1.png"
          title="Apple Podcast"
          description="Google Drive is a cloud storage service developed by Google that allows users to store, share, and access files..."
          borderColor="#19C1DD" // Set the border color
        />
      </div>

      {/* Second column */}
      <div className="md:pt-16">
        <Card
          deco="/content/deco2.png"
          logo="/content/con2.png"
          title="Google Drive Folder"
          description="Google Drive is a cloud storage service developed by Google that allows users to store, share, and access files..."
          borderColor="#FC5D19" // Set a different border color
        />
      </div>

      {/* Third column */}
      <div>
        <Card
          deco="/content/deco3.png"
          logo="/content/con3.png"
          title="Zoom Recording"
          description="Google Drive is a cloud storage service developed by Google that allows users to store, share, and access files..."
          borderColor="#F2C94C" // Set another border color
        />
      </div>

      {/* Fourth column */}
      <div className="md:pt-16">
        <Card
          deco="/content/deco4.png"
          logo="/content/con4.png"
          title="Zoom Recording"
          description="Google Drive is a cloud storage service developed by Google that allows users to store, share, and access files..."
          borderColor="#EF5DA8" // Set another border color
        />
      </div>
    </div>
  );
};

export default CarouselItem;
