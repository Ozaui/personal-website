import { IoSchool } from "react-icons/io5";
import { IoBookSharp } from "react-icons/io5";
import { IoGameController } from "react-icons/io5";
import { IoHardwareChip } from "react-icons/io5";
import { IoCall } from "react-icons/io5";

const EducationExperiance = () => {
  return (
    <div className="educationExperiance-container">
      <h1 className="experiance-title">Education</h1>
      <div className="education">
        <div className="experiance">
          <IoSchool size={40} />
          <p className="experiance-text">
            Computer Engineering - Suleyman Demirel University <br />
            2021 - 2025
          </p>
        </div>
        <div className="experiance">
          <IoBookSharp size={40} />
          <p className="experiance-text">
            English Preparatory - Suleyman Demirel University
            <br />
            2020 - 2021
          </p>
        </div>
      </div>

      {/* WORK EXPERIANCE */}

      <h1 className="experiance-title">Work Experience</h1>
      <div className="experiance">
        <IoHardwareChip size={40} />
        <p className="experiance-text">
          System Support Intern - ETIYA <br />
          2024
        </p>
      </div>
      <div className="experiance">
        <IoGameController size={40} />
        <p className="experiance-text">
          Game Developer Unity Intern - 2KEK GAMES
          <br />
          2023
        </p>
      </div>
      <div className="experiance">
        <IoCall size={40} />
        <p className="experiance-text">
          Technical Support Representative - Teleperformance / Monster Notebook
          <br />
          2023
        </p>
      </div>
    </div>
  );
};

export default EducationExperiance;
