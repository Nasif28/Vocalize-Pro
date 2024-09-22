"use client";
import * as React from "react";
import { PieChart, Pie, Cell } from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon } from "lucide-react";
import { MonthSwitcher } from "../month-switcher";
import ViewMore from "../ViewMore";

const data = [
  { name: "Storage Full", value: 80, color: "#FFA500" }, // Blue
  { name: "Storage Empty", value: 20, color: "#00C49F" }, // Orange
];

const RADIAN = Math.PI / 180;
const renderLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      fontSize={10}
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Cloud = () => {
  return (
    <Card className="w-full p-6 h-[318px] grow ">
      <CardContent className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold">Cloud Storage</h2>
          <p className="text-sm text-gray-700 py-2">
            From here you can see all Full and empty cloud storage info
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <ViewMore />
        </div>
      </CardContent>

      <hr className="mx-3" />

      {/* Pie Chart and Data Legend */}
      <CardContent className="flex items-center justify-around">
        {/* Pie Chart */}
        <PieChart width={200} height={200}>
          <Pie
            data={data}
            cx={100}
            cy={100}
            labelLine={false}
            label={renderLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>

        {/* Data Legend */}
        <div className="flex flex-col gap-6">
          {data.map((item) => (
            <div key={item.name} className="flex items-center gap-10">
              <span
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: item.color }}
              ></span>
              <p className="text-gray-600">{item.name}</p>
              <span className="ml-auto text-sm font-medium">{item.value}%</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Cloud;
