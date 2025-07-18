import { FaRegMoon, FaSun } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { handleMode } from "../../redux/Slices/themeSlice";

const HEADER_HEIGHT = 72;

const Header = () => {
  const mode = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();
  return (
    <div
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
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 16px",
          height: HEADER_HEIGHT,
        }}
      >
        <div>
          <button>Contact Me</button>
          <button>My Projects</button>
          <button>About Me</button>
        </div>
        <button
          onClick={() => dispatch(handleMode())}
          style={{
            cursor: "pointer",
            border: "none",
            background: "transparent",
            outline: "none",
            color: mode === "dark" ? "#ffffff" : "#333333",
          }}
        >
          {mode === "dark" ? <FaSun size={30} /> : <FaRegMoon size={30} />}
        </button>
      </div>
    </div>
  );
};

export default Header;
