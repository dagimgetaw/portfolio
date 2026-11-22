import type { MetadataRoute } from "next";
import { site } from "@/data";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Everyone, including AI crawlers (GPTBot, ClaudeBot, PerplexityBot, …),
      // may read the site so it can show up in search and AI answers.
      { userAgent: "*", allow: "/" },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
