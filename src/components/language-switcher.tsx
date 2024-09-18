"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon } from "@radix-ui/react-icons";

export function LanguageSwitcher() {
  const [language, setLanguage] = React.useState<string>("English");

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    // You can add additional logic here, such as updating the app language
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost" // No border as requested
          className="flex items-center space-x-1"
        >
          <span>{language}</span>
          <ChevronDownIcon className="h-20px w-20px" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        variant="ghost"
        // className=" bg-transparent shadow-none border-none"
      >
        <DropdownMenuItem  onClick={() => handleLanguageChange("English")}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLanguageChange("বাংলা")}>
          বাংলা
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
