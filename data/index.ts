export const site = {
  name: "Dagim Getaw",
  url: "https://dagim.dev",
  role: "Software Engineer",
  // Used for the page title, search results and social previews.
  title: "Dagim Getaw — Founder & CEO of Atronsa, Founder of Mezgeb",
  description:
    "Dagim Getaw is the founder and CEO of Atronsa, building offline-first contactless payments for Ethiopia, and the founder and open-source contributor of Mezgeb. Software engineer based in Addis Ababa.",
  image: "/dagim.jpg",
  x: "@dagim404",
  headline: ["Software", "Engineer"],
  caption:
    "Backend engineer focused on APIs, databases, and building reliable software.",
  location: "Addis Ababa, Ethiopia",
  email: "dagimgetaw27@gmail.com",
};

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Work", link: "#work" },
  { name: "Contribute", link: "#contribute" },
  { name: "Experience", link: "#experience" },
  { name: "Drop me a line", link: "#contact" },
];

export type Project = {
  title: string;
  description: string;
  tag: string;
  link: string;
};

export const projects: Project[] = [
  {
    title: "Mezgeb",
    description: "Double-entry ledger with offline sync and cryptographically signed transactions",
    tag: "Live",
    link: "https://mezgeb.io",
  },
  {
    title: "Atronsa",
    description: "Offline-first contactless payments for Ethiopia",
    tag: "Live",
    link: "https://atronsa.com",
  },
  {
    title: "Sahwa Coffee",
    description: "Website for Sahwa Coffee",
    tag: "Live",
    link: "https://sahwacoffee.com/",
  },
  {
    title: "ASTU RFID Integration",
    description: "RFID integration for Adama Science and Technology University",
    tag: "Code",
    link: "https://github.com/dagimgetaw/astu-rfid-integration",
  },
  {
    title: "Satellite Image Enhancement",
    description: "React and FastAPI with DSen2 and Real-ESRGAN models",
    tag: "Code",
    link: "https://github.com/dagimgetaw/sie",
  },
  {
    title: "YC Startup Directory",
    description: "Next.js, NextAuth, Sanity CMS and Sentry",
    tag: "Live",
    link: "https://yc-dagimgetaw.vercel.app/",
  },
];

export type Repo = {
  title: string;
  stack: string;
  description: string;
  link: string;
};

export const mezgebRepos: Repo[] = [
  {
    title: "Mezgeb backend",
    stack: "Rust",
    description: "The API and core services behind Mezgeb.",
    link: "https://github.com/atronsa/mezgeb",
  },
  {
    title: "Mezgeb web",
    stack: "Astro + Next.js",
    description: "The website and web app for Mezgeb.",
    link: "https://github.com/atronsa/mezgeb.io",
  },
];

export type Experience = {
  company: string;
  role: string;
  duration: string;
};

// Newest first.
export const experiences: Experience[] = [
  {
    company: "Mezgeb",
    role: "Founder / Open Source Contributor",
    duration: "Nov 2026 – Present",
  },
  { company: "Atronsa", role: "Founder / CEO", duration: "Aug 2026 – Present" },
  {
    company: "Adama Science and Technology University",
    role: "Hardware & Software Engineering Intern",
    duration: "Jul 2026 – Sep 2026",
  },
  {
    company: "Space Science and Geospatial Institute",
    role: "Machine Learning & Geospatial Technology Intern",
    duration: "Jun 2025 – Sep 2025",
  },
  {
    company: "Upwork",
    role: "Full-Stack Developer",
    duration: "Feb 2025 – Nov 2025",
  },
  {
    company: "HelpEthiopia",
    role: "Lead Full-Stack Developer",
    duration: "Mar 2024 – Feb 2025",
  },
  {
    company: "Kasma Solutions",
    role: "Full-Stack Web Developer",
    duration: "Mar 2024 – Jun 2024",
  },
  {
    company: "Information Network Security Agency",
    role: "Penetration Tester & Vulnerability Analysis Intern",
    duration: "Jun 2021 – Oct 2021",
  },
];

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/dagimgetaw" },
  { name: "LinkedIn", url: "https://linkedin.com/in/dagimgetaw" },
  { name: "Telegram", url: "https://t.me/dagimdev" },
  { name: "X", url: "https://x.com/dagim404" },
];
