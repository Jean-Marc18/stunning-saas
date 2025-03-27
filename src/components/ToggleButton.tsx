"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";

const ToggleButton = () => {
  const { setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    if (isDarkMode) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
    setIsDarkMode(!isDarkMode);
  };
  return (
    <Button className="w-0 px-5 py-5" onClick={toggleDarkMode}>
      {isDarkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
    </Button>
  );
};

export default ToggleButton;
