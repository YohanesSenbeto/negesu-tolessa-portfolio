"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { X, ExternalLink, CheckCircle2 } from "lucide-react";
import { GithubIcon, TelegramIcon } from "@/components/BrandIcons";
import type { Project } from "@/lib/data";

export const categoryColors: Record<string, string> = {
  "Full-Stack": "from-violet-500 to-purple-600",
  Enterprise: "from-cyan-500 to-blue-600",
  GIS: "from-emerald-500 to-teal-600",
  CLI: "from-orange-500 to-red-600",
  Creative: "from-pink-500 to-rose-600",
  AI: "from-indigo-500 to-purple-600",
};

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.name}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-default bg-background shadow-2xl shadow-[#7c5cff]/20"
      >
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Close project details"
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/50 text-white backdrop-blur-sm hover:bg-black/70 transition-colors"
        >
          <X className="h-4 w-4" />
        </button>

        {project.image && (
          <div className="relative aspect-[16/8] bg-surface-2 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <span
              className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${categoryColors[project.category]} shadow-lg`}
            >
              {project.category}
            </span>
          </div>
        )}

        <div className="p-6 md:p-8">
          {!project.image && (
            <span
              className={`inline-block px-2.5 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${categoryColors[project.category]} shadow-lg mb-3`}
            >
              {project.category}
            </span>
          )}

          <span className="inline-block px-2 py-0.5 rounded-full text-xs border border-subtle text-secondary mb-2">
            {project.highlight}
          </span>

          <h4 className="text-2xl font-bold mb-3 pr-10">{project.name}</h4>

          <p className="text-secondary leading-relaxed mb-6">
            {project.longDescription}
          </p>

          <h5 className="text-sm font-semibold text-primary mb-3">
            Key Features
          </h5>
          <ul className="space-y-2 mb-6">
            {project.features.map((f) => (
              <li
                key={f}
                className="text-sm text-secondary leading-relaxed flex items-start gap-2"
              >
                <CheckCircle2 className="h-4 w-4 text-[#00e5ff] shrink-0 mt-0.5" />
                {f}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 rounded text-xs font-mono bg-surface text-muted border border-subtle"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border border-subtle text-secondary hover:text-primary hover:border-default transition-colors"
              >
                <GithubIcon className="h-3.5 w-3.5" /> Code
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full text-black bg-gradient-to-r from-[#7c5cff] to-[#00e5ff] hover:scale-105 transition-transform shadow-lg shadow-[#7c5cff]/20"
              >
                <ExternalLink className="h-3.5 w-3.5" /> Live
              </a>
            )}
            {project.telegram && (
              <a
                href={project.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border border-subtle text-secondary hover:text-primary hover:border-default transition-colors"
              >
                <TelegramIcon className="h-3.5 w-3.5" /> Bot
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
