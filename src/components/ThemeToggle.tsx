"use client";

import { useEffect, useRef, useState } from "react";
import { Sun, Moon, Monitor, Check } from "lucide-react";

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
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stored = (localStorage.getItem(KEY) as Pref) || "system";
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPref(stored);
    apply(stored);

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      if ((localStorage.getItem(KEY) || "system") === "system") apply("system");
    };
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    mq.addEventListener("change", onChange);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      mq.removeEventListener("change", onChange);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const choose = (p: Pref) => {
    setPref(p);
    localStorage.setItem(KEY, p);
    apply(p);
    setOpen(false);
  };

  const current = options.find((o) => o.key === pref) ?? options[2];
  const CurrentIcon = current.Icon;

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={`Theme: ${current.label}`}
        title="Theme"
        className="grid h-9 w-9 place-items-center rounded-full border border-line bg-surface text-muted transition-colors hover:border-brand hover:text-brand"
      >
        <CurrentIcon className="h-[1.05rem] w-[1.05rem]" />
      </button>

      {open && (
        <div
          role="menu"
          aria-label="Color theme"
          className="absolute right-0 z-50 mt-2 w-40 overflow-hidden rounded-xl border border-line bg-surface p-1 shadow-[0_20px_44px_-20px_rgba(0,0,0,0.55)]"
        >
          {options.map(({ key, label, Icon }) => {
            const active = pref === key;
            return (
              <button
                key={key}
                role="menuitemradio"
                aria-checked={active}
                onClick={() => choose(key)}
                className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition-colors ${
                  active
                    ? "bg-surface-2 font-semibold text-brand"
                    : "text-ink hover:bg-surface-2"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="flex-1 text-left">{label}</span>
                {active && <Check className="h-3.5 w-3.5" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
