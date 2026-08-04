"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon, YoutubeIcon } from "@/components/BrandIcons";
import { profile } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 px-5">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeUp}
        >
          <h2 className="text-sm font-mono text-[#7c5cff] mb-2">05 / CONTACT</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-4">
            Let&apos;s build something{" "}
            <span className="gradient-text">great</span>
          </h3>
          <p className="text-secondary mb-10 max-w-lg mx-auto">
            I&apos;m open to full-stack roles, freelance projects, and
            collaborations. Reach out and I&apos;ll respond within 24 hours.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          variants={fadeUp}
          className="grid sm:grid-cols-2 gap-4 mb-10"
        >
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-3 rounded-2xl border border-subtle bg-surface p-5 hover:border-[#7c5cff]/40 transition-colors text-left"
          >
            <Mail className="h-5 w-5 text-[#7c5cff] shrink-0" />
            <div>
              <p className="text-xs text-muted">Email</p>
              <p className="text-sm truncate">{profile.email}</p>
            </div>
          </a>
          <div className="flex items-center gap-3 rounded-2xl border border-subtle bg-surface p-5 text-left">
            <MapPin className="h-5 w-5 text-[#00e5ff] shrink-0" />
            <div>
              <p className="text-xs text-muted">Location</p>
              <p className="text-sm">{profile.location}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={fadeUp}
          className="flex items-center justify-center gap-4"
        >
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#7c5cff] to-[#00e5ff] text-black font-semibold hover:scale-105 transition-transform glow"
          >
            <Send className="h-4 w-4" /> Send a Message
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-default hover:bg-surface-2 transition-all"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-default hover:bg-surface-2 transition-all"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
          <a
            href={profile.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-default hover:bg-surface-2 transition-all"
          >
            <YoutubeIcon className="h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
