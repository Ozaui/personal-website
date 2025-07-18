import { useEffect } from "react";
import "./App.css";
import Header from "./components/layout/Header";
import Body from "./components/sections/Body";
import AboutMe from "./components/sections/AboutMe";
import Projects from "./components/sections/Projects";
import { useSelector } from "react-redux";

const HEADER_HEIGHT = 72;

function useBodyModeClass() {
  const mode = useSelector((state) => state.theme.mode);
  useEffect(() => {
    if (mode === "dark") {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [mode]);
}

function App() {
  useBodyModeClass();
  return (
    <>
      <Header />
      <div style={{ marginTop: HEADER_HEIGHT }}>
        <Body />
        <AboutMe />
        <hr />
        <Projects />
      </div>
    </>
  );
}

export default App;
