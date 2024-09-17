import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ThemeSwitcher } from "./theme-switcher";

export default function Navbar() {
  return (
    <header className="w-full border-b bg-white dark:bg-gray-900 dark:border-gray-800">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4 md:px-8">
        {/* Left Side - Logo */}
        <div className="text-lg font-bold">
          <Link href="/">My Logo</Link>
        </div>

        {/* Middle - Navigation Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-800 dark:text-gray-200">
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Right Side - Login, Signup, and Dark Mode Toggle */}
        <div className="flex items-center space-x-4">
          <Button className="hidden md:inline-block">Login</Button>
          <Button className="hidden md:inline-block" variant="outline">
            Sign Up
          </Button>

          {/* Dark Mode Toggle */}
          <ThemeSwitcher />
          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}
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
