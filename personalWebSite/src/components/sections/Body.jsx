import React from "react";
import profileImage from "../../assets/profile.jpg";
import { useSelector } from "react-redux";
import "../../styles/components/Body.css";

const Body = () => {
  const mode = useSelector((state) => state.theme.mode);

  const getBackgroundStyle = () => {
    return mode === "light"
      ? `radial-gradient(circle, 
          #a1c4fd 0%,    
          #c2e9fb 40%, 
          #fbc7c7 75%,   
          #f0e6d2 100%)`
      : `#1b1c1d`;
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
