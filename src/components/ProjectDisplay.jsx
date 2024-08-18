import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { github } from "../assets/icons";

const ProjectCard = ({ index, name, description, tags, iconUrl, link, theme }) => {
  return (
    <motion.div>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className={`p-5 rounded-2xl sm:w-[360px] w-full ${theme}`}
      >
        <div className="relative w-full h-[230px]">
          <img
            src={iconUrl}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain '
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>

        </div>
      </Tilt>
    </motion.div>
  );
};

const ProjectDisplay = () => {
  return (
    <div className="flex flex-wrap justify-between gap-7">
      {projects.map((project, index) => (
        <ProjectCard key={`project-${index}`} index={index} {...project} />
      ))}
    </div>
  );
};

export default SectionWrapper(ProjectDisplay, "");
