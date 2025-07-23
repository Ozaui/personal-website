import React from "react";
import "../../styles/components/AboutMe.css";
import EducationExperiance from "./EducationExperiance";

const AboutMe = () => {
  return (
    <div className="aboutMe-container">
      <div className="aboutMe-block">
        <hr />
        <div className="aboutMe-text">
          Hello, my name is Özay Melih Yıldız. I graduated in Computer
          Engineering from Süleyman Demirel University. I focus on modern web
          development, creating responsive user interfaces with React and
          building scalable backend services with Node.js. I'm also open to
          learning new technologies and continuously improving my skills to keep
          up with the fast-evolving tech world
        </div>
      </div>
      <EducationExperiance />
    </div>
  );
};

export default React.memo(AboutMe);
