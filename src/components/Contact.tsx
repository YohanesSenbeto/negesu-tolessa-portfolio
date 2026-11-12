"use client";

import { useState, type FormEvent } from "react";
import { motion, type Variants } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { LinkedinIcon, WhatsappIcon } from "@/components/BrandIcons";
import { profile } from "@/lib/data";
import ReadMore from "@/components/ReadMore";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      message: String(data.get("message") || "").trim(),
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.ok) throw new Error(json.error || "Request failed");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <section id="contact" className="relative py-20 md:py-28 bg-bg-2 border-t border-line">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto">
          <p className="eyebrow justify-center">Contact</p>
          <h2 className="font-display text-2xl md:text-[2rem] font-extrabold leading-[1.1] tracking-tight mt-4">
            I Want to <span className="text-brand">Hear From You</span>
          </h2>
          <ReadMore
            className="mt-4"
            lines={3}
            textClassName="text-base md:text-lg text-muted leading-relaxed"
          >
            Open to senior sales and commercial leadership roles, regional growth mandates, and
            M-PESA / digital financial services initiatives.
          </ReadMore>
        </div>

        <div className="mt-12 grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12 items-start">
          {/* Contact methods */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className="space-y-3"
          >
            <div className="card flex items-center gap-4 p-5">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand/12 text-brand">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-muted">Address</p>
                <p className="text-sm font-medium text-ink">{profile.location}</p>
              </div>
            </div>

            <a href={`mailto:${profile.email}`} className="card flex items-center gap-4 p-5 transition-colors hover:border-brand/40">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-purple/15 text-purple">
                <Mail className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-[0.14em] text-muted">Email</p>
                <p className="text-sm font-medium text-ink truncate">{profile.email}</p>
              </div>
            </a>

            <div className="card flex items-center gap-4 p-5">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-green/15 text-green">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-muted">Phone</p>
                <div className="flex flex-wrap gap-x-3">
                  {profile.phones.map((p, i) => (
                    <a key={p} href={`tel:${profile.phoneLinks[i]}`} className="text-sm font-medium text-ink hover:text-brand">
                      {p}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <a
                href={`https://wa.me/${profile.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="card flex items-center gap-3 p-4 transition-colors hover:border-green/50"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-green/15 text-green">
                  <WhatsappIcon className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium text-ink">WhatsApp</span>
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="card flex items-center gap-3 p-4 transition-colors hover:border-purple/50"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-purple/15 text-purple">
                  <LinkedinIcon className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium text-ink">LinkedIn</span>
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
            variants={fadeUp}
            onSubmit={handleSubmit}
            className="card p-6 md:p-8 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  maxLength={100}
                  placeholder="Full name"
                  className="mt-2 w-full rounded-xl border border-line bg-bg px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-brand focus:ring-2 focus:ring-brand/20"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                  Your Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  maxLength={200}
                  placeholder="you@company.com"
                  className="mt-2 w-full rounded-xl border border-line bg-bg px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-brand focus:ring-2 focus:ring-brand/20"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                maxLength={5000}
                placeholder="What would you like to discuss?"
                className="mt-2 w-full resize-none rounded-xl border border-line bg-bg px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-brand focus:ring-2 focus:ring-brand/20"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-primary w-full disabled:opacity-60 disabled:hover:translate-y-0"
            >
              <Send className="h-4 w-4" />
              {status === "sending" ? "Sending..." : "Submit Now"}
            </button>

            {status === "success" && (
              <p className="flex items-center gap-2 text-sm text-green">
                <CheckCircle2 className="h-4 w-4" /> Thank you — your message has been received.
                I&apos;ll get back to you shortly.
              </p>
            )}
            {status === "error" && (
              <p className="flex items-center gap-2 text-sm text-brand">
                <AlertCircle className="h-4 w-4" />
                {error || "Something went wrong. Please email me directly."}
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
