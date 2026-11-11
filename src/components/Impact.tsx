"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Expand } from "lucide-react";
import GalleryModal from "@/components/GalleryModal";
import { gallery } from "@/lib/data";

const categories = ["All", ...Array.from(new Set(gallery.map((g) => g.category)))];

export default function Impact() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState<number | null>(null);

  const visible = useMemo(
    () => (filter === "All" ? gallery : gallery.filter((g) => g.category === filter)),
    [filter],
  );

  return (
    <section id="work" className="relative py-20 md:py-28 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,138,76,0.14),transparent_65%)] blur-2xl" />
      </div>

      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto">
          <p className="eyebrow justify-center">Portfolio</p>
          <h2 className="font-display text-3xl md:text-[2.8rem] font-extrabold leading-[1.08] tracking-tight mt-4">
            My Impact <span className="text-brand">in the Field</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted leading-relaxed">
            Activations, trainings, and customer moments across the Ambo region — where strategy
            meets the street, the shop, and the community.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {categories.map((c) => {
            const isActive = filter === c;
            return (
              <button
                key={c}
                onClick={() => setFilter(c)}
                aria-pressed={isActive}
                className={`rounded-full px-4 py-2 text-sm transition-all ${
                  isActive
                    ? "bg-brand text-white font-semibold shadow-lg shadow-brand/25"
                    : "border border-line text-muted hover:border-brand/50 hover:text-ink"
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <motion.div layout className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {visible.map((g) => {
              const realIndex = gallery.indexOf(g);
              return (
                <motion.button
                  key={g.src}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35 }}
                  onClick={() => setActive(realIndex)}
                  className="group relative aspect-square overflow-hidden rounded-2xl border border-line text-left"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={g.src}
                    alt={g.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
                  <div className="absolute inset-x-0 bottom-0 p-5 translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                    <p className="text-[10px] uppercase tracking-[0.16em] text-brand font-semibold">
                      {g.category}
                    </p>
                    <h3 className="font-display text-lg font-bold text-white mt-1 leading-snug">
                      {g.title}
                    </h3>
                  </div>
                  <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                    <Expand className="h-4 w-4" />
                  </span>
                </motion.button>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <GalleryModal
            items={gallery}
            index={active}
            onClose={() => setActive(null)}
            onNavigate={(i) => setActive(i)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
