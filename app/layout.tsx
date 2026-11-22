import type { Metadata, Viewport } from "next";
import { Inter_Tight } from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "./provide";
import "./globals.css";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter-tight",
  display: "swap",
});

const description =
  "Dagim Getaw is a software engineer from Addis Ababa, Ethiopia, focused on APIs, databases, and building reliable software.";

export const metadata: Metadata = {
  title: "Dagim Getaw — Software Engineer",
  description,
  keywords: [
    "Dagim",
    "Dagim Getaw",
    "Ethiopian developer",
    "Backend engineer",
    "Software engineer",
    "Full-stack developer",
    "Atronsa",
    "Mezgeb",
    "Portfolio",
  ],
  authors: [{ name: "Dagim Getaw" }],
  creator: "Dagim Getaw",
  metadataBase: new URL("https://dagim.dev"),
  alternates: { canonical: "https://dagim.dev" },
  openGraph: {
    title: "Dagim Getaw — Software Engineer",
    description,
    url: "https://dagim.dev",
    siteName: "Dagim.dev",
    images: [
      {
        url: "https://dagim.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dagim Getaw portfolio",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dagim Getaw — Software Engineer",
    description,
    images: ["https://dagim.dev/og-image.png"],
    creator: "@dagimdev",
  },
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
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-C436WFRZQV');`}
        </Script>
      </body>
    </html>
  );
}
