// App.js
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./index.css";
import Header from "./components/Header";
import CabinetForm from "./components/CabinetForm";
import ResultDisplay from "./components/ResultDisplay";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [measurements, setMeasurements] = useState({});

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <BrowserRouter>
      <div className={`${darkMode ? "dark" : ""} h-screen overflow-hidden`}>
        <Header onToggleDarkMode={toggleDarkMode} isDarkMode={darkMode} />
        <Routes>
          <Route
            path="/"
            element={<CabinetFormWrapper setMeasurements={setMeasurements} />}
          />
          <Route
            path="/result"
            element={<ResultDisplay measurements={measurements} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

const CabinetFormWrapper = ({ setMeasurements }) => {
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    setMeasurements(data);
    navigate("/result");
  };

  return <CabinetForm onSubmit={onSubmit} />;
};

export default App;
