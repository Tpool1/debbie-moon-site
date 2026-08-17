import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import { site, expertise } from "@/content/site";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import "./globals.css";

// next/font resolves at build time, so this works under `output: 'export'`.
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700"],
  variable: "--font-inter-tight",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: site.metaDescription,
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    shortcut: "/icon.png",
  },
  openGraph: {
    type: "website",
    siteName: `${site.name} — ${site.role}`,
    title: `${site.name} — ${site.role}`,
    description: site.metaDescription,
    url: site.url,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: site.tagline }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.metaDescription,
    images: ["/og.png"],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.jobTitle,
  description: site.metaDescription,
  url: site.url,
  sameAs: [site.linkedin],
  image: `${site.url}/images/headshot.jpg`,
  alumniOf: { "@type": "CollegeOrUniversity", name: site.alumniOf },
  knowsAbout: [...expertise],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable}`}>
      <body>
        <script
          type="application/ld+json"
          // Schema is a build-time constant, not user input.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
