import Image from "next/image";
import Link from "next/link";
import logo from "./../../../public/logo2.png";
import { NavMenu } from "../NavMenu";

import { ThemeSwitcher } from "../theme-switcher";
import { TbCrown } from "react-icons/tb";
import { LanguageSwitcher } from "../language-switcher";

import Account from "../Account";
import { useSession, signIn } from "next-auth/react";
import { Menu } from "lucide-react"; // Hamburger Icon
import { RiMenu3Fill } from "react-icons/ri";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"; // Import Sheet components
import { useState } from "react";
import { Button } from "../ui/button";
import NotificationIcon from "../notificationIcon";

const NavbarDashboard = () => {
  const { data: session } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="maxContainer py-5 bg-white dark:bg-slate-700 text-black dark:text-white">
      <div className="myContainer py-2 px-5 flex justify-between">
        {/* Left Side Logo  */}
        <Link href="/">
          <div className="flex items-center space-x-2">
            <Image src={logo} alt="Vocalize Pro Logo" width={32} height={32} />
            <div className="text-[26px] font-extrabold leading-none bg-gradient-to-r from-[#5B86F9] to-[#4A2BF1] bg-clip-text text-transparent">
              Transcripto
            </div>
          </div>
        </Link>

        {/* Main Menu */}
        <div className="hidden xl:flex items-center space-x-8">
          <NavMenu />
        </div>

        {/* Right SIde Menu */}
        <div className="hidden xl:flex items-center space-x-4">
          <button className="text-sm bg-gradient-to-r from-[#19C2DD] to-[#355BFB] text-white  py-2 px-3 flex items-center gap-[8px] rounded-full shadow-lg">
            <TbCrown className=" w-5 h-5" />
            Upgrade Now
          </button>

          {/* Language Switcher */}
          <LanguageSwitcher />

          {/* Dark Mode Toggle */}
          <ThemeSwitcher />

          {/* Notification Icon */}
          <NotificationIcon />

          {/* Account Info */}
          <Account />
        </div>

        {/* Mobile Menu Trigger (visible for screens smaller than xl) */}
        <div className="xl:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <button
                className="text-slate-800 dark:text-gray-200 focus:outline-none"
                aria-label="Toggle Menu"
                onClick={toggleMenu}
              >
                <RiMenu3Fill className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent className="bg-slate-200 dark:bg-slate-800">
              {/* Mobile Menu inside Sheet */}
              <div className="flex flex-col items-end space-y-4 mt-4 p-4">
                <button className="text-sm bg-gradient-to-r from-[#19C2DD] to-[#355BFB] text-white  py-2 px-3 flex items-center gap-[8px] rounded-full shadow-lg">
                  <TbCrown className=" w-5 h-5" />
                  Upgrade Now
                </button>

                {/* Add navigation links */}
                <NavMenu />
                {/* Login/Signup and Theme Switcher for mobile */}
                <div className="flex flex-col items-end space-y-4  pe-4">
                  <LanguageSwitcher />
                  <ThemeSwitcher />
                  <NotificationIcon />

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
      </div>
    </div>
  );
};

export default NavbarDashboard;
