"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = React.useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
    console.log(resolvedTheme);
  }, [resolvedTheme, setTheme]);

  if (!mounted) {
    return (
      <Button
        variant="outline"
        className="cursor-pointer"
        size="icon"
        aria-label="Toggle theme"
      >
        <Moon className="size-5" /> {/* Default fallback */}
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  return (
    <Button
      variant="outline"
      className="cursor-pointer"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle theme"
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