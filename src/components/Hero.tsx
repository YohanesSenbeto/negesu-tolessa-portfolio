"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, YoutubeIcon, LogoMark } from "@/components/BrandIcons";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden"
    >
      {/* Glow orbs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-[#7c5cff] rounded-full blur-[120px] opacity-30" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-[#00e5ff] rounded-full blur-[120px] opacity-20" />

      <div className="relative z-10 max-w-4xl mx-auto px-5 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-subtle bg-surface backdrop-blur-sm mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
          </span>
          <span className="text-sm text-secondary">
            Available for opportunities
          </span>
        </motion.div>

        {/* Profile photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mb-8 flex flex-col items-center gap-3"
        >
          <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full p-[3px] bg-gradient-to-br from-[#7c5cff] to-[#00e5ff] glow">
            <div className="w-full h-full rounded-full overflow-hidden bg-surface-2 flex items-center justify-center ring-1 ring-white/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={profile.photo}
                alt={profile.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = "none";
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = "flex";
                }}
              />
              <span
                className="flex items-center justify-center"
                style={{ display: "none" }}
              >
                <LogoMark className="h-16 w-16 md:h-20 md:w-20" uid="logo-hero" />
              </span>
            </div>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/flag_of_ethiopia.png"
            alt="Ethiopia"
            className="w-16 h-10 rounded shadow-lg ring-1 ring-black/10 object-cover"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]"
        >
          {profile.name.split(" ")[0]}{" "}
          <span className="gradient-text">
            {profile.name.split(" ").slice(1).join(" ")}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-5 text-xl md:text-2xl text-secondary font-light"
        >
          {profile.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-3 text-base text-muted flex items-center justify-center gap-1.5"
        >
          <MapPin className="h-4 w-4" /> {profile.location} · {profile.company}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-[#7c5cff] to-[#00e5ff] text-black font-semibold hover:scale-105 transition-transform glow"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full border border-default hover:bg-surface-2 transition-all"
          >
            Get in Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-8 flex items-center justify-center gap-5"
        >
          {[
            { icon: GithubIcon, href: profile.github },
            { icon: LinkedinIcon, href: profile.linkedin },
            { icon: YoutubeIcon, href: profile.youtube },
            { icon: Mail, href: `mailto:${profile.email}` },
          ].map(({ icon: Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-primary hover:scale-110 transition-all"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted hover:text-primary"
      >
        <ArrowDown className="h-6 w-6 animate-bounce" />
      </motion.a>
    </section>
  );
}
