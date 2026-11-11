import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { LinkedinIcon, WhatsappIcon, LogoMark } from "@/components/BrandIcons";
import { profile } from "@/lib/data";

const nav = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Career", href: "#career" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-bg">
      <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,75,62,0.12),transparent_65%)] blur-2xl" />
      <div className="container-x relative py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <LogoMark className="h-10 w-10" uid="nt-logo-footer" />
              <div>
                <p className="font-display text-lg font-bold text-ink">{profile.name}</p>
                <p className="text-xs uppercase tracking-[0.18em] text-brand mt-0.5">
                  Sales &amp; Marketing Leader
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm text-muted leading-relaxed">
              {profile.tagline}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface text-muted transition-all hover:-translate-y-0.5 hover:border-brand hover:text-brand"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
              <a
                href={`https://wa.me/${profile.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface text-muted transition-all hover:-translate-y-0.5 hover:border-green hover:text-green"
              >
                <WhatsappIcon className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface text-muted transition-all hover:-translate-y-0.5 hover:border-purple hover:text-purple"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-muted font-semibold">
              Explore
            </p>
            <ul className="mt-4 space-y-2.5">
              {nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-sm text-muted transition-colors hover:text-brand"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-muted font-semibold">
              Get in touch
            </p>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <span>{profile.phones.join(" · ")}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <a href={`mailto:${profile.email}`} className="hover:text-brand">
                  {profile.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <span>{profile.location}</span>
              </li>
            </ul>
            <a href="#contact" className="btn-primary mt-6 px-5 py-2.5 text-sm">
              Hire Me <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-12 h-px w-full bg-line" />
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted/80">
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p>
            Built with Next.js · Deployed on Vercel ·{" "}
            <a href="/privacy" className="hover:text-brand">
              Privacy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
