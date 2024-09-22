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
          className="flex items-center space-x-2"
        >
          <span>{language}</span>
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        variant="ghost"
        // className=" bg-transparent shadow-none border-none"
      >
        <DropdownMenuItem onClick={() => handleLanguageChange("English")}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLanguageChange("বাংলা")}>
          বাংলা
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
