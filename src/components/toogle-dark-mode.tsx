import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // After mounting, we can show the children
  React.useEffect(() => setMounted(true), []);
  if (!mounted) {
    return null; // Prevents hydration mismatch
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="relative">
      <button
        onClick={toggleTheme}
        className="relative p-2 rounded-md hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
        aria-label="Toggle theme"
      >
        <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
        <Moon className="absolute top-2 left-2 h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
        <span className="sr-only">Toggle theme</span>
      </button>
    </div>
  );
}
