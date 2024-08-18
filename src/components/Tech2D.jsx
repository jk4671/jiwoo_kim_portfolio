import React from "react";
import { skills } from "../constants";

const Tech2D = () => {
  return (
    <div className="mt-16 flex flex-wrap gap-12">
      {skills.map((skill) => (
        <div className="block-container w-20 h-24 flex flex-col items-center" key={skill.name}>
          <div className="btn-back rounded-xl" />
          <div className="btn-front rounded-xl flex flex-col justify-center items-center">
            <img
              src={skill.imageUrl}
              alt={skill.name}
              className="w-1/2 h-1/2 object-contain"
            />
            <span className="mt-2 text-center text-sm font-medium">{skill.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tech2D;
