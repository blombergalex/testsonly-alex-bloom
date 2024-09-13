import { AboutMeType } from "@/utils/types";
import Reveal from "../../utils/reveal";

const AboutMe = ({ start, experience, nextStep, purpose }: AboutMeType) => {
  return (
    <section
      data-testid="about-me-section"
      className="flex justify-center p-6 md:p-14"
    >
      <div className="text-gray-200 text-sm leading-6 bg-black space-y-5 md:text-lg">
        <h2 className="text-gray-200 bg-black text-center py-6 font-SansNarrow font-semi-bold text-lg sticky top-[0] z-10 md:text-2xl md:py-12 md:top-[61px]">
          About Me
        </h2>
        <Reveal>
          <h3 className="text-xl font-SansNarrow pt-5 md:text-2xl">
            I'm Alexandra,
          </h3>
        </Reveal>
        <Reveal>
          <p data-testid="start" className="opacity-85">
            {start}
          </p>
        </Reveal>
        <Reveal>
          <p data-testid="experience" className="opacity-85">
            {experience}
          </p>
        </Reveal>
        <Reveal>
          <p data-testid="next-step" className="text-amber-500">
            {nextStep}
          </p>
        </Reveal>
        <Reveal>
          <p data-testid="purpose" className="opacity-85">
            {purpose}
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default AboutMe;
