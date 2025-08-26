import { DefaultSeoProps } from "next-seo";

const SEOConfig: DefaultSeoProps = {
  title: "Dagim's Portfolio",
  description:
    "Dagim Getaw is a passionate Ethiopian software engineer with expertise in modern web development, machine learning, AI, and full-stack technologies.",
  canonical: "https://dagim.dev",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dagim.dev",
    site_name: "Dagim.dev",
    title: "Dagim's Portfolio",
    description:
      "Dagim Getaw is a passionate Ethiopian software engineer with expertise in modern web development, machine learning, AI, and full-stack technologies.",
    images: [
      {
        url: "https://dagim.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dagim Portfolio Preview",
      },
    ],
  },
  twitter: {
    handle: "@dagimdev",
    site: "@dagimdev",
    cardType: "summary_large_image",
  },
};

export default SEOConfig;
