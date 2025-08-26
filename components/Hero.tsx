import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { MagicButton } from "./ui/MagicButton";

const ArrowIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
  </svg>
);

const Hero = () => {
  return (
    <div className="min-h-[90vh] sm:min-h-[92vh] md:min-h-screen w-full flex font-text items-center justify-center bg-black/[1] antialiased bg-grid-white/[0.00] overflow-hidden">
      <Spotlight />
      <div className="px-2 sm:px-6 md:px-8 lg:px-10 relative z-10 w-full pt-16 sm:pt-20 md:pt-0">
        <div className="max-w-5xl sm:max-w-3xl mx-auto">
          <TextGenerateEffect
            className="text-center font-text mb-6 sm:mb-0 sm:mt-6 leading-relaxed"
            words="Transforming Concepts into Seamless User Experiences"
          />
        </div>
        <p className="mt-4 sm:mt-6 md:mt-6 text-xs md:text-sm text-neutral-300 max-w-3xl text-center mx-auto font-text px-2">
          Hi, I am Dagim, a Software Engineer based in Addis Ababa, Ethiopia.
        </p>
        <div className="flex justify-center mt-8 sm:mt-6 md:mt-2">
          <a href="#projects">
            <MagicButton
              title="Show my work"
              icon={<ArrowIcon />}
              position="right"
              otherClasses="font-text text-xs"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
