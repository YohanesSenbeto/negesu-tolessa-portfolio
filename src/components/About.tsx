"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { profile, highlights } from "@/lib/data";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-28 overflow-hidden">
      <div className="container-x">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Collage */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="relative pb-16 pr-10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/negesu/mpesa-stage-event.jpg"
                alt="Negesu leading a community activation"
                className="w-[82%] -rotate-3 rounded-2xl border border-line object-cover shadow-2xl"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/negesu/team-training-2.jpg"
                alt="Negesu coaching the field team"
                className="absolute bottom-0 right-0 w-[58%] rotate-3 rounded-2xl border border-line object-cover shadow-2xl"
              />

              <div className="absolute left-0 top-0 flex items-center gap-3 rounded-xl bg-brand px-4 py-3 text-white shadow-xl">
                <span className="font-display text-2xl font-extrabold leading-none">10+</span>
                <span className="text-xs font-semibold leading-tight">
                  Years of<br />Experience
                </span>
              </div>

              <div className="absolute bottom-4 left-2 grid h-20 w-20 place-items-center rounded-full border-4 border-bg bg-purple text-center text-white shadow-xl">
                <div>
                  <p className="font-display text-lg font-extrabold leading-none">100%</p>
                  <p className="text-[9px] uppercase tracking-wide mt-0.5">Committed</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-70px" }}
            variants={fadeUp}
          >
            <p className="eyebrow">About Me</p>
            <h2 className="font-display text-2xl md:text-[2rem] font-extrabold leading-[1.1] tracking-tight mt-4">
              I Can Grow <span className="text-brand">Any Market</span> You Want
            </h2>

            <p className="mt-5 text-base md:text-lg text-muted leading-relaxed">{profile.summary}</p>
            <p className="mt-3 text-base md:text-lg text-muted leading-relaxed">
              I have grown through every layer of telecom retail and distribution — from the shop
              floor to regional leadership — so I understand the customer, the agent, and the numbers
              behind the target.
            </p>

            <ul className="mt-6 grid sm:grid-cols-2 gap-3">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-sm text-ink leading-relaxed">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-green/15 text-green">
                    <Check className="h-3 w-3" />
                  </span>
                  {h}
                </li>
              ))}
            </ul>

            <a href="#contact" className="btn-primary mt-8">
              Hire Me <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
