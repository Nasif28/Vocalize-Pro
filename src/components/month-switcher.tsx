"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export function MonthSwitcher() {
  const [month, setMonth] = React.useState<string>("This Month");

  const handleMonthChange = (mon: string) => {
    setMonth(mon);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className="flex items-center border-2 text-gray-700 bg-gray-100 px-4 py-5 rounded-md border-gray-300 text-sm font-medium"
      >
        <Button variant="ghost" className="flex items-center space-x-2">
          <span>{month}</span>
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent align="end" variant="ghost">
        <DropdownMenuItem onClick={() => handleMonthChange("January")}>
          January
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleMonthChange("February")}>
          February
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleMonthChange("March")}>
          March
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleMonthChange("April")}>
          April
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleMonthChange("May")}>
          May
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleMonthChange("June")}>
          June
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleMonthChange("July")}>
          July
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleMonthChange("August")}>
          August
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleMonthChange("September")}>
          September
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleMonthChange("October")}>
          October
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleMonthChange("November")}>
          November
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleMonthChange("December")}>
          December
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
