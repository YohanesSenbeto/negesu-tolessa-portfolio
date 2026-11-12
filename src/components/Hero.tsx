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
      {/* Pure white hero background */}

      <div className="container-x">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-8 items-center">
          {/* Portrait — larger than the text, reference style */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="order-first lg:order-2 relative mx-auto flex w-full justify-center lg:justify-end"
          >
            <div className="relative mx-auto w-full max-w-[24rem] sm:max-w-[32rem] lg:max-w-none">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/negesu/hero-portrait.png"
                alt={`${profile.name} — ${profile.title}`}
                className="h-auto w-full select-none"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div variants={container} initial="hidden" animate="show" className="order-2 lg:order-1 text-center lg:text-left">
            <motion.p variants={item} className="font-display text-base md:text-lg text-brand">
              Hello, I am
            </motion.p>

            <motion.h1
              variants={item}
              className="font-display font-extrabold tracking-tight leading-[1.05] mt-2 text-[clamp(1.7rem,3.1vw,2.75rem)]"
            >
              <span className="whitespace-nowrap">{profile.firstName} {profile.lastName}</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-4 font-display text-lg md:text-xl font-semibold text-ink"
            >
              A <span className="text-[var(--accent-green)]">Regional Sales Manager</span> at{" "}
              <span className="text-[var(--accent-purple)]">Safaricom Telecommunications Ethiopia PLC</span>
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
