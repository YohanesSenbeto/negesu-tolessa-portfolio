"use client";

import { motion, type Variants } from "framer-motion";
import { MapPin, ArrowDown, ArrowUpRight, Mail, Phone } from "lucide-react";
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
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 right-[-8%] h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,rgba(255,90,31,0.20),transparent_62%)] blur-2xl" />
        <div className="absolute bottom-[-12rem] left-[-10rem] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(255,138,76,0.20),transparent_62%)] blur-2xl" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="container-x">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-10 items-center">
          {/* Portrait — first on mobile so it is always visible */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="order-first lg:order-2 relative mx-auto flex justify-center"
          >
            <div className="relative">
              {/* dotted / glow ring */}
              <div className="absolute -inset-5 rounded-full border border-dashed border-white/15" />
              <div className="absolute -inset-10 rounded-full bg-[radial-gradient(circle,rgba(255,90,31,0.22),transparent_65%)] blur-xl" />
              <div className="relative h-72 w-72 sm:h-80 sm:w-80 lg:h-[27rem] lg:w-[27rem] rounded-full p-[5px] bg-gradient-to-br from-brand via-purple to-green shadow-[0_30px_80px_-30px_rgba(255,90,31,0.55)]">
                <div className="h-full w-full overflow-hidden rounded-full bg-surface ring-1 ring-white/10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={profile.photo}
                    alt={`${profile.name} — ${profile.title}`}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              </div>

              {/* floating badges */}
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
                className="absolute -left-3 top-6 flex items-center gap-2 rounded-xl border border-line bg-surface/95 px-3 py-2 shadow-xl backdrop-blur"
              >
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand/15 text-brand font-display font-bold text-sm">
                  10+
                </span>
                <span className="text-xs font-semibold text-ink leading-tight">
                  Years<br />Experience
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="absolute -right-3 bottom-8 flex items-center gap-2 rounded-xl border border-line bg-surface/95 px-3 py-2 shadow-xl backdrop-blur"
              >
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-green/15 text-green">
                  <WhatsappIcon className="h-4 w-4" />
                </span>
                <span className="text-xs font-semibold text-ink leading-tight">
                  M-PESA<br />Growth
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div variants={container} initial="hidden" animate="show" className="order-2 lg:order-1 text-center lg:text-left">
            <motion.p variants={item} className="font-display text-lg md:text-xl text-muted">
              Hello, I am <span className="text-brand">👋</span>
            </motion.p>

            <motion.h1
              variants={item}
              className="font-display font-extrabold tracking-tight leading-[1.02] mt-2 text-[clamp(2.8rem,6vw,5.4rem)]"
            >
              {profile.firstName}
              <br className="hidden sm:block" /> <span className="text-gradient">{profile.lastName}</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-4 font-display text-xl md:text-2xl font-semibold text-ink"
            >
              A <span className="text-green">Sales &amp; Marketing Leader</span> From Ambo, Ethiopia
            </motion.p>

            <motion.p
              variants={item}
              className="mt-5 text-base md:text-lg text-muted leading-relaxed max-w-xl mx-auto lg:mx-0"
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
                Hire Me <ArrowUpRight className="h-4 w-4" />
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
