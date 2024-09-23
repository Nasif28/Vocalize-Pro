"use client";
import * as React from "react";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons"; // Replace this with your actual icons
import ViewMore from "../ViewMore";
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

import { Card, CardContent } from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { BrainCog, Coffee, HandCoins } from "lucide-react";
import { RiEyeLine } from "react-icons/ri";
import { BsCloudSun } from "react-icons/bs";

const Category = () => {
  return (
    <Card className="h-auto w-full p-6 rounded-md ">
      <CardContent className="flex flex-col lg:flex-row items-center  gap-4 lex justify-between">
        <div className="text-center lg:text-start">
          <h2 className="text-xl font-bold">Templates</h2>
          <p className="text-xs text-gray-700 py-2">
            From here you can see all templates
          </p>
        </div>
      </CardContent>

      <hr className="mx-3 border-t border-gray-300" />

      <CardContent className="py-5 flex flex-col gap-5">
        <div className="bg-blue-100 rounded-lg p-3 flex justify-between">
          <div className="flex gap-2 items-center">
            <HandCoins /> Total Post
          </div>
          <div className="text-[#355BFB] font-bold">445</div>
        </div>

        <div className="bg-blue-100 rounded-lg p-3 flex justify-between">
          <div className="flex gap-2 items-center">
            <Coffee /> View
          </div>
          <div className="text-[#355BFB] font-bold">120</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Category;
