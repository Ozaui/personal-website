import React from "react";
import profileImage from "../../assets/profile.jpg";
import { useSelector } from "react-redux";
import "../../styles/components/Body.css";

const Body = () => {
  const mode = useSelector((state) => state.theme.mode);

  const getBackgroundStyle = () => {
    return mode === "light"
      ? `radial-gradient(circle, #bcb8d6 0%, #a7b8c7 60%, #8e9ba8 100%)`
      : `radial-gradient(circle, #23243a 0%, #3d3f43 100%)`;
  };

  const getBoxShadowStyle = () => {
    return mode === "light"
      ? `
          inset 15px 15px 30px rgba(0, 0, 0, 0.15),
          inset -15px -15px 40px rgba(255, 255, 255, 0.7),
          5px 5px 15px rgba(0, 0, 0, 0.1)
        `
      : `
       
        `;
  };

  return (
    <div className="body-container">
      <div className="profile-container">
        <div
          className="profile-image-div"
          style={{
            background: getBackgroundStyle(),
            boxShadow: getBoxShadowStyle(),
          }}
        >
          <img src={profileImage} alt="Profil" className="profile-image" />
        </div>
        <div className="name-section">
          <div className="greeting-line">
            <h1 className="greeting">Hello, My name is </h1>
            <h2 className="name-text">
              <span className="name">Özay Melih Yıldız</span>
            </h2>
          </div>
          <h2 className="title-text">Junior Full Stack Web Developer</h2>
        </div>
      </div>
    </div>
  );
};

export default Body;
