"use client";

import { motion } from "framer-motion";
import { ExternalLink, CheckCircle } from "lucide-react";
import { GithubIcon, TelegramIcon } from "@/components/BrandIcons";
import { projects } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const categoryColors: Record<string, string> = {
  "Full-Stack": "from-violet-500 to-purple-600",
  Enterprise: "from-cyan-500 to-blue-600",
  GIS: "from-emerald-500 to-teal-600",
  CLI: "from-orange-500 to-red-600",
  Creative: "from-pink-500 to-rose-600",
  AI: "from-indigo-500 to-purple-600",
};

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-24 px-5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeUp}
          className="mb-12"
        >
          <h2 className="text-sm font-mono text-[#7c5cff] mb-2">03 / PROJECTS</h2>
          <h3 className="text-3xl md:text-4xl font-bold">Things I&apos;ve Built</h3>
        </motion.div>

        {/* Featured projects */}
        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {featured.map((p, i) => (
            <motion.article
              key={p.name}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              variants={fadeUp}
              className="group relative rounded-3xl border border-subtle bg-surface p-7 hover:border-default transition-all overflow-hidden"
            >
              {/* Gradient accent */}
              <div
                className={`absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-20 bg-gradient-to-br ${categoryColors[p.category]} group-hover:opacity-40 transition-opacity`}
              />

              <div className="relative">
                {p.image && (
                  <div className="relative mb-5 rounded-2xl overflow-hidden border border-subtle aspect-[16/10] bg-surface-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex flex-wrap gap-2">
                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${categoryColors[p.category]}`}
                    >
                      {p.category}
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-xs border border-subtle text-secondary">
                      {p.highlight}
                    </span>
                  </div>
                </div>

                <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {p.name}
                </h4>
                <p className="text-secondary text-sm leading-relaxed mb-4">
                  {p.longDescription}
                </p>

                <ul className="space-y-1.5 mb-5">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-secondary"
                    >
                      <CheckCircle className="h-4 w-4 text-[#00e5ff] mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-xs font-mono bg-surface text-muted border border-subtle"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-secondary hover:text-primary transition-colors"
                    >
                      <GithubIcon className="h-4 w-4" /> Code
                    </a>
                  )}
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-secondary hover:text-primary transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" /> Live Demo
                    </a>
                  )}
                  {p.telegram && (
                    <a
                      href={p.telegram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-secondary hover:text-primary transition-colors"
                    >
                      <TelegramIcon className="h-4 w-4" /> Telegram Bot
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Other projects */}
        {rest.length > 0 && (
          <div className="grid md:grid-cols-2 gap-5">
            {rest.map((p, i) => (
              <motion.article
                key={p.name}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                variants={fadeUp}
                className="rounded-2xl border border-subtle bg-surface p-5 hover:bg-surface-2 transition-colors"
              >
                {p.image && (
                  <div className="relative mb-3 rounded-xl overflow-hidden border border-subtle aspect-[16/9] bg-surface-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs font-medium text-white bg-gradient-to-r ${categoryColors[p.category]}`}
                  >
                    {p.category}
                  </span>
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-primary"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
                <h4 className="font-semibold mb-1">{p.name}</h4>
                <p className="text-sm text-muted mb-3">{p.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.slice(0, 5).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-xs font-mono bg-surface text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
