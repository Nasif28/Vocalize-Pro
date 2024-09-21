import React from "react";
import { Command, CommandItem, CommandList } from "@/components/ui/command";
import {
  LayoutDashboard,
  SquareCode,
  Plus,
  Layers3,
  FolderDown,
  LayoutGrid,
  Waypoints,
  SquareUserRound,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { BsFillPersonFill } from "react-icons/bs";
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
      <CommandList>
        <CommandItem className="py-[13px] px-[16px] mb-3 gap-[10px] group bg-[#FFFFFF1A] border border-dashed border-[#FFFFFF80]">
          <Plus className=" h-5 w-5 p-0.5 bg-white text-[#4A2BF1] rounded-full group-hover:bg-[#4A2BF1] group-hover:text-white" />
          <Link
            href=""
            className="text-[16px] font-medium group-hover:text-[#4A2BF1]"
          >
            Create New
          </Link>
        </CommandItem>

        <CommandItem className="py-[13px] px-[16px] mb-3 gap-[10px] group ">
          <LayoutGrid className=" h-4 w-4 group-hover:text-[#4A2BF1]" />
          <Link
            href="/dashboard"
            className="text-[16px] font-medium group-hover:text-[#4A2BF1]"
          >
            Dashboard
          </Link>
        </CommandItem>

        <CommandItem className="py-[13px] px-[16px] mb-3 gap-[10px] group ">
          <SquareCode className=" h-5 w-5 group-hover:text-[#4A2BF1]" />
          <Link
            href="/dashboard"
            className="text-[16px] font-medium group-hover:text-[#4A2BF1]"
          >
            Sources
          </Link>
        </CommandItem>

        <CommandItem className="py-[13px] px-[16px] mb-3 gap-[10px] group ">
          <Layers3 className=" h-5 w-5 group-hover:text-[#4A2BF1]" />
          <Link
            href="/dashboard"
            className="text-[16px] font-medium group-hover:text-[#4A2BF1]"
          >
            Cloud Storage
          </Link>
        </CommandItem>

        <CommandItem className="py-[13px] px-[16px] mb-3 gap-[10px] group ">
          <BsFillPersonFill className=" h-5 w-5 group-hover:text-[#4A2BF1]" />
          <Link
            href="/dashboard"
            className="text-[16px] font-medium group-hover:text-[#4A2BF1]"
          >
            Photo Edit
          </Link>
        </CommandItem>

        <CommandItem className="py-[13px] px-[16px] mb-3 gap-[10px] group ">
          <FolderDown className=" h-5 w-5 group-hover:text-[#4A2BF1]" />
          <Link
            href="/dashboard"
            className="text-[16px] font-medium group-hover:text-[#4A2BF1]"
          >
            Save Folder
          </Link>
        </CommandItem>

        <CommandItem className="py-[13px] px-[16px] mb-3 gap-[10px] group ">
          <LayoutDashboard className=" h-5 w-5 group-hover:text-[#4A2BF1]" />
          <Link
            href="/dashboard"
            className="text-[16px] font-medium group-hover:text-[#4A2BF1]"
          >
            Template
          </Link>
        </CommandItem>

        {/* Dropdown Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger className="focus:outline-none w-full">
            <CommandItem className="py-[13px] px-[16px] mb-3 gap-[10px] group ">
              <Waypoints className="h-5 w-5 group-hover:text-[#4A2BF1]" />
              <span className="text-[16px] font-medium group-hover:text-[#4A2BF1]">
                Social
              </span>
            </CommandItem>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            className="bg-white  rounded-lg shadow-lg pb-0 "
            align="start"
          >
            <DropdownMenuItem className=" focus:outline-none group ">
              <CommandItem className="py-[13px]   gap-[10px] group ">
                <Facebook className="h-5 w-5 group-hover:text-[#4A2BF1]" />
                <Link
                  href="/dashboard"
                  className="text-[16px] font-medium group-hover:text-[#4A2BF1] pe-6"
                >
                  Facebook
                </Link>
              </CommandItem>
            </DropdownMenuItem>

            <DropdownMenuItem className="w-full focus:outline-none group">
              <CommandItem className="py-[13px]   gap-[10px] group">
                <Twitter className="h-5 w-5 group-hover:text-[#4A2BF1]" />
                <Link
                  href="/dashboard"
                  className="text-[16px] font-medium group-hover:text-[#4A2BF1] pe-6"
                >
                  Twitter
                </Link>
              </CommandItem>
            </DropdownMenuItem>

            <DropdownMenuItem className="w-full focus:outline-none group ">
              <CommandItem className="py-[13px]   gap-[10px] group ">
                <Instagram className="h-5 w-5 group-hover:text-[#4A2BF1]" />
                <Link
                  href="/dashboard"
                  className="text-[16px] font-medium group-hover:text-[#4A2BF1] pe-6"
                >
                  Instagram
                </Link>
              </CommandItem>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <CommandItem className="py-[13px] px-[16px] mb-3 gap-[10px] group ">
          <SquareUserRound className=" h-5 w-5 group-hover:text-[#4A2BF1]" />
          <Link
            href="/dashboard"
            className="text-[16px] font-medium group-hover:text-[#4A2BF1]"
          >
            Referral
          </Link>
        </CommandItem>
      </CommandList>
    </Command>
  );
};

export default Sidebar;
