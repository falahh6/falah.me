"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Switch } from "./ui/switch";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const id = "mode-toggle";

  return (
    <div>
      <div className="relative inline-grid h-6 grid-cols-[1fr_1fr] items-center text-sm font-medium">
        <Switch
          id={id}
          checked={theme === "light"}
          onCheckedChange={(value) => {
            setTheme(value ? "light" : "dark");
          }}
          className="peer border data-[state=checked]:bg-input/50 data-[state=unchecked]:bg-input/50 absolute inset-0 h-[inherit] w-auto [&_span]:h-full [&_span]:w-1/2 [&_span]:transition-transform [&_span]:duration-300 [&_span]:[transition-timing-function:cubic-bezier(0.16,1,0.3,1)] [&_span]:data-[state=checked]:translate-x-full [&_span]:data-[state=checked]:rtl:-translate-x-full"
        />
        <span className="peer-data-[state=checked]:text-muted-foreground/70 pointer-events-none relative ms-0.5 flex min-w-8 items-center justify-center text-center">
          <MoonIcon size={14} aria-hidden="true" />
        </span>
        <span className="peer-data-[state=unchecked]:text-muted-foreground/70 pointer-events-none relative me-0.5 flex min-w-8 items-center justify-center text-center">
          <SunIcon size={14} aria-hidden="true" />
        </span>
      </div>
    </div>
  );
}
