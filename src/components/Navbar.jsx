import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  
  return (
    <header className="relative flex header justify-between items-center p-4">
      <div className="flex items-center gap-3">
        <NavLink
          to="/"
          className="w-10 h-10 rounded-lg bg-white flex items-center justify-center font-bold shadow-md"
        >
          <p className="blue-gradient_text">JK</p>
        </NavLink>
        <div className="font-medium text-[13px] leading-tight">
          <span>Jiwoo Kim</span>
          <br />
          <span>Website</span>
        </div>
      </div>

      <nav className="hidden md:flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${isActive ? "text-blue-500" : "text-black"} hover:font-bold`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `${isActive ? "text-blue-500" : "text-black"} hover:font-bold`
          }
        >
          Projects
        </NavLink>
      </nav>

      {/* Desktop Social Icons */}
      <div className="hidden md:flex gap-4 items-center">
        <a
          className="social-icons"
          href="https://github.com/jk4671"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub size="2rem" />
        </a>
        <a
          className="social-icons"
          href="https://www.linkedin.com/in/jk4671/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin size="2rem" />
        </a>
        <a
          className="social-icons"
          href="mailto:jordjkim@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillMail size="2rem" />
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <HiMenuAlt4 onClick={() => setToggle(true)} className="text-2xl cursor-pointer" />

        {/* Mobile Menu */}
        {toggle && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg flex flex-col items-center justify-center"
          >
            <HiX onClick={() => setToggle(false)} className="absolute top-4 right-4 text-2xl cursor-pointer" />

            {/* Mobile Navigation Links */}
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${isActive ? "text-blue-500" : "text-black"} text-lg mb-4 hover:font-bold`
              }
              onClick={() => setToggle(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `${isActive ? "text-blue-500" : "text-black"} text-lg mb-4 hover:font-bold`
              }
              onClick={() => setToggle(false)}
            >
              Projects
            </NavLink>

            {/* Mobile Social Icons */}
            <div className="flex flex-col items-center gap-4 mt-8">
              <a
                className="social-icons"
                href="https://github.com/jk4671"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub size="2rem" />
              </a>
              <a
                className="social-icons"
                href="https://www.linkedin.com/in/jk4671/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin size="2rem" />
              </a>
              <a
                className="social-icons"
                href="mailto:jordjkim@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillMail size="2rem" />
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
