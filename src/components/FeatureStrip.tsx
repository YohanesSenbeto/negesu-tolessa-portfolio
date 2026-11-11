"use client";

import { motion } from "framer-motion";
import { Target, Users, Wallet, type LucideIcon } from "lucide-react";
import { featureStrip } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  target: Target,
  users: Users,
  wallet: Wallet,
};

const accents = ["text-brand bg-brand/12", "text-purple bg-purple/12", "text-green bg-green/12"];

export default function FeatureStrip() {
  return (
    <section className="relative border-y border-line bg-bg-2 py-14 md:py-16">
      <div className="container-x">
        <div className="grid md:grid-cols-3 gap-8 md:gap-4">
          {featureStrip.map((f, i) => {
            const Icon = iconMap[f.icon] ?? Target;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`flex items-center gap-4 md:px-8 ${i !== 0 ? "md:border-l md:border-line" : ""}`}
              >
                <span className={`grid h-14 w-14 shrink-0 place-items-center rounded-full ${accents[i % accents.length]}`}>
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold">{f.title}</h3>
                  <p className="mt-1 text-sm text-muted leading-relaxed">{f.text}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
