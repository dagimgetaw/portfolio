import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./provide";
import { ThemeClientWrapper } from "./ThemeClientWrapper";
import { Poppins, Sacramento } from "next/font/google";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-text",
});

const sacramento = Sacramento({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-logo",
});

export const metadata: Metadata = {
  title: "Dagim's Portfolio",
  description:
    "Dagim Getaw is a passionate Ethiopian software engineer with expertise in modern web development, machine learning, AI, and full-stack technologies.",
  keywords: [
    "Dagim",
    "Dagim Getaw",
    "Ethiopian developer",
    "Full-stack developer",
    "React developer",
    "Next.js developer",
    "Portfolio",
    "Web developer Ethiopia",
    "Open source Ethiopia",
    "TypeScript developer",
  ],
  authors: [{ name: "Dagim Getaw" }],
  creator: "Dagim Getaw",
  metadataBase: new URL("https://dagim.dev"),
  openGraph: {
    title: "Dagim's Portfolio",
    description:
      "Dagim Getaw is a passionate Ethiopian software engineer with expertise in modern web development, machine learning, AI, and full-stack technologies.",
    url: "https://dagim.dev",
    siteName: "Dagim.dev",
    images: [
      {
        url: "https://dagim.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dagim Portfolio Preview",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dagim's Portfolio",
    description:
      "Dagim Getaw is a passionate Ethiopian software engineer with expertise in modern web development, machine learning, AI, and full-stack technologies.",
    images: ["https://dagim.dev/og-image.png"],
    creator: "@dagimdev",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://dagim.dev" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-C436WFRZQV"
        ></Script>
        <Script id="google-analytics">
          {`  window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-C436WFRZQV');`}
        </Script>
      </head>

      <body className={`${poppins.variable} ${sacramento.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeClientWrapper>{children}</ThemeClientWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
