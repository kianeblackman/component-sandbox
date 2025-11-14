import { useState, useEffect } from "react";
import { CiLight, CiDark } from "react-icons/ci";
import Component from "./component/Component";

import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [viewport, setViewport] = useState({ width: window.innerWidth, height: window.innerHeight });

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const handleResize = () => {
      setViewport({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`${darkMode ? "app-mode--dark" : "app-mode--light"}`}>
      <div className="app-utils">
        <div className="app-utils--top">
          <button className="app-mode__toggle" onClick={toggleMode}>
            {darkMode ? <CiLight size={24} /> : <CiDark size={24} />}
          </button>
        </div>
        <div className="app-utils--bottom">
          <div className={`${darkMode ? "app-viewport--dark" : "app-viewport--light"}`}>
            {viewport.width}px x {viewport.height}px
          </div>
        </div>
      </div>
      <section className="app__sandbox">
        <Component />
      </section>
    </div>
  );
}

export default App;
