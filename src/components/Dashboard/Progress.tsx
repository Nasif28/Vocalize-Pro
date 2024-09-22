"use client";
import * as React from "react";
import { PolarAngleAxis, RadialBar, RadialBarChart } from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import { MonthSwitcher } from "../month-switcher";

const Progress = () => {
  const data = [
    {
      name: "Social Media Post",
      value: 50,
      fill: "#3457FF", // Blue color
    },
    {
      name: "Blog Post",
      value: 20,
      fill: "#FFA500", // Orange color
    },
    {
      name: "Article",
      value: 30,
      fill: "#00C49F", // Green color
    },
    {
      name: "Generated summary",
      value: 40,
      fill: "#FF6384", // Pink color
    },
  ];

  return (
    <Card className="h-[366px]  w-full p-6 rounded-md grow ">
      <CardContent className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold">Overall Progress</h2>
          <p className="text-sm text-gray-700">
            From here you can see your overall progress
          </p>
        </div>
        <MonthSwitcher />
      </CardContent>

      {/* <Separator className="mx-10" /> */}
      <hr className="mx-3" />

      <CardContent className="flex items-center justify-around ">
        {/* Radial Bar Chart */}
        <RadialBarChart
          width={270}
          height={270}
          innerRadius="20%"
          outerRadius="100%"
          data={data}
          startAngle={90}
          endAngle={450}
          barSize={14}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            dataKey="value"
            angleAxisId={0}
            tick={false}
          />
          <RadialBar background dataKey="value" cornerRadius={5} />
        </RadialBarChart>

        {/* Legend and Data */}
        <div className="flex flex-col gap-6">
          {data.map((item) => (
            <div key={item.name} className="flex items-center gap-5">
              <span
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: item.fill }}
              ></span>
              <p className="text-gray-600">{item.name}</p>
              <span className="ml-auto text-sm font-medium">{item.value}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Progress;
