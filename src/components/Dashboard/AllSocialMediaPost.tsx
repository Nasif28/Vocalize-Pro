import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components//ui/card";
import { Separator } from "../ui/separator";
import ViewMore from "../ViewMore";
import { BsCloudSun } from "react-icons/bs";
import { RiEyeLine } from "react-icons/ri";
import { FaRegComments, FaRegSmile } from "react-icons/fa";

const AllSocialMediaPost = () => {
  return (
    <Card className="w-full p-6">
      <CardContent className="flex justify-between ">
        <div>
          <h2 className="text-xl font-bold">All Social Media Post</h2>
          <p className="text-sm text-gray-700">
            From here you can see all connected social media
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <ViewMore />
        </div>
      </CardContent>

      <hr className="mx-3" />

      <CardContent className="pt-6 flex flex-col  justify-between gap-7">
        {/* First Row  */}
        <div className=" flex  justify-between gap-7">
          <div className="w-full p-6 bg-blue-100  rounded-lg  flex flex-col space-y-3">
            <h2 className="text-xl font-semibold">Facebook</h2>
            <Separator className=" bg-slate-400 " />

            <div className="flex flex-col gap-3">
              <div className="bg-white rounded-lg p-3 flex justify-between">
                <div className="flex  gap-2 items-center">
                  <BsCloudSun /> Total Post
                </div>
                <div className="text-[#355BFB] font-bold">120</div>
              </div>

              <div className="bg-white rounded-lg p-3 flex justify-between">
                <div className="flex  gap-2 items-center">
                  <RiEyeLine /> View
                </div>
                <div className="text-[#355BFB] font-bold">67.5k</div>
              </div>

              <div className="bg-white rounded-lg p-3 flex justify-between">
                <div className="flex  gap-2 items-center">
                  <FaRegComments /> Comments
                </div>
                <div className="text-[#355BFB] font-bold">3k</div>
              </div>

              <div className="bg-white rounded-lg p-3 flex justify-between">
                <div className="flex  gap-2 items-center">
                  <FaRegSmile /> Reacts
                </div>
                <div className="text-[#355BFB] font-bold">1.5k</div>
              </div>
            </div>
          </div>
          <div className="w-full p-6 bg-blue-100  rounded-lg  flex flex-col space-y-3">
            <h2 className="text-xl font-semibold">LinkedIn</h2>
            <Separator className=" bg-slate-400 " />

            <div className="flex flex-col gap-3">
              <div className="bg-white rounded-lg p-3 flex justify-between">
                <div className="flex  gap-2 items-center">
                  <BsCloudSun /> Total Post
                </div>
                <div className="text-[#355BFB] font-bold">120</div>
              </div>

              <div className="bg-white rounded-lg p-3 flex justify-between">
                <div className="flex  gap-2 items-center">
                  <RiEyeLine /> View
                </div>
                <div className="text-[#355BFB] font-bold">67.5k</div>
              </div>

              <div className="bg-white rounded-lg p-3 flex justify-between">
                <div className="flex  gap-2 items-center">
                  <FaRegComments /> Comments
                </div>
                <div className="text-[#355BFB] font-bold">3k</div>
              </div>

              <div className="bg-white rounded-lg p-3 flex justify-between">
                <div className="flex  gap-2 items-center">
                  <FaRegSmile /> Reacts
                </div>
                <div className="text-[#355BFB] font-bold">1.5k</div>
              </div>
            </div>
          </div>
          <div className="w-full p-6 bg-blue-100  rounded-lg  flex flex-col space-y-3">
            <h2 className="text-xl font-semibold">Twitter</h2>
            <Separator className=" bg-slate-400 " />

            <div className="flex flex-col gap-3">
              <div className="bg-white rounded-lg p-3 flex justify-between">
                <div className="flex  gap-2 items-center">
                  <BsCloudSun /> Total Post
                </div>
                <div className="text-[#355BFB] font-bold">120</div>
              </div>

              <div className="bg-white rounded-lg p-3 flex justify-between">
                <div className="flex  gap-2 items-center">
                  <RiEyeLine /> View
                </div>
                <div className="text-[#355BFB] font-bold">67.5k</div>
              </div>

              <div className="bg-white rounded-lg p-3 flex justify-between">
                <div className="flex  gap-2 items-center">
                  <FaRegComments /> Comments
                </div>
                <div className="text-[#355BFB] font-bold">3k</div>
              </div>

              <div className="bg-white rounded-lg p-3 flex justify-between">
                <div className="flex  gap-2 items-center">
                  <FaRegSmile /> Reacts
                </div>
                <div className="text-[#355BFB] font-bold">1.5k</div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row  */}
        <div className=" flex  justify-between gap-7">
          <div className="w-full p-6 bg-blue-100  rounded-lg  flex flex-col space-y-3">
            <h2 className="text-xl font-semibold">Instagram</h2>
            <Separator className=" bg-slate-400 " />

            <div className="flex flex-col gap-3">
              <div className="bg-white rounded-lg p-3 flex justify-between">
                <div className="flex  gap-2 items-center">
                  <BsCloudSun /> Total Post
                </div>
                <div className="text-[#355BFB] font-bold">120</div>
              </div>

              <div className="bg-white rounded-lg p-3 flex justify-between">
                <div className="flex  gap-2 items-center">
                  <RiEyeLine /> View
                </div>
                <div className="text-[#355BFB] font-bold">67.5k</div>
              </div>

              <div className="bg-white rounded-lg p-3 flex justify-between">
                <div className="flex  gap-2 items-center">
                  <FaRegComments /> Comments
                </div>
                <div className="text-[#355BFB] font-bold">3k</div>
              </div>

              <div className="bg-white rounded-lg p-3 flex justify-between">
                <div className="flex  gap-2 items-center">
                  <FaRegSmile /> Reacts
                </div>
                <div className="text-[#355BFB] font-bold">1.5k</div>
              </div>
            </div>
          </div>
          <div className="w-full p-6 bg-blue-100  rounded-lg  flex flex-col space-y-3">
            <h2 className="text-xl font-semibold">TikTok</h2>
            <Separator className=" bg-slate-400 " />

            <div className="flex flex-col gap-3">
              <div className="bg-white rounded-lg p-3 flex justify-between">
                <div className="flex  gap-2 items-center">
                  <BsCloudSun /> Total Post
                </div>
                <div className="text-[#355BFB] font-bold">120</div>
              </div>

              <div className="bg-white rounded-lg p-3 flex justify-between">
                <div className="flex  gap-2 items-center">
                  <RiEyeLine /> View
                </div>
                <div className="text-[#355BFB] font-bold">67.5k</div>
              </div>

              <div className="bg-white rounded-lg p-3 flex justify-between">
                <div className="flex  gap-2 items-center">
                  <FaRegComments /> Comments
                </div>
                <div className="text-[#355BFB] font-bold">3k</div>
              </div>

              <div className="bg-white rounded-lg p-3 flex justify-between">
                <div className="flex  gap-2 items-center">
                  <FaRegSmile /> Reacts
                </div>
                <div className="text-[#355BFB] font-bold">1.5k</div>
              </div>
            </div>
          </div>
          <div className="w-full p-6 bg-blue-100  rounded-lg  flex flex-col space-y-3">
            <h2 className="text-xl font-semibold">YouTube</h2>
            <Separator className=" bg-slate-400 " />

            <div className="flex flex-col gap-3">
              <div className="bg-white rounded-lg p-3 flex justify-between">
                <div className="flex  gap-2 items-center">
                  <BsCloudSun /> Total Post
                </div>
                <div className="text-[#355BFB] font-bold">120</div>
              </div>

              <div className="bg-white rounded-lg p-3 flex justify-between">
                <div className="flex  gap-2 items-center">
                  <RiEyeLine /> View
                </div>
                <div className="text-[#355BFB] font-bold">67.5k</div>
              </div>

              <div className="bg-white rounded-lg p-3 flex justify-between">
                <div className="flex  gap-2 items-center">
                  <FaRegComments /> Comments
                </div>
                <div className="text-[#355BFB] font-bold">3k</div>
              </div>

              <div className="bg-white rounded-lg p-3 flex justify-between">
                <div className="flex  gap-2 items-center">
                  <FaRegSmile /> Reacts
                </div>
                <div className="text-[#355BFB] font-bold">1.5k</div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AllSocialMediaPost;
