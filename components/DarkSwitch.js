import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Monitor } from "lucide-react";

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const cycleTheme = () => {
    if (theme === "system") {
      setTheme("light");
    } else if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("system");
    }
  };

  const getIcon = () => {
    if (theme === "system") {
      return <Monitor className="h-4 w-4 text-gray-500 dark:text-gray-400" />;
    }
    if (resolvedTheme === "dark") {
      return <Moon className="h-4 w-4 text-gray-400" />;
    }
    return <Sun className="h-4 w-4 text-gray-600" />;
  };

  return (
    <button
      onClick={cycleTheme}
      className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-gray-200 dark:border-gray-800 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle theme"
      title={theme === "system" ? "Automático" : theme === "dark" ? "Oscuro" : "Claro"}
    >
      {getIcon()}
    </button>
  );
};

export default ThemeChanger;
