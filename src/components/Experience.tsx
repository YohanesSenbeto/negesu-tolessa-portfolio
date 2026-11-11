"use client";

import { motion, type Variants } from "framer-motion";
import { Briefcase, GraduationCap, MapPin } from "lucide-react";
import { experiences, education } from "@/lib/data";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function Experience() {
  return (
    <section id="career" className="relative py-20 md:py-28 bg-bg-2 border-y border-line">
      <div className="container-x">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="max-w-2xl"
        >
          <p className="eyebrow">Career</p>
          <h2 className="font-display text-3xl md:text-[2.8rem] font-extrabold leading-[1.08] tracking-tight mt-4">
            My Professional <span className="text-brand">Journey</span>
          </h2>
          <p className="mt-5 text-base md:text-lg text-muted leading-relaxed">
            A clear upward path — from the shop floor to leading an entire region&apos;s sales
            operations. Every step built on the one before it.
          </p>
        </motion.div>

        <div className="relative mt-12">
          <span className="absolute left-[9px] top-2 bottom-2 w-px bg-gradient-to-b from-brand via-purple/60 to-transparent" />
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role + exp.period}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              variants={fadeUp}
              className="relative pl-9 pb-6 last:pb-0"
            >
              <span className="absolute left-0 top-2 grid h-[19px] w-[19px] place-items-center rounded-full border border-brand/50 bg-bg-2">
                <span className={`h-2.5 w-2.5 rounded-full ${exp.current ? "bg-brand" : "bg-purple"}`} />
              </span>

              <div className="card p-6 md:p-7 transition-all duration-300 hover:border-brand/40 hover:shadow-[0_24px_50px_-32px_rgba(255,75,62,0.35)]">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <span className="tag font-medium">{exp.period}</span>
                  {exp.current && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-2.5 py-1 text-xs font-semibold text-brand">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand" /> Current
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1.5 text-xs text-muted">
                    <MapPin className="h-3.5 w-3.5" /> {exp.location}
                  </span>
                </div>

                <div className="mt-3 flex items-start gap-3">
                  <span className="mt-1 hidden sm:grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand/10 text-brand">
                    <Briefcase className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-bold leading-tight">{exp.role}</h3>
                    <p className="text-brand font-medium text-sm mt-0.5">{exp.company}</p>
                  </div>
                </div>

                <p className="mt-3 text-sm text-muted leading-relaxed">{exp.summary}</p>

                <ul className="mt-4 grid sm:grid-cols-2 gap-x-6 gap-y-2">
                  {exp.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-sm text-muted leading-relaxed">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="mt-14"
        >
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-purple/15 text-purple">
              <GraduationCap className="h-5 w-5" />
            </span>
            <h3 className="font-display text-2xl font-bold">Education</h3>
          </div>
          <div className="mt-6 grid sm:grid-cols-3 gap-5">
            {education.map((e) => (
              <div key={e.institution + e.degree} className="card p-6">
                <p className="text-xs uppercase tracking-[0.14em] text-brand font-semibold">
                  {e.institution}
                </p>
                <p className="mt-2 font-medium text-ink leading-snug">{e.degree}</p>
                {e.detail && <p className="mt-1 text-sm text-muted">{e.detail}</p>}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
