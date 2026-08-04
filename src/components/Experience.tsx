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

        {/* Roadmap timeline — sinusoidal road with zigzag entries */}
        <div className="relative">
          {/* Gradient definition */}
          <svg className="absolute h-0 w-0" aria-hidden="true">
            <defs>
              <linearGradient id="roadGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#7c5cff" stopOpacity="0.6" />
                <stop offset="60%" stopColor="#00e5ff" />
                <stop offset="100%" stopColor="#00e5ff" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>

          {/* Sinusoidal road */}
          <svg
            className="absolute top-0 h-full w-8 md:w-12 left-5 md:left-1/2 -translate-x-1/2 pointer-events-none"
            viewBox="0 0 60 400"
            preserveAspectRatio="none"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M 30 0 Q 16 25 30 50 Q 48 75 30 100 Q 8 125 30 150 Q 56 175 30 200 Q 0 225 30 250 Q 64 275 30 300 Q -8 325 30 350 Q 72 375 30 400"
              stroke="url(#roadGrad)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role + exp.period}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              variants={fadeUp}
              className={`relative pl-12 md:pl-0 mb-8 last:mb-0 md:grid md:grid-cols-2 md:gap-10 ${
                i % 2 === 0 ? "" : "md:[direction:rtl]"
              }`}
            >
              {/* Milestone node */}
              <div className="absolute left-5 md:left-1/2 top-6 -translate-x-1/2 z-10">
                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#7c5cff] to-[#00e5ff] ring-4 ring-[#7c5cff]/15 shadow-lg shadow-[#7c5cff]/30" />
              </div>

              <div
                className={`md:[direction:ltr] ${
                  i % 2 === 0 ? "md:pr-10" : "md:col-start-2 md:pl-10"
                }`}
              >
                <div className="rounded-2xl border border-subtle bg-surface p-5 hover:border-default hover:-translate-y-0.5 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-1">
                    <Briefcase className="h-4 w-4 text-[#00e5ff]" />
                    <span className="text-sm text-muted">{exp.period}</span>
                  </div>
                  <h4 className="font-bold text-lg">{exp.role}</h4>
                  <p className="text-[#7c5cff] text-sm mb-1">
                    {exp.company} · {exp.location}
                  </p>
                  <ul className="space-y-1 mt-2">
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
