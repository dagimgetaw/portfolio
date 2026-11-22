"use client";

import { useEffect, useState } from "react";

type Item = { name: string; link: string };

/* Menu button + dropdown panel shown below the lg breakpoint. */
export default function MobileNav({ items }: { items: Item[] }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="inline-flex size-9 cursor-pointer items-center justify-center border-0 bg-transparent text-inherit transition-opacity hover:opacity-55 lg:hidden"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((o) => !o)}
      >
        <svg
          className="size-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          aria-hidden="true"
        >
          {open ? (
            <path d="M6 6l12 12M18 6L6 18" />
          ) : (
            <path d="M4 8h16M4 16h16" />
          )}
        </svg>
      </button>

      <nav
        id="mobile-nav"
        aria-label="Sections"
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-line bg-bg lg:hidden"
      >
        <ul className="wrap m-0 flex list-none flex-col py-2">
          {items.map((item) => (
            <li key={item.link} className="border-b border-line last:border-b-0">
              <a
                href={item.link}
                className="block py-4 text-2xl tracking-[-0.02em] transition-opacity hover:opacity-55"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
