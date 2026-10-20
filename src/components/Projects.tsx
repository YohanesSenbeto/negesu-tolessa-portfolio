"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Maximize2 } from "lucide-react";
import { GithubIcon, TelegramIcon } from "@/components/BrandIcons";
import ProjectModal, { categoryColors } from "@/components/ProjectModal";
import { projects, type Project } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const filters = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const visible =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-24 px-5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-sm font-mono text-[#7c5cff] mb-2">03 / PROJECTS</h2>
          <h3 className="text-3xl md:text-4xl font-bold">Things I&apos;ve Built</h3>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          variants={fadeUp}
          className="flex flex-wrap gap-2 mb-10"
        >
          {filters.map((f) => {
            const active = filter === f;
            const count =
              f === "All"
                ? projects.length
                : projects.filter((p) => p.category === f).length;
            return (
              <button
                key={f}
                onClick={() => setFilter(f)}
                aria-pressed={active}
                className={`px-4 py-1.5 rounded-full text-sm transition-all ${
                  active
                    ? "font-semibold text-black bg-gradient-to-r from-[#7c5cff] to-[#00e5ff] shadow-lg shadow-[#7c5cff]/20"
                    : "border border-subtle text-secondary hover:text-primary hover:border-default bg-surface"
                }`}
              >
                {f}
                <span
                  className={`ml-1.5 text-xs ${active ? "text-black/60" : "text-muted"}`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Project grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visible.map((p, i) => (
            <motion.article
              key={p.name}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              variants={fadeUp}
              onClick={() => setSelected(p)}
              className="group relative flex flex-col rounded-2xl border border-subtle bg-surface overflow-hidden hover:border-default hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#7c5cff]/10 transition-all duration-300 cursor-pointer"
            >
              {p.image ? (
                <div className="relative aspect-[16/10] bg-surface-2 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span
                    className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${categoryColors[p.category]} shadow-lg`}
                  >
                    {p.category}
                  </span>
                  <span className="absolute top-3 right-3 p-2 rounded-full bg-black/50 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="h-3.5 w-3.5" />
                  </span>
                </div>
              ) : (
                <div className="relative p-5 pb-0">
                  <span
                    className={`inline-block px-2.5 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${categoryColors[p.category]} shadow-lg`}
                  >
                    {p.category}
                  </span>
                </div>
              )}

              <div className="flex flex-col flex-1 p-5">
                <span className="inline-block w-fit px-2 py-0.5 rounded-full text-xs border border-subtle text-secondary mb-2">
                  {p.highlight}
                </span>

                <h4 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  {p.name}
                </h4>
                <p className="text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tech.slice(0, 5).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-xs font-mono bg-surface text-muted border border-subtle"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 mt-auto">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelected(p);
                    }}
                    className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border border-subtle text-secondary hover:text-primary hover:border-default transition-colors"
                  >
                    <Maximize2 className="h-3.5 w-3.5" /> Details
                  </button>
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border border-subtle text-secondary hover:text-primary hover:border-default transition-colors"
                    >
                      <GithubIcon className="h-3.5 w-3.5" /> Code
                    </a>
                  )}
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full text-black bg-gradient-to-r from-[#7c5cff] to-[#00e5ff] hover:scale-105 transition-transform shadow-lg shadow-[#7c5cff]/20"
                    >
                      <ExternalLink className="h-3.5 w-3.5" /> Live
                    </a>
                  )}
                  {p.telegram && (
                    <a
                      href={p.telegram}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border border-subtle text-secondary hover:text-primary hover:border-default transition-colors"
                    >
                      <TelegramIcon className="h-3.5 w-3.5" /> Bot
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <ProjectModal
            project={selected}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
