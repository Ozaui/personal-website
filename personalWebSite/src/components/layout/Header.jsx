import { FaRegMoon, FaSun } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { handleMode } from "../../redux/Slices/themeSlice";

const HEADER_HEIGHT = 72;

const Header = () => {
  const mode = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();
  return (
    <div
      className="header-container"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        zIndex: 1000,
        background: "transparent",
        boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
        height: HEADER_HEIGHT,
      }}
    >
      <div
        className="header-inner"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 16px",
          height: HEADER_HEIGHT,
        }}
      >
        <nav className="main-nav">
          <button
            className="nav-btn"
            onClick={() => {
              const el = document.getElementById("education-section");
              if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
          >
            Experience
          </button>
          <button
            className="nav-btn"
            onClick={() => {
              const el = document.getElementById("projects-section");
              if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
          >
            My Projects
          </button>
          <button
            className="nav-btn"
            onClick={() => {
              const el = document.getElementById("contact-section");
              if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
          >
            Contact Me
          </button>
        </nav>
        <button
          onClick={() => dispatch(handleMode())}
          style={{
            cursor: "pointer",
            border: "none",
            background: "transparent",
            outline: "none",
            color: mode === "dark" ? "#ffffff" : "#333333",
            position: "absolute",
            right: 32,
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          {mode === "dark" ? <FaSun size={30} /> : <FaRegMoon size={30} />}
        </button>
      </div>
    </div>
  );
};

export default Header;
