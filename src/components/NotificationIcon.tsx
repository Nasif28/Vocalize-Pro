import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";

const NotificationIcon = () => {
  return (
    <div className="px-4">
      <div className="relative">
        <span className="absolute top-[-5px] right-[-5px] bg-red-500 text-white text-[10px] w-[16px] h-[16px] flex items-center justify-center rounded-full">
          3
        </span>
        {/* Notification icon */}
        <IoNotificationsOutline className="w-[20px] h-[21px]" />
      </div>
    </div>
  );
};

export default NotificationIcon;
