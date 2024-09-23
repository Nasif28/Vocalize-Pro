"use client";
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const PostedOn = () => {
  return (
    <Card className="h-auto w-full p-6 rounded-md ">
      <CardContent className="flex flex-col lg:flex-row items-center  gap-4 lex justify-between">
        <div className="text-center lg:text-start">
          <h2 className="text-xl font-bold">Posted On</h2>
          <p className="text-sm text-gray-700">
            From here you can see who posted
          </p>
        </div>
      </CardContent>

      <hr className="mx-3 border-t border-gray-300" />

      {/* Progress Bar Section */}
      <CardContent className="grid gap-5 py-6">
        {/* Virtual Assistance Posting */}
        <div className="grid auto-rows-min gap-2">
          <div className="flex justify-between items-center">
            <p className="text-sm font-medium text-gray-600">
              Posted by Virtual Assistance
            </p>
            <p className="text-sm font-semibold text-gray-800">65</p>
          </div>

          <Progress
            value={65}
            aria-label="65% increase"
            className="h-4 w-full"
          />
        </div>

        {/* Users Posting */}
        <div className="grid auto-rows-min gap-2">
          <div className="flex justify-between items-center">
            <p className="text-sm font-medium text-gray-600">Posted by Users</p>
            <p className="text-sm font-semibold text-gray-800">35</p>
          </div>

          <Progress
            value={35}
            aria-label="35% increase"
            className="h-4 w-full"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default PostedOn;
