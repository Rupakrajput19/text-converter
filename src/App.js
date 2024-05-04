import "./App.css";
import applogo from "./images/favicon.png";
import TextArea from "./TextArea";
import { useState, useEffect } from "react";
import { AppBar, Toolbar, IconButton, Container } from "@mui/material";
import {
  Brightness4 as DarkModeIcon,
  Brightness7 as LightModeIcon,
} from "@mui/icons-material";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    return savedDarkMode ? JSON.parse(savedDarkMode) : false;
  });
  
  const handleModeToggle = () => {
    setDarkMode(!darkMode);
  };
  
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);
  
  const bodyClass = darkMode ? "dark-mode" : "light-mode";

  return (
    <>
      <AppBar position="static">
        <header className="App-header">
          <Toolbar>
            <img src={applogo} alt="Logo" />
            <h3>Text-Converter</h3>
            <IconButton
              id="darkmode-btn"
              color="inherit"
              onClick={handleModeToggle}
            >
              {darkMode ? <DarkModeIcon /> : <LightModeIcon />}
            </IconButton>
          </Toolbar>
        </header>
      </AppBar>
      <div className={bodyClass}>
        <Container maxWidth="md">
          <main className="main-box">
            <TextArea darkMode={darkMode}/>
          </main>
        </Container>
        <footer className="footer">
          <div>
            Created By: {" "}
            <a href="https://www.instagram.com/rupakrajput161/" target="_blank" rel="noreferrer">Rupak Rajput</a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
