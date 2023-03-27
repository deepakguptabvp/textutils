import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // whether dark mode is enabled or not.
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1700);
  };

  const toggleMode = (cls) => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#20364c";
      showAlert("Dark mode enabled..", "success");
      // document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled..", "success");
      // document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            {/*     /users -----> Component-1 {react uses partial matching}
           /users/home------>Component-2  */}

            <Route exact path="/about">
              <About mode={mode} />
            </Route>
            <Route path="/">
              <TextForm showAlert={showAlert} heading = "TextUtils - Word Counter, Character Counter, Text Manipulate and many more.." mode={mode} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
