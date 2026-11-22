import type { Metadata, Viewport } from "next";
import { Inter_Tight } from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "./provide";
import "./globals.css";
import { mezgebRepos, site, socialLinks } from "@/data";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter-tight",
  display: "swap",
});

const title = site.title;
const ogImage = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: `${site.name}, founder & CEO of Atronsa`,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: `%s — ${site.name}` },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "Dagim",
    "Dagim Getaw",
    "Dagim Getaw software engineer",
    "Ethiopian software engineer",
    "Software engineer Addis Ababa",
    "Backend engineer",
    "Full-stack developer",
    "Atronsa",
    "Atronsa founder",
    "Atronsa CEO",
    "Mezgeb",
    "Mezgeb founder",
    "Mezgeb open source",
    "Ethiopian founder",
    "Ethiopian fintech",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "technology",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "profile",
    firstName: "Dagim",
    lastName: "Getaw",
    username: "dagimgetaw",
    title,
    description: site.description,
    url: "/",
    siteName: site.name,
    locale: "en_US",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.description,
    images: [ogImage.url],
    creator: site.x,
    site: site.x,
  },
  formatDetection: { email: false, telephone: false, address: false },
};

/* Structured data (schema.org) so search engines know this page is about a
   specific person, what they do, and which profiles belong to them. */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: site.name,
      givenName: "Dagim",
      familyName: "Getaw",
      url: site.url,
      image: {
        "@type": "ImageObject",
        url: `${site.url}${site.image}`,
        width: 800,
        height: 800,
        caption: site.name,
      },
      email: `mailto:${site.email}`,
      jobTitle: ["Founder & CEO of Atronsa", "Founder of Mezgeb", site.role],
      description: site.description,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Addis Ababa",
        addressCountry: "ET",
      },
      worksFor: [
        { "@id": `${site.url}/#atronsa` },
        { "@id": `${site.url}/#mezgeb` },
      ],
      knowsAbout: [
        "Software engineering",
        "Backend development",
        "API design",
        "Databases",
        "Full-stack web development",
        "Rust",
        "Next.js",
        "React",
        "Machine learning",
      ],
      sameAs: socialLinks.map((s) => s.url),
    },
    {
      "@type": "Organization",
      "@id": `${site.url}/#atronsa`,
      name: "Atronsa",
      url: "https://atronsa.com",
      description: "Offline-first contactless payments for Ethiopia.",
      founder: { "@id": `${site.url}/#person` },
      employee: {
        "@type": "OrganizationRole",
        roleName: "Founder & CEO",
        startDate: "2026-08",
        employee: { "@id": `${site.url}/#person` },
      },
    },
    {
      "@type": "Organization",
      "@id": `${site.url}/#mezgeb`,
      name: "Mezgeb",
      url: "https://mezgeb.io",
      description: "Open-source project under Atronsa.",
      founder: { "@id": `${site.url}/#person` },
      parentOrganization: { "@id": `${site.url}/#atronsa` },
      sameAs: mezgebRepos.map((r) => r.link),
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      description: site.description,
      inLanguage: "en",
      publisher: { "@id": `${site.url}/#person` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${site.url}/#profile`,
      url: site.url,
      name: title,
      isPartOf: { "@id": `${site.url}/#website` },
      mainEntity: { "@id": `${site.url}/#person` },
      about: { "@id": `${site.url}/#person` },
    },
  ],
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ebebea" },
    { media: "(prefers-color-scheme: dark)", color: "#111212" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={interTight.variable} suppressHydrationWarning>
      <body>
        <script
          type="application/ld+json"
          // "<" is escaped so the JSON can never close the script tag early.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-C436WFRZQV"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-C436WFRZQV');`}
        </Script>
      </body>
    </html>
  );
}
