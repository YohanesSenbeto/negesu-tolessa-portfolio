"use client";

import { motion } from "framer-motion";
import { profile, skills } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section id="about" className="relative py-24 px-5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          variants={fadeUp}
        >
          <h2 className="text-sm font-mono text-[#7c5cff] mb-2">01 / ABOUT</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-8">Who I Am</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            variants={fadeUp}
            className="text-lg text-secondary leading-relaxed"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeUp}
            className="grid grid-cols-2 gap-4"
          >
            {profile.stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-subtle bg-surface p-5 hover:border-[#7c5cff]/40 transition-colors"
              >
                <p className="text-3xl font-bold gradient-text">{s.value}</p>
                <p className="text-sm text-muted mt-1">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Skills */}
        <div id="skills" className="mt-24">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={fadeUp}
          >
            <h2 className="text-sm font-mono text-[#7c5cff] mb-2">02 / SKILLS</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-8">Tech Stack</h3>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {skills.map((group, i) => (
              <motion.div
                key={group.category}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                variants={fadeUp}
                className="rounded-2xl border border-subtle bg-surface p-6 hover:bg-surface-2 transition-colors"
              >
                <h4 className="font-semibold mb-4 text-primary">{group.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-lg text-sm bg-surface border border-subtle text-secondary hover:border-[#00e5ff]/40 hover:text-primary transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
