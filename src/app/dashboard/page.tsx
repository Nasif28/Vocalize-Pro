import Progress from "@/components/Dashboard/Progress";
import Summary from "@/components/Dashboard/Summary";
import Post from "@/components/Dashboard/Post";
import React from "react";
import SocialMedia from "@/components/Dashboard/SocialMedia";
import Posted from "@/components/Dashboard/Posted";
import Cloud from "@/components/Dashboard/Cloud";
import Invite from "@/components/Dashboard/Invite";
import { Separator } from "@/components/ui/separator";
import AllSocialMediaPost from "@/components/Dashboard/AllSocialMediaPost";
import Category from "@/components/Dashboard/Category";
import Templates from "@/components/Dashboard/Templates";

const Dashboard = () => {
  return (
    <div>
      <h3 className="font-bold text-xl text-[#0B2A46]">Dashboard</h3>
      <Separator className="my-3" />

      {/* Grid Container for Dashboard Sections */}
      <div className="grid gap-7 mt-4">
        {/* First row - Progress and Post */}
        <div className="grid grid-cols-1 gap-7 xl:grid-cols-2">
          <Progress />
          <Post />
        </div>

        {/* Second row - Social Media and Summary */}
        <div className="grid grid-cols-1 gap-7 xl:grid-cols-2">
          <SocialMedia />
          <Summary />
        </div>

        {/* Social Media Section */}
        <div className="w-full">
          <AllSocialMediaPost />
        </div>

        {/* Posted Section */}
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-2 xl:grid-cols-3">
          <Posted />
          <Category />
          <Templates />
        </div>

        {/* Cloud and Invite Section */}
        <div className="grid grid-cols-1 gap-7  xl:grid-cols-2">
          <Cloud />
          <Invite />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
