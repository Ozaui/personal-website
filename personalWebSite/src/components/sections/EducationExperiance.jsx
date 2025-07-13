import { IoSchool } from "react-icons/io5";

const EducationExperiance = () => {
  return (
    <div className="educationExperiance-container">
      <h1 className="experiance-title">Education</h1>
      <div className="experiance">
        <IoSchool size={40} />
        <p className="experiance-text">
          I graduated on Suleyman Demirel University <br />
          2020 - 2025
        </p>
      </div>
    </div>
  );
};

export default EducationExperiance;
