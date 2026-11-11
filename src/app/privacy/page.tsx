import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${profile.name}'s personal website.`,
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-bg">
      <div className="container-x py-16 md:py-24 max-w-3xl">
        <Link
          href="/"
          className="text-sm font-medium text-brand hover:text-brand-2 transition-colors"
        >
          ← Back to home
        </Link>

        <h1 className="font-display text-4xl md:text-5xl font-extrabold mt-6 tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-sm text-muted mt-2">
          Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long" })}
        </p>

        <div className="mt-10 space-y-8 text-muted leading-relaxed">
          <section>
            <h2 className="font-display text-xl font-bold text-ink mb-2">Overview</h2>
            <p>
              This website is the personal portfolio of {profile.name}. This policy explains what
              information is collected when you visit, and how it is used. It is intentionally
              simple: I collect only what is needed to understand visits and to respond to your
              messages.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-ink mb-2">
              Information you provide
            </h2>
            <p>
              If you use the contact form, the name, email address, and message you submit are
              stored securely so I can reply to you. They are used only to respond to your enquiry
              and are never sold or shared for marketing.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-ink mb-2">
              Analytics &amp; cookies
            </h2>
            <p>
              With your consent, the site records anonymous, aggregate usage data — such as the
              pages viewed and general device information — to improve the experience. Your IP
              address is hashed (one-way) before storage, so it cannot be read back. You can
              decline analytics cookies at any time, and no cross-site tracking is performed.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-ink mb-2">Data retention</h2>
            <p>
              Contact messages are retained only as long as needed to handle your enquiry.
              Analytics records are retained in aggregate for service improvement.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-ink mb-2">Your rights</h2>
            <p>
              You may request access to, or deletion of, any personal information you have shared.
              To do so, contact{" "}
              <a
                href={`mailto:${profile.email}`}
                className="text-brand underline underline-offset-2 hover:text-brand-2"
              >
                {profile.email}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-ink mb-2">Contact</h2>
            <p>
              Questions about this policy can be sent to {profile.email} or by phone at{" "}
              {profile.phones.join(" or ")}.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
