"use client";
import React, { useState } from "react";
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
import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";

const Account = () => {
  const { data: session } = useSession();
  // const handleSignOut = () => {
  //   const [isLoggedIn, setIsLoggedIn] = useState(false);
  //   const router = useRouter();

  //   // Clear the user from localStorage
  //   localStorage.removeItem("user");
  //   setIsLoggedIn(false);
  //   router.push("/auth");
  // };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none">
        <Avatar>
          <AvatarImage src="/profile.png" alt="@shadcn" />
          <AvatarFallback className="text-black">BT</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent  align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href="">Profile</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/dashboard">Dashboard</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="" onClick={() => signOut()}>
            Logout
              {/* <Button variant="ghost" onClick={() => signOut()}>
                Sign Out
              </Button> */}
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Account;
