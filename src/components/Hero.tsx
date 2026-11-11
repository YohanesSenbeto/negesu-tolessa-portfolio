"use client";

import { motion, type Variants } from "framer-motion";
import { MapPin, ArrowDown, ArrowUpRight, Mail, Phone, Target, TrendingUp, Smartphone } from "lucide-react";
import { LinkedinIcon, WhatsappIcon } from "@/components/BrandIcons";
import { profile } from "@/lib/data";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 md:pt-32 md:pb-24">
      {/* Ambient pastel wash — Dizme-style light hero */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 right-[-6%] h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,rgba(255,138,61,0.22),transparent_62%)] blur-2xl" />
        <div className="absolute -top-28 left-[-8%] h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,rgba(255,182,193,0.30),transparent_62%)] blur-2xl" />
        <div className="absolute bottom-[-14rem] left-[-6rem] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(147,197,253,0.26),transparent_62%)] blur-2xl" />
      </div>

      <div className="container-x">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-10 items-center">
          {/* Portrait cut-out — v style (cropped head-to-chest) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="order-first lg:order-2 relative mx-auto flex w-full justify-center lg:justify-end"
          >
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[23rem] sm:max-w-[27rem] lg:max-w-[30rem]">
              {/* soft brush-smear backdrop */}
              <svg
                viewBox="0 0 400 500"
                preserveAspectRatio="xMidYMid meet"
                className="pointer-events-none absolute inset-0 z-0 h-full w-full"
                aria-hidden
              >
                <path
                  d="M152 84 C192 62 250 72 286 102 C314 126 320 162 304 202 C326 236 330 286 300 316 C274 344 228 336 194 326 C164 342 120 342 96 312 C72 285 78 246 92 216 C74 186 80 142 110 114 C123 100 137 92 152 84 Z"
                  fill="#ece7dd"
                  opacity="0.9"
                />
              </svg>

              {/* decorative hollow circle + dot */}
              <div className="absolute left-[10%] top-[6%] z-20 h-9 w-9 rounded-full border-2 border-brand/50" />
              <div className="absolute left-[30%] top-[18%] z-20 h-2.5 w-2.5 rounded-full bg-brand" />

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/negesu/portrait-crop.png"
                alt={`${profile.name} — ${profile.title}`}
                className="absolute inset-x-0 bottom-0 z-10 mx-auto w-full object-contain object-bottom drop-shadow-[0_28px_32px_rgba(23,23,31,0.16)]"
              />

              {/* floating icon tiles (v style) */}
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
                className="absolute left-[12%] top-[13%] z-30 grid h-12 w-12 -rotate-6 place-items-center rounded-xl bg-[#3a120c] text-amber-400 shadow-lg"
              >
                <Target className="h-6 w-6" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.65, duration: 0.5, ease: "easeOut" }}
                className="absolute right-[13%] top-[32%] z-30 grid h-12 w-12 rotate-3 place-items-center rounded-xl bg-[#0b2545] text-sky-400 shadow-lg"
              >
                <TrendingUp className="h-6 w-6" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
                className="absolute bottom-[7%] left-1/2 z-30 grid h-12 w-12 -translate-x-1/2 place-items-center rounded-xl bg-white text-green shadow-lg ring-1 ring-line"
              >
                <Smartphone className="h-6 w-6" />
              </motion.div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div variants={container} initial="hidden" animate="show" className="order-2 lg:order-1 text-center lg:text-left">
            <motion.p variants={item} className="font-display text-base md:text-lg text-muted">
              Hello, I am <span className="text-brand">👋</span>
            </motion.p>

            <motion.h1
              variants={item}
              className="font-display font-extrabold tracking-tight leading-[1.05] mt-2 text-[clamp(1.9rem,3.4vw,3.25rem)]"
            >
              {profile.firstName}
              <br className="hidden sm:block" /> <span className="text-gradient">{profile.lastName}</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-4 font-display text-lg md:text-xl font-semibold text-ink"
            >
              A <span className="text-brand">Sales &amp; Marketing Leader</span> From Ambo, Ethiopia
            </motion.p>

            <motion.p
              variants={item}
              className="mt-5 text-sm md:text-base text-muted leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              Over 10 years turning regional targets into market leadership across telecom sales,
              distribution, and M-PESA growth — building high-performing teams that deliver.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-6 flex items-center justify-center lg:justify-start gap-2 text-sm text-muted"
            >
              <MapPin className="h-4 w-4 text-brand" /> {profile.location}
            </motion.div>

            <motion.div
              variants={item}
              className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3"
            >
              <a href="#contact" className="btn-primary">
                Contact Me <ArrowUpRight className="h-4 w-4" />
              </a>
              <div className="flex items-center gap-2">
                {[
                  { icon: LinkedinIcon, href: profile.linkedin, label: "LinkedIn" },
                  { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
                  { icon: Phone, href: `tel:${profile.phoneLinks[0]}`, label: "Call" },
                  { icon: WhatsappIcon, href: `https://wa.me/${profile.whatsapp}`, label: "WhatsApp" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid h-11 w-11 place-items-center rounded-full border border-line bg-surface text-muted transition-all hover:-translate-y-0.5 hover:border-brand hover:text-brand"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        aria-label="Scroll down"
        className="mx-auto mt-14 flex h-12 w-12 items-center justify-center rounded-full border border-line text-muted hover:text-brand hover:border-brand transition-colors"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </motion.a>
    </section>
  );
}
