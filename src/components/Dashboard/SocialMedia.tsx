"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ViewMore from "../ViewMore";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTiktok,
  FaInstagram,
  FaYoutube,
  FaFacebookSquare,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Separator } from "../ui/separator";

export default function SocialMedia() {
  return (
    <Card className="h-auto w-full p-6 rounded-md ">
      <CardContent className="flex flex-col lg:flex-row items-center  gap-4 lex justify-between">
        <div className="text-center lg:text-start">
          <h2 className="text-xl font-bold">Social Media</h2>
          <p className="text-sm text-gray-700">
            From here you can see all connected social media
          </p>
        </div>

        <ViewMore />
      </CardContent>

      <hr className="mx-3" />

      <CardContent className="pt-6 flex justify-between">
        <div className="w-full p-6 bg-blue-100  rounded-lg  flex flex-col space-y-5">
          <div>
            <div>
              <h2 className="text-xl font-semibold">Connected Social Media</h2>
            </div>
            <div className="flex pt-5 gap-6">
              <div
                className="flex items-center justify-center w-14 h-14 p-3 rounded-full"
                style={{
                  background:
                    "linear-gradient(115.87deg, rgba(25, 194, 221, 0.2) 0.99%, rgba(53, 91, 251, 0.2) 78.16%)",
                }}
              >
                <FaInstagram className="text-[#355BFB]" />
              </div>

              <div
                className="flex items-center justify-center w-14 h-14 p-3 rounded-full"
                style={{
                  background:
                    "linear-gradient(115.87deg, rgba(25, 194, 221, 0.2) 0.99%, rgba(53, 91, 251, 0.2) 78.16%)",
                }}
              >
                <FaTiktok className="text-[#355BFB]" />
              </div>

              <div
                className="flex items-center justify-center w-14 h-14 p-3 rounded-full"
                style={{
                  background:
                    "linear-gradient(115.87deg, rgba(25, 194, 221, 0.2) 0.99%, rgba(53, 91, 251, 0.2) 78.16%)",
                }}
              >
                <FaFacebookF className="text-[#355BFB]" />
              </div>

              <div
                className="flex items-center justify-center w-14 h-14 p-3 rounded-full"
                style={{
                  background:
                    "linear-gradient(115.87deg, rgba(25, 194, 221, 0.2) 0.99%, rgba(53, 91, 251, 0.2) 78.16%)",
                }}
              >
                <FaLinkedinIn className="text-[#355BFB]" />
              </div>
            </div>
          </div>

          <Separator className=" bg-slate-400 " />

          <div>
            <div>
              <h2 className="text-xl font-semibold">
                Not Connected Social Media
              </h2>
            </div>

            <div className="flex pt-5 gap-6">
              <div
                className="flex items-center justify-center w-14 h-14 p-3 rounded-full"
                style={{
                  background:
                    "linear-gradient(115.87deg, #19C2DD 0.99%, #355BFB 78.16%)", // Updated background
                  boxShadow: "0px 6px 10px 0px rgba(53, 91, 251, 0.3)", // Apply box-shadow
                }}
              >
                <FaXTwitter className="text-[#ffffff]" />
              </div>
              <div
                className="flex items-center justify-center w-14 h-14 p-3 rounded-full"
                style={{
                  background:
                    "linear-gradient(115.87deg, #19C2DD 0.99%, #355BFB 78.16%)", // Updated background
                  boxShadow: "0px 6px 10px 0px rgba(53, 91, 251, 0.3)", // Apply box-shadow
                }}
              >
                <FaYoutube className="text-[#ff0c0c]" />
              </div>
              <div
                className="flex items-center justify-center w-14 h-14 p-3 rounded-full"
                style={{
                  background:
                    "linear-gradient(115.87deg, #19C2DD 0.99%, #355BFB 78.16%)", // Updated background
                  boxShadow: "0px 6px 10px 0px rgba(53, 91, 251, 0.3)", // Apply box-shadow
                }}
              >
                <FaFacebookSquare className="text-[#ffffff]" />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
