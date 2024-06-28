import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import Type from "./effect/Type";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen relative">
      {/* Social Media Sidebar */}
      <aside className="absolute top-[35%] w-16 hidden lg:block cursor-pointer">
        <div className="space-y-2">
          <div
            className="relative w-full h-16 p-4 border-solid flex items-center justify-center text-black rounded-r-md bg-[#6e5494] hover:bg-opacity-80"
            onClick={() => window.open("https://github.com/ismail-webdev")}
          >
            <FaGithub size={22} />
          </div>
          <div
            className="relative w-full h-16 p-4 border-solid flex items-center justify-center text-black rounded-r-md bg-[#1DA1F2] hover:bg-opacity-80"
            onClick={() => window.open("https://twitter.com/ismailali082")}
          >
            <FaTwitter size={22} />
          </div>
          <div
            className="relative w-full h-16 p-4 border-solid flex items-center justify-center text-black rounded-r-md bg-[#0077B5] hover:bg-opacity-80"
            onClick={() => window.open("https://linkedin.com/in/ismailali082/")}
          >
            <FaLinkedin size={22} />
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#c6c7c8] font-semibold">Hi, My Name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Ismail Ali
        </h1>
        <h2 className="text-5xl sm:text-4xl font-bold text-[#8892b0] flex gap-2">
          I'm <Type />
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I’m a Frontend Reactjs Developer specializing in building (and hardly
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive frontend web applications.
        </p>
        <div className="flex gap-3">
          <button
            onClick={() => navigate("/projects")}
            className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#c6c7c8] hover:text-black rounded-lg"
          >
            View Projects
            <span className="group-hover:rotate-90 duration-300">
              <FiArrowRight className="ml-3" />
            </span>
          </button>
          <button
            onClick={() => navigate("/contact")}
            className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#c6c7c8] hover:text-black rounded-lg"
          >
            Contact Me
            <span className="group-hover:rotate-90 duration-300">
              <FiArrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default Home;
