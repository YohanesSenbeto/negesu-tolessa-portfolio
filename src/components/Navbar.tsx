"use client";

import { useEffect, useState, type MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { LogoMark } from "@/components/BrandIcons";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Career", href: "#career" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const NAV_OFFSET = 84;

function goToSection(href: string) {
  const el = document.querySelector(href) as HTMLElement | null;
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
  window.scrollTo({ top: Math.max(y, 0), behavior: "smooth" });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onNavClick =
    (href: string) => (e: MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const wasOpen = open;
      setOpen(false);
      if (wasOpen) setTimeout(() => goToSection(href), 220);
      else goToSection(href);
    };

  return (
    <motion.header
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-bg/85 backdrop-blur-xl shadow-[0_10px_30px_-18px_rgba(23,23,31,0.18)]"
          : "bg-transparent"
      }`}
    >
      <nav className="container-x h-[76px] flex items-center justify-between">
        <a href="#home" onClick={onNavClick("#home")} className="flex items-center gap-2 group">
          <LogoMark className="h-9 w-9" uid="nt-logo-nav" />
          <span className="font-display text-2xl font-extrabold tracking-tight text-ink">
            NegTol<span className="text-brand">.</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={onNavClick(l.href)}
              className="relative text-sm font-medium text-muted hover:text-ink transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:bg-brand after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={onNavClick("#contact")} className="btn-primary px-5 py-2.5 text-sm">
            Hire Me <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <button
          className="md:hidden text-ink p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="md:hidden overflow-hidden border-b border-line bg-bg/95 backdrop-blur-xl"
          >
            <div className="container-x py-5 flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={onNavClick(l.href)}
                  className="text-muted hover:text-ink py-2.5 border-b border-line/60 last:border-0"
                >
                  {l.label}
                </a>
              ))}
              <a href="#contact" onClick={onNavClick("#contact")} className="btn-primary mt-3 self-start">
                Hire Me <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
