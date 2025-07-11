import { FaRegMoon, FaSun } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { handleMode } from "../../redux/Slices/themeSlice";

const Header = () => {
  const mode = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();
  return (
    <div style={{ margin: "20px", padding: "0 20px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 16px",
        }}
      >
        headers - Mode: {mode}
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
