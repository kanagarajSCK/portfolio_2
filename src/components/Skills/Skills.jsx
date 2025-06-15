import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-16 px-4 sm:px-6 md:px-[5vw] lg:px-[10vw] font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <div className="text-center mb-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
      <p className="text-gray-400 mt-4 text-base sm:text-lg font-medium">
        A collection of my technical skills and expertise honed through various projects and experiences
      </p>
    </div>

    {/* Skill Cards */}
    <div className="flex flex-wrap justify-center gap-5 py-6">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="bg-gray-900 backdrop-blur-md px-4 py-4 w-full sm:w-[90%] md:w-[45%] lg:w-[30%] rounded-xl border border-white 
          shadow-[0_0_15px_1px_rgba(130,69,236,0.2)]"
        >
          <h3 className="text-lg sm:text-xl font-semibold text-gray-300 mb-3 text-center">
            {category.title}
          </h3>

          <Tilt
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            scale={1.02}
            transitionSpeed={800}
            gyroscope={true}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center justify-center bg-transparent border border-gray-700 rounded-lg p-2"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-6 h-6 mb-1"
                  />
                  <span className="text-[10px] text-gray-300 text-center">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </Tilt>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
