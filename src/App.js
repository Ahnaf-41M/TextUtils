import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
import React, { useState } from "react";

import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [textCol, setTextCol] = useState("black");
  const [alert, setAlert] = useState(null);

  function handleToggleMode() {
    if (mode === "light") {
      setMode("dark");
      setTextCol("light");
      document.body.style.backgroundColor = "#18274D";
      handleDisplayAlert("Dark mode enabled!", "success");
    } else {
      setMode("light");
      setTextCol("dark");
      document.body.style.backgroundColor = "white";
      handleDisplayAlert("Light mode enabled!", "success");
    }
  }
  function handleDisplayAlert(msg, type) {
    setAlert({
      msg: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
      <HashRouter>
        <Navbar
          title="TextUtils"
          about="aboutText"
          mode={mode}
          handleToggleMode={handleToggleMode}
          textCol={textCol}
        />
        <Alert alert={alert} />

        <Routes>
          <Route
            exact
            path="/about"
            element={<About mode={mode} textCol={textCol} />}
          />
          {/* <About /> */}

          <Route
            exact
            path="/"
            element={
              <TextForm
                heading="Enter text to analyze"
                mode={mode}
                textCol={textCol}
              />
            }
          />
        </Routes>

        {/* <footer className={`text-${textCol} text-center`}>© Ahnaf</footer> */}
      </HashRouter>
    </>
  );
}

export default App;
