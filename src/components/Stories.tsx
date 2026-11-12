"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { stories } from "@/lib/data";
import ReadMore from "@/components/ReadMore";

export default function Stories() {
  return (
    <section id="stories" className="relative py-20 md:py-28 overflow-hidden">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto">
          <p className="eyebrow justify-center">Updates</p>
          <h2 className="font-display text-2xl md:text-[2rem] font-extrabold leading-[1.1] tracking-tight mt-4">
            Field Stories &amp; <span className="text-brand">Milestones</span>
          </h2>
          <ReadMore
            className="mt-4"
            lines={3}
            textClassName="text-base md:text-lg text-muted leading-relaxed"
          >
            Moments from the ground — activations, team training, and community work.
          </ReadMore>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {stories.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-brand/40"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.image}
                  alt={s.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute left-3 top-3 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white">
                  {s.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-bold leading-snug group-hover:text-brand transition-colors">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{s.excerpt}</p>
                <a
                  href="#impact"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-transform group-hover:translate-x-1"
                >
                  Read more <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
