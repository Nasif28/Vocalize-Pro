import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ThemeSwitcher } from "./theme-switcher";
import { LanguageSwitcher } from "./language-switcher";
import { PersonIcon } from "@radix-ui/react-icons";
// import { PersonIcon, PersonPlusIcon } from "@radix-ui/react-icons"; // Replace with correct import for your icon library
// import Logo from "@/public/logo.png";

export default function Navbar() {
  return (
    <header>
      <nav className="myContainer mx-auto flex items-center justify-between px-4 pt-4 md:px-8">
        <Link href="/">
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="Logo" className="h-32px w-32.25px" />
            <div className="text-[22px] font-extrabold leading-[27.83px] ">
              Vocalizepro
            </div>
          </div>
        </Link>

        {/* Middle - Navigation Menu */}
        <ul className="hidden md:flex space-x-12 opacity-100">
          <li>
            <Link
              href="/home"
              className="text-[16px] leading-[20.24px]   pb-1 hover: border-b-2 border-transparent hover:border-current transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/how-it-works"
              className="text-[16px] leading-[20.24px] pb-1 hover:border-b-2 border-transparent hover:border-current transition-colors duration-300"
            >
              How It Works
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-[16px] leading-[20.24px] pb-1 hover:border-b-2 border-transparent hover:border-current transition-colors duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/pricing"
              className="text-[16px] leading-[20.24px] pb-1 hover:border-b-2 border-transparent hover:border-current transition-colors duration-300"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-[16px] leading-[20.24px] pb-1 hover:border-b-2 border-transparent hover:border-current transition-colors duration-300"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/faq"
              className="text-[16px] leading-[20.24px] pb-1 hover:border-b-2 border-transparent hover:border-current transition-colors duration-300"
            >
              FAQ
            </Link>
          </li>
          <li>
            <Link
              href="/schedule"
              className="text-[16px] leading-[20.24px] pb-1 hover:border-b-2 border-transparent hover:border-current transition-colors duration-300"
            >
              Schedule
            </Link>
          </li>
        </ul>

        {/* Right Side - Login, Signup, and Dark Mode Toggle */}
        <div className="flex items-center space-x-4">
          {/* Language Switcher */}
          <LanguageSwitcher />

          {/* Dark Mode Toggle */}
          <ThemeSwitcher />

          <div className="flex space-x-4">
            <Button variant="ghost">
              <PersonIcon className="h-5 w-5 mr-2" />
              Login
            </Button>
            <Button
              className="hidden md:inline-flex items-center justify-center rounded-[12px] p-[20px_30px] text-[rgba(74,43,241,1)]"
              variant="secondary"
            >
              <PersonIcon className="h-5 w-5" />
              Sign Up
            </Button>
          </div>
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
