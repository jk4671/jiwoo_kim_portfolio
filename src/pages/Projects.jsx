import { Link } from "react-router-dom";

import { projects } from "../constants";
import { arrow } from "../assets/icons";
import CTA from "../components/CTA";
import ProjectDisplay from "../components/ProjectDisplay";
import { useState } from "react";
import ProjectDisplay2D from "../components/ProjectDisplay2D";

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
        <p>A senior at Columbia University pursuing a BS in CS.</p>
      </div>

      <div className="mt-10 flex gap-4">
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

      
      { viewProjects === "list" && <ProjectDisplay2D /> }

      { viewProjects === "card" && <ProjectDisplay /> }
      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default Projects;