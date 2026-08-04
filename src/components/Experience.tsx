"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, BadgeCheck } from "lucide-react";
import { experiences, education, certifications, achievements } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeUp}
          className="mb-12"
        >
          <h2 className="text-sm font-mono text-[#7c5cff] mb-2">04 / EXPERIENCE</h2>
          <h3 className="text-3xl md:text-4xl font-bold">Where I&apos;ve Worked</h3>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#7c5cff] via-white/10 to-transparent md:-translate-x-1/2" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role + exp.period}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              variants={fadeUp}
              className={`relative pl-12 md:pl-0 mb-10 md:grid md:grid-cols-2 md:gap-8 ${
                i % 2 === 0 ? "" : "md:[direction:rtl]"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 top-1 w-3 h-3 rounded-full bg-[#7c5cff] ring-4 ring-[#7c5cff]/20 md:-translate-x-1/2" />

              <div
                className={`md:[direction:ltr] ${
                  i % 2 === 0 ? "md:pr-8 md:text-right" : "md:col-start-2 md:pl-8"
                }`}
              >
                <div className="rounded-2xl border border-subtle bg-surface p-5 hover:border-default transition-colors">
                  <div
                    className={`flex items-center gap-2 mb-1 ${
                      i % 2 === 0 ? "md:justify-end" : ""
                    }`}
                  >
                    <Briefcase className="h-4 w-4 text-[#00e5ff]" />
                    <span className="text-sm text-muted">{exp.period}</span>
                  </div>
                  <h4 className="font-bold text-lg">{exp.role}</h4>
                  <p className="text-[#7c5cff] text-sm mb-1">
                    {exp.company} · {exp.location}
                  </p>
                  <ul
                    className={`space-y-1 mt-2 ${
                      i % 2 === 0 ? "md:text-left" : ""
                    }`}
                  >
                    {exp.points.map((pt) => (
                      <li
                        key={pt}
                        className="text-sm text-secondary leading-relaxed flex items-start gap-1.5"
                      >
                        <span className="text-[#7c5cff] mt-1">▸</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education + Achievements */}
        <div className="grid md:grid-cols-2 gap-6 mt-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={fadeUp}
            className="rounded-2xl border border-subtle bg-surface p-6"
          >
            <h4 className="flex items-center gap-2 font-bold mb-4">
              <GraduationCap className="h-5 w-5 text-[#00e5ff]" /> Education
            </h4>
            <div className="space-y-4">
              {education.map((e) => (
                <div key={e.institution} className="border-l-2 border-subtle pl-3">
                  <p className="font-medium text-sm">{e.institution}</p>
                  <p className="text-sm text-secondary">{e.degree}</p>
                  <p className="text-xs text-muted mt-0.5">
                    {e.period} · {e.detail}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            variants={fadeUp}
            className="rounded-2xl border border-subtle bg-surface p-6"
          >
            <h4 className="flex items-center gap-2 font-bold mb-4">
              <Award className="h-5 w-5 text-[#00e5ff]" /> Achievements
            </h4>
            <ul className="space-y-2 mb-5">
              {achievements.map((a) => (
                <li
                  key={a}
                  className="text-sm text-secondary flex items-start gap-2"
                >
                  <span className="text-[#7c5cff]">★</span> {a}
                </li>
              ))}
            </ul>
            <h5 className="flex items-center gap-2 font-semibold text-sm mb-3 text-secondary">
              <BadgeCheck className="h-4 w-4 text-[#7c5cff]" /> Certifications
            </h5>
            <div className="flex flex-wrap gap-1.5">
              {certifications.map((c) => (
                <span
                  key={c}
                  className="px-2 py-1 rounded text-xs bg-surface border border-subtle text-muted"
                >
                  {c}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
