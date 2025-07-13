import React from "react";
import profileImage from "../../assets/profile.jpg";
import { useSelector } from "react-redux";

const Body = () => {
  const mode = useSelector((state) => state.theme.mode);
  return (
    <div>
      <div
        style={{
          width: "300px",
          height: "300px",
          marginTop: "50px",
          marginLeft: "10%",
          borderRadius: "50%",

          background:
            mode === "light"
              ? `radial-gradient(circle, 
            #a1c4fd 0%,    
            #c2e9fb 40%, 
            #fbc7c7 75%,   
            #f0e6d2 100%)`
              : `radial-gradient(circle, 
        #2c3e50 0%, 
        #34495e 40%, 
        #3d566e 75%, 
        #2a3a4f 100%)`,
          boxShadow:
            mode === "light"
              ? `
      inset 15px 15px 30px rgba(0, 0, 0, 0.15),
      inset -15px -15px 40px rgba(255, 255, 255, 0.7),
      5px 5px 15px rgba(0, 0, 0, 0.1)
    `
              : `
      inset 15px 15px 30px rgba(0, 0, 0, 0.7),
      inset -15px -15px 40px rgba(70, 90, 120, 0.9),
      5px 5px 15px rgba(0, 0, 0, 0.8)
    `,
          filter: "blur(0.3px)",
        }}
      >
        <img
          src={profileImage}
          alt="Profil"
          style={{
            position: "relative",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            objectFit: "cover",
            boxShadow: "0 0 8px rgba(0,0,0,0.3)",
            border: "3px solid white",
          }}
        />
      </div>
      <div></div>
    </div>
  );
};

export default Body;
