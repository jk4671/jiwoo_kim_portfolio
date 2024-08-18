import React from "react";
import { NavLink } from "react-router-dom";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';


const Navbar = () => {
  return (
    <header className="flex header justify-between items-center p-4">
      <div className="flex items-center gap-3">
        <NavLink to="/" className="w-10 h-10 rounded-lg bg-white flex items-center justify-center font-bold shadow-md">
          <p className="blue-gradient_text">JK</p>
        </NavLink>
        <div className="font-medium text-[13px] leading-tight">
          <span>Jiwoo Kim</span>
          <br />
          <span>Website</span>
        </div>
      </div>

      <nav className="flex text-lg gap-7 font-medium">
        <NavLink to="/about" className={({ isActive }) => `${isActive ? "text-blue-500" : "text-black"} hover:font-bold`}>
          About
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => `${isActive ? "text-blue-500" : "text-black"} hover:font-bold`}>
          Projects
        </NavLink>
      </nav>

      <div className="flex gap-4 items-center">
        <a className="social-icons" href="https://github.com/jk4671" target="_blank" rel="noopener noreferrer">
          <AiFillGithub size="2rem" />
        </a>
        <a className="social-icons" href="https://www.linkedin.com/in/jk4671/" target="_blank" rel="noopener noreferrer">
          <AiFillLinkedin size="2rem" />
        </a>
        <a className="social-icons" href="mailto:jordjkim@gmail.com" target="_blank" rel="noopener noreferrer">
          <AiFillMail size="2rem" />
        </a>
      </div>
    </header>
  );
};

export default Navbar;
