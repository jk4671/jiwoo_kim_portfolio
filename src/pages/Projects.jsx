import { Link } from "react-router-dom";

import { projects } from "../constants";
import { arrow } from "../assets/icons";
import CTA from "../components/CTA";
import ProjectDisplay from "../components/ProjectDisplay";
import { useState } from "react";
import ProjectDisplay2D from "../components/ProjectDisplay2D";
import PublicationDisplay from "../components/PublicationDisplay";

const Projects = () => {
  const [viewProjects, setviewProjects] = useState("card");

  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Projects
        </span>{" "}
        👋
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Explore my portfolio of projects where I’ve applied cutting-edge
          technologies and strategic thinking to deliver high-impact solutions.
          These projects demonstrate my experience in full-stack development,
          interactive web design, and real-time synchronization. Each initiative
          reflects my capability to solve complex problems and create scalable,
          user-focused applications.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <div className="flex items-center">
          <h3 className="subhead-text">Personal Projects</h3>

          <div className="ml-5 flex gap-4">
            <button
              className={`btn ${viewProjects === "card" ? "btn-active" : ""}`}
              onClick={() => setviewProjects("card")}
            >
              Card View
            </button>
            <button
              className={`btn ${viewProjects === "list" ? "btn-active" : ""}`}
              onClick={() => setviewProjects("list")}
            >
              List View
            </button>
          </div>
        </div>
        {viewProjects === "list" && <ProjectDisplay2D />}

        {viewProjects === "card" && <ProjectDisplay />}
      </div>

      <div className="py-10 flex flex-col">
        <div className="flex items-center">
          <h3 className="subhead-text">Publications</h3>
        </div>

        <PublicationDisplay />
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default Projects;
