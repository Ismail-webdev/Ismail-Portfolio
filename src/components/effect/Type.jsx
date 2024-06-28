import React from "react";
import TypewriterComponent from "typewriter-effect";

const Type = () => {
  return (
    <TypewriterComponent
      options={{
        strings: ["Frontend Developer", "Learner", "Reactjs Developer"],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    ></TypewriterComponent>
  );
};

export default Type;
