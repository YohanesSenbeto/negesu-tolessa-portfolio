"use client";

import { motion } from "framer-motion";
import { organizations } from "@/lib/data";

export default function Organizations() {
  return (
    <section className="relative border-y border-line bg-bg-2 py-16 md:py-20">
      <div className="container-x">
        <p className="text-center text-sm uppercase tracking-[0.22em] text-muted">
          Where I&apos;ve Made an Impact
        </p>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {organizations.map((o, i) => (
            <motion.div
              key={o}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="card flex items-center justify-center px-4 py-6 text-center transition-all hover:border-brand/40"
            >
              <span className="font-display text-sm md:text-base font-semibold text-muted hover:text-ink transition-colors">
                {o}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
