"use client";

import { useState } from "react";
import {
  IconBriefcase,
  IconCalendar,
  IconMapPin,
  IconChevronDown,
  IconChevronUp,
  IconCode,
  IconRocket,
  IconStarFilled,
  IconArrowRight,
} from "@tabler/icons-react";
import { workExperiences } from "@/data/index";

type WorkExperienceItem = (typeof workExperiences)[number];

const ExperienceCard = ({
  experience,
  index,
  isExpanded,
  onToggle,
}: {
  experience: WorkExperienceItem;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case "full-time":
        return <IconBriefcase className="h-4 w-4" />;
      case "contract":
        return <IconCode className="h-4 w-4" />;
      case "internship":
        return <IconRocket className="h-4 w-4" />;
      default:
        return <IconBriefcase className="h-4 w-4" />;
    }
  };

  return (
    <div className="relative">
      {index !== workExperiences.length - 1 && (
        <div className="absolute left-4 sm:left-6 sm:top-16 top-14 h-full w-0.5 bg-gradient-to-b from-purple to-gray-600" />
      )}

      <div className="absolute left-3 sm:left-4 mt-2 top-8 sm:h-4 sm:w-4 h-3 w-3 rounded-full bg-black-100 border-2 border-purple shadow-lg z-10" />

      <div className="ml-10 sm:ml-16 mb-8">
        <div
          className="group cursor-pointer rounded-xl border border-gray-800 bg-gray-900/70 p-5 sm:p-6 shadow-lg transition-all duration-300"
          onClick={onToggle}
          role="button"
          aria-expanded={isExpanded}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onToggle();
            }
          }}
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <div className="text-purple">
                  {getTypeIcon(experience.type)}
                </div>
                <h1 className="sm:text-lg text-sm font-bold text-white">
                  {experience.title}
                </h1>
              </div>
              <p className="text-gray-300 text-xs font-semibold mb-1">
                {experience.company}
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-xs pt-2 text-gray-400">
                <div className="flex items-center gap-1">
                  <IconCalendar className="h-3 w-3 text-purple-400" />
                  <span>{experience.duration}</span>
                </div>
                <div className="flex items-center gap-1 ml-auto">
                  <IconMapPin className="h-3 w-3 text-purple-400" />
                  <span>{experience.location}</span>
                </div>
              </div>
            </div>
            <div className="text-gray-400 transition-transform duration-200 group-hover:text-purple-400 ml-2">
              {isExpanded ? (
                <IconChevronUp className="h-5 w-5" />
              ) : (
                <IconChevronDown className="h-5 w-5" />
              )}
            </div>
          </div>

          <p className="text-gray-300 text-xs mb-4 leading-relaxed">
            {experience.description}
          </p>

          <div className="flex flex-wrap sm:gap-2 gap-1 sm:mb-4 mb-2">
            {experience.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-3 py-1 sm:text-xs text-[10px] font-medium bg-gray-800/70 text-gray-300 border border-gray-700 rounded-full transition-colors hover:bg-purple/20 hover:border-purple/30"
              >
                {tech}
              </span>
            ))}
          </div>

          {isExpanded && (
            <div className="overflow-hidden animate-fadeIn">
              <div className="border-t border-gray-700 pt-4 mt-4">
                <h2 className="font-bold sm:text-sm text-xs text-gray-300 mb-3 flex items-center gap-2">
                  <IconStarFilled className="h-4 w-4 text-purple-400" />
                  Key Achievements
                </h2>
                <ul className="space-y-3">
                  {experience.achievements.map(
                    (achievement, achievementIndex) => (
                      <li
                        key={achievementIndex}
                        className="text-xs text-gray-300 flex items-start gap-3"
                      >
                        <IconArrowRight className="h-3 w-3 text-purple-400 mt-1 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default function Experience() {
  const [expandedCards, setExpandedCards] = useState<number[]>([0]);
  const [showAll, setShowAll] = useState(false);
  const initialDisplayCount = 3;

  const toggleCard = (index: number) => {
    setExpandedCards((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const displayedExperiences = showAll
    ? workExperiences
    : workExperiences.slice(0, initialDisplayCount);

  return (
    <section
      id="experience"
      className="max-w-4xl mx-auto sm:pr-6 sm:pl-6 pr-3 pl-0 md:pt-10 sm:pt-6 pt-2 pb-16 font-text"
    >
      <div className="text-center md:mb-16 sm:mb-10 mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Work <span className="text-purple">Experience</span>
        </h1>
        <p className="text-gray-400 max-w-lg mx-auto mt-3 text-sm">
          My professional journey and key accomplishments
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-transparent mx-auto mt-4 rounded-full" />
      </div>

      <div className="relative">
        {displayedExperiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            experience={experience}
            index={index}
            isExpanded={expandedCards.includes(index)}
            onToggle={() => toggleCard(index)}
          />
        ))}
      </div>

      {workExperiences.length > initialDisplayCount && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center text-xs sm:text-sm font-text text-purple rounded-full font-medium"
          >
            {showAll
              ? "Show Less"
              : `View All ${workExperiences.length} Experiences`}
            {showAll ? (
              <IconChevronUp className="h-4 w-4 sm:h-5 sm:w-5" />
            ) : (
              <IconChevronDown className="h-4 w-4 sm:h-5 sm:w-5" />
            )}
          </button>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
