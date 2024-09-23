"use client";
import * as React from "react";
import { PieChart, Pie, Cell } from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import { MonthSwitcher } from "../month-switcher";
import ViewMore from "../ViewMore";

const data = [
  { name: "Total Post", value: 35, color: "#3457FF" }, // Blue
  { name: "Total View", value: 25, color: "#FF6384" }, // Pink
  { name: "Total Comments", value: 22, color: "#FFA500" }, // Orange
  { name: "Total React", value: 10, color: "#00C49F" }, // Green
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

const PostProgress = () => {
  return (
    <Card className="w-full p-6 h-auto grow">
      <CardContent className="flex flex-col lg:flex-row items-center  gap-4 lex justify-between">
        <div className="text-center lg:text-start">
          <h2 className="text-xl font-bold">Post</h2>
          <p className="text-sm text-gray-700">
            All post information is available here
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <ViewMore />
          <MonthSwitcher />
        </div>
      </CardContent>

      <hr className="mx-3" />

      {/* Pie Chart and Data Legend */}
      <CardContent className="pt-5 flex flex-col lg:flex-row items-center justify-around gap-8">
        {/* Data Legend */}
        <div className="flex flex-col gap-6">
          {data.map((item) => (
            <div key={item.name} className="flex items-center gap-8">
              <span
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: item.color }}
              ></span>
              <p className="text-gray-600">{item.name}</p>
              <span className="ml-auto text-sm font-medium">{item.value}</span>
            </div>
          ))}
        </div>

        {/* Pie Chart */}
        <div className="flex justify-center">
          <PieChart width={250} height={250}>
            <Pie
              data={data}
              cx={125}
              cy={125}
              labelLine={false}
              label={renderLabel}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </div>
      </CardContent>
    </Card>
  );
};

export default PostProgress;
