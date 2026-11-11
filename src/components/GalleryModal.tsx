"use client";

import { useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryItem } from "@/lib/data";

export default function GalleryModal({
  items,
  index,
  onClose,
  onNavigate,
}: {
  items: GalleryItem[];
  index: number;
  onClose: () => void;
  onNavigate: (nextIndex: number) => void;
}) {
  const item = items[index];

  const go = useCallback(
    (dir: number) => {
      const next = (index + dir + items.length) % items.length;
      onNavigate(next);
    },
    [index, items.length, onNavigate],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [go, onClose]);

  if (!item) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-[rgba(8,8,14,0.92)] p-4 backdrop-blur-sm"
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-brand"
      >
        <X className="h-5 w-5" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          go(-1);
        }}
        aria-label="Previous image"
        className="absolute left-3 md:left-8 z-10 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-brand"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          go(1);
        }}
        aria-label="Next image"
        className="absolute right-3 md:right-8 z-10 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-brand"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-surface shadow-2xl"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.src}
          alt={item.title}
          className="max-h-[70vh] w-full object-contain bg-black/40"
        />
        <div className="p-5 md:p-6">
          <span className="inline-flex items-center rounded-full border border-brand/40 bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand">
            {item.category}
          </span>
          <h3 className="font-display text-xl md:text-2xl font-bold text-ink mt-3">
            {item.title}
          </h3>
          <p className="text-muted text-sm leading-relaxed mt-2">{item.description}</p>
          <p className="text-muted/60 text-xs mt-4">
            {index + 1} / {items.length}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
