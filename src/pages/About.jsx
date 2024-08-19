import React, { useState } from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { experiences } from "../constants";

import "react-vertical-timeline-component/style.min.css";
import CTA from "../components/CTA";
import Tech3D from "../components/Tech3D";
import Tech2D from "../components/Tech2D";

const About = () => {
  const [viewSkills, setViewSkills] = useState("3D");

  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Jiwoo
        </span>{" "}
        👋
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          I am a <span className="font-semibold">computer science</span> major
          at <span className="font-semibold">Columbia University</span>. I’m
          excited about leveraging technology to solve real-world problems. I've
          developed a strong expertise in{" "}
          <span className="font-semibold">full-stack development</span>,{" "}
          <span className="font-semibold">artificial intelligence</span> (AI),
          and <span className="font-semibold">human-computer interaction</span>{" "}
          (HCI).
        </p>
        <p>
          Beyond my academic and professional pursuits, I enjoy <span className="font-semibold">running</span>,
          exploring <span className="font-semibold">new foods</span>, and watching <span className="font-semibold">K-dramas</span>.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <div className="flex items-center">
          <h3 className="subhead-text">My Skills</h3>

          <div className="ml-5 flex gap-4">
            <button
              className={`btn ${viewSkills === "3D" ? "btn-active" : ""}`}
              onClick={() => setViewSkills("3D")}
            >
              3D View
            </button>

            <button
              className={`btn ${viewSkills === "2D" ? "btn-active" : ""}`}
              onClick={() => setViewSkills("2D")}
            >
              2D View
            </button>
          </div>
        </div>
        {viewSkills === "2D" && <Tech2D />}

        {viewSkills === "3D" && <Tech3D />}
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Work Experience.</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            I’ve worked in various fields of computer science, including AI,
            HCI, and full-stack development. Here’s the rundown:
          </p>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium text-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-black-500/50 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default About;
