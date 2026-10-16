import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Monitor } from "lucide-react";

const labels = { system: "Tema automático", light: "Tema claro", dark: "Tema oscuro" };
const next = { system: "light", light: "dark", dark: "system" };

const ThemeChanger = ({ className = "" }) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const Icon = !mounted ? Moon : theme === "system" ? Monitor : theme === "light" ? Sun : Moon;
  const current = mounted ? theme : "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(next[current] || "dark")}
      className={`grid h-9 w-9 place-items-center rounded-full text-night-muted transition-colors hover:bg-white/10 hover:text-night-ink ${className}`}
      aria-label={`${labels[current] || labels.dark}. Cambiar tema`}
      title={labels[current] || labels.dark}
    >
      <Icon className="h-4 w-4" strokeWidth={1.8} />
    </button>
  );
};

export default ThemeChanger;
