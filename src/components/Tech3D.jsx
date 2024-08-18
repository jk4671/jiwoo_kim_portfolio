import React from "react";
import { SectionWrapper } from "../hoc";
import BallCanvas from "./canvas/Ball";
import { skills } from "../constants";

const Tech3D = () => {
  return (
    <div className="flex flex-wrap gap-12">
      {skills.map((skill) => (
        <div className="flex flex-col items-center w-28 h-28" key={skill.name}>
          <div className="w-full h-full flex justify-center items-center">
            <BallCanvas icon={skill.imageUrl} />
          </div>
          <span className="mt-2 text-center text-sm font-medium">{skill.name}</span>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech3D, "");
