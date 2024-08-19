import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <div className="info-box">
      <p className="font-medium sm:text-xl text-center">
        Hi 👋 I'm
        <span className="font-semibold mx-2 text-white">Jiwoo,</span>
        <br />a CS major at Columbia University 🐻
      </p>
      <Link className="neo-brutalism-white neo-btn">Rotate the island</Link>
    </div>
  ),
  2: (
    <InfoBox
      text={
        <>
          I have experience in 🖥️ full-stack development, 🤖 AI, and
          <br />
          👩‍💻 human-computer interaction (HCI)
        </>
      }
      link="/about"
      btnText="Learn more"
    />
  ),
  3: (
    <InfoBox
      text={
        <>
          I’ve worked on projects ranging from building
          <br />
          🖱️ interactive web applications to
          <br />
          🖼️ AI models for medical imaging
        </>
      }
      link="/projects"
      btnText="Visit my portfolio"
    />
  ),
  4: (
    <InfoBox
    text={
        <>
          Feel free to reach out if you have any ❓ questions, 
          <br />💬 comments, or 🧐 concerns
        </>
      }
      link="mailto:jordjkim@gmail.com"
      btnText="Let's talk"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
