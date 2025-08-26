"use client";

import { useState, useCallback, memo } from "react";
import { projects } from "@/data/index";
import { PinContainer } from "./ui/PinContainer";
import Image from "next/image";
import { Assets } from "@/data/assets";

const ProjectItem = memo(
  ({
    item,
    isActive,
    onMouseEnter,
    onMouseLeave,
  }: {
    item: any;
    isActive: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
  }) => {
    // Determine if the project has a valid link
    const hasValidLink = !item.private && (item.deploy || item.link);
    const projectLink = item.private
      ? ""
      : item.deploy
      ? item.link
      : item.link || "#";

    return (
      <article
        role="listitem"
        aria-labelledby={`project-title-${item.id}`}
        className="lg:min-h-[20rem] h-[20rem] flex items-center justify-center"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <PinContainer
          title={item.title}
          href={hasValidLink ? projectLink : undefined}
          className="w-full h-full"
        >
          <div className="relative bg-gray-900/50 border border-transparent flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[25vh]">
            <Image
              src={item.img}
              alt={`${item.title} project screenshot`}
              className="z-2 absolute bottom-0 w-full h-full object-cover"
              fill
              loading="lazy"
              decoding="async"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

            {item.private ? (
              <button
                className="flex items-center px-3 py-2 rounded-full bg-gray-800 text-gray-400 text-xs font-medium cursor-not-allowed"
                disabled
                aria-label="Project is private"
              >
                Private
              </button>
            ) : item.deploy ? (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-3 py-2 rounded-full bg-purple transition-colors text-white text-xs font-medium focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2"
                aria-label={`View ${item.title} live demo`}
                onClick={(e) => e.stopPropagation()}
              >
                Live Demo
              </a>
            ) : (
              <button
                className="flex items-center px-3 py-2 rounded-full bg-gray-700 text-gray-400 text-xs font-medium cursor-not-allowed"
                disabled
                aria-label="Demo only - no live version available"
              >
                Demo Only
              </button>
            )}
          </div>

          <div className="p-4">
            <h2
              id={`project-title-text-${item.id}`}
              className="font-bold text-lg pb-2 line-clamp-1 text-white"
            >
              {item.title}
            </h2>
            <p className="text-xs line-clamp-2 leading-relaxed text-gray-300">
              {item.des}
            </p>

            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center" aria-label="Technologies used">
                {item.iconLists.map((icon: string, index: number) => (
                  <div
                    key={`${item.id}-icon-${index}`}
                    className="border border-white/[.2] rounded-full lg:w-9 lg:h-9 w-8 h-8 flex justify-center items-center"
                    style={{
                      transform: `translateX(-${5 * index + 2}px)`,
                    }}
                  >
                    <Image
                      src={icon}
                      alt={`Technology icon ${index + 1}`}
                      className="p-2"
                      width={34}
                      height={34}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                ))}
              </div>

              <div className="flex space-x-3">
                {!item.private && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                    aria-label={`View ${item.title} source code on GitHub`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Image
                      src={Assets.gg}
                      alt="GitHub icon"
                      width={16}
                      height={16}
                      className="w-4 h-4"
                      loading="lazy"
                      decoding="async"
                    />
                  </a>
                )}

                {item.private ? (
                  <button
                    className="flex items-center px-3 py-2 rounded-full bg-gray-800 text-gray-400 text-xs font-medium cursor-not-allowed"
                    disabled
                    aria-label="Project is private"
                  >
                    Private
                  </button>
                ) : item.deploy ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-3 py-2 rounded-full bg-purple transition-colors text-gray-800 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2"
                    aria-label={`View ${item.title} live demo`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    Live Demo
                  </a>
                ) : (
                  <button
                    className="flex items-center px-3 py-2 rounded-full bg-gray-700 text-gray-400 text-xs font-medium cursor-not-allowed"
                    disabled
                    aria-label="Demo only - no live version available"
                  >
                    Demo Only
                  </button>
                )}
              </div>
            </div>
          </div>
        </PinContainer>
      </article>
    );
  }
);

ProjectItem.displayName = "ProjectItem";

const Project = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const handleMouseEnter = useCallback((id: number) => {
    setActiveProject(id);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setActiveProject(null);
  }, []);

  return (
    <section
      id="projects"
      className="py-20 font-text"
      aria-labelledby="projects-heading"
    >
      <div className="container mx-auto px-4">
        <header className="text-center pb-6 sm:pb-8 md:pb-10">
          <h1
            id="projects-heading"
            className="font-bold text-3xl md:text-4xl text-white"
          >
            Recent
            <span className="text-purple"> Projects</span>
          </h1>
        </header>

        <div
          className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-20 p-4 items-center justify-center max-w-7xl mx-auto"
          role="list"
          aria-label="Project showcase"
        >
          {projects.map((item) => (
            <ProjectItem
              key={item.id}
              item={item}
              isActive={activeProject === item.id}
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={handleMouseLeave}
            />
          ))}
        </div>

        <div className="text-center mt-20">
          <a
            href="https://github.com/dagimgetaw"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex text-xs sm:text-sm items-center text-purple"
            aria-label="View more projects on GitHub"
          >
            View More on GitHub
            <Image
              src={Assets.arrow}
              alt="Arrow icon"
              className="ms-2"
              width={10}
              height={10}
              loading="lazy"
              decoding="async"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Project;
