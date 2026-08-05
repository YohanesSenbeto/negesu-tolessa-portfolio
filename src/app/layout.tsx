import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Analytics from "@/components/Analytics";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yohanes Senbeto — Full-Stack Software Engineer",
  description:
    "Portfolio of Yohanes Senbeto, a full-stack software engineer at Ethio Telecom building scalable internal tools and enterprise platforms with Next.js, TypeScript, and Prisma.",
  keywords: [
    "Yohanes Senbeto",
    "Full-Stack Developer",
    "Software Engineer",
    "Next.js",
    "TypeScript",
    "Ethio Telecom",
    "Portfolio",
  ],
  authors: [{ name: "Yohanes Senbeto" }],
  openGraph: {
    title: "Yohanes Senbeto — Full-Stack Software Engineer",
    description:
      "Building scalable internal tools & enterprise platforms. Next.js, TypeScript, Prisma, PostgreSQL.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('theme');if(t==='light')document.documentElement.classList.add('light')}catch(e){}`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col noise">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
