import './App.css';
import TextArea from './TextArea';
import Navbar from './Navbar';
import React, { useState } from 'react';
import Alert from './Alert';
import Error from './Error';
import {
  BrowserRouter as Main,
  Route,
  Routes
} from "react-router-dom";
import About from './About';

function App() {
  const [mode, setMode] = useState("light")

  const greenMode = () => {
    if (mode === "light") {
      setMode("success");
      document.body.style.backgroundColor = "#09482b";
      showAlert("Green mode has been enabled", "success");
    } else if (mode === "dark") {
      setMode("success");
      document.body.style.backgroundColor = "#09482b";
      showAlert("Green mode has been enabled", "success");
    } else if (mode === "success") {
      setMode("light")
      document.body.style.backgroundColor = "white";
      showAlert("Dark mode has been enabled", "success");
    }
  }

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light")
      document.body.style.backgroundColor = "white";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("dark")
      document.body.style.backgroundColor = "#042743"
      showAlert("Light mode has been enabled", "success");
    }
  }

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }


  return (
    <>
    <Main>
      <Navbar title={"My App"} home={"Home"} mode={mode}  toggleMode={toggleMode} greenMode={greenMode} />
      <Alert alert={alert} />
      <div className="container">
        <Routes>
          <Route exact path="/React_Course" element={<TextArea mode={mode} alert={showAlert} />} />
          <Route exact path="/" element={<TextArea mode={mode} alert={showAlert} />} />
          <Route exact path="/About" element={<About mode={mode} />} />
          <Route exact path='/*' element={<Error mode={mode} />} />
        </Routes>
      </div>
    </Main>
    </>
  );
}

export default App;
