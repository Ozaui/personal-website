import { useState } from "react";
import {
  IoSchool,
  IoBookSharp,
  IoGameController,
  IoHardwareChip,
  IoCall,
} from "react-icons/io5";
import { IoMdCode } from "react-icons/io";
import SDU from "../../assets/sdu_logo.png";
import ETIYA from "../../assets/ETIYA.png";
import TWOKEKGAMES from "../../assets/2KEKGAMES.png";
import MONSTERNOTEBOOK from "../../assets/MonsterNotebook.png";
import KODLUYORUZ from "../../assets/Kodluyoruz.png";

const EducationExperiance = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleFlip = (idx) => {
    setFlippedIndex(flippedIndex === idx ? null : idx);
  };

  return (
    <div className="educationExperiance-container" id="education-section">
      <h1 className="experiance-title">Education</h1>
      <div className="education">
        {[
          {
            icon: <IoSchool size={40} />,
            text: (
              <>
                Computer Engineering - Suleyman Demirel University <br />
                2021 - 2025
              </>
            ),
            img: SDU,
            link: "https://muhendislik.sdu.edu.tr/bilmuh",
          },
          {
            icon: <IoBookSharp size={40} />,
            text: (
              <>
                English Preparatory - Suleyman Demirel University <br />
                2020 - 2021
              </>
            ),
            img: SDU,
            link: "https://muhendislik.sdu.edu.tr/bilmuh",
          },
        ].map((item, idx) => (
          <div
            className={`experiance${flippedIndex === idx ? " flipped" : ""}`}
            key={idx}
            onClick={() => handleFlip(idx)}
            style={{ cursor: "pointer" }}
          >
            <div className="experiance-inner">
              <div className="experiance-front">
                {item.icon}
                <p className="experiance-text">{item.text}</p>
              </div>
              <div className="experiance-back">
                <img src={item.img} alt="SDU_Logo" className="logo" />
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  Go to web Site
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h1 className="experiance-title">Work Experience</h1>
      <div className="education">
        {[
          {
            icon: <IoHardwareChip size={40} />,
            text: (
              <>
                System Support Intern - ETIYA <br />
                2024
              </>
            ),
            img: ETIYA,
            link: "https://www.etiya.com/tr",
          },
          {
            icon: <IoMdCode size={40} />,
            text: (
              <>
                Frontend Mentor - KODLUYORUZ <br />
                2024
              </>
            ),
            img: KODLUYORUZ,
            link: "https://www.kodluyoruz.org",
          },
          {
            icon: <IoGameController size={40} />,
            text: (
              <>
                Game Developer Intern - 2KEK GAMES <br />
                2023
              </>
            ),
            img: TWOKEKGAMES,
            link: "https://2kekgames.com",
          },
          {
            icon: <IoCall size={40} />,
            text: (
              <>
                Technical Support - Teleperformance / Monster Notebook <br />
                2020
              </>
            ),
            img: MONSTERNOTEBOOK,
            link: "https://www.monsternotebook.com.tr",
          },
        ].map((item, idx) => (
          <div
            className={`experiance${
              flippedIndex === idx + 2 ? " flipped" : ""
            }`}
            key={idx + 2}
            onClick={() => handleFlip(idx + 2)}
            style={{ cursor: "pointer" }}
          >
            <div className="experiance-inner">
              <div className="experiance-front">
                {item.icon}
                <p className="experiance-text">{item.text}</p>
              </div>
              <div className="experiance-back">
                <img src={item.img} alt="Logo" className="logo" />
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  Go to web Site
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationExperiance;
