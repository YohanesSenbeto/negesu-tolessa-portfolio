"use client";

import { motion } from "framer-motion";
import { Network, Megaphone, Users, Smartphone, ArrowRight, type LucideIcon } from "lucide-react";
import { services, type Service } from "@/lib/data";

const iconMap: Record<Service["icon"], LucideIcon> = {
  distribution: Network,
  activation: Megaphone,
  leadership: Users,
  mpesa: Smartphone,
};

const accentMap: Record<Service["accent"], { chip: string; text: string; border: string }> = {
  brand: { chip: "bg-brand/12 text-brand", text: "text-brand", border: "hover:border-brand/50" },
  purple: { chip: "bg-purple/15 text-purple", text: "text-purple", border: "hover:border-purple/50" },
  green: { chip: "bg-green/15 text-green", text: "text-green", border: "hover:border-green/50" },
};

export default function Services() {
  return (
    <section id="services" className="relative py-20 md:py-28 overflow-hidden">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto">
          <p className="eyebrow justify-center">Services</p>
          <h2 className="font-display text-3xl md:text-[2.8rem] font-extrabold leading-[1.08] tracking-tight mt-4">
            What I Do <span className="text-brand">for Clients</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted leading-relaxed">
            The core commercial capabilities I bring to a region, a team, or a growth mandate.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon];
            const a = accentMap[s.accent];
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                className={`group card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_54px_-34px_rgba(0,0,0,0.9)] ${a.border}`}
              >
                <div className="flex items-center gap-4">
                  <span className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl ${a.chip}`}>
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <p className={`text-xs font-semibold uppercase tracking-[0.14em] ${a.text}`}>
                      {s.tag}
                    </p>
                    <h3 className="font-display text-xl font-bold mt-1">{s.title}</h3>
                  </div>
                </div>
                <p className="mt-4 text-sm md:text-base text-muted leading-relaxed">{s.description}</p>
                <a
                  href="#contact"
                  className={`mt-5 inline-flex items-center gap-1.5 text-sm font-semibold ${a.text} transition-transform group-hover:translate-x-1`}
                >
                  Read more <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
