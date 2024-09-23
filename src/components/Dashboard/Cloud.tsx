"use client";
import * as React from "react";
import { PieChart, Pie, Cell } from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import ViewMore from "../ViewMore";

const data = [
  { name: "Storage Full", value: 80, color: "#FFA500" }, // Orange
  { name: "Storage Empty", value: 20, color: "#00C49F" }, // Green
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
    <Card className="h-auto w-full p-6 rounded-md ">
      <CardContent className="flex flex-col lg:flex-row items-center  gap-4 lex justify-between">
        <div className="text-center lg:text-start">
          <h2 className="text-xl font-bold">Cloud Storage</h2>
          <p className="text-sm text-gray-700">
            From here you can see all full and empty cloud storage info
          </p>
        </div>

        <ViewMore />
      </CardContent>

      <hr className="mx-3" />

      {/* Pie Chart and Data Legend */}
      <CardContent className="flex flex-col lg:flex-row items-center justify-around gap-6">
        {/* Pie Chart */}
        <PieChart width={180} height={180}>
          <Pie
            data={data}
            cx={90}
            cy={90}
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
        <div className="flex flex-col gap-4">
          {data.map((item) => (
            <div key={item.name} className="flex items-center gap-5">
              <span
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: item.color }}
              ></span>
              <p className="text-gray-600 text-sm lg:text-base">{item.name}</p>
              <span className="ml-auto text-sm lg:text-base font-medium">
                {item.value}%
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Cloud;
