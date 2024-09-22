"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ThemeSwitcher } from "../theme-switcher";
import { LanguageSwitcher } from "../language-switcher";
import { NavMenu } from "../NavMenu";
import Account from "../Account";
import { useSession, signIn } from "next-auth/react";
import { CircleUser, Menu } from "lucide-react"; // Hamburger Icon
import { RiMenu3Fill } from "react-icons/ri";
import { GoPersonAdd } from "react-icons/go";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"; // Import Sheet components

export default function Navbar() {
  const { data: session } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full ">
      <nav className="myContainer mx-auto flex  items-center justify-between px-4 pt-4 md:px-8">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="Logo" className="h-32px w-32.25px" />
            <div className="text-[26px] pt-1 font-extrabold">Vocalizepro</div>
          </div>
        </Link>

        {/* Middle - Navigation Menu (hidden for mobile, visible for xl and larger) */}
        <div className="hidden xl:flex items-center space-x-8">
          <NavMenu />
        </div>

        {/* Right Side - Login, Signup, Language, Theme (visible for xl and larger) */}
        <div className="hidden xl:flex items-center space-x-1">
          {/* Language Switcher */}
          <LanguageSwitcher />

          {/* Dark Mode Toggle */}
          <ThemeSwitcher />

          {session ? (
            <Account />
          ) : (
            <>
              {/* <Link href="/auth" passHref>
                <Button variant="ghost">
                  <CircleUser className="h-5 w-5 mr-2" />
                  Login
                </Button>
              </Link> */}
              {/* Sign Up Button */}
              {/* <Link href="/auth" passHref>
                <Button
                  className="hidden md:inline-flex items-center justify-center rounded-2xl p-[22px_28px] text-[rgba(74,43,241,1)]"
                  variant="secondary"
                >
                  <GoPersonAdd className="h-5 w-5 mr-2" />
                  Sign Up
                </Button>
              </Link> */}
              <Button variant="ghost" onClick={() => signIn()}>
                <CircleUser className="h-4 w-4 mr-1" />
                Login
              </Button>
              <Button
                className="font-bold rounded-2xl p-[22px_28px] text-[rgba(74,43,241,1)]"
                variant="secondary"
              >
                <GoPersonAdd className="h-5 w-5 mr-2" />
                Sign Up
              </Button>
            </>
          )}
        </div>

        {/* Mobile Menu Trigger (visible for screens smaller than xl) */}
        <div className="xl:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <button
                className="text-gray-200 focus:outline-none"
                aria-label="Toggle Menu"
                onClick={toggleMenu}
              >
                <RiMenu3Fill className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent className="bg-slate-200 dark:bg-slate-800">
              {/* Mobile Menu inside Sheet */}
              <div className="flex flex-col items-end space-y-4 mt-4 p-4">
                {/* Add navigation links */}
                <NavMenu />
                {/* Login/Signup and Theme Switcher for mobile */}
                <div className="flex flex-col items-end space-y-4  pe-4">
                  <LanguageSwitcher />
                  <ThemeSwitcher />
                  {session ? (
                    <Account />
                  ) : (
                    <>
                      <Button variant="ghost" onClick={() => signIn()}>
                        Login
                      </Button>
                      <Button
                        className="inline-flex items-center justify-center rounded-2xl p-[22px_28px] text-[rgba(74,43,241,1)]"
                        variant="secondary"
                      >
                        Sign Up
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
