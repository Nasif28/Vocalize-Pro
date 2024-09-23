"use client";
import * as React from "react";
import ViewMore from "../ViewMore";
import { Card, CardContent } from "@/components/ui/card";
import { BrainCog } from "lucide-react";

const Category = () => {
  return (
    <Card className="h-auto w-full p-6 rounded-md ">
    <CardContent className="flex flex-col lg:flex-row items-center  gap-4 lex justify-between">
      <div className="text-center lg:text-start">
          <h2 className="text-xl font-bold">Category</h2>
          <p className="text-xs text-gray-700 py-2">
            From here you can see post category
          </p>
        </div>
      </CardContent>

      <hr className="mx-3 border-t border-gray-300" />

      <CardContent className="grid grid-cols-2 gap-4 rounded-lg pt-4 w-full max-w-4xl mx-auto">
        <div className="bg-blue-50 p-3 rounded-lg flex flex-col space-y-2">
          <div
            className="flex items-center justify-center w-10 h-10 p-3 rounded-full"
            style={{
              background:
                "linear-gradient(115.87deg, #19C2DD 0.99%, #355BFB 78.16%)",
              boxShadow: "0px 6px 10px 0px rgba(53, 91, 251, 0.3)",
            }}
          >
            <BrainCog className="w-6 h-6 text-white" />
          </div>
          <p className="text-gray-500 text-sm">Automation Flow</p>
          <h3 className="text-xl font-semibold">200</h3>
        </div>

        {/* Score Point Card */}
        <div className="bg-blue-50 p-3 rounded-lg flex flex-col space-y-2">
          <div
            className="flex items-center justify-center w-10 h-10 p-3 rounded-full"
            style={{
              background:
                "linear-gradient(115.87deg, #19C2DD 0.99%, #355BFB 78.16%)",
              boxShadow: "0px 6px 10px 0px rgba(53, 91, 251, 0.3)",
            }}
          >
            <BrainCog className="w-6 h-6 text-white" />
          </div>
          <p className="text-gray-500 text-sm">Score Point</p>
          <h3 className="text-xl font-semibold">80</h3>
        </div>
      </CardContent>
    </Card>
  );
};

export default Category;
