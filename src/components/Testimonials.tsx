"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { approach, profile } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,90,31,0.14),transparent_65%)] blur-2xl" />
      </div>

      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto">
          <p className="eyebrow justify-center">Approach</p>
          <h2 className="font-display text-3xl md:text-[2.8rem] font-extrabold leading-[1.08] tracking-tight mt-4">
            In My Own <span className="text-brand">Words</span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative mx-auto mt-12 max-w-3xl text-center"
        >
          <Quote className="mx-auto h-12 w-12 text-brand/70" />
          <blockquote className="mt-6 font-display text-xl md:text-2xl lg:text-[1.7rem] leading-relaxed text-ink">
            “{approach.quote}”
          </blockquote>

          <div className="mt-8 flex flex-col items-center gap-3">
            <div className="h-16 w-16 rounded-full p-[3px] bg-gradient-to-br from-brand to-purple">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={profile.photo}
                alt={approach.name}
                className="h-full w-full rounded-full object-cover object-top"
              />
            </div>
            <div>
              <p className="font-display font-bold text-ink">{approach.name}</p>
              <p className="text-sm text-muted">{approach.role}</p>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2">
            <span className="h-2 w-6 rounded-full bg-brand" />
            <span className="h-2 w-2 rounded-full bg-line" />
            <span className="h-2 w-2 rounded-full bg-line" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
