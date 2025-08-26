"use client";

import { cn } from "@/lib/utils";
import GridGlobe from "./GridGlobe";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-3 lg:gap-4 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  stats,
  link,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  stats?: { number: string; text: string }[];
  link?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background:
          "rgba(17, 24, 39, 0.5) linear-gradient(90deg, rgba(17,24,39,0.5) 0%, rgba(31,41,55,0.5) 100%)",
      }}
    >
      <div className="h-full">
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>

        <div
          className={cn(
            titleClassName,
            "text-white transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-8"
          )}
        >
          <div className="font-text font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>

          <div className={`font-text text-sm lg:text-lg font-semibold z-10`}>
            {title}
          </div>

          {id === 2 && <GridGlobe />}

          {/* Email Copy in Item 4 */}
          {id === 4 && (
            <div className="relative font-text text-xs sm:text-sm text-neutral-300">
              <p>
                {link}{" "}
                <span
                  className="ml-1 font-semibold text-white border-b-2 border-collapse border-white hover:border-solid transition-all cursor-pointer"
                  onClick={() => {
                    window.open(
                      "https://docs.google.com/document/d/e/2PACX-1vQK7LaetuNvifxfJx0MzfFpWmOeNJTYGDls-D8uumk-Wrg3o0WGNyE6qYRR-d2W-nhJpntP8oBeSRP1/pub?embedded=true",
                      "_blank"
                    );
                  }}
                >
                  Download Resume
                </span>
              </p>
            </div>
          )}

          {/* Stats in Item 5 */}
          {id === 5 && stats && (
            <div className="grid grid-cols-3 gap-4 mt-4 w-full">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center font-text text-center"
                >
                  <span className="text-2xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400">
                    {stat.number}
                  </span>
                  <span className="text-[10px] sm:text-xs pt-2 text-[#C1C2D3]">
                    {stat.text}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
