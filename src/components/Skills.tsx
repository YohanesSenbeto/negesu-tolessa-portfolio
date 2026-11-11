"use client";

import { motion, type Variants } from "framer-motion";
import { skillBars } from "@/lib/data";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function Skills() {
  return (
    <section className="relative py-20 md:py-28 bg-bg-2 border-y border-line overflow-hidden">
      <div className="container-x">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Text + bars */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-70px" }}
            variants={fadeUp}
          >
            <p className="eyebrow">Skills</p>
            <h2 className="font-display text-2xl md:text-[2rem] font-extrabold leading-[1.1] tracking-tight mt-4">
              I Build Skills That <span className="text-brand">Keep Me Sharp</span>
            </h2>
            <p className="mt-5 text-base md:text-lg text-muted leading-relaxed">
              After a decade in the field, these are the strengths I bring to every region I lead —
              measured by results, not just experience.
            </p>

            <div className="mt-8 space-y-5">
              {skillBars.map((s, i) => (
                <div key={s.label}>
                  <div className="flex items-center justify-between mb-2 text-sm font-medium">
                    <span className="text-ink">{s.label}</span>
                    <span className="text-muted">{s.value}%</span>
                  </div>
                  <div className="h-2.5 w-full rounded-full bg-surface-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-brand to-purple"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Photo collage */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="relative pb-14 pl-10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/negesu/mpesa-shop-launch.jpg"
                alt="Negesu speaking at a merchant shop activation"
                className="w-[85%] rotate-2 rounded-2xl border border-line object-cover shadow-2xl ml-auto"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/negesu/team-training-1.jpg"
                alt="Negesu training the M-PESA field team"
                className="absolute bottom-0 left-0 w-[55%] -rotate-3 rounded-2xl border border-line object-cover shadow-2xl"
              />
              <div className="absolute right-2 top-2 grid h-20 w-20 place-items-center rounded-full border-4 border-bg-2 bg-brand text-center text-white shadow-xl">
                <div>
                  <p className="font-display text-base font-extrabold leading-none">M-PESA</p>
                  <p className="text-[9px] uppercase tracking-wide mt-0.5">Growth</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
