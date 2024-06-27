import React from "react";

const About = () => {
  return (
    <div className="w-full h-auto py-16  text-gray-300">
      <div className="max-w-[1000px] mx-auto px-8">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            About
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-8">
          <div className="text-4xl font-bold">
            <p>
              Hi, I'm Ismail Ali. Nice to meet you. Please take a look around.
            </p>
          </div>
          <div>
            <p>
              I am a passionate Frontend React.js Developer with a knack for
              building responsive and user-friendly web applications. With a
              strong foundation in HTML, CSS, and JavaScript, I have honed my
              skills in React.js to create seamless and efficient digital
              experiences.
            </p>
            <p className="mt-4">
              My journey in web development started a few years ago, and since
              then, I've been continuously learning and adapting to new
              technologies and best practices. I enjoy solving complex problems
              and transforming ideas into reality through code.
            </p>
            <p className="mt-4">
              Let's connect and build something amazing together!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
