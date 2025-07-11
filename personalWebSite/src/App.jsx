import { useSelector } from "react-redux";
import { useEffect } from "react";
import "./App.css";
import Header from "./components/layout/Header";
import Body from "./components/layout/Body";

function App() {
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
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
}

export default App;
