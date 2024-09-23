"use client";
import * as React from "react";
import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import ViewMore from "../ViewMore";

const Summary = () => {
  const data = [
    {
      name: "Used Words",
      value: 100,
      fill: "#3457FF",
    },
  ];

  const totalWords = 1000;
  const usedWords = 578;
  const percentageUsed = (usedWords / totalWords) * 100;

  return (
    <Card className="h-auto w-full p-6 rounded-md ">
      <CardContent className="flex flex-col lg:flex-row items-center  gap-4 lex justify-between">
        <div className="text-center lg:text-start">
          <h2 className="text-xl font-bold">Summary</h2>
          <p className="text-sm text-gray-700">
            You can see the words used and remaining here.
          </p>
        </div>
        <ViewMore />
      </CardContent>

      <hr className="mx-3" />

      <CardContent className="flex items-center justify-around p-2">
        {/* Radial Bar Chart */}
        <RadialBarChart
          width={270}
          height={270}
          innerRadius="80%"
          outerRadius="80%"
          data={data}
          startAngle={90}
          endAngle={450}
          barSize={40}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            dataKey="value"
            tick={false}
          />
          <RadialBar
            background
            dataKey="value"
            cornerRadius={10}
            fill="#3457FF"
            clockWise
          />
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="font-bold text-3xl fill-current text-blue-600"
          >
            {`${percentageUsed.toFixed(0)}%`}
          </text>
        </RadialBarChart>

        {/* Legend and Data */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col justify-between text-gray-600">
            <p>Free transcribe</p>
            <span className=" text-2xl font-semibold text-gray-900">
              {totalWords} <span className="text-sm">(Words)</span>
            </span>
          </div>

          <div className="flex flex-col justify-between text-gray-600">
            <p>Used so far</p>
            <span className=" text-2xl font-semibold text-blue-600">
              {usedWords} <span className="text-sm text-gray-600">(Words)</span>
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Summary;
