import React from "react";
import { Card, CardContent } from "@/components//ui/card";
import { Separator } from "../ui/separator";
import ViewMore from "../ViewMore";
import { BsCloudSun } from "react-icons/bs";
import { RiEyeLine } from "react-icons/ri";
import { FaRegComments, FaRegSmile } from "react-icons/fa";

const socialMediaData = [
  {
    platform: "Facebook",
    posts: 120,
    views: "67.5k",
    comments: "3k",
    reacts: "1.5k",
  },
  {
    platform: "LinkedIn",
    posts: 120,
    views: "67.5k",
    comments: "3k",
    reacts: "1.5k",
  },
  {
    platform: "Twitter",
    posts: 120,
    views: "67.5k",
    comments: "3k",
    reacts: "1.5k",
  },
  {
    platform: "Instagram",
    posts: 120,
    views: "67.5k",
    comments: "3k",
    reacts: "1.5k",
  },
  {
    platform: "TikTok",
    posts: 120,
    views: "67.5k",
    comments: "3k",
    reacts: "1.5k",
  },
  {
    platform: "YouTube",
    posts: 120,
    views: "67.5k",
    comments: "3k",
    reacts: "1.5k",
  },
];

const AllSocialMediaPost = () => {
  return (
    <Card className="w-full p-6">
      <CardContent className="flex flex-col lg:flex-row items-center gap-4 justify-between">
        <div className="text-center lg:text-start">
          <h2 className="text-xl font-bold">All Social Media Post</h2>
          <p className="text-sm text-gray-700">
            From here you can see all connected social media
          </p>
        </div>

        <ViewMore />
      </CardContent>

      <hr className="mx-3" />

      <CardContent className="pt-6 flex flex-col gap-7">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-7">
          {socialMediaData.map((social, index) => (
            <div
              key={index}
              className="w-full p-6 bg-blue-100 dark:bg-slate-900 rounded-lg flex flex-col space-y-3"
            >
              <h2 className="text-xl font-semibold">{social.platform}</h2>
              <Separator className="bg-slate-400" />
              <div className="flex flex-col gap-3">
                <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-3 flex justify-between">
                  <div className="flex gap-2 items-center">
                    <BsCloudSun /> Total Post
                  </div>
                  <div className="text-[#355BFB] font-bold">{social.posts}</div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-3 flex justify-between">
                  <div className="flex gap-2 items-center">
                    <RiEyeLine /> View
                  </div>
                  <div className="text-[#355BFB] font-bold">{social.views}</div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-3 flex justify-between">
                  <div className="flex gap-2 items-center">
                    <FaRegComments /> Comments
                  </div>
                  <div className="text-[#355BFB] font-bold">
                    {social.comments}
                  </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-3 flex justify-between">
                  <div className="flex gap-2 items-center">
                    <FaRegSmile /> Reacts
                  </div>
                  <div className="text-[#355BFB] font-bold">
                    {social.reacts}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AllSocialMediaPost;
