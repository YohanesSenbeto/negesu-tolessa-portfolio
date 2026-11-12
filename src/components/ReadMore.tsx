"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

type ReadMoreProps = {
  children: ReactNode;
  /** Number of lines to show when collapsed on mobile. */
  lines?: number;
  /** Classes for the outer wrapper (margins, width, etc.). */
  className?: string;
  /** Classes applied to the text element (size/color/leading). */
  textClassName?: string;
  moreLabel?: string;
  lessLabel?: string;
};

/**
 * Collapses long text to `lines` on small screens and reveals a
 * "Read more" toggle only when the text actually overflows. Desktop is
 * always fully expanded and never shows the toggle.
 */
export default function ReadMore({
  children,
  lines = 3,
  className = "",
  textClassName = "",
  moreLabel = "Read more",
  lessLabel = "Show less",
}: ReadMoreProps) {
  const [expanded, setExpanded] = useState(false);
  const [overflows, setOverflows] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  // Track mobile breakpoint (< md).
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const sync = () => setIsMobile(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  // Measure overflow via ResizeObserver (fires on clamp, resize, font load).
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => {
      setOverflows(el.scrollHeight - el.clientHeight > 2);
    };
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [isMobile, expanded, children]);

  const clamp = isMobile && !expanded;
  const showToggle = isMobile && (overflows || expanded);

  return (
    <div className={className}>
      <p
        ref={ref}
        className={textClassName}
        style={
          clamp
            ? {
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: lines,
                overflow: "hidden",
              }
            : undefined
        }
      >
        {children}
      </p>
      {showToggle && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-brand hover:underline"
        >
          {expanded ? lessLabel : moreLabel}
          <ChevronDown
            className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`}
          />
        </button>
      )}
    </div>
  );
}
