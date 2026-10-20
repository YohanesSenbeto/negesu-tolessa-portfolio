import Link from "next/link";
import { profile } from "@/lib/data";

export const metadata = {
  title: "Privacy Terms",
  description:
    "Privacy terms for cookies and analytics on this portfolio site.",
};

export default function PrivacyPage() {
  return (
    <section className="relative py-24 px-5">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Privacy Terms</h1>
        <p className="text-sm font-mono text-[#7c5cff] mb-8">
          Last updated: August 2026
        </p>

        <div className="space-y-6 text-secondary leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-primary mb-2">Overview</h2>
            <p>
              This portfolio site uses cookies and analytics to understand
              visits and improve content. Analytics runs only after you accept
              the consent banner.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-primary mb-2">
              What we collect
            </h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Pages viewed and clicks (element tag, id, text, link).</li>
              <li>
                Device info: browser/user agent, language, screen &amp; viewport
                size, timezone.
              </li>
              <li>
                Approximate region (country, region, city) derived from your IP
                address.
              </li>
              <li>
                The visiting network/organization (e.g., company or ISP) and its
                domain, inferred from your IP address.
              </li>
              <li>
                A hashed version of your IP address — the raw IP is never stored.
              </li>
              <li>Referrer and timestamps.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-primary mb-2">
              What we do not do
            </h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>No cross-site or third-party tracking.</li>
              <li>No sale or sharing of personal data.</li>
              <li>If you decline, no analytics data is collected.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-primary mb-2">
              Storage &amp; retention
            </h2>
            <p>
              Data is stored in MongoDB Atlas. You can withdraw consent at any
              time by clearing site data in your browser.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-primary mb-2">Contact</h2>
            <p>
              Questions? Email{" "}
              <a
                href={`mailto:${profile.email}`}
                className="text-[#7c5cff] hover:underline"
              >
                {profile.email}
              </a>
              .
            </p>
          </div>
        </div>

        <Link
          href="/#home"
          className="inline-block mt-10 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#7c5cff] to-[#00e5ff] text-black font-semibold hover:scale-105 transition-transform"
        >
          Back to home
        </Link>
      </div>
    </section>
  );
}
