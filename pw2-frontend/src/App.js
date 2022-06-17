import "./App.css";
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";

import ChrisInfo from "./components/chrisInfo";
import "./components/chrisInfo.css";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <div className="switch">
          <label> {theme === "light" ? "Light Mode" : "Dark Mode"} </label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>

        {/* Start adding components here */}
        <ChrisInfo/>


      </div>
    </ThemeContext.Provider>
  );
}

export default App;
