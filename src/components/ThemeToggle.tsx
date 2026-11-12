"use client";

import { useEffect, useState } from "react";
import { Sun, Moon, Monitor } from "lucide-react";

type Pref = "light" | "dark" | "system";
const KEY = "theme";

function apply(pref: Pref) {
  const dark =
    pref === "dark" ||
    (pref === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);
  const root = document.documentElement;
  root.classList.toggle("dark", dark);
  root.setAttribute("data-theme", pref);
}

const options = [
  { key: "light" as const, label: "Light", Icon: Sun },
  { key: "dark" as const, label: "Dark", Icon: Moon },
  { key: "system" as const, label: "System", Icon: Monitor },
];

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const [pref, setPref] = useState<Pref>("system");

  useEffect(() => {
    const stored = (localStorage.getItem(KEY) as Pref) || "system";
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPref(stored);
    apply(stored);

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      if ((localStorage.getItem(KEY) || "system") === "system") apply("system");
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const choose = (p: Pref) => {
    setPref(p);
    localStorage.setItem(KEY, p);
    apply(p);
  };

  return (
    <div
      role="group"
      aria-label="Color theme"
      className={`flex items-center gap-0.5 rounded-full border border-line bg-surface-2 p-1 ${className}`}
    >
      {options.map(({ key, label, Icon }) => {
        const active = pref === key;
        return (
          <button
            key={key}
            type="button"
            onClick={() => choose(key)}
            aria-label={label}
            aria-pressed={active}
            title={label}
            className={`grid h-8 w-8 place-items-center rounded-full transition-colors ${
              active
                ? "bg-surface text-brand shadow-sm"
                : "text-muted hover:text-ink"
            }`}
          >
            <Icon className="h-[1.05rem] w-[1.05rem]" />
          </button>
        );
      })}
    </div>
  );
}
