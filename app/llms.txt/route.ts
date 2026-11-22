import {
  experiences,
  mezgebRepos,
  projects,
  site,
  socialLinks,
} from "@/data";

/* llms.txt (https://llmstxt.org): a plain-Markdown summary of the site for
   AI assistants and crawlers. Built from the same data as the homepage. */

export const dynamic = "force-static";

export function GET() {
  const body = `# ${site.name}

> ${site.description}

${site.name} is a ${site.role.toLowerCase()} based in ${site.location}. ${site.caption}

## Roles

- Founder & CEO of [Atronsa](https://atronsa.com): offline-first contactless payments for Ethiopia
- Founder and open-source contributor of [Mezgeb](https://mezgeb.io): open-source project under Atronsa

## Contact

- Website: ${site.url}
- Email: ${site.email}
${socialLinks.map((s) => `- ${s.name}: ${s.url}`).join("\n")}

## Projects

${projects.map((p) => `- [${p.title}](${p.link}): ${p.description}`).join("\n")}

## Open source

${mezgebRepos
  .map((r) => `- [${r.title}](${r.link}) (${r.stack}): ${r.description}`)
  .join("\n")}

## Experience

${experiences.map((x) => `- ${x.role}, ${x.company} (${x.duration})`).join("\n")}

## Optional

- [Portfolio homepage](${site.url}): About, selected work, experience, and contact form
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
