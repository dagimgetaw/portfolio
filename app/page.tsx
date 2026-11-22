import ThemeToggle from "@/components/ThemeToggle";
import ContactForm from "@/components/ContactForm";
import MobileNav from "@/components/MobileNav";
import {
  experiences,
  mezgebRepos,
  navItems,
  projects,
  site,
  socialLinks,
} from "@/data";

/* Rows in a list fade when another row is hovered. */
const listClass = "group/list m-0 list-none p-0";
const rowClass =
  "grid grid-cols-[1fr_auto] items-baseline gap-x-4 gap-y-1 py-[22px] transition-opacity duration-300 " +
  "md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.6fr)_11em] md:gap-6 " +
  "group-hover/list:opacity-30 hover:opacity-100! focus-visible:opacity-100!";
const rowName = "text-lg font-medium tracking-[-0.01em]";
const rowMeta = "col-span-full row-start-2 min-w-0 text-muted md:col-auto md:row-auto";
const rowEnd = "whitespace-nowrap text-right text-muted tabular-nums";

function Section({
  id,
  label,
  aside,
  children,
}: {
  id: string;
  label: string;
  aside: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-5 py-[clamp(56px,8vw,112px)]">
      <div className="wrap">
        <div className="flex justify-between gap-4 border-b border-line pb-3.5 text-muted">
          <span>{label}</span>
          <span>{aside}</span>
        </div>
        {children}
      </div>
    </section>
  );
}

export default function Home() {
  const firstYear = experiences.at(-1)?.duration.match(/\d{4}/)?.[0];

  return (
    <>
      <header className="sticky top-0 z-10 bg-bg">
        <div className="wrap relative grid grid-cols-[1fr_auto] items-center py-[22px] lg:grid-cols-[1fr_auto_1fr]">
          <a href="#top">{site.name}</a>
          <nav aria-label="Sections" className="hidden gap-7 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.link}
                href={item.link}
                className="transition-opacity hover:opacity-55"
              >
                {item.name}
              </a>
            ))}
          </nav>
          <div className="-my-2 flex items-center gap-3 justify-self-end">
            <ThemeToggle />
            <MobileNav items={navItems} />
          </div>
        </div>
      </header>

      <main id="top">
        {/* Fills the first screen (minus the ~66px header); headline sits at the bottom. */}
        <div className="wrap relative flex min-h-[calc(100svh-66px)] flex-col justify-end pt-24 pb-[clamp(32px,5vw,72px)]">
          <h1 className="m-0 text-hero font-normal break-words">
            <span className="block">{site.headline[0]}</span>
            <span className="block">{site.headline[1]}</span>
          </h1>
          <p
            className={
              "mt-5 mb-0 max-w-[22em] leading-[1.4] " +
              "xl:absolute xl:mt-0 xl:w-[24em] " +
              "xl:right-[max(var(--gutter),env(safe-area-inset-right,0px))] " +
              "xl:bottom-[calc(clamp(32px,5vw,72px)+0.4em)]"
            }
          >
            {site.caption}
          </p>
        </div>

        <Section id="about" label="About" aside={site.location}>
          <p className="mt-8 mb-0 max-w-[22em] text-big text-balance">
            I build products end to end, from the database to the last pixel.{" "}
            <span className="text-muted">
              Currently building Atronsa and Mezgeb.
            </span>
          </p>
        </Section>

        <Section
          id="work"
          label="Selected work"
          aside={`${projects.length} projects`}
        >
          <ul className={listClass}>
            {projects.map((p) => (
              <li key={p.title} className="border-b border-line">
                <a
                  className={rowClass}
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={rowName}>{p.title}</span>
                  <span className={rowMeta}>{p.description}</span>
                  <span className={rowEnd}>{p.tag} &#8599;</span>
                </a>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="contribute" label="Contribute" aside="Open source">
          <p className="mt-8 mb-0 max-w-[22em] text-big text-balance">
            Mezgeb is open source.{" "}
            <span className="text-muted">
              Pick an issue, open a pull request, or just star the repo.
            </span>
          </p>
          <div className="group/repos mt-[clamp(40px,5vw,72px)] grid grid-cols-1 gap-[clamp(24px,4vw,64px)] md:grid-cols-2">
            {mezgebRepos.map((r) => (
              <a
                key={r.link}
                href={r.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-2.5 border-t border-fg pt-[18px] transition-opacity duration-300 group-hover/repos:opacity-30 hover:opacity-100! focus-visible:opacity-100!"
              >
                <span className="text-muted">{r.stack}</span>
                <span className="text-[clamp(1.75rem,3.5vw,2.75rem)] leading-none tracking-[-0.035em]">
                  {r.title}
                </span>
                <span className="text-muted">{r.description}</span>
                <span className="mt-2 break-words text-muted">
                  {r.link.replace("https://", "")}&nbsp;&#8599;
                </span>
              </a>
            ))}
          </div>
        </Section>

        <Section
          id="experience"
          label="Experience"
          aside={`${firstYear} to now`}
        >
          <ul className={listClass}>
            {experiences.map((x) => (
              <li
                key={`${x.company}-${x.role}`}
                className="border-b border-line"
              >
                <div className={rowClass}>
                  <span className={rowName}>{x.company}</span>
                  <span className={rowMeta}>{x.role}</span>
                  <span className={rowEnd}>{x.duration}</span>
                </div>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="contact" label="Contact" aside="Usually replies within a day">
          <div className="mt-8 grid grid-cols-1 items-start gap-[clamp(32px,6vw,96px)] md:grid-cols-2">
            <div>
              {/* Stacked (below md): one line with a down arrow pointing at the form.
                  Side by side: two lines with a right arrow. */}
              <h2 className="m-0 whitespace-nowrap text-display font-normal max-md:text-[11vw]">
                Drop me <br className="hidden md:inline" />a line&nbsp;
                <span aria-hidden="true">
                  <span className="md:hidden">&darr;</span>
                  <span className="hidden md:inline">&rarr;</span>
                </span>
              </h2>
              <a
                className="mt-5 inline-block text-muted transition-colors hover:text-fg"
                href={`mailto:${site.email}`}
              >
                {site.email}
              </a>
            </div>
            <ContactForm />
          </div>
        </Section>
      </main>

      <footer>
        <div className="wrap flex flex-col gap-4 border-t border-line pt-7 pb-[max(2.25rem,env(safe-area-inset-bottom))] items-center text-center text-muted sm:flex-row sm:justify-between sm:text-left">
          <span>
            &copy; {new Date().getFullYear()} {site.name}
          </span>
          <nav aria-label="Social" className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {socialLinks.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-fg"
              >
                {s.name}
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </>
  );
}
