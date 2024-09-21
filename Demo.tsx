import React from "react";
import { Command, CommandItem } from "@/components/ui/command";
// import {
//   LayoutDashboard,
//   SquareCode,
//   Plus,
//   Layers3,
//   FolderDown,
//   LayoutGrid,
//   Waypoints,
// } from "lucide-react";
// import { BsFillPersonFill } from "react-icons/bs";
import Link from "next/link";

const Sidebar = () => {
  return (
    <Command
      className="shadow-lg w-[248px] rounded-tl-lg p-7 text-white"
      style={{
        background: "linear-gradient(313.51deg, #19C2DD 3.52%, #355BFB 67.38%)",
        boxShadow: "0px 6px 10px 0px rgba(53, 91, 251, 0.3)",
      }}
    >
      {/* <CommandList> */}
      <CommandItem className="py-[13px] px-[16px] mb-3 gap-[10px] group bg-[#FFFFFF1A] border border-dashed border-[#FFFFFF80]">
        {/* <Plus className=" h-5 w-5 p-0.5 bg-white text-[#4A2BF1] rounded-full group-hover:bg-[#4A2BF1] group-hover:text-white" /> */}
        <Link
          href="/dashboard"
          className="text-[16px] font-medium group-hover:text-[#4A2BF1]"
        >
          Create New
        </Link>
      </CommandItem>

      <CommandItem className="py-[13px] px-[16px] mb-3 gap-[10px] group ">
        {/* <LayoutGrid className=" h-4 w-4 group-hover:text-[#4A2BF1]" /> */}
        <Link
          href="/dashboard"
          className="text-[16px] font-medium group-hover:text-[#4A2BF1]"
        >
          Dashboard
        </Link>
      </CommandItem>

      <CommandItem className="py-[13px] px-[16px] mb-3 gap-[10px] group ">
        {/* <SquareCode className=" h-5 w-5 group-hover:text-[#4A2BF1]" /> */}
        <Link
          href="/dashboard"
          className="text-[16px] font-medium group-hover:text-[#4A2BF1]"
        >
          Sources
        </Link>
      </CommandItem>

      <CommandItem className="py-[13px] px-[16px] mb-3 gap-[10px] group ">
        {/* <Layers3 className=" h-5 w-5 group-hover:text-[#4A2BF1]" /> */}
        <Link
          href="/dashboard"
          className="text-[16px] font-medium group-hover:text-[#4A2BF1]"
        >
          Cloud Storage
        </Link>
      </CommandItem>

      <CommandItem className="py-[13px] px-[16px] mb-3 gap-[10px] group ">
        {/* <BsFillPersonFill className=" h-5 w-5 group-hover:text-[#4A2BF1]" /> */}
        <Link
          href="/dashboard"
          className="text-[16px] font-medium group-hover:text-[#4A2BF1]"
        >
          Photo Edit
        </Link>
      </CommandItem>

      <CommandItem className="py-[13px] px-[16px] mb-3 gap-[10px] group ">
        {/* <FolderDown className=" h-5 w-5 group-hover:text-[#4A2BF1]" /> */}
        <Link
          href="/dashboard"
          className="text-[16px] font-medium group-hover:text-[#4A2BF1]"
        >
          Save Folder
        </Link>
      </CommandItem>

      <CommandItem className="py-[13px] px-[16px] mb-3 gap-[10px] group ">
        {/* <LayoutDashboard className=" h-5 w-5 group-hover:text-[#4A2BF1]" /> */}
        <Link
          href="/dashboard"
          className="text-[16px] font-medium group-hover:text-[#4A2BF1]"
        >
          Template
        </Link>
      </CommandItem>

      <CommandItem className="py-[13px] px-[16px] mb-3 gap-[10px] group ">
        {/* <Waypoints className=" h-5 w-5 group-hover:text-[#4A2BF1]" /> */}
        <Link
          href="/dashboard"
          className="text-[16px] font-medium group-hover:text-[#4A2BF1]"
        >
          Social Media
        </Link>
      </CommandItem>

      {/* </CommandList> */}
    </Command>
  );
};

export default Sidebar;
