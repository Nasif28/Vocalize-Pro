"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ThemeSwitcher } from "./theme-switcher";
import { LanguageSwitcher } from "./language-switcher";
import { NavMenu } from "./Dashboard/Navbar2";
import { CircleUser } from "lucide-react";
import { GoPersonAdd } from "react-icons/go";
import { useRouter } from "next/navigation";
import Account from "./Account";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();


  return (
    <header>
      <nav className="myContainer mx-auto flex items-center justify-between px-4 pt-4 md:px-8">
        <Link href="/">
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="Logo" className="h-32px w-32.25px" />
            <div className="text-[26px] pt-1 font-extrabold  ">Vocalizepro</div>
          </div>
        </Link>

        {/* Middle - Navigation Menu */}
        <NavMenu />

        {/* Right Side - Login, Signup, and Dark Mode Toggle */}
        <div className="flex items-center space-x-4">
          {/* Language Switcher */}
          <LanguageSwitcher />

          {/* Dark Mode Toggle */}
          <ThemeSwitcher />

          {session ? (
            <>
              {/* <p>Signed in as {session.user.email}</p> */}
              {/* <Button variant="ghost" onClick={() => signOut()}>
                Sign Out
              </Button> */}
              <Account />
            </>
          ) : (
            <>
              <Button variant="ghost" onClick={() => signIn()}>
                Login
              </Button>
              <Button
                className="hidden md:inline-flex items-center justify-center rounded-2xl p-[22px_28px] text-[rgba(74,43,241,1)]"
                variant="secondary"
              >
                Sign Up
              </Button>
            </>
          )}
        </div>

        {/* Mobile Menu Toggle (hamburger menu) */}
        <div className="md:hidden">
          <button
            className="text-gray-800 dark:text-gray-200 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
