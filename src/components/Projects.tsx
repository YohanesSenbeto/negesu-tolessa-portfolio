"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
          {featured.map((p, i) => (
            <motion.article
              key={p.name}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              variants={fadeUp}
              className="group relative flex flex-col rounded-2xl border border-subtle bg-surface overflow-hidden hover:border-default hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#7c5cff]/10 transition-all duration-300"
            >
              {p.image && (
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
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
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
                className="group rounded-2xl border border-subtle bg-surface p-5 hover:bg-surface-2 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
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
