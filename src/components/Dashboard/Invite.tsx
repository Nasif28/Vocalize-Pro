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
import { BrainCog } from "lucide-react";

const Invite = () => {
  const chartData = [
    { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  ];

  const chartConfig = {
    visitors: {
      label: "Visitors",
    },
    safari: {
      label: "Safari",
      color: "#3457FF",
    },
  } satisfies ChartConfig;

  return (
    <Card className="h-auto w-full p-6 rounded-md ">
      <CardContent className="flex flex-col lg:flex-row items-center  gap-4 lex justify-between">
        <div className="text-center lg:text-start">
          <h2 className="text-xl font-bold">Invite Friends</h2>
          <p className="text-sm text-gray-700">
            From here you can see all refer friends
          </p>
        </div>

        <ViewMore />
      </CardContent>

      <hr className="mx-3 border-t border-gray-300" />

      <CardContent className="grid grid-cols-2 gap-4 rounded-lg py-4 w-full max-w-4xl mx-auto">
        <div className="bg-blue-50 p-4 rounded-lg flex flex-col space-y-2">
          <div
            className="flex items-center justify-center w-14 h-14 p-3 rounded-full"
            style={{
              background:
                "linear-gradient(115.87deg, #19C2DD 0.99%, #355BFB 78.16%)",
              boxShadow: "0px 6px 10px 0px rgba(53, 91, 251, 0.3)",
            }}
          >
            <BrainCog className="w-6 h-6 text-white" />
          </div>
          <p className="text-gray-500 text-lg">Total Invite Friends</p>
          <h3 className="text-2xl font-semibold">200</h3>
        </div>

        {/* Score Point Card */}
        <div className="bg-blue-50 p-4 rounded-lg flex items-center space-x-4">
          <div className="flex flex-col space-y-2">
            <div
              className="flex items-center justify-center w-14 h-14 p-3 rounded-full"
              style={{
                background:
                  "linear-gradient(115.87deg, #19C2DD 0.99%, #355BFB 78.16%)",
                boxShadow: "0px 6px 10px 0px rgba(53, 91, 251, 0.3)",
              }}
            >
              <BrainCog className="w-6 h-6 text-white" />
            </div>
            <p className="text-gray-500 text-lg">Score Point</p>
            <h3 className="text-2xl font-semibold">80</h3>
          </div>

          <CardContent>
            <ChartContainer
              config={chartConfig}
              className="mx-auto aspect-square"
            >
              <RadialBarChart
                data={chartData}
                startAngle={0}
                endAngle={250}
                innerRadius={40}
                outerRadius={60}
              >
                <PolarGrid
                  gridType="circle"
                  radialLines={false}
                  stroke="none"
                  className="first:fill-muted"
                  polarRadius={[86, 74]}
                />
                <RadialBar dataKey="visitors" background cornerRadius={10} />
                <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                  <Label
                    content={({ viewBox }) => {
                      if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                        return (
                          <text
                            x={viewBox.cx}
                            y={viewBox.cy}
                            textAnchor="middle"
                            dominantBaseline="middle"
                          >
                            <tspan
                              x={viewBox.cx}
                              y={viewBox.cy}
                              className="fill-foreground text-2xl font-bold"
                            >
                              {chartData[0].visitors.toLocaleString()}
                            </tspan>
                            <tspan
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) + 20}
                              className="fill-muted-foreground"
                            >
                              Visitors
                            </tspan>
                          </text>
                        );
                      }
                    }}
                  />
                </PolarRadiusAxis>
              </RadialBarChart>
            </ChartContainer>
          </CardContent>
        </div>
      </CardContent>
    </Card>
  );
};

export default Invite;
