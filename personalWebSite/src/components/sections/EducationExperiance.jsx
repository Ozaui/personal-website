import {
  IoSchool,
  IoBookSharp,
  IoGameController,
  IoHardwareChip,
  IoCall,
} from "react-icons/io5";
import SDU from "../../assets/sdu_logo.png";
import ETIYA from "../../assets/ETIYA.png";
import TWOKEKGAMES from "../../assets/2KEKGAMES.png";
import MONSTERNOTEBOOK from "../../assets/MonsterNotebook.png";

const EducationExperiance = () => {
  return (
    <div className="educationExperiance-container">
      <h1 className="experiance-title">Education</h1>
      <div className="education">
        <div className="experiance">
          <div className="experiance-inner">
            <div className="experiance-front">
              <IoSchool size={40} />
              <p className="experiance-text">
                Computer Engineering - Suleyman Demirel University <br />
                2021 - 2025
              </p>
            </div>
            <div className="experiance-back">
              <img src={SDU} alt="SDU_Logo" className="logo" />
              <a href="https://muhendislik.sdu.edu.tr/bilmuh">Go to web Site</a>
            </div>
          </div>
        </div>

        <div className="experiance">
          <div className="experiance-inner">
            <div className="experiance-front">
              <IoBookSharp size={40} />
              <p className="experiance-text">
                English Preparatory - Suleyman Demirel University <br />
                2020 - 2021
              </p>
            </div>
            <div className="experiance-back">
              <img src={SDU} alt="SDU_Logo" className="logo" />
              <a href="https://muhendislik.sdu.edu.tr/bilmuh">Go to web Site</a>
            </div>
          </div>
        </div>
      </div>

      <h1 className="experiance-title">Work Experience</h1>
      <div className="education">
        <div className="experiance">
          <div className="experiance-inner">
            <div className="experiance-front">
              <IoHardwareChip size={40} />
              <p className="experiance-text">
                System Support Intern - ETIYA <br />
                2024
              </p>
            </div>
            <div className="experiance-back">
              <img src={ETIYA} alt="ETIYA" className="logo" />
              <a href="https://www.etiya.com/tr">Go to web Site</a>
            </div>
          </div>
        </div>

        <div className="experiance">
          <div className="experiance-inner">
            <div className="experiance-front">
              <IoGameController size={40} />
              <p className="experiance-text">
                Game Developer Intern - 2KEK GAMES <br />
                2023
              </p>
            </div>
            <div className="experiance-back">
              <img src={TWOKEKGAMES} alt="SDU_Logo" className="logo" />
              <a href="https://2kekgames.com">Go to web Site</a>
            </div>
          </div>
        </div>

        <div className="experiance">
          <div className="experiance-inner">
            <div className="experiance-front">
              <IoCall size={40} />
              <p className="experiance-text">
                Technical Support - Teleperformance / Monster Notebook <br />
                2023
              </p>
            </div>
            <div className="experiance-back">
              <img src={MONSTERNOTEBOOK} alt="SDU_Logo" className="logo" />
              <a href="https://www.monsternotebook.com.tr">Go to web Site</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationExperiance;
