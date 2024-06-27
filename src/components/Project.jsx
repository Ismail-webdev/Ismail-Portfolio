import React from "react";
import { FiArrowRight } from "react-icons/fi";

const projectsData = [
  {
    name: "Project One",
    description: "This is a description of project one.",
    githubLink: "https://github.com/project-one",
  },
  {
    name: "Project Two",
    description: "This is a description of project two.",
    githubLink: "https://github.com/project-two",
  },
];

const Project = () => {
  return (
    <div className="w-full h-screen">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Projects
        </h1>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Here are some of the projects I've worked on.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {projectsData.map((project, index) => (
            <div key={index} className="bg-[#112240] p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-[#ccd6f6]">
                {project.name}
              </h2>
              <p className="text-[#8892b0] py-2">{project.description}</p>
              <a
                href={project.githubLink}
                className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#c6c7c8] hover:text-black rounded-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Github
                <span className="group-hover:rotate-90 duration-300">
                  <FiArrowRight className="ml-3" />
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
