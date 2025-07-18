import React, { useEffect, useRef, useState } from "react";
import "../../styles/components/Projects.css";
import ESCAPEFROMCORONA from "../../assets/EscapeFromCorona.png";
import YOBEX from "../../assets/YOBEX.png";

import SALONBASE from "../../assets/SalonBase.png";
import YOURMEAL from "../../assets/YourMeal.png";

const projects = [
  {
    title: "YOBEX",
    img: YOBEX,
    description:
      "YOBEX is an e-commerce site created by a team of four. The project utilized React, TypeScript, NodeJS, JWT, and MongoDB technologies.",
  },
  {
    title: "YOURMEAL",
    img: YOURMEAL,
    description:
      "YourMeal is a system that offers meal recommendations based on user preferences. It uses React, NodeJS, and MongoDB technologies.",
  },
  {
    title: "SalonBase",
    img: SALONBASE,
    description:
      "SalonBase is a system for hairdressers that offers features like appointment scheduling and pricing information. Technologies like React, NodeJS, and MongoDB were used.",
  },
  {
    title: "ESCAPE FROM CORONA",
    img: ESCAPEFROMCORONA,
    description:
      "Escape From Corona is a mobile game where players avoid viruses and protect themselves. It was developed using C# and Unity technologies.",
  },
];

const Projects = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  const goTo = (idx) => {
    setCurrent((idx + projects.length) % projects.length);
  };

  const next = () => goTo(current + 1);
  const prev = () => goTo(current - 1);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      next();
    }, 3500);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  return (
    <div className="projects-section">
      <h1 className="experiance-title">Projects</h1>
      <div className="projects-carousel-wrapper">
        <button
          className="carousel-arrow left"
          onClick={prev}
          aria-label="Önceki Proje"
        >
          &#8592;
        </button>
        <div className="projects-carousel fullwidth">
          {projects.map((project, idx) => (
            <div
              className={`project-card${idx === current ? " active" : ""}`}
              key={project.title}
              style={{
                backgroundImage: `url(${project.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="project-overlay">
                <div className="project-name">{project.title}</div>
                <div className="project-desc">{project.description}</div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-arrow right"
          onClick={next}
          aria-label="Sonraki Proje"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default React.memo(Projects);
