import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiFirebase,
  SiBootstrap,
  SiGithub,
} from "react-icons/si";

const skillsData = [
  {
    name: "HTML",
    icon: <SiHtml5 size={40} className="mx-auto text-[#E34F26]" />,
  },
  {
    name: "CSS",
    icon: <SiCss3 size={40} className="mx-auto text-[#1572B6]" />,
  },
  {
    name: "JavaScript (ES6+)",
    icon: <SiJavascript size={40} className="mx-auto text-[#F7DF1E]" />,
  },
  {
    name: "React.js",
    icon: <SiReact size={40} className="mx-auto text-[#61DAFB]" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss size={40} className="mx-auto text-[#38B2AC]" />,
  },
  {
    name: "Firebase",
    icon: <SiFirebase size={40} className="mx-auto text-[#FFCA28]" />,
  },
  {
    name: "Bootstrap",
    icon: <SiBootstrap size={40} className="mx-auto text-[#7952B3]" />,
  },
  {
    name: "Github",
    icon: <SiGithub size={40} className="mx-auto text-[#181717]" />,
  },
];

const Skills = () => {
  return (
    <div className="w-full min-h-screen text-gray-300">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-6">// These are the technologies I've worked with</p>
        </div>
        <section>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
            {skillsData.map((skill, index) => (
              <div
                key={index}
                className="shadow-md hover:scale-110 duration-500"
              >
                {skill.icon}
                <p className="mt-2">{skill.name}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills;
