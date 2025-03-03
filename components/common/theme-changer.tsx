"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  // Memoize the onClick handler
  const toggleTheme = React.useCallback(() => {
    setTheme(resolvedTheme == "dark" ? "light" : "dark");
    console.log(resolvedTheme);
  }, [resolvedTheme, setTheme]);

  return (
    <Button
      variant="outline"
      className="cursor-pointer"
      size="icon"
      onClick={toggleTheme} // Use the memoized handler
      aria-label="Toggle theme" // Added aria-label for accessibility
    >
      {resolvedTheme === "dark" ? (
        <Sun className="size-5" />
      ) : (
        <Moon className="size-5" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
