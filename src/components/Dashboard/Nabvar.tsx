import Image from "next/image";
import Link from "next/link";
import logo from "./../../../public/logo2.png";
import { NavMenu } from "./Navbar2";

import { ThemeSwitcher } from "../theme-switcher";
import { TbCrown } from "react-icons/tb";
import { LanguageSwitcher } from "../language-switcher";
import { IoNotificationsOutline } from "react-icons/io5";
import Account from "../Account";

const NavbarDashboard = () => {
  return (
    <div className="maxContainer py-5 bg-white dark:bg-slate-700 text-black dark:text-white">
      <div className="myContainer   py-2 px-5 flex justify-between">
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
        <NavMenu />

        {/* Right SIde Menu */}
        <div className="flex items-center">
          <button className="bg-gradient-to-r from-[#19C2DD] to-[#355BFB] text-white  py-3 px-4 flex items-center gap-[10px] rounded-full shadow-lg">
            <TbCrown className=" w-6 h-6" />
            Upgrade Now
          </button>

          {/* Language Switcher */}
          <LanguageSwitcher />

          {/* Dark Mode Toggle */}
          <ThemeSwitcher />

          {/* Notification Icon */}
          <div className="px-4">
            <div className="relative">
              <span className="absolute top-[-5px] right-[-5px] bg-red-500 text-white text-[10px] w-[16px] h-[16px] flex items-center justify-center rounded-full">
                3
              </span>
              {/* Notification icon */}
              <IoNotificationsOutline className="w-[20px] h-[21px]" />
            </div>
          </div>

          {/* Account Info */}
          <Account />
        </div>
      </div>
    </div>
  );
};

export default NavbarDashboard;
