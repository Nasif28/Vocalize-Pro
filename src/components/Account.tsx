import React from 'react'
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

const Account = () => {
  return (
    <DropdownMenu>
    <DropdownMenuTrigger className="focus:outline-none">
      <Avatar>
        <AvatarImage src="/profile.png" alt="@shadcn" />
        <AvatarFallback className="text-black">BT</AvatarFallback>
      </Avatar>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <Link href="">Profile</Link>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Link href="/">Logout</Link>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
  )
}

export default Account