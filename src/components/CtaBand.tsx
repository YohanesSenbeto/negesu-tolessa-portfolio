"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function CtaBand() {
  return (
    <section className="relative py-12 md:py-16">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple to-[#6d3bd6] px-6 py-10 md:px-14 md:py-14"
        >
          <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-16 left-1/3 h-56 w-56 rounded-full bg-brand/30 blur-2xl" />

          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                Let&apos;s work together
              </p>
              <h2 className="font-display text-2xl md:text-4xl font-extrabold text-white leading-tight mt-2">
                Ready to grow your next market?
              </h2>
              <p className="mt-2 text-white/80 max-w-lg">
                Let&apos;s talk about the role or growth mandate you have in mind.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-purple transition-transform hover:-translate-y-0.5"
            >
              Start a conversation <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
