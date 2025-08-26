"use client";

import { useState, useEffect, useCallback } from "react";
import { navLinks } from "@/data/index";
import { HoverBorderGradient } from "./ui/HoverBorderGradient";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 10);
    setMobileMenuOpen(false);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const shouldLock = mobileMenuOpen;

    body.style.overflow = shouldLock ? "hidden" : "";
    html.style.overflow = shouldLock ? "hidden" : "";

    return () => {
      body.style.overflow = "";
      html.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (
        !target.closest(".mobile-menu") &&
        !target.closest(".mobile-toggle")
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: string
  ) => {
    e.preventDefault();
    const targetId = link.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur border-b border-neutral-800"
          : "bg-transparent"
      }`}
    >
      <div className="px-4 sm:px-10 lg:px-12 py-4 sm:py-5 flex items-center justify-between">
        <a
          href="#hero"
          className="font-logo text-white text-2xl sm:text-3xl z-50"
        >
          dagimgetaw
        </a>

        <nav className="hidden sm:flex items-center font-text">
          <ul className="flex gap-4 sm:gap-3 md:gap-6 text-xs text-white">
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group relative">
                <a
                  href={link}
                  onClick={(e) => handleNavClick(e, link)}
                  className="cursor-pointer"
                >
                  <span>{name}</span>
                  <span className="underline absolute left-0 bottom-0 w-0 group-hover:w-full transition-[width] duration-300 h-px bg-purple" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden sm:block">
          <a
            href="https://www.upwork.com/freelancers/~0131ed92dbfad66547"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HoverBorderGradient>Upwork</HoverBorderGradient>
          </a>
        </div>

        <button
          className="mobile-toggle sm:hidden z-50 p-2 text-white hover:text-purple-400 transition-colors duration-200"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span
              className={`block w-4 h-0.5 bg-current transition duration-300 ${
                mobileMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-1"
              }`}
            />
            <span
              className={`block w-4 h-0.5 bg-current transition duration-300 ${
                mobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block w-4 h-0.5 bg-current transition duration-300 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"
              }`}
            />
          </div>
        </button>

        {mobileMenuOpen && (
          <div
            className="mobile-menu fixed inset-0 bg-black/90 backdrop-blur-sm z-40 sm:hidden"
            role="dialog"
            id="mobile-menu"
            aria-modal="true"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              <nav className="text-center">
                <ul className="space-y-6">
                  {navLinks.map(({ link, name }) => (
                    <li key={name} className="group">
                      <a
                        href={link}
                        className="relative inline-block text-xs font-text text-white hover:text-purple focus-visible:text-purple transition-colors duration-200 font-medium cursor-pointer"
                        onClick={(e) => handleNavClick(e, link)}
                      >
                        {name}
                        <span className="absolute left-0 -bottom-1 h-px w-0 bg-purple-400 transition-all duration-300 group-hover:w-full" />
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="pt-4">
                <a
                  href="https://www.upwork.com/freelancers/~0131ed92dbfad66547"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <HoverBorderGradient>Upwork</HoverBorderGradient>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
