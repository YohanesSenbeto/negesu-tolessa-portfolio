import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import Analytics from "@/components/Analytics";
import { profile, languages } from "@/lib/data";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://negesutolessa.vercel.app";
const siteTitle = `${profile.name} — ${profile.title}`;
const ogImage = new URL(profile.photo, siteUrl).toString();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s — ${profile.name}`,
  },
  description: profile.summary,
  keywords: [
    "Negesu Tolessa",
    "Negesu Tolessa Likasa",
    "Regional Sales Manager",
    "Sales and Marketing",
    "Telecom Sales",
    "M-PESA",
    "Digital Financial Services",
    "Distribution Management",
    "Safaricom Ethiopia",
    "Ethio Telecom",
    "Sales Leadership",
    "Ambo",
    "Oromia",
    "Ethiopia",
  ],
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: siteUrl,
    siteName: profile.name,
    locale: "en_US",
    title: siteTitle,
    description: profile.tagline,
    images: [
      {
        url: ogImage,
        width: 400,
        height: 400,
        alt: `${profile.name} — ${profile.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: profile.tagline,
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.title,
  description: profile.summary,
  url: siteUrl,
  image: ogImage,
  email: `mailto:${profile.email}`,
  telephone: profile.phones,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ambo",
    addressRegion: "Oromia",
    addressCountry: "ET",
  },
  worksFor: {
    "@type": "Organization",
    name: profile.company,
  },
  knowsLanguage: languages.map((l) => l.name),
  sameAs: [profile.linkedin],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="grain min-h-screen flex flex-col bg-bg text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
