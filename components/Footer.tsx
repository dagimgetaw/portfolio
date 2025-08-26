import React from "react";
import Link from "next/link";
import { socialMedia } from "@/data/index";
import { Assets } from "@/data/assets";

const Icon = ({ name }: { name: string }) => {
  switch (name) {
    case "FaGithub":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 .5a12 12 0 00-3.79 23.39c.6.11.82-.26.82-.58l-.01-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.35-1.76-1.35-1.76-1.1-.75.08-.73.08-.73 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.83 1.31 3.52 1 .11-.78.42-1.31.76-1.61-2.66-.31-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.31-.54-1.56.12-3.25 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.69.24 2.94.12 3.25.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.61-5.49 5.92.43.37.81 1.1.81 2.22l-.01 3.29c0 .32.22.69.82.57A12 12 0 0012 .5z" />
        </svg>
      );
    case "FaLinkedin":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7 0h3.8v2.2h.05c.53-1 1.83-2.2 3.76-2.2 4.02 0 4.76 2.65 4.76 6.1V24h-4v-7.1c0-1.7-.03-3.9-2.4-3.9-2.4 0-2.77 1.86-2.77 3.77V24h-4V8z" />
        </svg>
      );
    case "FaTelegram":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M9.04 15.35l-.37 5.22c.53 0 .76-.23 1.04-.5l2.5-2.4 5.18 3.8c.95.52 1.63.25 1.9-.88l3.45-16.1h.01c.31-1.45-.52-2.02-1.46-1.67L1.58 9.7C.17 10.27.19 11.08 1.34 11.43l5.13 1.6 11.9-7.5c.56-.37 1.07-.17.65.2" />
        </svg>
      );
    case "SiGmail":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 13.5L1.5 6v12A1.5 1.5 0 003 19.5h18a1.5 1.5 0 001.5-1.5V6L12 13.5z" />
          <path d="M21 4.5H3c-.55 0-1 .45-1 1v.42l10 7.08 10-7.08V5.5c0-.55-.45-1-1-1z" />
        </svg>
      );
    default:
      return null;
  }
};

const Footer = () => {
  return (
    <footer className="relative overflow-hidden text-gray-300 pt-8 pb-2 sm:pt-6 sm:pb-6 md:max-w-5xl max-w-7xl mx-auto">
      <div className="w-full absolute left-0 -bottom-56 sm:-bottom-64 md:-bottom-72 min-h-[18rem] sm:min-h-[22rem] pointer-events-none">
        <img
          src={Assets.footer}
          alt="grid"
          className="w-full h-full opacity-60 object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="relative z-10 font-text">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-purple to-transparent" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:mt-2 mt-6 mx-20 md:mx-10">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-xs">
              &copy; {new Date().getFullYear()} Dagim Getaw. All rights
              reserved.
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex flex-wrap justify-center mb-2 sm:mb-0">
            {socialMedia.map(({ id, name, url, icon }) => {
              return (
                <Link
                  key={id}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group text-xl md:text-2xl rounded-full p-2 md:p-2 transition transform hover:scale-110 hover:text-purple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  aria-label={name}
                >
                  <span className="inline-flex items-center justify-center rounded-full bg-white/0 group-hover:bg-purple/10 group-focus:bg-purple/10 border border-transparent group-hover:border-purple/30 group-focus:border-purple/30 p-2 md:p-2.5 transition-colors duration-300">
                    <Icon name={icon} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
